import { useMemo } from "react";
import { DarkPhongMaterial, TranslucentNormalMaterial } from "interactivity/resources/materials";

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
  const dx = useMemo(() => {
    return 0.1 / resolution;
  }, [resolution]);
  const shapes = useMemo(() => {
    const func = (x) => funcTop(x) - funcBottom(x);
    const shps = [];
    const width = light ? dx / 2 : dx;
    for (let i = domain[0]; i < domain[1]; i += dx) {
      const smlr = Math.min(func(i), func(i + dx));
      shps.push(
        <mesh
          position-x={i + dx / 2}
          position-y={smlr / 2 + funcBottom(i)}
          rotation-z={-Math.PI / 2}
          key={Math.round(i * 100)}
        >
          <DarkPhongMaterial />
          <planeGeometry args={[smlr, width]} />
        </mesh>
      );
    }
    return shps;
  }, [domain, funcBottom, funcTop, dx, light]);
  const idx = (rightBound - domain[0]) / dx;
  return <mesh position={shift}>{shapes.slice(0, idx)}</mesh>;
};

export default FlatIntegral;
