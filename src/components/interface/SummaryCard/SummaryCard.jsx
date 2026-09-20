const SummaryCard = ({ children, className = "" }) => (
  <div
    className={`w-200 mx-auto mt-5 rounded bg-theme-background text-synth-sunset-orange shadow-[4px_4px_4px_4px] shadow-synth-sunset-orange border-t border-b border-synth-sunset-orange border-l border-r ${className}`.trim()}
  >
    <div className="flex items-center flex-wrap p-4 pb-6">{children}</div>
  </div>
);

export default SummaryCard;
