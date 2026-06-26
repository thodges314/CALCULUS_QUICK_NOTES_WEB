import { useMemo, useRef, useEffect } from "react";
import { Vector2, LatheGeometry } from "three";
import {
  DarkPhongMaterial,
  TranslucentNormalMaterial,
} from "interactivity/resources/materials";

const RotationObject = ({
  solid: { domain = [0.1, 1], func = (x) => x, resolution = 10 },
  sides = 90,
  normalMaterial = true,
  shift = [0, 0, 0],
  axis = "x",
  solidVolume = false,
}) => {
  const meshRef = useRef(); // gpu memory leak prevention - dispose of old geometries

  const points = useMemo(() => {
    const pts = [];
    const dx = 0.5 / resolution;

    if (solidVolume && axis === "y") {
      // Lathe a closed 2D region to form a solid 3D volume:
      // Start at bottom inner radius, go to bottom outer radius,
      // follow the curve back, and close the loop.
      pts.push(new Vector2(domain[0], 0));
      pts.push(new Vector2(domain[1], 0));
      for (let i = domain[1]; i >= domain[0]; i -= dx) {
        pts.push(new Vector2(i, func(i)));
      }
      pts.push(new Vector2(domain[0], func(domain[0])));
      pts.push(new Vector2(domain[0], 0));
    } else {
      for (let i = domain[0]; i < domain[1]; i += dx) {
        if (axis === "y") {
          pts.push(new Vector2(i, func(i)));
        } else {
          pts.push(new Vector2(func(i), i));
        }
      }
      const endVal = domain[1];
      if (axis === "y") {
        pts.push(new Vector2(endVal, func(endVal)));
      } else {
        pts.push(new Vector2(func(endVal), endVal));
      }
    }
    return pts;
  }, [domain, func, resolution, axis, solidVolume]);

  // Imperatively manage the LatheGeometry so that the previous geometry is
  // explicitly disposed before the new one is assigned. Without this, R3F
  // would abandon the old GPU buffers on every slider tick, causing them to
  // accumulate on the GPU until the next garbage collection cycle.
  // The cleanup function returned here fires before the next effect run and
  // on component unmount, ensuring every geometry object is released exactly once.
  useEffect(() => {
    if (!meshRef.current || points.length <= 1) return;
    const geometry = new LatheGeometry(points, sides);
    meshRef.current.geometry = geometry;
    return () => {
      geometry.dispose();
    };
  }, [points, sides]);

  const rotX = axis === "y" ? 0 : -Math.PI / 2;
  const rotZ = axis === "y" ? 0 : -Math.PI / 2;

  return (
    <mesh ref={meshRef} rotation-z={rotZ} rotation-x={rotX} position={shift}>
      {normalMaterial ? <TranslucentNormalMaterial /> : <DarkPhongMaterial />}
    </mesh>
  );
};

export default RotationObject;
