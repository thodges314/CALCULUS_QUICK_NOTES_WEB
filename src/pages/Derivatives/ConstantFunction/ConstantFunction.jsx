import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import ConstantFunctionGraph from "interactivity/d3Graphs/ConstantFunctionGraph";
import SectionHeading from "components/interface/SectionHeading";

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{`$$ \\frac{\\mathrm{d}}{\\mathrm{d}x} \\alpha = 0$$`}</DisplayEquation>
      <CustomTypography>where {"$\\alpha$"} is any constant.</CustomTypography>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        This is intuitive. The graph of {`$y=\\alpha$`} will be a horizontal
        line, and will have a slope of 0 everywhere.
      </CustomTypography>
    </SectionCard>
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
          <DisplayEquation>{`$$y=4$$`}</DisplayEquation>
          <DisplayEquation>{`$$ \\frac{\\mathrm{d}y}{\\mathrm{d}x}  = 0$$`}</DisplayEquation>
          <CustomTypography>The slope is 0 everywhere.</CustomTypography>
        </div>
        <div>
          <ConstantFunctionGraph />
        </div>
      </div>
    </SectionCard>
  </>
);

export default Component;
