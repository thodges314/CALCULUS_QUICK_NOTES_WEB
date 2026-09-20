import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { location } from "utils/utils";
import { useNavigate, useLocation } from "react-router-dom";

const TopMenu = ({ toggleDrawer = () => {} }) => {
  const reactLocation = useLocation();
  const headerArray = location(reactLocation.pathname);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
    navigate(0);
  };

  return (
    <header className="static flex w-full">
      <nav className="w-full bg-theme-background text-synth-sunset-magenta shadow-[2px_2px_2px_2px] shadow-synth-sunset-magenta">
        <div className="flex items-center min-h-14 sm:min-h-16 px-4 sm:px-6">
          <button
            type="button"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className="p-2 -ml-2 rounded-full inline-flex items-center justify-center text-inherit hover:bg-white/10 transition-colors focus:outline-none"
          >
            <MenuIcon />
          </button>

          <div className="flex-1 hidden sm:flex items-center font-semibold text-xl [font-variant:small-caps] select-none">
            <span>{headerArray[0]}</span>
            {headerArray.length > 1 && headerArray[1] !== "" && (
              <>
                <ArrowForwardIosIcon
                  fontSize="small"
                  style={{ marginBottom: -2, marginLeft: 4, marginRight: 4 }}
                />
                <span>{headerArray[1]}</span>
              </>
            )}
          </div>

          <button
            type="button"
            aria-label="navigate home"
            onClick={navigateHome}
            className="p-2 -mr-2 rounded-full inline-flex items-center justify-center text-inherit hover:bg-white/10 transition-colors focus:outline-none"
          >
            <HouseIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default TopMenu;
