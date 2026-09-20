import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const cyberPaleBlue = hexToRgba(synthCyberPaleBlue, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{`$$log_{\\color{${sunsetMagenta}}{a}} (\\color{${sunsetYellow}}{b}) = \\color{${cyberPaleBlue}}{c} \\; \\Leftarrow\\!\\Rightarrow \\; {\\color{${sunsetMagenta}}{a}}^{\\color{${cyberPaleBlue}}{c}} = \\color{${sunsetYellow}}{b} $$`}</DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <CustomTypography>
        Finding a logarithm base {`$ {\\color{${sunsetMagenta}}{a}} $`} of{" "}
        {`$ {\\color{${sunsetYellow}}{b}} $`} means asking, '
        {`$ {\\color{${sunsetMagenta}}{a}} $`}, raised to what power, equals{" "}
        {`$ {\\color{${sunsetYellow}}{b}} $`}?'
      </CustomTypography>
    </SectionCard>
    <SideNoteCard>
      <SectionHeading>
        Notation:
      </SectionHeading>
      <ul>
        <li>
          <CustomTypography>
            {`$ log(x) $`}, with no subscript, usually implies <em>base 10</em>.
          </CustomTypography>
        </li>
        <li>
          <CustomTypography>
            When describing a general principle, like on this page,{" "}
            {`$ log(x) $`}, describes a logarithm of unspecified base.
          </CustomTypography>
        </li>
        <li>
          <CustomTypography>
            {`$ ln(x) $`} implies base {`$ \\mathit{e} $`} where{" "}
            {`$ \\mathit{e} \\approx 2.71828\\ldots $`}
          </CustomTypography>
        </li>
        <li>
          <CustomTypography>
            A logarithm base {`$ \\mathit{e} $`} is called a{" "}
            <em>natural logarithm</em>.
          </CustomTypography>
        </li>
      </ul>
      <CustomTypography>
        Some older textbooks, published prior to the 1970s, use {`$ log(x) $`}{" "}
        to designate a natural logarithm. Some mathematical software packages
        follow the same convention.
      </CustomTypography>
    </SideNoteCard>
    <SectionCard>
      <SectionHeading>
        Additional Properties:
      </SectionHeading>
      <DisplayEquation>{`$$ log({\\color{${sunsetMagenta}}{a}}{\\color{${sunsetYellow}}{b}}) = log({\\color{${sunsetMagenta}}{a}}) +  log({\\color{${sunsetYellow}}{b}}) $$`}</DisplayEquation>
      <DisplayEquation>{`$$ log\\left (  \\frac{\\color{${sunsetMagenta}}{a}}{\\color{${sunsetYellow}}{b}} \\right ) = log({\\color{${sunsetMagenta}}{a}}) - log({\\color{${sunsetYellow}}{b}}) $$`}</DisplayEquation>
      <DisplayEquation>{`$$ log({\\color{${sunsetMagenta}}{a}}^{\\color{${sunsetYellow}}{b}}) = {\\color{${sunsetYellow}}{b}} * log({\\color{${sunsetMagenta}}{a}}) $$`}</DisplayEquation>
      <CustomTypography>
        All of these can be intuitively derived by examining them in the context
        of the defintion at the top of the page.
      </CustomTypography>
      <CustomTypography>One informal example:</CustomTypography>
      <DisplayEquation>{`$$ x^2 * x^3$$`}</DisplayEquation>
      <DisplayEquation>{`$$ (x*x) * (x*x*x)$$`}</DisplayEquation>
      <DisplayEquation>{`$$ x*x*x*x*x$$`}</DisplayEquation>
      <DisplayEquation>{`$$ x^{(2+3)}$$`}</DisplayEquation>
      <CustomTypography>
        Wrapping your head around how that relates to the first log property
        listed above will help you develop an intuitive sence of logs.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Change of Base Formula:
      </SectionHeading>
      <DisplayEquation>{`$$ log_{\\color{${sunsetMagenta}}{a}} ({\\color{${sunsetYellow}}{b}}) = \\frac{log({\\color{${sunsetYellow}}{b}})}{log({\\color{${sunsetMagenta}}{a}})} = \\frac{ln({\\color{${sunsetYellow}}{b}})}{ln({\\color{${sunsetMagenta}}{a}})} $$`}</DisplayEquation>
      <CustomTypography>
        This trick is useful for older calculators that don't allow you to find
        logs in bases other than {`$ 10 $`} and {`$ \\mathit{e} $`}.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
