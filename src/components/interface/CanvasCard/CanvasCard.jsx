const CanvasCard = ({ height, width, children }) => (
  <div
    style={{ height, width }}
    className="relative isolate mt-5 mb-0 rounded overflow-hidden border border-synth-sunset-pink bg-synth-cyber-black shadow-[2px_2px_2px_2px] shadow-synth-cyber-pink [&>canvas]:block [&>div>canvas]:block"
  >
    {children}
  </div>
);

export default CanvasCard;
