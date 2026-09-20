import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import CustomTable from "components/interface/CustomTable";
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

const entries = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{u=\\sin{(x)}}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{\\mathrm{d}u=\\cos{(x)} \\mathrm{d}x}} $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {"$$\\int \\frac{\\mathrm{d}u}{u} = \\ln{\\left | u \\right | }+C $$"}
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        This is the rule that we use instead of the{" "}
        <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink> when{" "}
        {`$n=-1$`}. It's also an amazingly powerful tool for finding integrals
        that might appear to be too intimidating.
      </CustomTypography>
      <CustomTypography>
        If you see an integral expressed as a fraction, look to see if the
        numerator is the derivative of the denominator. If this is the case, the
        solution will be the natural log of the denominator.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <DisplayEquation>{`$$\\int{ \\frac{1}{x} } \\mathrm{d}x $$`}</DisplayEquation>
      <CustomTypography>
        This is the exception to the{" "}
        <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>, the
        case where we are integrating {`$\\int{u^n}\\mathrm{d}u$`}, and{" "}
        {`$n=-1$`}.
      </CustomTypography>
      <CustomTypography>
        Note that if we move {`$\\mathrm{d}x$`} to the numerator (which we can
        do, because we are multiplying it by a fraction), we get the form{" "}
        {`$\\int{\\frac{\\mathrm{d}x}{x}}$`}, which is exactly what this rule
        addresses. Therfore, we can solve:
        <DisplayEquation>{`$$\\int{\\frac{\\mathrm{d}x}{x}} = \\ln{|x|}+C$$`}</DisplayEquation>
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <DisplayEquation>{`$$ \\int \\cot{(x)} \\mathrm{d}x $$`}</DisplayEquation>
      <CustomTypography>
        This might not immediately present itself as a{" "}
        {`$ \\frac{\\mathrm{d}u}{u} $`} pattern, until you break down{" "}
        {`$\\cot{(x)}$`} into combinations of {`$\\sin{(x)}$`} and{" "}
        {`$\\cos{(x)}$`} using{" "}
        <CustomLink href="/PreCalculus/TrigonometricIdentities">
          Trigonometric Identities
        </CustomLink>
        .
      </CustomTypography>
      <CustomTypography>
        Recall that {`$ \\cot{(x)} = \\frac{\\cos{(x)}}{\\sin{(x)}}$`}.
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <DisplayEquation>{`$$ \\int \\cot{(x)} \\mathrm{d}x $$`}</DisplayEquation>
          <DisplayEquation>{`$$ \\int \\frac{\\color{${sunsetMagenta}}{\\cos{(x)} \\mathrm{d}x}}{\\color{${sunsetYellow}}{\\sin{(x)}}} $$`}</DisplayEquation>
          <CustomTypography>
            Because{" "}
            {`$\\int \\frac{\\color{${sunsetMagenta}}{\\mathrm{d}u}}{\\color{${sunsetYellow}}{u}} = \\ln{\\left |\\color{${sunsetYellow}}{u}\\right |}+C$`}
            , we know that:
          </CustomTypography>

          <DisplayEquation>{`$$ \\int \\frac{\\color{${sunsetMagenta}}{\\cos{(x)} \\mathrm{d}x}}{\\color{${sunsetYellow}}{\\sin{(x)}}} = \\ln{\\left | \\color{${sunsetYellow}}{\\sin{(x)}}\\right |} + C$$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>
      <CustomTypography>
        Which is the same result you will see on the{" "}
        <CustomLink href="/Integrals/TrigonometricIntegrals">
          Trigonometric Integrals
        </CustomLink>{" "}
        page.
      </CustomTypography>
      <CustomTypography>
        In this example, we also used{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <DisplayEquation>
        {`$$ \\int\\frac{2x+\\sec{(x)}\\tan{(x)}}{\\sec{(x)}+x^2} \\mathrm{d}x $$`}
      </DisplayEquation>
      <CustomTypography>
        Moving the {`$\\mathrm{d}x$`} to the numerator and rearranging the
        terms, it's clear that the numerator,{" "}
        {`$ {\\color{${sunsetMagenta}}{\\sec{(x)}\\tan{(x)}+2x ~\\mathrm{d}x}} $`}{" "}
        is the derivative of the denominator{" "}
        {`$ {\\color{${sunsetYellow}}{\\sec{(x)}+x^2}} $`}.
      </CustomTypography>
      <DisplayEquation>
        {`$$ \\int \\frac{\\color{${sunsetMagenta}}{\\sec{(x)}\\tan{(x)}+2x ~\\mathrm{d}x}}{\\color{${sunsetYellow}}{\\sec{(x)}+x^2}} $$`}
      </DisplayEquation>
      <CustomTypography>
        Thus, the integral of this function is the natural log of the
        denominator:
      </CustomTypography>
      <DisplayEquation>{`$$ \\ln{\\left | \\color{${sunsetYellow}}{\\sec{(x)}+x^2}\\right |} + C$$`}</DisplayEquation>
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
      <div css={{ display: "flex", flexDirection: "column" }}>
        <CustomTypography>
          To help you remember to notice this pattern:
        </CustomTypography>
        <DisplayEquation>{`$$ \\int \\frac{\\mathrm{d} (cabin)}{cabin} = \\ln{\\left | cabin \\right |} + C = houseboat$$`}</DisplayEquation>
        <CustomTypography>(log cabin plus sea = houseboat)</CustomTypography>
      </div>
    </SideNoteCard>
  </>
);

export default Component;
