import { useMemo } from "react";
import { Vector2 } from "three";
import { ThickCurveyLine } from "interactivity/components/Lines";

const RotationObjectLine = ({
  solid: { domain = [0.1, 1], func = (x) => x, resolution = 10 },
  shift = [0, 0, 0],
  axis = "x",
}) => {
  const points = useMemo(() => {
    const pts = [];
    const dx = 0.5 / resolution;
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
    return pts;
  }, [domain, func, resolution, axis]);

  const rotX = axis === "y" ? 0 : Math.PI;
  const rotZ = axis === "y" ? 0 : -Math.PI / 2;

  return (
    <ThickCurveyLine
      points={points}
      rotationX={rotX}
      rotationZ={rotZ}
      shift={shift}
    />
  );
};

export default RotationObjectLine;
