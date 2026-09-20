import NavItems from "./NavItems";

const MenuDrawer = ({ open = false, toggleDrawer = () => {} }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggleDrawer}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/50 z-9998 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-9999 w-60 bg-theme-background text-synth-sunset-magenta shadow-2xl border-r border-synth-sunset-magenta/20 transform transition-transform duration-300 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-center py-4">
          <h2 className="text-xl font-medium m-0 tracking-wide">Topics</h2>
        </div>

        <hr className="border-t border-synth-sunset-magenta/20 m-0" />

        <div className="flex-1 overflow-y-auto">
          <NavItems />
        </div>
      </aside>
    </>
  );
};

export default MenuDrawer;
