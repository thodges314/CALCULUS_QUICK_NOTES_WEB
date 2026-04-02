import { useMemo, useRef, useState } from "react";
import { Vector3 } from "three";
import CanvasCard from "components/interface/CanvasCard";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import { FormGroup, FormControlLabel } from "@mui/material";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomCheckbox from "components/interface/CustomCheckbox";
import CustomSlider from "components/interface/CustomSlider";

import { Axes, Disc, RotationObjectLine } from "interactivity/components";

const height = 400;
const width = height * 1.61803398875;

// const twoDView = [2, 1.5, 0];
const twoDView = [-2, -1.5, 0];
const cameraPosition = [1.25, 0, 5];
const axesLength = 5;
const labelProportion = 1;

const discMethod1 = {
  domain: [1, 4],
  func: (x) => x ** 3 - 7 * x ** 2 + 14 * x - 5,
  intFunc: (x) => (1 / 4) * x ** 4 - (1 / 7) * x ** 3 + 7 * x ** 2 - 5 * x,
  resolution: 5,
};

const DiskMethodDiscsShifted = () => {
  const { domain, resolution } = discMethod1;
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
          <RotationObjectLine solid={discMethod1} shift={twoDView} />
          <Disc
            solid={discMethod1}
            threeDee={threeDee}
            labelProportion={labelProportion}
            functionName={"R(x)"}
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
                valueLabelDisplay
              />
            </div>
          </ControlsRow>
        </ControlsCard>
      </FormGroup>
    </div>
  );
};

export default DiskMethodDiscsShifted;
