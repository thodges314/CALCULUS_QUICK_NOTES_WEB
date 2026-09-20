import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import SectionHeading from "components/interface/SectionHeading";
import CustomTable from "components/interface/CustomTable";
import DisplayEquation from "components/interface/DisplayEquation";
import HandKTableGraph from "interactivity/d3Graphs/HandKTableGraph";
import HandKTableGraph2D from "interactivity/d3Graphs/HandKTableGraph2D";
import HandKCircleGraph from "interactivity/d3Graphs/HandKCircleGraph";
import HandKCircleGraphShift from "interactivity/d3Graphs/HandKCircleGraphShift";
import HandKTrigChart from "interactivity/d3Graphs/HandKTrigChart";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const table1Entries = [
  [
    <DisplayEquation>{`$$ x $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -3 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 3 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ y=x^2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 9 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 9 $$`}</DisplayEquation>,
  ],
];

const table2Entries = [
  [
    <DisplayEquation>{`$$ x $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -3 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 3 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ x-2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -5 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -3 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ y=(x-2)^2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 25 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 16 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 9 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <CustomTypography>
        The graph of an equation written in terms of {"$x$"} and {"$y$"} can be
        shifted to the right by some real number {"$h$"} and up by some real
        number {"$k$"} by replacing all occurences of {"$x$"} with {"$(x-h)$"}{" "}
        and all occurrences of {"$y$"} with {"$(y-k)$"}.
      </CustomTypography>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>
        Explanation
      </SectionHeading>
      <CustomTypography>
        This idea is usually taught in a chapter on conic sections as one of
        many transformations. This is such a useful general principle in
        algebra, and I make sure that all of my students understand it as it's
        own topic. The following examples will demonstrate this principle.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example
      </SectionHeading>
      <CustomTypography>
        Shift the graph of the parabola {"$ y=x^2 $"} to the right by {"$ 2 $"}.
      </CustomTypography>
      <CustomTypography>
        According to the rule above, we need to replace the{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`} in{" "}
        {`$ y={\\color{${sunsetMagenta}} {x}}^2 $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-2)}} $`} to get{" "}
        {`$ y={\\color{${sunsetMagenta}} {(x-2)}}^2 $`}. Let's observe this
        process in tabular format. First, begin with{" "}
        {`$ y={\\color{${sunsetMagenta}} {x}}^2 $`}
      </CustomTypography>
      <div
        style={{
          maxWidth: "600px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table1Entries} sx={{ p: 0, width: "50px" }} />
      </div>
      <CustomTypography sx={{ mt: 4 }}>
        Next, replace {`$ {\\color{${sunsetMagenta}} {x}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-2)}} $`}.
      </CustomTypography>
      <div
        style={{
          maxWidth: "600px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table2Entries} sx={{ p: 0, width: "50px" }} />
      </div>
      <CustomTypography sx={{ mt: 4 }}>
        This change resulted in the output row being shifted to the right by{" "}
        {`$ {\\color{${sunsetMagenta}} {2}} $`}. y was found by squaring, not{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`}, but the number{" "}
        {`$ {\\color{${sunsetMagenta}} {2}} $`} to the left of{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`}.
      </CustomTypography>
      <CustomTypography>
        For an analogy, imagine that you are driving a car with a broken
        speedometer that always reports your speed as 10mph <em>slower</em> than
        you are driving. Consequently, relying on the speedometer you will
        always be driving 10mph <em>faster</em> than you intended to drive.
      </CustomTypography>
      <CustomTypography>
        Imagine, so that you won't be late, you set your alarm clock to display
        the time 15 minutes <em>later</em> than the current time. By doing to,
        you will hopefully wake up 15 minutes <em>earlier</em> than you need to
        (some people do things like this).
      </CustomTypography>
      <CustomTypography>
        Similar to the speedometer, which by giving you a value <em>less</em>{" "}
        than the current speed {`$ (x-10) $`} will cause you to drive 10mph{" "}
        <em>more</em> than the current speed, the parabola equation, receiving a
        value of 2 <em>less</em> than the current x value (replacing{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-2)}} $`}) will give us a graph of a
        parabola shifted <em>to the right</em> by 2.
      </CustomTypography>
      <CustomTypography>
        From the alarm clock analogy, you can probably guess what happens if you
        add a positive {`$ {\\color{${sunsetMagenta}} {h}} $`} to{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`} (which would be the same as
        subtracting a negative {`$ {\\color{${sunsetMagenta}} {h}} $`} from{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`}).
      </CustomTypography>
      <CustomTypography>
        Play with the demo below to get an intuitive feeling for shifting a
        graph left and right by using different values of{" "}
        {`$ {\\color{${sunsetMagenta}} {h}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-h)}} $`}.
      </CustomTypography>
      <HandKTableGraph />
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Another Example
      </SectionHeading>
      <CustomTypography>
        Shift the graph of the parabola {"$ y=x^2 $"} to the right by {"$ 2 $"}{" "}
        and up by {"$ 1 $"}.
      </CustomTypography>
      <CustomTypography>
        This is an expansion of the principle above. We replace{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-2)}} $`} and{" "}
        {`$ {\\color{${sunsetYellow}} {y}} $`} with{" "}
        {`$ {\\color{${sunsetYellow}} {(y-1)}} $`}.
      </CustomTypography>
      <DisplayEquation>{`$$ {\\color{${sunsetYellow}} {(y-1)}} = {\\color{${sunsetMagenta}} {(x-2)}}^2 $$`}</DisplayEquation>
      <CustomTypography>
        Fiddle with the demo below to get an idea for using both{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-h)}} $`} and{" "}
        {`$ {\\color{${sunsetYellow}} {(y-k)}} $`} to shift your graph.
      </CustomTypography>
      <HandKTableGraph2D />
      <CustomTypography>
        Before entering this into a graphing calculator, we will want to isolate
        the y on one side of the equation.
      </CustomTypography>
      <DisplayEquation>{`$$ y - 1 = (x-2)^2 $$`}</DisplayEquation>
      <DisplayEquation>{`$$ y = (x-2)^2 + 1 $$`}</DisplayEquation>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        An Example with Circles
      </SectionHeading>
      <CustomTypography>
        Write an equation for a circle with a radius {`$2$`} centered at{" "}
        {`$(1,2)$`}.
      </CustomTypography>
      <CustomTypography>
        Rather than look this up in a textbook, let's think about how to write
        an equation for a circle centered at {`$(0,0)$`}, and then use{" "}
        {`$ {\\color{${sunsetMagenta}} {h}} $`} and{" "}
        {`$ {\\color{${sunsetYellow}} {k}} $`} to shift the circle into our
        desired position.
      </CustomTypography>
      <CustomTypography>
        Let's define a circle as{" "}
        <em>
          the set of all points equidistant from a fixed point (the center).
        </em>
      </CustomTypography>
      <CustomTypography>
        If the points are a distance {`$r$`} from the center, than the radius{" "}
        {`$r$`} and the coordinates of the individual points {`$x$`} and {`$y$`}{" "}
        are all related by the equation: {`$r^2 = x^2 + y^2$`}.
      </CustomTypography>
      <HandKCircleGraph />
      <CustomTypography>
        A circle with radius {`$2$`} will have the equation {`$4 = x^2 + y^2$`}{" "}
      </CustomTypography>
      <CustomTypography>
        To shift this circle to the right by {`$1$`}, we have to replace{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-1)}} $`}. To shift the circle down by{" "}
        {`$2$`}, we have to replace {`$ {\\color{${sunsetYellow}} {y}} $`} with{" "}
        {`$ {\\color{${sunsetYellow}} {(y-(-2)) = (y+2)}} $`}.
      </CustomTypography>
      <HandKCircleGraphShift />
      <CustomTypography>
        You will have to do some algebra to isolate the y and put this equation
        into a form suitable for a graphing calculator.
      </CustomTypography>
      <DisplayEquation>{`$$4=(x-1)^2+(y+2)^2$$`}</DisplayEquation>
      <DisplayEquation>{`$$(y+2)^2 = 4 - (x-1)^2$$`}</DisplayEquation>
      <DisplayEquation>{`$$y+2 = \\pm \\sqrt{4-(x-1)^2} $$`}</DisplayEquation>
      <DisplayEquation>{`$$y =  -2 \\pm \\sqrt{4-(x-1)^2} $$`}</DisplayEquation>
      <CustomTypography>
        Then you will have to enter these as two separate functions, one for the
        positive root and one for the negative root.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>
        Example with Trigonometry
      </SectionHeading>
      <CustomTypography>
        Establish the identity{" "}
        {`$ \\cos{\\left ( \\theta - \\frac{\\pi}{2}\\right )} = \\sin{(\\theta)} $`}
        .
      </CustomTypography>
      <CustomTypography>
        You will usually see this written as{" "}
        {`$ \\cos{\\left ( \\frac{\\pi}{2} -\\theta \\right )} = \\sin{(\\theta)} $`}
        . Notice that since {`$ \\cos{(-\\theta)}=\\cos{(\\theta)}$`} (the
        Cosine function is symmetrical across the y-axis) these are equivalent.
      </CustomTypography>
      <CustomTypography>
        Play with the graphs of the Sine and Cosine functions below, and notice
        that the Cosine graph can be transformed into the sine graph by shifting
        it {`$\\frac{\\pi}{2}$`} radians to the right.
      </CustomTypography>
      <HandKTrigChart />
      <CustomTypography>
        To perform this shift, we replaced the independent variable{" "}
        {`$ {\\color{${sunsetYellow}} {\\theta}} $`} in the Cosine function with{" "}
        {`$ {\\color{${sunsetYellow}} {\\left (\\theta - \\frac{\\pi}{2} \\right )}} $`}
        .
      </CustomTypography>
      <CustomTypography>
        Although this is not a formal; proof, this should be sufficient to
        intuitively <em>prove</em> this identity to yourself.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
