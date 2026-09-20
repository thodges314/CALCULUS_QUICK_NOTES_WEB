/**
 * CheckboxLabel
 * Replaces <CheckboxLabel control={<CustomCheckbox .../>} label="..." />
 * Pairs a checkbox control with an accessible label using a native <label>.
 */
const CheckboxLabel = ({ control, label, className = "" }) => (
  <label
    className={`flex items-center gap-1 cursor-pointer select-none text-base ${className}`.trim()}
  >
    {control}
    {label}
  </label>
);

export default CheckboxLabel;
