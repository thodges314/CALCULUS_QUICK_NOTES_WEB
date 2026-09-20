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
          "$$\\int \\alpha f(x) \\mathrm{d}x = \\alpha \\int f(x) \\mathrm{d}x  $$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        The Constant Multiple Rule means that if you have a constant coefficient
        on an integrable function, you can pull the coefficient out in front of
        your integral, perform your integration, and then multiply the result by
        your constant.
      </CustomTypography>
      <CustomTypography>
        The Constnat Multiple Rule has a lot of versitility when performing
        operations like{" "}
        <CustomLink href="/Integrals/IntegrationByParts">
          Integration by Parts
        </CustomLink>{" "}
        or U Substitutuion.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <div>
        <DisplayEquation>
          {`$$ \\int {\\color{${sunsetMagenta}}{5}}~{\\color{${sunsetYellow}}{x}}~\\mathrm{d}x = {\\color{${sunsetMagenta}}{5}}\\int {\\color{${sunsetYellow}}{x}}~\\mathrm{d}x = {\\color{${sunsetMagenta}}{5}} {\\color{${sunsetYellow}}{\\left ( \\frac{x^2}{2} +C\\right )}} = \\frac{5}{2} x^2 +C$$`}
        </DisplayEquation>
        <CustomTypography>
          Notice that in the last step, we didn't write{" "}
          {`$\\frac{5}{2}x^2 + 5C$`}. This is because for indefinite integrals,{" "}
          {`$C$`} represents an unknown contant, which if needed we can solve
          for by substitutiong known values. There is no negative consequence of
          redefining {`$C$`} at every step.
        </CustomTypography>

        <CustomTypography>
          In this example, we also used the{" "}
          <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>.
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
