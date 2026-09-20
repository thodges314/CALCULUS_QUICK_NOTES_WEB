import { Link as RouterLink } from "react-router-dom";

const CustomLink = ({ href, children }) => {
  const isExternal = href.startsWith("http");
  const linkClasses =
    "no-underline text-synth-sunset-pink hover:opacity-80 transition-opacity";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={linkClasses}>
      {children}
    </RouterLink>
  );
};

export default CustomLink;
