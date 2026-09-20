// Inline SVG icons — hand-written geometry, no third-party dependency.
// All icons use currentColor so they inherit text color from their parent.

export const MenuIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <rect x="3" y="6" width="18" height="2" rx="1" />
    <rect x="3" y="11" width="18" height="2" rx="1" />
    <rect x="3" y="16" width="18" height="2" rx="1" />
  </svg>
);

export const HouseIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

export const ArrowForwardIosIcon = ({ fontSize = "medium", style = {}, className = "" }) => {
  const size = fontSize === "small" ? 18 : 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      style={style}
      className={className}
    >
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
    </svg>
  );
};
