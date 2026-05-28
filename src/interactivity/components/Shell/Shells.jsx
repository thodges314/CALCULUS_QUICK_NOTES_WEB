import { useMemo, useRef, useEffect, Fragment } from "react";
import { Vector2, LatheGeometry, DoubleSide } from "three";
import { ThickStraightLine } from "interactivity/components/Lines";
import { CourierPrime } from "interactivity/components/Text";
import {
  lightGrey,
  synthSunsetPink,
} from "interactivity/resources/constants/colors";
import { DarkPhongMaterial } from "interactivity/resources/materials";

// A leak-safe helper to draw a single concentric thick cylindrical shell.
// Revolves a 2D rectangle in XY plane around Y-axis using LatheGeometry.
const ThickCylindricalShell = ({ r1, r2, h, sides }) => {
  const meshRef = useRef();

  const points = useMemo(() => [
    new Vector2(r1, 0),
    new Vector2(r2, 0),
    new Vector2(r2, h),
    new Vector2(r1, h),
    new Vector2(r1, 0),
  ], [r1, r2, h]);

  useEffect(() => {
    if (!meshRef.current || points.length === 0) return;
    const baseGeometry = new LatheGeometry(points, sides);
    const geometry = baseGeometry.toNonIndexed();
    baseGeometry.dispose();
    geometry.computeVertexNormals();
    meshRef.current.geometry = geometry;
    return () => {
      geometry.dispose();
    };
  }, [points, sides]);

  return (
    <mesh ref={meshRef}>
      <meshPhongMaterial
        attach="material"
        color={0x2b2b2b}
        specular={0x555555}
        shininess={30}
        side={DoubleSide}
        flatShading={false}
      />
    </mesh>
  );
};

const Shells = ({
  solid: { domain = [0, 1], func = (x) => x, resolution = 10 },
  sides = 180,
  threeDee = true,
  labelProportion = 1,
  functionName = "f(x)",
  displayTopLabel = true,
  value = domain[0],
  shift = [0, 0, 0],
}) => {
  const step = useMemo(() => (domain[1] - domain[0]) / resolution, [domain, resolution]);

  const shellElements = useMemo(() => {
    const arr = [];
    // Loop through the intervals up to value
    for (let i = domain[0]; i < value - step / 4; i += step) {
      const h = func(i); // Left-hand height
      const r1 = i;
      const r2 = i + step;

      arr.push(
        <Fragment key={i}>
          {threeDee ? (
            <ThickCylindricalShell
              r1={r1}
              r2={r2}
              h={h}
              sides={sides}
            />
          ) : (
            // In 2D, render a standard vertical rectangle
            <mesh position-x={i + step / 2} position-y={h / 2}>
              <DarkPhongMaterial />
              <planeGeometry args={[step, h]} />
            </mesh>
          )}

          {threeDee && (
            <>
              {/* Supporting border lines to outline the shells in 3D */}
              <ThickStraightLine
                start={[r1, 0, 0]}
                end={[r1, h, 0]}
                color={lightGrey}
                width={0.01}
              />
              <ThickStraightLine
                start={[r2, 0, 0]}
                end={[r2, h, 0]}
                color={lightGrey}
                width={0.01}
              />
            </>
          )}
        </Fragment>
      );
    }
    return arr;
  }, [value, threeDee, domain, func, sides, step]);

  // Calculate the exact left-hand endpoint height of the last rendered step segment
  const finalHeight = useMemo(() => {
    if (value <= domain[0]) return func(domain[0]);
    const k = Math.floor((value - domain[0] - step / 4) / step);
    const i = domain[0] + k * step;
    return func(i);
  }, [value, domain, step, func]);

  return (
    <group position={shift}>
      {shellElements}

      {threeDee ? (
        <>
          <ThickStraightLine
            start={[domain[0], 0, 0]}
            end={[domain[0], func(domain[0]), 0]}
            color={synthSunsetPink}
          />
          <ThickStraightLine
            start={[value, 0, 0]}
            end={[value, finalHeight, 0]}
            label={functionName}
            color={synthSunsetPink}
            labelProportion={labelProportion}
          />
        </>
      ) : (
        <CourierPrime
          text={functionName}
          position={[value + 0.05, finalHeight / 2, 0]}
          size={labelProportion * 0.25}
          color={synthSunsetPink}
          bold={true}
        />
      )}

      {displayTopLabel && (
        <CourierPrime
          text="Δx"
          size={labelProportion * 0.25}
          position={[
            value - labelProportion * 0.05,
            finalHeight + labelProportion * 0.3,
            0,
          ]}
          color={synthSunsetPink}
          bold={true}
        />
      )}
    </group>
  );
};

export default Shells;
