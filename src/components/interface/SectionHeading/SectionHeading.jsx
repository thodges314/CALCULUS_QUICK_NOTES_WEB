const SectionHeading = ({ children, className = "" }) => (
  <h2
    className={`w-full text-xl font-medium leading-relaxed tracking-wide m-0 ${className}`.trim()}
  >
    {children}
  </h2>
);

export default SectionHeading;
