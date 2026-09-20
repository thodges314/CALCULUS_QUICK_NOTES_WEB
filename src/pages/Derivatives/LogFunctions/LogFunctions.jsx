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
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{u=x^3}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{\\frac{\\mathrm{d} u}{\\mathrm{d} x}=3x^2}} $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\log_{\\alpha}(u) = \\frac{1}{\\ln(\\alpha)u}\\frac{\\mathrm{d} u}{\\mathrm{d} x} $$"
        }
      </DisplayEquation>
      <InlineText>and specifically</InlineText>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\ln(u) = \\frac{1}{u}\\frac{\\mathrm{d} u}{\\mathrm{d} x} $$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SideNoteCard>
      <CustomTypography>
        I am using the convention of {"$\\ln()$"} to express a natural logarithm
        (log base {"$e$"}), {"$\\log()$"} to express a logarithm base 10, and{" "}
        {"$\\log_{\\alpha}()$"} to express a logarithm base {"$\\alpha$"}.
      </CustomTypography>
      <CustomTypography>
        Some resources, including older textbooks and some contemporary
        mathematics software packages use {"$\\log()$"} to express the natural
        logarithm, so make sure you know which convention your resource follows.
      </CustomTypography>
    </SideNoteCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        If you have to find the derivative of a natural logarithm, it's your
        lucky day. Recall that the base of the natural logarithm is {"$e$"}, and{" "}
        {"$ln(e)=1$"}. This means that you have a fraction with the contenets of
        your natural logarithm function on the denominator, and the derivative
        of those contents on the numerator. This is often written{" "}
        {"$\\frac{\\mathrm{d} u}{u} $"}.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example with <em>ln</em>
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\ln(\\color{${sunsetYellow}}{x^3})  $$`}
          </DisplayEquation>
          <DisplayEquation>{`$$ \\frac{\\color{${sunsetYellow}}{3x^2}}{\\color{${sunsetYellow}}{x^3}} $$`}</DisplayEquation>
          <DisplayEquation>{`$$ \\frac{3}{x} $$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>

      <CustomTypography>
        In this example, we also used the{" "}
        <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink>.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example with base 10
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\log(\\color{${sunsetYellow}}{x^3})  $$`}
          </DisplayEquation>
          <DisplayEquation>{`$$ \\frac{\\color{${sunsetYellow}}{3x^2}}{\\ln(\\color{${sunsetMagenta}}{10})\\color{${sunsetYellow}}{x^3}} $$`}</DisplayEquation>
          <DisplayEquation>{`$$ \\frac{3}{\\ln(10)x} $$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>

      <CustomTypography>
        In this example, we also used the{" "}
        <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink>.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
