const CanvasCard = ({ height, width, children }) => (
  <div
    style={{ height, width }}
    className="relative isolate box-border mt-5 mb-0 rounded overflow-hidden border border-synth-sunset-pink bg-synth-cyber-black shadow-[2px_2px_2px_2px_#de41cd]"
  >
    {children}
  </div>
);

export default CanvasCard;
