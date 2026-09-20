import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
import InlineText from "components/interface/InlineText";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const entries = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u=\\sin(x)}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v=x^2}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u^\\prime=\\cos(x)}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v^\\prime=2x}} $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\left (  \\frac{u}{v} \\right )^\\prime = \\frac{u^\\prime v - v^\\prime u}{v^2}\\;\\;$$"
        }
      </DisplayEquation>
      <InlineText>or</InlineText>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\left (  \\frac{u}{v} \\right ) = \\frac{\\tfrac{\\mathrm{d} u}{\\mathrm{d} x} * v - \\tfrac{\\mathrm{d} v}{\\mathrm{d} x} * u}{v^2}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        It's easiest to use the Lagrange notation ({"$f^\\prime(x)$"}) to
        remember the quotient rule. You just have to commit this pattern to
        memory.
      </CustomTypography>
      <CustomTypography>
        Some people repeat little mnemonics to themselves like 'bottom dee-top
        minus top dee-bottom over bottom squared.'
      </CustomTypography>
      <CustomTypography>
        Because subtraction is not commutative, it's important to remember the
        order of the numerator in this derivative (take the derivative of the
        numerator first, the denominator second).
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <DisplayEquation>
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\frac{\\color{${sunsetMagenta}}{\\sin(x)}}{{\\color{${sunsetYellow}}{x^2}}}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\frac{\\left ( {\\color{${sunsetMagenta}}{\\cos(x)}} \\right )\\left(\\color{${sunsetYellow}}{x^2} \\right )-\\left( {\\color{${sunsetMagenta}}{\\sin(x)}}\\right)\\left (\\color{${sunsetYellow}}{2x}\\right )}{\\left (\\color{${sunsetYellow}}{x^2}\\right )^2}$$`}
          </DisplayEquation>
          <DisplayEquation>{`$$\\frac{x^2\\cos(x)-2x\\sin(x)}{x^4}$$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>
      <CustomTypography>
        As an exercise, try to get the same result at this quotient rule example
        using the{" "}
        <CustomLink href="/Derivatives/ProductRule">Product Rule</CustomLink>{" "}
        with {`$u=\\sin(x)$`} and {`$v=x^{-2}$`}.
      </CustomTypography>
      <CustomTypography>
        In this example, we also used{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink>.
      </CustomTypography>
    </SectionCard>
    <SideNoteCard>
      <CustomTypography>
        Technically, it's bad form to mix Leibniz notation (
        {"$\\frac{\\mathrm{d} }{\\mathrm{d} x}$"}) with Lagrange notation (
        {"$f^\\prime(x)$"}), and I try to avoid that throughout this app when
        possible, but it's often done informally when working out solutions.
      </CustomTypography>
    </SideNoteCard>
  </>
);

export default Component;
