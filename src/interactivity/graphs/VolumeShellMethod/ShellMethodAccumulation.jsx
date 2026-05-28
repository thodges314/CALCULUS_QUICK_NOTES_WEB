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
  Shell,
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

const ShellMethodAccumulation = () => {
  const { domain, resolution } = shellSolidDef;
  const step = useMemo(() => (domain[1] - domain[0]) / 100, [domain]); // Smooth scrubbing for integration limit
  const cameraRef = useRef();
  const [threeDee, setThreeDee] = useState(false);
  const [value, setValue] = useState(domain[0]); // Start at exactly 0.00π
  const [unrolled, setUnrolled] = useState(false);

  const handleRotationChange = (checked) => {
    setThreeDee(checked);
    // Reset unrolling state when leaving 3D to keep 2D view stable
    if (!checked) {
      setUnrolled(false);
    }
  };

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
          <RotationObjectLine solid={shellSolidDef} shift={twoDView} axis="y" />
          <Shell
            solid={shellSolidDef}
            threeDee={threeDee}
            labelProportion={labelProportion}
            functionName="f(x)"
            value={value}
            shift={twoDView}
            unrolled={unrolled}
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
                onChange={(evt) => handleRotationChange(evt.target.checked)}
              />
            }
            label="Rotate Graph"
          />
          {threeDee && (
            <FormControlLabel
              control={
                <CustomCheckbox
                  checked={unrolled}
                  onChange={(evt) => setUnrolled(evt.target.checked)}
                />
              }
              label="Unroll Shell (Lay Flat)"
            />
          )}
          <ControlsRow>
            <div>x</div>
            <div>
              <CustomSlider
                onChange={(_evt, newValue) => setValue(newValue)}
                value={value}
                min={domain[0]} // Full range from exactly 0.00π
                max={domain[1]}
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

export default ShellMethodAccumulation;
