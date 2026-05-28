import { useMemo, useRef, useLayoutEffect } from "react";
import { Matrix4, Quaternion, Vector3, Euler } from "three";
import { DarkPhongMaterial } from "interactivity/resources/materials";

// Pre-compute the rotation quaternion once for the module — all strips share
// the same -90° Z rotation, so there is no reason to allocate it per instance.
const STRIP_ROTATION = new Quaternion().setFromEuler(
  new Euler(0, 0, -Math.PI / 2)
);

// Minimum height to prevent a zero-scale matrix. A zero-scale instance
// produces an undefined normal matrix (divides by zero), which causes NaN
// normals that silently discard the entire InstancedMesh draw call in WebGL.
const MIN_HEIGHT = 1e-7;

const FlatIntegral = ({
  solid: {
    domain = [0.1, 1],
    funcTop = (x) => x,
    funcBottom = (_x) => 0,
    resolution = 10,
  },
  rightBound = domain[1],
  shift = [0, 0, 0],
  light = false,
}) => {
  const meshRef = useRef();

  const dx = useMemo(() => 0.1 / resolution, [resolution]);

  // Pre-compute strip geometry data for the FULL domain.
  // This only recomputes when the mathematics changes, not when the slider moves.
  const strips = useMemo(() => {
    const func = (x) => funcTop(x) - funcBottom(x);
    const width = light ? dx / 2 : dx;
    const result = [];
    for (let i = domain[0]; i < domain[1]; i += dx) {
      const smlr = Math.min(func(i), func(i + dx));
      result.push({
        x: i + dx / 2,
        y: smlr / 2 + funcBottom(i),
        // Clamp to MIN_HEIGHT: a zero-scale matrix produces NaN normals and
        // silently kills the entire InstancedMesh draw call in WebGL.
        height: Math.max(smlr, MIN_HEIGHT),
        width,
      });
    }
    return result;
  }, [domain, funcBottom, funcTop, dx, light]);

  const maxCount = strips.length;

  // useLayoutEffect fires synchronously after React's commit and before the
  // browser paints, ensuring matrices and count are correct on the first frame.
  // This prevents a flash of all instances rendered at the identity position.

  // Rebuild the instance matrix buffer when the mathematical inputs change.
  // Each strip is positioned, rotated, and scaled via a Matrix4 — one draw
  // call covers the entire visualization instead of one per strip.
  // The `light` layer (washer inner region) is offset by 0.001 on Z to
  // prevent z-fighting with the dark outer layer.
  useLayoutEffect(() => {
    if (!meshRef.current || maxCount === 0) return;
    const matrix = new Matrix4();
    const position = new Vector3();
    const scale = new Vector3();
    const zOffset = light ? 0.001 : 0;

    strips.forEach(({ x, y, height, width }, i) => {
      position.set(x, y, zOffset);
      scale.set(height, width, 1);
      matrix.compose(position, STRIP_ROTATION, scale);
      meshRef.current.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [strips, maxCount, light]);

  // Update the visible instance count when the slider moves.
  // This is a single integer write — no geometry is created or destroyed,
  // so GC pressure on slider drag is effectively zero.
  useLayoutEffect(() => {
    if (!meshRef.current) return;
    const idx = Math.floor((rightBound - domain[0]) / dx);
    meshRef.current.count = Math.min(Math.max(idx, 0), maxCount);
  }, [rightBound, domain, dx, maxCount]);

  if (maxCount === 0) return null;

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, maxCount]}
      position={shift}
      frustumCulled={false}
    >
      <planeGeometry args={[1, 1]} />
      <DarkPhongMaterial />
    </instancedMesh>
  );
};

export default FlatIntegral;
