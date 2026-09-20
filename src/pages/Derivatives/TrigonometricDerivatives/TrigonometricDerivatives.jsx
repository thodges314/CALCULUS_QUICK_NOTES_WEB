// import SummaryCard from "components/interface/SummaryCard";
import SummaryTable from "components/interface/SummaryTable";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import CustomLink from "components/interface/CustomLink";
import CustomTable from "components/interface/CustomTable";

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
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\sin(u)=\\cos(u)\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
      }
    </DisplayEquation>,
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\sec(u)=\\sec(u)\\tan(u)\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
      }
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\cos(u)=-\\sin(u)\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
      }
    </DisplayEquation>,
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\csc(u)=-\\csc(u)\\cot(u)\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
      }
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\tan(u)=\\sec^2(u)\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
      }
    </DisplayEquation>,
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\cot(u)=-\\csc^2(u)\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
      }
    </DisplayEquation>,
  ],
];

const exampleEntries = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u=\\sin(x)}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v=\\cos(x)}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u^\\prime=\\cos(x)}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v^\\prime=-\\sin(x)}} $$`}</DisplayEquation>,
  ],
];

const exampleEntries2 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u = \\cos(x)}}$$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u^\\prime = -\\sin(x)}}$$`}</DisplayEquation>,
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
        Once you know the derivatives of Sine and Cosine, you can find the other
        derivatives using trig identities and the{" "}
        <CustomLink href="/Derivatives/QuotientRule">Quotient Rule</CustomLink>.
        While I don't recommend this strategy for tests on the material, it may
        someday prove useful in an emergency.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <CustomTypography>
        Find the derivative of the Tangent function using Sine and Cosine:
      </CustomTypography>
      <div>
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
              {"$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\tan(u)$$"}
            </DisplayEquation>
            <DisplayEquation>
              {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\frac{\\color{${sunsetMagenta}}{\\sin(x)}}{{\\color{${sunsetYellow}}{\\cos(u)}}}$$`}
            </DisplayEquation>
            <DisplayEquation>
              {`$$ \\frac{\\color{${sunsetMagenta}}{\\cos(u)}\\color{${sunsetYellow}}{\\cos(u)}-\\left(\\color{${sunsetYellow}}{-\\sin(u)}\\color{${sunsetMagenta}}{\\sin(u)}\\right)}{\\left(\\color{${sunsetYellow}}{\\cos(x)}\\right)^2} $$`}
            </DisplayEquation>
            <DisplayEquation>{`$$\\frac{\\cos^2(x)+\\sin^2(x)}{\\cos^2(x)}$$`}</DisplayEquation>
            <DisplayEquation>{`$$\\frac{1}{\\cos^2(x)}$$`}</DisplayEquation>
            <DisplayEquation>{`$$\\sec^2(x)$$`}</DisplayEquation>
          </div>
          <CustomTable entries={exampleEntries} />
        </div>
        <CustomTypography>
          In this example, we also used the{" "}
          <CustomLink href="/Derivatives/QuotientRule">
            Quotient Rule
          </CustomLink>{" "}
          and{" "}
          <CustomLink href="/PreCalculus/TrigonometricIdentities">
            Trigonometric Identities
          </CustomLink>{" "}
          (including the Pythagorean Identity).
        </CustomTypography>
      </div>
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
        Example
      </SectionHeading>
      <CustomTypography>
        Find the derivative of the Secant function using Cosine:
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
          <DisplayEquation>
            {"$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\sec(x)$$"}
          </DisplayEquation>
          <DisplayEquation>
            {"$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\frac{1}{\\cos(x)} $$"}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\color{${sunsetMagenta}}{\\left(\\cos(x)\\right)} ^{\\color{${sunsetYellow}}{-1}}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\color{${sunsetYellow}}{-1}\\color{${sunsetMagenta}}{\\left(\\cos(x)\\right)} ^{\\color{${sunsetYellow}}{-2}} \\color{${sunsetMagenta}}{\\left ( -\\sin(x)\\right ) }$$`}
          </DisplayEquation>
          <DisplayEquation>
            {"$$\\frac{\\sin(x)}{\\cos^2(x)}$$"}
          </DisplayEquation>
          <DisplayEquation>
            {"$$\\frac{1}{\\cos(x)} * \\frac{\\sin(x)}{\\cos(x)}$$"}
          </DisplayEquation>
          <DisplayEquation>{"$$\\sec(x)*\\tan(x)$$"}</DisplayEquation>
        </div>
        <CustomTable entries={exampleEntries2} />
      </div>
      <CustomTypography>
        The key bit with the colored text, we use the{" "}
        <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink> with
        the <CustomLink href="/Derivatives/ChainRule">Chain Rule</CustomLink>{" "}
        implementation. Review that page if you are lost on that step.
      </CustomTypography>
      <CustomTypography>
        Notice that we <em>could</em> have left this as{" "}
        {"$\\frac{\\sin(x)}{\\cos^2(x)}$"}, but using{" "}
        <CustomLink href="/PreCalculus/TrigonometricIdentities">
          Trigonometric Identities
        </CustomLink>
        , we got the form in the table above.
      </CustomTypography>
      <CustomTypography>
        In this example, we also used the{" "}
        <CustomLink href="/Derivatives/PowerRule">Power Rule</CustomLink>, the{" "}
        <CustomLink href="/Derivatives/ChainRule">Chain Rule</CustomLink> and{" "}
        <CustomLink href="/PreCalculus/TrigonometricIdentities">
          Trigonometric Identies
        </CustomLink>{" "}
        (including the Pythagorean Identity).
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
