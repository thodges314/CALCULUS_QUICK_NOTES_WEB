import SummaryCard from "components/interface/SummaryCard";
import SummaryTable from "components/interface/SummaryTable";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";

import {
  anotherLightPink,
  synthSunsetMagenta,
  synthSunsetOrange,
  synthSunsetYellow,
  synthSunsetViolet,
  synthSunsetPink,
  synthCyberLightBlue,
  synthCyberPink,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetOrange = hexToRgba(synthSunsetOrange, 1);
const sunsetPink = hexToRgba(synthSunsetPink, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);
const cyberPink = hexToRgba(synthCyberPink, 1);
const cyberPaleBlue = hexToRgba(synthCyberPaleBlue, 1);
const cyberLightBlue = hexToRgba(synthCyberLightBlue, 1);
const lightPink = hexToRgba(anotherLightPink, 1);

const entries = [
  [
    <DisplayEquation>{`$$ \\int sin^{-1}(u)\\mathrm{d}u = u\\,sin^{-1}(u)+\\sqrt{1-u^2}+C, \\;\\;|u|\\leq 1 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ \\int cos^{-1}(u)\\mathrm{d}u = u\\,cos^{-1}(u)-\\sqrt{1-u^2}+C, \\;\\;|u|\\leq 1 $$`}</DisplayEquation>,
  ],
  [""],
  [
    <DisplayEquation>{`$$ \\int sec^{-1}(u)\\mathrm{d}u = u\\,sec^{-1}(u)-ln \\left | u \\left ( 1+\\sqrt{1-u^{-2}}\\right )\\right |+C, \\;\\;|u|\\geq 1 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ \\int csc^{-1}(u)\\mathrm{d}u = u\\,csc^{-1}(u)+ln \\left | u \\left ( 1+\\sqrt{1-u^{-2}}\\right )\\right |+C, \\;\\;|u|\\geq 1 $$`}</DisplayEquation>,
  ],
  [""],
  [
    <DisplayEquation>{`$$ \\int tan^{-1}(u)\\mathrm{d}u = u\\,tan^{-1}(u)-\\frac{1}{2}ln \\left |1+u^2 \\right |+C,\\;\\; \\forall u\\in \\mathbb{R} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ \\int cot^{-1}(u)\\mathrm{d}u = u\\,cot^{-1}(u)+\\frac{1}{2}ln \\left |1+u^2 \\right |+C,\\;\\; \\forall u\\in \\mathbb{R} $$`}</DisplayEquation>,
  ],
];

const entries_table = [
  [
    <DisplayEquation>{`$$ \\color{${sunsetMagenta}}{u} = \\color{${sunsetMagenta}}{tan^{-1}(x)} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ \\color{${sunsetYellow}}{v} = \\color{${sunsetYellow}}{x} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ \\color{${sunsetMagenta}}{u'} = \\color{${sunsetMagenta}}{\\frac{\\mathrm{d}x}{1+x^2}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ \\color{${sunsetYellow}}{v'} = \\color{${sunsetYellow}}{\\mathrm{d}x} $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryTable entries={entries} />
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        These are interesting mainly for the fact that you can derive them using{" "}
        <CustomLink href="/Integrals/IntegrationByParts">
          Integration by Parts
        </CustomLink>
        .
      </CustomTypography>
      <CustomTypography>
        Notice that I have grouped {`$ sin $`} with {`$ cos $`}, {`$ sec $`}{" "}
        with {`$ csc $`} and {`$ tan $`} with {`$ cot $`}. These pairs differ
        only by the corresponding leading inverse function, and plusses and
        minuses. That pattern makes them easier to commit to memory.
      </CustomTypography>
      <CustomTypography>
        The roots in the inverse secant and cosecant integrals can also be
        written {`$\\sqrt{1-\\frac{1}{u^2}}$`} or{" "}
        {`$\\sqrt{\\frac{u^2 - 1}{u^2}}$`}, but I selected to leave them in a
        more compact form.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Derivation
      </SectionHeading>
      <DisplayEquation>{`$$\\int tan^{-1}(x)\\mathrm{d}x $$`}</DisplayEquation>
      <CustomTypography>
        To fing the integral of the inverse tangent, we need to use{" "}
        <CustomLink href="/Integrals/IntegrationByParts">
          Integration by Parts
        </CustomLink>
        .
      </CustomTypography>
      <DisplayEquation>{`$$ \\int {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v}}-\\int {\\color{${sunsetYellow}}{v}\\,\\color{${sunsetMagenta}}{u'}} $$`}</DisplayEquation>
      <CustomTypography>
        To match the Integration by Parts form, we are left with very little
        choice but to define{" "}
        {`$ \\color{${sunsetMagenta}}{u} = \\color{${sunsetMagenta}}{tan^{-1}(x)} $`}{" "}
        and{" "}
        {`$ \\color{${sunsetYellow}}{v'} = \\color{${sunsetYellow}}{\\mathrm{d}x} $`}
        . Completing the table, using{" "}
        <CustomLink href="/Derivatives/InverseTrigonometricDerivatives">
          Inverse Trigonometric Derivatives
        </CustomLink>{" "}
        to find the derivative of the inverse tangent, we get:
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_table} />
      </div>
      <DisplayEquation>{`$$ \\int {\\color{${sunsetMagenta}}{tan^{-1}(x)}\\,\\color{${sunsetYellow}}{\\mathrm{d}x}} = {\\color{${sunsetMagenta}}{tan^{-1}(x)}\\,\\color{${sunsetYellow}}{x}}-\\int {\\color{${sunsetYellow}}{x}\\,\\color{${sunsetMagenta}}{\\frac{\\mathrm{d}x}{1+x^2}}} $$`}</DisplayEquation>
      <CustomTypography>
        To solve the rightmost integral,{" "}
        {`$\\int{\\frac{x\\,\\mathrm{d}x}{1+x^2}}$`}, use{" "}
        {`$ \\int \\frac{\\mathrm{d}u}{u} = ln|u|+C $`} (
        <CustomLink href="/Integrals/\\mathrm{d}uu">
          Integral of {`$ \\frac{\\mathrm{d}u}{u}$`}
        </CustomLink>
        ). If you set{" "}
        {`$ \\color{${sunsetOrange}}{u} = \\color{${sunsetOrange}}{1+x^2} $`},
        then you will get{" "}
        {`$ \\color{${lightPink}}{\\mathrm{d}u} = \\color{${lightPink}}{2x\\,\\mathrm{d}x} $`}
        . To get {`$ \\color{${lightPink}}{\\mathrm{d}u} $`} in the numerator,
        use the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        .
      </CustomTypography>
      <DisplayEquation>{`$$ \\frac{1}{2}\\,2\\int{\\frac{x\\,\\mathrm{d}x}{1+x^2}}$$`}</DisplayEquation>
      <DisplayEquation>{`$$ \\frac{1}{2}\\int{\\frac{\\color{${lightPink}}{2x\\,\\mathrm{d}x}}{\\color{${sunsetOrange}}{1+x^2}}}$$`}</DisplayEquation>
      <DisplayEquation>{`$$ \\frac{1}{2} ln \\left | {\\color{${sunsetOrange}}{1+x^2}} \\right |+ C$$`}</DisplayEquation>
      <CustomTypography>
        Putting all of this together gives us the result:
      </CustomTypography>
      <DisplayEquation>{`$$ \\int{tan^{-1}(x)\\mathrm{d}x} = x\\,tan^{-1}(x) - \\frac{1}{2}ln \\left | 1+x^2 \\right | + C $$`}</DisplayEquation>
    </SectionCard>
    <SideNoteCard>
      The other inverse trig integrals follow pretty much the same pattern,
      except for sine and cosine which don't require use of ∫du/u. You might
      want to attempt them to familiarise yourself with the steps to deriving
      them by attempting them yourself. This might come in handy on a test if
      you can't remember the form of the inverse trig integral that you need.
    </SideNoteCard>
  </>
);

export default Component;
