import { useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector2 } from "three";
import { ThickStraightLine, ThickCurveyLine } from "interactivity/components/Lines";
import RotationObject, { FlatIntegral } from "interactivity/components/RotationObject";
import { CourierPrime } from "interactivity/components/Text";
import { synthSunsetPink } from "interactivity/resources/constants/colors";
import UnrollingShell from "./UnrollingShell";

const Shell = ({
  solid: { domain = [0, 1], func = (x) => x, resolution = 20 },
  sides = 90,
  threeDee = true,
  labelProportion = 1,
  functionName = "f(x)",
  displayTopLabel = true,
  labelColor = synthSunsetPink,
  value = domain[0],
  shift = [0, 0, 0],
  unrolled = false, // Boolean toggle for unrolling
}) => {
  const heightVal = func(value);
  const [progress, setProgress] = useState(0);

  // Smooth ease-out animation for unrolling
  useFrame((_state, delta) => {
    const target = unrolled ? 1 : 0;
    if (Math.abs(progress - target) > 0.001) {
      const next = progress + (target - progress) * Math.min(6 * delta, 1);
      setProgress(next);
    } else if (progress !== target) {
      setProgress(target);
    }
  });

  // Generate circle coordinates for the shell circumference on the XZ plane.
  const circlePoints = useMemo(() => {
    const pts = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * 2 * Math.PI;
      // We draw in XY plane and rotate around X to put it in XZ
      pts.push(new Vector2(value * Math.cos(theta), value * Math.sin(theta)));
    }
    return pts;
  }, [value]);

  // Width of the unrolled sheet = 2 * PI * x
  const unrolledWidth = 2 * Math.PI * value;

  // Offset radius slightly to avoid zebra z-fighting with the RotationObject
  const activeRadius = value * 1.004 + 0.003;

  return (
    <>
      {threeDee ? (
        <group position={shift}>
          {/* Accumulated solid of revolution around the Y-axis */}
          {value > domain[0] && (
            <RotationObject
              solid={{
                domain: [domain[0], value],
                func: func,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
              axis="y"
              solidVolume={true}
            />
          )}

          {/* Active cylindrical shell with unrolling capability */}
          <UnrollingShell
            radius={activeRadius}
            height={heightVal}
            unrollProgress={progress}
            color={labelColor}
          />

          {/* Circumference indicator line (rendered if not fully flat) */}
          {progress < 0.95 && (
            <ThickCurveyLine
              points={circlePoints}
              rotationX={Math.PI / 2}
              rotationZ={0}
              color={labelColor}
              width={0.015}
            />
          )}

          {/* Active shell height radius indicator */}
          {progress < 0.05 && (
            <>
              <ThickStraightLine
                start={[value, 0, 0]}
                end={[value, heightVal, 0]}
                color={labelColor}
                label={functionName}
                labelProportion={labelProportion}
              />
              {displayTopLabel && (
                <CourierPrime
                  text="dx"
                  size={0.25 * labelProportion}
                  position={[
                    value - 0.2 * labelProportion,
                    heightVal + 0.4 * labelProportion,
                    0,
                  ]}
                  color={synthSunsetPink}
                  bold={true}
                />
              )}
            </>
          )}

          {/* 3D dimension labels shown once fully unrolled */}
          {progress > 0.9 && (
            <group>
              {/* Length dimension line (no default text) */}
              <ThickStraightLine
                start={[value, -0.2, -unrolledWidth / 2]}
                end={[value, -0.2, unrolledWidth / 2]}
                color={labelColor}
                labelProportion={labelProportion * 0.9}
              />
              {/* 2πx flat text lying in the YZ plane, under the line */}
              <group rotation-y={Math.PI / 2} position={[value - 0.01, -0.5, 0.25 * labelProportion]}>
                <CourierPrime
                  text="2πx"
                  color={labelColor}
                  size={0.25 * labelProportion}
                  bold={true}
                />
              </group>

              {/* Height dimension line (no default text) */}
              <ThickStraightLine
                start={[value, 0, unrolledWidth / 2 + 0.2]}
                end={[value, heightVal, unrolledWidth / 2 + 0.2]}
                color={labelColor}
                labelProportion={labelProportion * 0.9}
              />
              {/* f(x) flat text lying in the YZ plane, next to the line */}
              <group rotation-y={Math.PI / 2} position={[value - 0.01, heightVal / 2 - 0.1, unrolledWidth / 2 + 1.0]}>
                <CourierPrime
                  text={functionName}
                  color={labelColor}
                  size={0.25 * labelProportion}
                  bold={true}
                />
              </group>
            </group>
          )}
        </group>
      ) : (
        <>
          {/* 2D View: Flat integral strips */}
          <group position={shift}>
            {value > domain[0] && (
              <FlatIntegral
                solid={{
                  domain: [domain[0], domain[1]],
                  funcTop: func,
                  resolution: resolution,
                }}
                rightBound={value}
              />
            )}

            {/* Active vertical slice */}
            <ThickStraightLine
              start={[value, 0, 0]}
              end={[value, heightVal, 0]}
              color={labelColor}
              label={functionName}
              labelProportion={labelProportion}
            />
            {displayTopLabel && (
              <CourierPrime
                text="dx"
                size={0.25 * labelProportion}
                position={[
                  value - 0.2 * labelProportion,
                  heightVal + 0.4 * labelProportion,
                  0,
                ]}
                color={synthSunsetPink}
                bold={true}
              />
            )}
          </group>
        </>
      )}
    </>
  );
};

export default Shell;
