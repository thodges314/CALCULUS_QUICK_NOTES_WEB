import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);
const cyberPaleBlue = hexToRgba(synthCyberPaleBlue, 1);

const entries = [
  [
    <DisplayEquation>
      {`$$ {\\color{${sunsetMagenta}}{f(x)=\\tan(x)}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetYellow}}{g(x)=x^2}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetViolet}}{h(x)=\\ln|x|}} $$`}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {`$$ {\\color{${sunsetMagenta}}{f^\\prime(x)=\\sec^2 (x)}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetYellow}}{g^\\prime(x)=2x}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetViolet}}{h^\\prime(x)=\\frac{1}{x}}} $$`}
    </DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$h(x) = f \\left ( g(x) \\right )\\;\\; \\Rightarrow \\;\\;h^\\prime(x) = f^\\prime \\left ( g(x) \\right )*g^\\prime(x)$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        The chain rule is useful when you have nested functions. While it's
        written above with two nested functions, you can nest as many functions
        as you like with the chain rule.
      </CustomTypography>
      <CustomTypography>
        Like peeling an onion, take the derivative of the outermost funtion and
        apply it to the ramining functions within, then take the derivative of
        the second outermost function, and so on.
      </CustomTypography>
      <CustomTypography>
        The chain rule can also be written less intuitively with Leibniz
        notation:{" "}
        {
          "$\\frac{\\mathrm{d} y}{\\mathrm{d} x} = \\frac{\\mathrm{d} y}{\\mathrm{d} u} * \\frac{\\mathrm{d} u}{\\mathrm{d} x} $"
        }
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example with Three Layers
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\tan \\left ( \\left ( ln|x| \\right )^2 \\right )$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} {\\color{${sunsetMagenta}}{\\tan \\left ( {\\color{${sunsetYellow}}{\\left ( {\\color{${sunsetViolet}}{ln|{\\color{${cyberPaleBlue}}{x}}|}} \\right )^2}} \\right )}} $$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ {\\color{${sunsetMagenta}}{\\sec^2\\left ( {\\color{${cyberPaleBlue}}{\\left ( ln|x| \\right )^2}} \\right )}} * {\\color{${sunsetYellow}}{2\\left ( {\\color{${cyberPaleBlue}}{ln|x|}} \\right )}} * {\\color{${sunsetViolet}}{\\frac{1}{{\\color{${cyberPaleBlue}}{x}}}}}$$`}
          </DisplayEquation>
          <DisplayEquation>{`$$\\frac{2\\sec^2\\left (  ln|x| ^2 \\right )  ln|x| }{x}$$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>
      <CustomTypography>
        Notice that {"$h(x)$"} is used differently here than in the top
        description.
      </CustomTypography>
      <CustomTypography>
        In this example, we also used{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>
        , the <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink>{" "}
        and derivatives of{" "}
        <CustomLink href="/Derivatives/LogFunctions">Log Functions</CustomLink>.
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
