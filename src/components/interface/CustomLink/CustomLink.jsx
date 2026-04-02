import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { synthSunsetPink } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetPinkHeavy = hexToRgba(synthSunsetPink, 1);

const CustomLink = ({ href, children }) => {
  const isExternal = href.startsWith("http");

  return (
    <Link
      component={isExternal ? "a" : RouterLink}
      href={isExternal ? href : undefined}
      to={!isExternal ? href : undefined}
      target={isExternal ? "_blank" : undefined}
      underline="none"
      color={sunsetPinkHeavy}
      sx={{
        fontWeight: "fontWeightHeavy",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
