import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import CustomTable from "components/interface/CustomTable";
import DisplayEquation from "components/interface/DisplayEquation";
import SectionHeading from "components/interface/SectionHeading";
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
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u = \\sin(x)}}$$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{\\frac{\\mathrm{d} u}{\\mathrm{d} x} = \\cos(x)}}$$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} u^n = nu^{n-1}\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        You will see the power rule quite a lot. If some differentiable function{" "}
        {"$u$"} is raised to a power {"$n$"}, then to take the derivative, bring
        the {"$n$"} value down in front of the function, and decreate the
        exponent value by {"$1$"}. Then, multiply the result by the derivative
        of the differentiable function, as per the{" "}
        <CustomLink href="/Derivatives/ChainRule">Chain Rule</CustomLink>.
      </CustomTypography>
      <CustomTypography>
        In the cases where your differentiable function {"$u$"} is your variable
        of differentiation ({"$x$"}) then you can skip the{" "}
        <CustomLink href="/Derivatives/ChainRule">Chain Rule</CustomLink> step
        because {"$\\frac{\\mathrm{d} x}{\\mathrm{d} x}=1$"}.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <DisplayEquation>
        {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} {\\color{${sunsetMagenta}}{x}}^{\\color{${sunsetYellow}}{3}} = {\\color{${sunsetYellow}}{3}}{\\color{${sunsetMagenta}}{x}}^{\\color{${sunsetYellow}}{3-1}} = 3x^2$$`}
      </DisplayEquation>
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} {\\color{${sunsetMagenta}}{\\sin}}^{\\color{${sunsetYellow}}{2}}{\\color{${sunsetMagenta}}{(x)}} $$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ {\\color{${sunsetYellow}}{2}}{\\color{${sunsetMagenta}}{\\sin}}^{\\color{${sunsetYellow}}{2-1}}{\\color{${sunsetMagenta}}{(x)}}*{\\color{${sunsetMagenta}}{\\cos(x)}} $$`}
          </DisplayEquation>
          <DisplayEquation>{`$$ 2\\sin(x)\\cos(x)$$`}</DisplayEquation>
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
