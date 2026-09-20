import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import CustomLink from "components/interface/CustomLink";

import SectionHeading from "components/interface/SectionHeading";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} (u \\pm v) = \\frac{\\mathrm{d} u}{\\mathrm{d} x}\\pm\\frac{\\mathrm{d} v}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        If multiple differentiable functions are added together, take the
        derivative of each function separately and sum them.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <div>
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} ({\\color{${sunsetMagenta}}{x^2}} + {\\color{${sunsetYellow}}{x^3}}) = {\\color{${sunsetMagenta}}{\\frac{\\mathrm{d} }{\\mathrm{d} x} x^2}} + {\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x} x^3}} = {\\color{${sunsetMagenta}}{2x}} + {\\color{${sunsetYellow}}{3x^2}}$$`}
        </DisplayEquation>
        <CustomTypography>
          In this example, we also used the{" "}
          <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink>.
        </CustomTypography>
      </div>
    </SectionCard>
    <SideNoteCard>
      <CustomTypography>
        Technically, the equals sign is a binary operator, and it's not
        mathematically correct to chain expressions with multiple equals signs.
        However, most teachers/professors won't bother you about this as long as
        you are doing everything else correctly. Generally, you'll be breaking
        your steps onto separate lines, but for aesthetics and readability, I've
        chosen to occasionally chain expressions with equals signs in this app.
      </CustomTypography>
    </SideNoteCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <DisplayEquation>
        {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\left ( {\\color{${sunsetMagenta}}{2\\sin(x)}}-{\\color{${sunsetYellow}}{\\ln|x|}} \\right )={\\color{${sunsetMagenta}}{\\frac{\\mathrm{d} }{\\mathrm{d} x}  2\\sin(x)}}-{\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x} \\ln|x|}}  = {\\color{${sunsetMagenta}}{2\\cos(x)}} - {\\color{${sunsetYellow}}{\\frac{1}{x}}}$$`}
      </DisplayEquation>
      <CustomTypography>
        In this example, we also used{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        and derivatives of{" "}
        <CustomLink href="/Derivatives/LogFunctions">Log Functions</CustomLink>.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
