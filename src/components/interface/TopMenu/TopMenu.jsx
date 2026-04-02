import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { location, hexToRgba } from "utils/utils";
import { useNavigate, useLocation } from "react-router-dom";
import {
  synthSunsetMagenta,
  themeBackground,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(themeBackground, 1);
const magentaHeavy = hexToRgba(synthSunsetMagenta, 1);
// const magentaLight = hexToRgba(synthSunsetMagenta, 0.1);

const TopMenu = ({ toggleDrawer = () => {} }) => {
  const reactLocation = useLocation();
  const headerArray = location(reactLocation.pathname);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "space-between",
        position: "static",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          bgcolor: backgroundColor,
          color: magentaHeavy,
          boxShadow: `2px 2px 2px 2px ${magentaHeavy}`,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            // sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontVariant: "small-caps",
            }}
          >
            {headerArray[0]}
            {headerArray.length > 1 && headerArray[1] !== "" && (
              <>
                <ArrowForwardIosIcon
                  fontSize="small"
                  style={{ marginBottom: -2, marginLeft: 4, marginRight: 4 }}
                />
                {headerArray[1]}
              </>
            )}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={navigateHome}
            // sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HouseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopMenu;
