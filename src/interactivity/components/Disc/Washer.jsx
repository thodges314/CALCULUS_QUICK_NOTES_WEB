import { ThickStraightLine } from "interactivity/components/Lines";
import RotationObject, {
  FlatIntegral,
} from "interactivity/components/RotationObject";
import {
  synthSunsetPink,
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
import { DarkPhongMaterial, TranslucentNormalMaterial } from "interactivity/resources/materials";

const Washer = ({
  solid: {
    domain = [0, 1],
    bigFunc = (x) => x,
    littleFunc = (x) => x,
    resolution = 20,
  },
  sides = 90,
  threeDee = true,
  labelProportion = 1,
  functionNameBig = "R(x)",
  functionNameLittle = "r(x)",
  labelColorBig = synthSunsetPink,
  labelColorLittle = synthSunsetViolet,
  value = domain[0],
  shift = [0, 0, 0],
}) => {
  const zTransform = 1 / 2;
  const yTransform = 3 ** (1 / 2) / 2;
  return (
    <>
      {value >= domain[0] &&
        (threeDee ? (
          <>
            <RotationObject
              solid={{
                domain: [domain[0], value],
                func: bigFunc,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
              shift={shift}
            />
            <RotationObject
              solid={{
                domain: [domain[0], value],
                func: littleFunc,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
              shift={shift}
            />
          </>
        ) : (
          <>
            <FlatIntegral
              solid={{
                domain: [domain[0], domain[1]],
                funcTop: bigFunc,
                funcBottom: littleFunc,
                resolution: resolution,
              }}
              rightBound={value}
              shift={shift}
            />
            <FlatIntegral
              solid={{
                domain: [domain[0], domain[1]],
                funcTop: littleFunc,
                funcBottom: (_x) => 0,
                resolution: resolution,
              }}
              rightBound={value}
              shift={shift}
              light
            />
          </>
        ))}

      {threeDee && (
        <group position={shift}>
          <mesh rotation-y={-Math.PI / 2} position-x={domain[0]}>
            <DarkPhongMaterial />
            <ringGeometry
              args={[littleFunc(domain[0]), bigFunc(domain[0]), sides]}
            />
          </mesh>
          <mesh rotation-y={-Math.PI / 2} position-x={value}>
            <DarkPhongMaterial />
            <ringGeometry args={[littleFunc(value), bigFunc(value), sides]} />
          </mesh>
          <ThickStraightLine
            start={[value, 0, 0]}
            end={[
              value,
              yTransform * littleFunc(value),
              zTransform * littleFunc(value),
            ]}
            color={synthSunsetViolet}
            label={functionNameLittle}
            labelProportion={labelProportion}
          />
          <ThickStraightLine
            start={[value, 0, 0]}
            end={[
              value,
              yTransform * bigFunc(value),
              -zTransform * bigFunc(value),
            ]}
            color={synthSunsetPink}
            label={functionNameBig}
            labelProportion={labelProportion}
          />
        </group>
      )}

      {!threeDee && (
        <group position={shift}>
          <ThickStraightLine
            start={[value + 0.01, 0, 0.01]}
            end={[value + 0 + 0.01, littleFunc(value), 0.01]}
            color={labelColorLittle}
            label={functionNameLittle}
            labelProportion={labelProportion}
          />
          <ThickStraightLine
            start={[value - 0.01, 0, 0.01]}
            end={[value - 0.01, bigFunc(value), 0.01]}
            color={labelColorBig}
            label={functionNameBig}
            labelProportion={labelProportion}
            labelRight={false}
          />
        </group>
      )}
    </>
  );
};

export default Washer;
