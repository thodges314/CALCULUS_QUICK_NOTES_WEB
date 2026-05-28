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
}) => {
  const meshRef = useRef();

  const points = useMemo(() => {
    const pts = [];
    const dx = 0.5 / resolution;
    for (let i = domain[0]; i < domain[1]; i += dx) {
      pts.push(new Vector2(func(i), i));
    }
    pts.push(new Vector2(func(domain[1]), domain[1]));
    return pts;
  }, [domain, func, resolution]);

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

  return (
    <mesh
      ref={meshRef}
      rotation-z={-Math.PI / 2}
      rotation-x={-Math.PI / 2}
      position={shift}
    >
      {normalMaterial ? <TranslucentNormalMaterial /> : <DarkPhongMaterial />}
    </mesh>
  );
};

export default RotationObject;
