const CheckboxLabel = ({ control, label, className = "" }) => (
  <label
    className={`inline-flex items-center gap-1 cursor-pointer select-none text-base text-synth-sunset-pink ${className}`.trim()}
  >
    {control}
    {typeof label === "string" ? <span>{label}</span> : label}
  </label>
);

export default CheckboxLabel;
