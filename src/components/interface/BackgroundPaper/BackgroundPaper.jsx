export default function BackgroundPaper({ children }) {
  return (
    <div className="w-300 min-h-[calc(100vh-100px)] mx-auto mb-25 rounded-b-2xl pt-19 px-4 pb-11.5 bg-synth-cyber-black">
      {children}
    </div>
  );
}
