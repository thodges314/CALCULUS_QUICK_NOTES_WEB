// import SummaryCard from "components/interface/SummaryCard";
import SummaryTable from "components/interface/SummaryTable";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import CustomLink from "components/interface/CustomLink";

import SectionHeading from "components/interface/SectionHeading";

const entries = [
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\sin^{-1}(u) = \\frac{1}{\\sqrt{1-u^2}}\\frac{\\mathrm{d} u}{\\mathrm{d} x}, \\;\\;|u|\\lt 1$$"
      }
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\cos^{-1}(u) = \\frac{-1}{\\sqrt{1-u^2}}\\frac{\\mathrm{d} u}{\\mathrm{d} x}, \\;\\;|u|\\lt 1$$"
      }
    </DisplayEquation>,
  ],
  [""],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\tan^{-1}(u) = \\frac{1}{1+u^2}\\frac{\\mathrm{d} u}{\\mathrm{d} x}, \\;\\;\\forall u\\in \\mathbb{R}$$"
      }
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\cot^{-1}(u) = \\frac{-1}{1+u^2}\\frac{\\mathrm{d} u}{\\mathrm{d} x}, \\;\\;\\forall u\\in \\mathbb{R}$$"
      }
    </DisplayEquation>,
  ],
  [""],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\sec^{-1}(u) = \\frac{1}{|u|\\sqrt{u^2-1}}\\frac{\\mathrm{d} u}{\\mathrm{d} x}, \\;\\; |u|\\gt 1$$"
      }
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {
        "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\csc^{-1}(u) = \\frac{-1}{|u|\\sqrt{u^2-1}}\\frac{\\mathrm{d} u}{\\mathrm{d} x}, \\;\\; |u|\\gt 1$$"
      }
    </DisplayEquation>,
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
        For these, just focus on knowing the derivatives of the inverse
        functions of Sine, Secant and Tangent.
      </CustomTypography>
      <CustomTypography>
        Memorize these in whatever way works best for you. Make sure to keep
        track of the difference between {"$1+u^2$"}, {"$1-u^2$"} and {"$u^2-1$"}{" "}
        in the denominator (which uses which).
      </CustomTypography>
      If you want to see one of these being derived, look at the page for{" "}
      <CustomLink href="/Derivatives/InverseFunctions">
        Derivatives of Inverse Functions
      </CustomLink>
      . You should be able to apply the method used there to any of these.
    </SectionCard>
  </>
);

export default Component;
