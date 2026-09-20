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
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\alpha u = \\alpha \\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
      <CustomTypography>where {"$\\alpha$"} is any constant.</CustomTypography>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        Whenever a differentiable function is multiplied by a constant, the
        derivative will by that constant multiplied by the derivative of the
        differentiable function.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <div>
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}{\\color{${sunsetMagenta}}{2}}{\\color{${sunsetYellow}}{x^2}}={\\color{${sunsetMagenta}}{2}}\\left ({\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x}x^2}}\\right )={\\color{${sunsetMagenta}}{2}}*{\\color{${sunsetYellow}}{2x}}=4x$$`}
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
      <div>
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}{\\color{${sunsetMagenta}}{2}}{\\color{${sunsetYellow}}{\\sin(x)}}={\\color{${sunsetMagenta}}{2}}\\left ({\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x}\\sin(x)}}\\right )={\\color{${sunsetMagenta}}{2}}{\\color{${sunsetYellow}}{\\cos(x)}}$$`}
        </DisplayEquation>
        <CustomTypography>
          In this example, we also used{" "}
          <CustomLink href="/Derivatives/TrigonometricDerivatives">
            Trigonometric Derivatives
          </CustomLink>
          .
        </CustomTypography>
      </div>
    </SectionCard>
  </>
);

export default Component;
