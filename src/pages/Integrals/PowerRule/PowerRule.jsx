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
        {"$$\\int u^n \\mathrm{d}x = \\frac{u^{n+1}}{n+1}+C $$"}
      </DisplayEquation>
      <CustomTypography>for {"$n \\ne -1$"}</CustomTypography>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        The Power Rule relates directly back to the{" "}
        <CustomLink href="/Derivatives/PowerRule">
          Power Rule for Differentiation
        </CustomLink>
        . Recall that when finding the derivative of {`$x^n$`}, we brought the{" "}
        {`$n$`} down in front and then decreased the exponent by {`$1$`}. When
        integrating, we perform the exact opposite operation, increasing the
        exponent by {`$1$`} and then dividing by that value.
      </CustomTypography>
      <CustomTypography>
        Notice that if we tried to apply that rule when {`$n=-1$`}, we would
        wind up with {`$\\frac{x^0}{0} = \\frac{1}{0}$`}. The Power Rule does
        not apply in this case.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <div>
        <DisplayEquation>
          {`$$ \\int {\\color{${sunsetMagenta}}{x}}^{\\color{${sunsetYellow}}{4}}\\mathrm{d}x = \\frac{{\\color{${sunsetMagenta}}{x}}^{\\color{${sunsetYellow}}{4+1}}}{{\\color{${sunsetYellow}}{4+1}}} + C = \\frac{x^5}{5}+C$$`}
        </DisplayEquation>
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
