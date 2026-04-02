import { ThickStraightLine } from "interactivity/components/Lines";
import RotationObject, {
  FlatIntegral,
} from "interactivity/components/RotationObject";
import { CourierPrime } from "interactivity/components/Text";
import { synthSunsetPink } from "interactivity/resources/constants/colors";
import { DarkPhongMaterial, TranslucentNormalMaterial } from "interactivity/resources/materials";

const Disc = ({
  solid: { domain = [0, 1], func = (x) => x, resolution = 20 },
  sides = 90,
  threeDee = true,
  labelProportion = 1,
  functionName = "f(x)",
  displayTopLabel = true,
  labelColor = synthSunsetPink,
  value = domain[0],
  shift = null,
}) => {
  return (
    <>
      <group position={shift}>
        {value >= domain[0] &&
          (threeDee ? (
            <RotationObject
              solid={{
                domain: [domain[0], value],
                func: func,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
            />
          ) : (
            <FlatIntegral
              solid={{
                domain: [domain[0], domain[1]],
                funcTop: func,
                resolution: resolution,
              }}
              rightBound={value}
            />
          ))}

        {threeDee && (
          <>
            <mesh rotation-y={-Math.PI / 2} position-x={domain[0]}>
              <DarkPhongMaterial />
              <circleGeometry args={[func(domain[0]), sides]} />
            </mesh>
            <mesh rotation-y={Math.PI / 2} position-x={value}>
              <DarkPhongMaterial />
              <circleGeometry args={[func(value), sides]} />
            </mesh>
            <ThickStraightLine
              start={[domain[0], 0, 0]}
              end={[domain[0], func(domain[0]), 0]}
              color={synthSunsetPink}
            />
          </>
        )}

        <ThickStraightLine
          start={[value, 0, 0]}
          end={[value, func(value), 0]}
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
              func(value) + 0.4 * labelProportion,
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

export default Disc;
