const ControlsCard = ({ children }) => (
  <div className="w-full mt-5 rounded border border-synth-sunset-pink bg-synth-cyber-black/80 text-synth-cyber-pink shadow-[2px_2px_2px_2px] shadow-synth-cyber-pink">
    <div className="flex flex-col p-4 pb-6">{children}</div>
  </div>
);

export default ControlsCard;
