export const CustomCheckbox = ({
  checked = false,
  onChange = () => {},
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <span className="relative inline-flex items-center justify-center p-2 rounded-full hover:bg-synth-cyber-pink/10 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={`peer appearance-none w-4.5 h-4.5 rounded-[3px] border-2 border-synth-cyber-pink bg-theme-background cursor-pointer outline-none transition-all
          checked:border-synth-cyber-pink checked:bg-theme-background
          disabled:opacity-50 disabled:cursor-not-allowed ${className}`.trim()}
        {...props}
      />
      {/* Centered Check Icon visible only when peer (input) is checked */}
      <svg
        viewBox="0 0 24 24"
        className="absolute w-3.5 h-3.5 pointer-events-none stroke-synth-cyber-pink stroke-[3.5] fill-none stroke-linecap-round stroke-linejoin-round opacity-0 peer-checked:opacity-100 transition-opacity"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
};
