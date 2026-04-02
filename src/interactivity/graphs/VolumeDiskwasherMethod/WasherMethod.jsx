import { useMemo, useRef, useState } from "react";
import { Vector3 } from "three";
import CanvasCard from "components/interface/CanvasCard";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup, FormControlLabel } from "@mui/material";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomCheckbox from "components/interface/CustomCheckbox";

import {
  Axes,
  RotationObject,
  RotationObjectLine,
  Washer,
} from "interactivity/components";

const height = 400;
const width = height * 1.61803398875;

const twoDView = [-0.5, -0.25, 0];
const cameraPosition = [0.75, 0, 1.5];
const axesLength = 1.5;
const labelProportion = 1 / 3;

const washerMethod1 = {
  domain: [0, 1],
  func: (x) => x ** 2,
  intFunc: (x) => 2 * x,
  resolution: 10,
};

const washerMethod2 = {
  domain: [0, 1],
  func: (x) => x ** (1 / 2),
  intFunc: (x) => (1 / 2) * x ** (-1 / 2),
  resolution: 10,
};

const washerMethod = {
  domain: [0, 1],
  bigFunc: (x) => x ** (1 / 2),
  littleFunc: (x) => x ** 2,
  intBigFunc: (x) => (1 / 2) * x ** (-1 / 2),
  intLittleFunc: (x) => 2 * x,
  resolution: 10,
};

const WasherMethod = () => {
  const { domain, resolution } = washerMethod;
  const step = useMemo(() => 0.5 / resolution, [resolution]);
  const cameraRef1 = useRef();
  const [threeDee, setThreeDee] = useState(false);
  const [value, setValue] = useState(domain[0]);

  return (
    <div
      style={{
        width: width,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
      }}
    >
      <CanvasCard height={height} width={width}>
        <Canvas camera={{ position: cameraPosition }}>
          <ambientLight color={0x91b2cb} intensity={2} />
          <directionalLight position={[1123, 56, 79]} intensity={0.5} />
          <Environment
            files={
              process.env.PUBLIC_URL +
              "/img/industrial_sunset_02_puresky_1k.hdr"
            }
            background
          />
          <RotationObjectLine solid={washerMethod1} shift={twoDView} />
          <RotationObjectLine solid={washerMethod2} shift={twoDView} />

          {threeDee && (
            <>
              <RotationObject solid={washerMethod1} shift={twoDView} />
              <RotationObject solid={washerMethod2} shift={twoDView} />
            </>
          )}

          <Washer
            solid={washerMethod}
            labelProportion={labelProportion}
            threeDee={threeDee}
            value={value}
            shift={twoDView}
          />
          <CameraControls ref={cameraRef1} />
          <Axes
            length={axesLength}
            labelProportion={labelProportion}
            shift={twoDView}
          />
        </Canvas>
      </CanvasCard>
      <FormGroup>
        <ControlsCard>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={threeDee}
                onChange={(evt) => setThreeDee(evt.target.checked)}
              />
            }
            label="Rotate Graph"
          />
          <ControlsRow>
            <div>x</div>
            <div>
              <CustomSlider
                onChange={(_evt, newValue) => setValue(newValue)}
                value={value}
                min={domain[0]}
                max={domain[1]}
                step={step}
                size="small"
                valueLabelDisplay="auto"
                sx={{
                  ml: 1,
                  mr: 1,
                }}
              />
            </div>
          </ControlsRow>
        </ControlsCard>
      </FormGroup>
    </div>
  );
};

export default WasherMethod;
