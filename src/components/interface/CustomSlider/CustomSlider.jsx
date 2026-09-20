import Slider from "@mui/material/Slider";
import { hexToRgba } from "utils/utils";
import { synthCyberPink } from "interactivity/resources/constants/colors";

const cyberPink = hexToRgba(synthCyberPink);

export const CustomSlider = (props) => (
  <Slider
    {...props}
    sx={{
      color: cyberPink,
      mx: 1, // marginLeft & marginRight: 8px
      mt: 1, // marginTop: 8px
      "& .MuiSlider-markLabel": {
        color: cyberPink,
      },
      ...props.sx,
    }}
  />
);

export default CustomSlider;
