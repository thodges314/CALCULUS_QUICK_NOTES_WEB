import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
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
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{u=\\sin(x)}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{\\frac{\\mathrm{d} u}{\\mathrm{d} x}=\\cos(x)}} $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\alpha ^u = \\alpha ^u\\ln(u)*\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
      <InlineText>and specifically</InlineText>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}e ^u = e ^u*\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        If you have to find the derivative of an exponential function with{" "}
        {"$e$"} as it's base, it's your lucky day. Recall that {"$ln(e)=1$"}.
        This means that you can just multiply your function by the derivative of
        the exponent.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example with <em>e</em>
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\color{${sunsetMagenta}}{e} ^{\\color{${sunsetYellow}}{\\sin(x)}} $$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\color{${sunsetMagenta}}{e} ^{\\color{${sunsetYellow}}{\\sin(x)}} \\frac{\\mathrm{d} }{\\mathrm{d} x}\\color{${sunsetYellow}}{\\sin(x)} $$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\color{${sunsetMagenta}}{e} ^{\\color{${sunsetYellow}}{\\sin(x)}} \\color{${sunsetYellow}}{\\cos(x)} $$`}
          </DisplayEquation>
          <DisplayEquation>{`$$ \\cos(x) e ^{\\sin(x)}  $$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>

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
        Example without <em>e</em>
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\color{${sunsetMagenta}}{7} ^{\\color{${sunsetYellow}}{\\sin(x)}} $$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\color{${sunsetMagenta}}{7} ^{\\color{${sunsetYellow}}{\\sin(x)}} \\color{${sunsetMagenta}}{\\ln(7)} \\frac{\\mathrm{d} }{\\mathrm{d} x}\\color{${sunsetYellow}}{\\sin(x)} $$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\color{${sunsetMagenta}}{7} ^{\\color{${sunsetYellow}}{\\sin(x)}} \\color{${sunsetMagenta}}{\\ln(7)} \\color{${sunsetYellow}}{\\cos(x)} $$`}
          </DisplayEquation>
          <DisplayEquation>{`$$ \\ln(7)\\cos(x) 7 ^{\\sin(x)} $$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>

      <CustomTypography>
        In this example, we also used{" "}
        <CustomLink href="/Derivatives/TrigonometricDerivatives">
          Trigonometric Derivatives
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
