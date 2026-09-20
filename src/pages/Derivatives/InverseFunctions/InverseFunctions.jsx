import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
import CustomLink from "components/interface/CustomLink";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

import LabeledRightTriangleGraph from "interactivity/d3Graphs/LabeledRightTriangleGraph";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);
const cyberPaleBlue = hexToRgba(synthCyberPaleBlue, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{`$$\\frac{\\mathrm{d}}{\\mathrm{d}x}f^{-1}(x) = \\frac{1}{f'\\left ( f^{-1}(x)\\right)}$$`}</DisplayEquation>
    </SummaryCard>
    <SideNoteCard>
      This form is useful for finding derivatives of inverse trigonometric
      functions.
    </SideNoteCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <CustomTypography>
        Suppose that we wanted to find{" "}
        <CustomLink href="/Derivatives/InverseTrigonometricDerivatives">
          the derivative of {`$ y = sin^{-1}(x)$`}
        </CustomLink>
        . That means that {`$x = sin(y)$`}. From this information, we can draw
        the following triangle if we assume a hypotenuse of 1:
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "20px" }}>
          <LabeledRightTriangleGraph />
        </div>
        <div>
          <CustomTypography>To find the missing leg:</CustomTypography>
          <CustomTypography>
            Draw a diagram of a right triangle, and label one angle (not the
            right angle) '{`$y$`}.' If {`$sin(y)=x$`}, then, by the
            right-triangle definition of trig functions,{" "}
            {`$sin(y) = \\frac{opposite}{hypotenuse}=\\frac{x}{1}$`}. Label the
            opposite leg from y, and the hypotenuse, {`$x$`} and {`$1$`}{" "}
            accordingly. Then use the Pythagorean Theorem to find{" "}
            {`$\\sqrt{1-x^2}$`} for the remaining leg.
          </CustomTypography>
        </div>
      </div>
      <CustomTypography>
        We define{" "}
        {`$\\color{${sunsetViolet}}{f(x)}=\\color{${sunsetViolet}}{sin(x)}$`},{" "}
        {`$\\color{${sunsetMagenta}}{f^{-1}(x)}=\\color{${sunsetMagenta}}{sin^{-1}(x)}$`}{" "}
        and{" "}
        {`$\\color{${sunsetYellow}}{f'(x)}=\\color{${sunsetYellow}}{cos(x)}$`}.
        Using the Inverse Function rule:
      </CustomTypography>
      <DisplayEquation>{`$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\color{${sunsetMagenta}}{f^{-1}(x)} = \\frac{1}{\\color{${sunsetYellow}}{f'\\left ( \\color{${sunsetMagenta}}{f^{-1}(x)}\\right)}}$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\frac{\\mathrm{d}}{\\mathrm{d}x} \\color{${sunsetMagenta}}{sin^{-1}(x)} = \\frac{1}{\\color{${sunsetYellow}}{cos\\left ( \\color{${sunsetMagenta}}{sin^{-1}(x)}\\right)}}$$`}</DisplayEquation>
      <DisplayEquation>{`$$=\\frac{1}{cos(y)}$$`}</DisplayEquation>
      <DisplayEquation>{`$$=\\frac{1}{\\sqrt{1-x^2}}$$`}</DisplayEquation>
      <CustomTypography>
        To finish this, we used {`$cos(y) = \\sqrt{1-x^2}$`}, which can be found
        from the diagram above
        {`$\\left ( cos(y)=\\tfrac{adjacent}{hypotenuse} =\\tfrac{\\sqrt{1-x^2}}{1} \\right )$`}
        .
      </CustomTypography>
      <CustomTypography>
        The domain can be discovered by considering{" "}
        <CustomLink href="/PreCalculus/TrigonometricIdentities">
          Properties of Trigonometric Functions
        </CustomLink>
        , or by noticing that any value outside of {`$ (-1,1) $`} will result in
        taking the square root of a negative value.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <CustomTypography>
        You can practice this pattern by finding functions for other{" "}
        <CustomLink href="/Derivatives/InverseTrigonometricDerivatives">
          Inverse Trigonometric Derivatives
        </CustomLink>
        , which all can be found by drawing and labeling a right triangle and
        applying this Inverse Function format.
      </CustomTypography>
      {/* <CustomTypography>
        For the absolute values of {`$u$`} in the denominator of{" "}
        {`$ \\tfrac{\\mathrm{d}}{\\mathrm{d}x}sec^{-1}(u) $`}
      </CustomTypography> */}
    </SectionCard>
  </>
);

export default Component;
