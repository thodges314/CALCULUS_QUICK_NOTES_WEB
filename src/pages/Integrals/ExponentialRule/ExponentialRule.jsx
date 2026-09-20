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
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {"$$\\int \\alpha^u \\mathrm{d}u =\\frac{\\alpha^u}{\\ln{(u)}}+C $$"}
      </DisplayEquation>
      <DisplayEquation>{"$$\\int e^u \\mathrm{d}u = e^u+C $$"}</DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        This is an analog to the{" "}
        <CustomLink href="/Derivatives/ExponentialFunctions">
          Exponential Rule for Differentiation
        </CustomLink>
        .
      </CustomTypography>
      <CustomTypography>
        Like with differentiation, a special case exists if {`$\\alpha=e$`}.
        Recall that {`$\\ln{(e)} = 1$`}
      </CustomTypography>
      <DisplayEquation>{`$$\\int{e^u}\\mathrm{d}u = \\frac{e^u}{\\ln{(e)}}+C=\\frac{e^u}{1}+C=e^u+C$$`}</DisplayEquation>
      <CustomTypography>
        As in differential calculus, problems of this type will often relate to
        topics of exponential growth and decay, or accumulation of interest.
      </CustomTypography>
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
      <DisplayEquation>{`$$\\int e^{2x} \\mathrm{d}x$$`}</DisplayEquation>
      <CustomTypography>
        We can integrate this if we have an integral in the form{" "}
        {`$\\int e^{\\color{${sunsetMagenta}}{u}} \\color{${sunsetYellow}}{\\mathrm{d}u}$`}
        . If we define{" "}
        {`$ {\\color{${sunsetMagenta}}{u}}={\\color{${sunsetMagenta}}{2x}} $`}{" "}
        then we need{" "}
        {`$ {\\color{${sunsetYellow}}{\\mathrm{d}u}}={\\color{${sunsetYellow}}{2\\mathrm{d}x}} $`}
        . Unfortunately, we only have {`$\\mathrm{d}x$`}.
      </CustomTypography>
      <CustomTypography>
        The good news is that, because of the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        , we can <em>make</em> a{" "}
        {`$ {\\color{${sunsetYellow}}{2\\mathrm{d}x}} $`}. We start by
        multiplying this integral by {`$1=\\frac{1}{2}*2$`}.
      </CustomTypography>
      <DisplayEquation>{`$$\\int e^{\\color{${sunsetMagenta}}{2x}} \\mathrm{d}x $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\frac{1}{2}}}*{\\color{${sunsetViolet}}{ 2}}\\int e^{\\color{${sunsetMagenta}}{2x}} \\mathrm{d}x $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\frac{1}{2}}}\\int e^{\\color{${sunsetMagenta}}{2x}} {\\color{${sunsetYellow}}{2\\mathrm{d}x}} $$`}</DisplayEquation>
      <CustomTypography>
        Now, we have both{" "}
        {`$ {\\color{${sunsetMagenta}}{u}}={\\color{${sunsetMagenta}}{2x}} $`}{" "}
        and{" "}
        {`$ {\\color{${sunsetYellow}}{\\mathrm{d}u}}={\\color{${sunsetYellow}}{2\\mathrm{d}x}} $`}{" "}
        in the positions described in the form above. We can find the integral:
      </CustomTypography>
      <DisplayEquation>{`$$ \\frac{1}{2} \\left ( \\int e^{\\color{${sunsetMagenta}}{2x}} {\\color{${sunsetYellow}}{2\\mathrm{d}x}}\\right ) $$`}</DisplayEquation>
      <DisplayEquation>{`$$ \\frac{1}{2} \\left (  e^{\\color{${sunsetMagenta}}{2x}} + C\\right ) $$`}</DisplayEquation>
      <DisplayEquation>{`$$ \\frac{1}{2}  e^{2x} + C $$`}</DisplayEquation>
      <CustomTypography>
        If you are wondering why the {`$ \\frac {1}{2} $`} was not distributed
        to the {`$ C $`}, see the description on the example on the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
