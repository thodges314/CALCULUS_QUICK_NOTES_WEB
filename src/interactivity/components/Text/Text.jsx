import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { medGrey } from "interactivity/resources/constants/colors";

import courierPrimeFile from "interactivity/resources/fonts/Courier_Prime_Regular.json";
import courierPrimeBoldFile from "interactivity/resources/fonts/Courier_Prime_Bold.json";
import inconsolataFile from "interactivity/resources/fonts/Inconsolata_Regular.json";
import robotoFile from "interactivity/resources/fonts/Roboto_Regular.json";

extend({ TextGeometry });

const parsedCourierPrime = new FontLoader().parse(courierPrimeFile);
const parsedCourierPrimeBold = new FontLoader().parse(courierPrimeBoldFile);
const parsedInconsolata = new FontLoader().parse(inconsolataFile);
const parsedRoboto = new FontLoader().parse(robotoFile);

const Inconsolata = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = medGrey,
}) => {
  const textOptions = {
    font: parsedInconsolata,
    size: size,
    depth: 0.01,
  };

  return (
    <mesh position={position}>
      <textGeometry args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

const Roboto = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = medGrey,
}) => {
  const textOptions = {
    font: parsedRoboto,
    size: size,
    depth: 0.01,
  };

  return (
    <mesh position={position}>
      <textGeometry args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

const CourierPrime = ({
  text = "",
  size = 0.5,
  position = [0, 0, 0],
  color = medGrey,
  bold = false,
}) => {
  const textOptions = {
    font: bold ? parsedCourierPrimeBold : parsedCourierPrime,
    size: size,
    depth: 0.01,
  };

  return (
    <mesh position={position}>
      <textGeometry args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

export { CourierPrime, Inconsolata, Roboto };
