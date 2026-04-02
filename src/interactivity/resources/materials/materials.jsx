import { darkGrey, lightGrey } from "../constants/colors";
import { DoubleSide } from "three";

export const DarkPhongMaterial = () => (
  <meshPhongMaterial
    attach="material"
    color={darkGrey}
    specular={lightGrey}
    side={DoubleSide}
  />
);

export const TranslucentNormalMaterial = () => (
  <meshNormalMaterial
    attach="material"
    side={DoubleSide}
    transparent={true}
    opacity={0.5}
  />
);

