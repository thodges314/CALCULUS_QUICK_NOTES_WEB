import { useMemo, Fragment } from "react";
import { ThickStraightLine } from "interactivity/components/Lines";
import { CourierPrime } from "interactivity/components/Text";
import {
  lightGrey,
  synthSunsetPink,
} from "interactivity/resources/constants/colors";
import { DarkPhongMaterial, TranslucentNormalMaterial } from "interactivity/resources/materials";

const Drum = ({
  solid: { domain = [0, 1], func = (x) => x, resolution = 10 },
  sides = 90,
  threeDee = true,
  labelProportion = 1,
  functionName = "f(x)",
  displayTopLabel = true,
  value = domain[0],
  shift = null,
}) => {
  const step = useMemo(() => 1 / resolution, [resolution]);

  const drums = useMemo(() => {
    const drumArray = [];
    for (let i = domain[0]; i <= value + step / 2; i += step) {
      drumArray.push(
        <Fragment key={i}>
          <mesh
            rotation-z={-Math.PI / 2}
            position-x={i + step / 2}
            position-y={threeDee ? 0 : func(i) / 2}
          >
            <DarkPhongMaterial />
            {threeDee ? (
              <cylinderGeometry args={[func(i), func(i), step, sides]} />
            ) : (
              <planeGeometry args={[func(i), step]} />
            )}
          </mesh>
          {threeDee && (
            <>
              <ThickStraightLine
                start={[i, 0, 0]}
                end={[i, func(i), 0]}
                color={lightGrey}
                width={0.01}
              />
              <ThickStraightLine
                start={[i + step, 0, 0]}
                end={[i + step, func(i), 0]}
                color={lightGrey}
                width={0.01}
              />
            </>
          )}
        </Fragment>
      );
    }
    return drumArray;
  }, [value, threeDee, domain, func, sides, step]);

  return (
    <>
      <group position={shift}>
        {drums}
        {threeDee ? (
          <>
            <ThickStraightLine
              start={[domain[0], 0, 0]}
              end={[domain[0], func(domain[0]), 0]}
              color={synthSunsetPink}
            />
            <ThickStraightLine
              start={[value + step, 0, 0]}
              end={[value + step, func(value), 0]}
              label={functionName}
              color={synthSunsetPink}
              labelProportion={labelProportion}
            />
          </>
        ) : (
          <CourierPrime
            text={functionName}
            position={[value + step + 0.01, func(value) / 2, 0]}
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
              value - labelProportion * 0.03,
              func(value) + labelProportion * (threeDee ? 0.4 : 0.2),
              0,
            ]}
            color={synthSunsetPink}
            bold={true}
          />
        )}
      </group>
    </>
  );
};

export default Drum;
