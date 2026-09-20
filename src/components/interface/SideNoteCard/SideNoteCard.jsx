const SideNoteCard = ({ children, className = "" }) => (
  <div
    className={`w-175 mx-auto mt-10 rounded bg-theme-background text-synth-sunset-pink shadow-[4px_4px_4px_4px] shadow-synth-sunset-pink border-t border-b border-synth-sunset-pink border-l border-r border-synth-sunset-pink/10 ${className}`.trim()}
  >
    <div className="flex items-center flex-wrap p-4 pb-6">{children}</div>
  </div>
);

export default SideNoteCard;
