import { useMemo, useEffect } from "react";
import { BufferGeometry, Float32BufferAttribute, DoubleSide } from "three";
import { synthSunsetPink } from "interactivity/resources/constants/colors";

const UnrollingShell = ({
  radius = 1,
  height = 1,
  unrollProgress = 0, // 0 = fully rolled cylinder, 1 = fully flat sheet
  color = synthSunsetPink,
  shift = [0, 0, 0],
}) => {
  const geometry = useMemo(() => {
    const geom = new BufferGeometry();
    const segments = 64;
    const vertices = [];
    const indices = [];
    const uvs = [];

    const W = 2 * Math.PI * radius;
    // s represents the rolled state: s = 1 is cylinder, s = 0 is flat.
    // Clamped to 1e-5 to avoid division by zero.
    const s = Math.max(1 - unrollProgress, 1e-5);

    for (let i = 0; i <= segments; i++) {
      const u = i / segments;
      const x = (u - 0.5) * W; // Coordinate along the width of the unrolled sheet

      // Bending mathematics:
      // Keeps the sheet tangent to the plane x = radius at z = 0,
      // wrapping it into a cylinder centered at (0,0,0) when s = 1.
      const theta = s * (x / radius);
      const r_s = radius / s;
      const xP = r_s * Math.cos(theta) + (radius - r_s);
      const zP = r_s * Math.sin(theta);

      // Bottom vertex (y = 0)
      vertices.push(xP, 0, zP);
      uvs.push(u, 0);

      // Top vertex (y = height)
      vertices.push(xP, height, zP);
      uvs.push(u, 1);
    }

    for (let i = 0; i < segments; i++) {
      const v0 = i * 2;
      const v1 = v0 + 1;
      const v2 = v0 + 2;
      const v3 = v0 + 3;

      // Face 1
      indices.push(v0, v2, v1);
      // Face 2
      indices.push(v1, v2, v3);
    }

    geom.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    geom.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    geom.setIndex(indices);
    geom.computeVertexNormals();

    return geom;
  }, [radius, height, unrollProgress]);

  // Clean up WebGL GPU geometry buffers to prevent memory leaks
  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  // The geometry itself is centered perfectly at shift, no extra offset required.
  const meshPosition = shift;

  if (radius < 0.001 || height < 0.001) return null;

  return (
    <mesh position={meshPosition}>
      <primitive object={geometry} attach="geometry" />
      <meshPhongMaterial
        attach="material"
        color={color}
        specular={0xffffff}
        shininess={40}
        side={DoubleSide}
        transparent={true}
        opacity={0.85}
      />
    </mesh>
  );
};

export default UnrollingShell;
