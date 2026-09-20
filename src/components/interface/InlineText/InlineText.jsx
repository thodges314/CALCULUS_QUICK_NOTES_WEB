const InlineText = ({ children, className = "" }) => (
  <p className={`text-base leading-relaxed m-0 ${className}`.trim()}>
    {children}
  </p>
);

export default InlineText;
