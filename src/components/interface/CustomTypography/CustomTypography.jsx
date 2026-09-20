import { InlineEquation } from "components/interface/DisplayEquation";

const CustomTypography = ({
  sx = {},
  style = {},
  className = "",
  children,
}) => (
  <div
    style={{ ...sx, ...style }}
    className={`mt-[0.4rem] m-0 flex items-center flex-wrap leading-normal ${className}`.trim()}
  >
    <InlineEquation>{children}</InlineEquation>
  </div>
);

export default CustomTypography;
