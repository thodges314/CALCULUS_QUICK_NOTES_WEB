import { useMemo, useRef, useState } from "react";
import CanvasCard from "components/interface/CanvasCard";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup, FormControlLabel } from "@mui/material";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomCheckbox from "components/interface/CustomCheckbox";

import {
  Axes,
  Shells,
  RotationObject,
  RotationObjectLine,
} from "interactivity/components";

const height = 400;
const width = height * 1.61803398875;

const twoDView = [-1.57, -0.5, 0];
const cameraPosition = [0.5, 0, 4];
const axesLength = 4;
const labelProportion = 0.8;

const shellSolidDef = {
  domain: [0, Math.PI],
  func: (x) => Math.sin(x),
  resolution: 20,
};

const formatPiLabel = (val) => {
  const fraction = val / Math.PI;
  return `${fraction.toFixed(2)}π`;
};

const ShellMethodShells = () => {
  const { domain, resolution } = shellSolidDef;
  const step = useMemo(() => (domain[1] - domain[0]) / resolution, [domain, resolution]);
  const cameraRef = useRef();
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
        <Canvas dpr={[1, 2]} camera={{ position: cameraPosition }}>
          <ambientLight color={0x91b2cb} intensity={2} />
          <directionalLight position={[1123, 56, 79]} intensity={0.5} />
          <Environment
            files={
              process.env.PUBLIC_URL +
              "/img/industrial_sunset_02_puresky_1k.hdr"
            }
            background
          />
          {threeDee && (
            <RotationObject
              solid={shellSolidDef}
              sides={90}
              normalMaterial={true}
              shift={twoDView}
              axis="y"
            />
          )}
          <RotationObjectLine solid={shellSolidDef} shift={twoDView} axis="y" />
          <Shells
            solid={shellSolidDef}
            threeDee={threeDee}
            labelProportion={labelProportion}
            functionName="f(x)"
            value={value}
            shift={twoDView}
            displayTopLabel={true}
          />
          <CameraControls ref={cameraRef} />
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
                max={domain[1] - step}
                step={step}
                size="small"
                valueLabelDisplay="auto"
                valueLabelFormat={formatPiLabel}
              />
            </div>
          </ControlsRow>
        </ControlsCard>
      </FormGroup>
    </div>
  );
};

export default ShellMethodShells;
