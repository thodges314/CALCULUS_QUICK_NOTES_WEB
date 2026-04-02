import { Inconsolata } from "interactivity/components/Text";
import { medGrey } from "interactivity/resources/constants/colors";

const Axes = ({ length = 6, labelProportion = 1, shift = [0, 0, 0] }) => (
  <>
    <group position={shift}>
      <Inconsolata
        text="x"
        size={0.3 * labelProportion}
        position={[length, 0, 0]}
        color={medGrey}
      />
      <Inconsolata
        text="y"
        size={0.3 * labelProportion}
        position={[0, length, 0]}
        color={medGrey}
      />
      <Inconsolata
        text="z"
        size={0.3 * labelProportion}
        position={[0, 0, length]}
        color={medGrey}
      />
      <mesh>
        <axesHelper args={[length]} />
      </mesh>
    </group>
  </>
);

export default Axes;
