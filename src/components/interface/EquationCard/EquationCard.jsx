// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// import { styled } from "@mui/material/styles";
// import { hexToRgba } from "utils/utils";
// import {
//   synthCyberBlack,
//   synthCyberPink,
//   synthSunsetPink,
// } from "interactivity/resources/constants/colors";

// const darkColor = hexToRgba(synthCyberBlack, 0.8);
// const cyberPink = hexToRgba(synthCyberPink);
// const sunsetPink = hexToRgba(synthSunsetPink);

// const StyledControlsCard = styled(Card)({
//   width: "100%",
//   marginTop: "20px",
//   color: cyberPink,
//   backgroundColor: darkColor,
//   boxShadow: `2px 2px 2px 2px ${cyberPink}`,
//   borderLeft: `1px solid ${sunsetPink}`,
//   borderRight: `1px solid ${sunsetPink}`,
//   borderBottom: `1px solid ${sunsetPink}`,
//   borderTop: `1px solid ${sunsetPink}`,

//   "& > div": {
//     display: "flex",
//     alignItems: "center",
//     flexWrap: "wrap",
//   },
// });

// const ControlsCard = ({ children }) => (
//   <StyledControlsCard>
//     <CardContent>{children}</CardContent>
//   </StyledControlsCard>
// );

// export default ControlsCard;

import React from "react";

const ControlsCard = ({ children }) => (
  <div className="w-full mt-5 rounded border border-synth-sunset-pink bg-synth-cyber-black/80 text-synth-cyber-pink shadow-[2px_2px_2px_2px_#de41cd]">
    <div className="flex items-center flex-wrap p-4 pb-6">{children}</div>
  </div>
);

export default ControlsCard;
