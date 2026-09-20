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
          "$$\\int f(x) \\pm g(x) \\mathrm{d}x = \\int f(x) \\mathrm{d}x \\pm \\int g(x) \\mathrm{d}x $$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        This rule is a direct analog to the{" "}
        <CustomLink href="/Derivatives/SumOrDifferenceRule">
          Sum or Difference Rule of Differentiation
        </CustomLink>
        . If you are taking the integral of two or more integrable functions
        added or subtracted together, you can take the sum or difference ot the
        integrals of each function.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <div>
        <DisplayEquation>
          {`$$ \\int {\\color{${sunsetMagenta}}{x^2}} + {\\color{${sunsetYellow}}{\\cos{(x)}}} \\mathrm{d}x = \\int {\\color{${sunsetMagenta}}{x^2}} \\mathrm{d}x + \\int {\\color{${sunsetYellow}}{\\cos{(x)}}} \\mathrm{d}x$$`}
        </DisplayEquation>
        <DisplayEquation>{`$$ {}={\\color{${sunsetMagenta}}{\\frac{x^3}{3}}} + {\\color{${sunsetYellow}}{\\sin{(x)}}} + C$$`}</DisplayEquation>

        <CustomTypography>
          In this example, we also used the{" "}
          <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink> and{" "}
          <CustomLink href="/Integrals/TrigonometricIntegrals">
            Trigonometric Integrals
          </CustomLink>
          .
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
  </>
);

export default Component;
