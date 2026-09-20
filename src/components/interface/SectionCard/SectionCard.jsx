const SectionCard = ({ children, className = "" }) => (
  <div
    className={`mt-10 mx-5 rounded bg-theme-background text-synth-cyber-pale-blue shadow-[4px_4px_4px_4px] shadow-synth-cyber-pale-blue border-t border-b border-synth-cyber-pale-blue border-l border-r ${className}`.trim()}
  >
    <div className="p-16">{children}</div>
  </div>
);

export default SectionCard;
