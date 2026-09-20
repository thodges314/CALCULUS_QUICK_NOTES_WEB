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
      {`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\ln{(x)}}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetYellow}}{v}} = {\\color{${sunsetYellow}}{x}} $$`}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {`$$ {\\color{${sunsetMagenta}}{{u}\'}} = {\\color{${sunsetMagenta}}{\\frac{\\mathrm{d}x}{x}}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetYellow}}{{v}\'}} = {\\color{${sunsetYellow}}{\\mathrm{d}x}} $$`}
    </DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{`$$\\int{\\log_\\alpha{(u)}}\\mathrm{d}u = \\frac{u \\ln{(u)}-u}{\\ln{(a)}}+C$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\int{\\ln{(u)}}\\mathrm{d}u = u \\ln{(u)} - u + C$$`}</DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Derivation: Part 1
      </SectionHeading>
      <CustomTypography>
        This integration rule can be derived in the natural log case using{" "}
        <CustomLink href="/Integrals/IntegrationByParts">
          Integration by Parts
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Derivatives/LogFunctions">
          Derivatives of the Natural Log Function
        </CustomLink>
        .
      </CustomTypography>
      <CustomTypography>
        After we demonstrate for the natural log case, we can use{" "}
        <CustomLink href="/PreCalculus/LogarithmProperties">
          Log Properties
        </CustomLink>{" "}
        to find a more general case.
      </CustomTypography>
      <DisplayEquation>{`$$\\int{\\ln{(u)}}\\mathrm{d}u$$`}</DisplayEquation>
      <CustomTypography>
        To find this integral, we need to use{" "}
        <CustomLink href="/Integrals/IntegrationByParts">
          Integration by Parts
        </CustomLink>
        .
      </CustomTypography>
      <DisplayEquation>{`$$\\int {\\color{${sunsetMagenta}}{u}}*{\\color{${sunsetYellow}}{{v}\'}} = {\\color{${sunsetMagenta}}{u}}*{\\color{${sunsetYellow}}{v}} - \\int {\\color{${sunsetYellow}}{v}}*{\\color{${sunsetMagenta}}{{u}\'}}$$`}</DisplayEquation>
      <CustomTypography>
        To match the{" "}
        <CustomLink href="/Integrals/IntegrationByParts">
          Integration by Parts
        </CustomLink>{" "}
        form, we are left with very little choice but to define{" "}
        {`$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\ln{(x)}}} $`}
        , and{" "}
        {`$ {\\color{${sunsetYellow}}{{v}\'}} = {\\color{${sunsetYellow}}{\\mathrm{d}x}} $`}
        . Completing the table, using the derivative of the natural log, we get:
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <DisplayEquation>{`$$\\int {\\color{${sunsetMagenta}}{\\ln{(x)}}}*{\\color{${sunsetYellow}}{\\mathrm{d}x}} = {\\color{${sunsetMagenta}}{\\ln{(x)}}}*{\\color{${sunsetYellow}}{x}} - \\int {\\color{${sunsetYellow}}{x}}*{\\color{${sunsetMagenta}}{\\frac{\\mathrm{d}x}{x}}}$$`}</DisplayEquation>
        <CustomTable entries={entries} />
      </div>
      <CustomTypography>
        The rightmost integral, {`$\\int \\frac{x*\\mathrm{d}x}{x}$`}, implifies
        to {`$\\int \\mathrm{d}x = x + C$`}.
      </CustomTypography>
      <CustomTypography>This gives us the result:</CustomTypography>
      <DisplayEquation>{`$$\\int{\\ln{(x)}}\\mathrm{d}x = x \\ln{(x)} - x + C$$`}</DisplayEquation>
    </SectionCard>
    <SideNoteCard>
      <CustomTypography>
        Technically, it's bad form to mix Leibniz notation (
        {"$\\frac{\\mathrm{d} }{\\mathrm{d} x}$"}) with Lagrange notation (
        {"$f^\\prime(x)$"}), and I try to avoid that throughout this app when
        possible, but it's often done informally when working out solutions.
      </CustomTypography>
    </SideNoteCard>
    <SectionCard>
      <SectionHeading>
        Derivation: Part 2
      </SectionHeading>
      <CustomTypography>
        To find the general form, recall the old calculator trick:
      </CustomTypography>
      <DisplayEquation>{`$$\\log_\\alpha{(x)} = \\frac{\\ln{(x)}}{\\ln{(\\alpha)}}$$`}</DisplayEquation>
      <CustomTypography>
        <em>
          (Older calculators only had an{" "}
          {`$ {\\color{${sunsetYellow}}{\\ln{()}}} $`} key, a{" "}
          {`$ {\\color{${sunsetYellow}}{\\log_{10}{()}}} $`} key, or both, and
          to find logs in other bases, you had to use this trick)
        </em>
      </CustomTypography>
      <CustomTypography>
        Taking the integral of this and using the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        , we get:
      </CustomTypography>
      <DisplayEquation>{`$$\\int{\\frac{\\ln{(x)}}{\\ln{(\\alpha)}}}\\mathrm{d}x = \\frac{1}{\\ln{(\\alpha)}}{\\color{${sunsetMagenta}}{\\int{\\ln{(x)}}\\mathrm{d}x}} = \\frac{1}{\\ln{(\\alpha)}}{\\color{${sunsetMagenta}}{\\left ( x\\ln{(x)}-x+C\\right )}}$$`}</DisplayEquation>
      <CustomTypography>
        which is equivalent to the above form.
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
      <DisplayEquation>{`$$ \\int \\ln{\\left ( \\sin^2{(x)}+2\\right )}\\sin{(x)}\\cos{(x)}\\mathrm{d}x $$`}</DisplayEquation>
      <CustomTypography>Our solution will take the form:</CustomTypography>
      <DisplayEquation>{`$$\\int{\\ln{({\\color{${sunsetMagenta}}{u}})}}{\\color{${sunsetYellow}}{\\mathrm{d}u}} = {\\color{${sunsetMagenta}}{u}} \\ln{({\\color{${sunsetMagenta}}{u}})} - {\\color{${sunsetMagenta}}{u}} + C$$`}</DisplayEquation>
      <CustomTypography>
        We can perform u-substitution, setting{" "}
        {`$ {\\color{${sunsetMagenta}}{u}}={\\color{${sunsetMagenta}}{\\sin^2{(x)}+2}} $`}
        . This means that{" "}
        {`$ {\\color{${sunsetYellow}}{\\mathrm{d}u}}={\\color{${sunsetYellow}}{2\\sin{(x)}\\cos{(x)}\\mathrm{d}x}} $`}
        . We can get this form using the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        .
      </CustomTypography>
      <DisplayEquation>{`$$ \\int \\ln{\\left ({\\color{${sunsetMagenta}}{ \\sin^2{(x)}+2}}\\right )}\\sin{(x)}\\cos{(x)}\\mathrm{d}x $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\frac{1}{2}*2}}\\int \\ln{\\left ({\\color{${sunsetMagenta}}{ \\sin^2{(x)}+2}}\\right )}\\sin{(x)}\\cos{(x)}\\mathrm{d}x $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\frac{1}{2}}}\\int \\ln{\\left ({\\color{${sunsetMagenta}}{ \\sin^2{(x)}+2}}\\right )}{\\color{${sunsetYellow}}{2\\sin{(x)}\\cos{(x)}\\mathrm{d}x}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\frac{1}{2}}}\\left ( {\\left ({\\color{${sunsetMagenta}}{ \\sin^2{(x)}+2}}\\right )}  \\ln{\\left ({\\color{${sunsetMagenta}}{ \\sin^2{(x)}+2}}\\right )}-{\\left ({\\color{${sunsetMagenta}}{ \\sin^2{(x)}+2}}\\right )}\\right ) + C$$`}</DisplayEquation>
      <CustomTypography>
        You are more than welcome to simplify that result to your heart's
        content. Also, I am assuming that by this point in your calculus career,
        you have come far enough along to work out how to find the derivative of{" "}
        {`$ \\sin^2{(x)}+2 $`} (it uses{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometic Derivatives
        </CustomLink>
        , <CustomLink href="/Derivatives/ProductRule">Product Rule</CustomLink>,{" "}
        <CustomLink href="/Derivatives/SumOrDifferenceRule">
          Sum or Difference Rule
        </CustomLink>{" "}
        and{" "}
        <CustomLink href="/Derivatives/ConstantFunction">
          Constant Function
        </CustomLink>
        ).
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
