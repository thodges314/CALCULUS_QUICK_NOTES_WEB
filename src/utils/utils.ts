export const hexToRgbaTypeScript = (hex: number, opacity: number): string => {
  const leadingZeros = (hex:number) => 6 - hex.toString(16).length;
  const hexString = "0".repeat(leadingZeros(hex)) + hex.toString(16);
  const r = parseInt(hexString.slice(0, 2), 16);
  const g = parseInt(hexString.slice(2, 4), 16);
  const b = parseInt(hexString.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity || 1})`;
};