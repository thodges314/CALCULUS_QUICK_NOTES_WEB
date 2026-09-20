import SectionHeading from "components/interface/SectionHeading";
import InlineText from "components/interface/InlineText";

import DisplayEquation from "components/interface/DisplayEquation";
import CustomLink from "components/interface/CustomLink";

import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";

import {
  DiskMethodDiscs,
  DiskMethodDiscsShifted,
  DiskMethodDrums,
  WasherMethod,
} from "interactivity/graphs/VolumeDiskwasherMethod";

import { synthSunsetMagenta } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {"$$\\pi \\int_{a}^{b}R(x)^2 dx\\;\\;$$"}
      </DisplayEquation>
      <InlineText>or</InlineText>
      <DisplayEquation>
        {"$$\\;\\;\\pi \\int_{a}^{b} \\left (  R(x)^2 - r(x)^2 \\right ) dx$$"}
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <SectionHeading>Explanation</SectionHeading>
      <CustomTypography>
        Both of these methods are used for finding volumes of solids of
        revolution. A solid of revolution is made by taking a graph of a
        function and spinning it around an axis of revolution. The disc or
        washer methods are used when it's easiest to integrate along an axis{" "}
        <em>parallel</em> to the axis of revolution.
      </CustomTypography>
      <CustomTypography>
        If you have a function integrable along the y-axis that you wish to spin
        around an axis parallel to the y-axis, then you can use the same
        methods, substituting y whenever you see x:{" "}
        {`$\\pi \\int_{a}^{b}
          R(y)^2 dx$`}{" "}
        or{" "}
        {`$\\pi \\int_{a}^{b}\\left ( R(y)^2 - r(y)^2 \\right
          ) dx$`}
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>Example of Disc Method</SectionHeading>
      <CustomTypography>
        Suppose that you started with the graph of the equation{" "}
        {`$R(x)=x^3-7x^2+14x-5$`} from {`$x=1$`} to {`$x=4$`} and rotated it
        around the x-axis. To approximate the volume, we could cut this object
        into slices, as we did when we first learned concepts of integration,
        and for each slice multiply the area of one of the faces by the
        thickness of the slice, {`$\\Delta x$`}, to get it's approximate volume.
        The sum of these volumes would be an approximation of the volume of the
        solid. In this demo, I'm using the left-hand side to find the {`$R(x)$`}{" "}
        values, but as you may recall, that's more or less arbitrary.
      </CustomTypography>
      <DiskMethodDrums />
      <CustomTypography>
        Suppose that we cut this object into an infinite number of slices, each
        with infantesimal width. Each slice would be a cylinder with a radius{" "}
        {`$R(x)$`} and thickness {`$dx$`}. As above, we can find the volume of a
        cylinder by multiplying the area of one of it's faces by it's thickness.
        The area of a slice is {`$\\pi R(x)^2$`} and the thickness is {`$dx$`},
        so the volume of each slice is {`$\\pi R(x)^2 dx$.`}
      </CustomTypography>
      <DiskMethodDiscs />
      <CustomTypography>
        To find the volume of a solid of revolution, use integration to find the
        sum of the volumes of all the slices between the endpoints{" "}
        {`$x=1$ and $x=4$:`}
      </CustomTypography>
      <DisplayEquation>
        {`$$ \\int_{1}^{4} \\pi R(x)^2 dx$$`}
        {`$$ \\pi \\int_{1}^{4} R(x)^2 dx$$`}
        {`$$ \\pi \\int_{1}^{4} \\left (  x^3 - 7x^2 + 14x -5\\right )^2 dx$$`}
        {`$$ \\pi \\int_{1}^{4} x^6 - 14x^5 + 77x^4 -206x^3 + 266x^2 -140x + 25 \\: dx$$`}
        {`$$ \\pi \\left ( \\frac{x^7}{7} - \\frac{7x^6}{3} + \\frac{77x^5}{5} -\\frac{103x^4}{2} + \\frac{266x^3}{3} - 70x^2 + 25x \\right ) \\biggr ]_1^4 $$`}
        {`$$ \\frac{1269\\pi}{78} \\approx 56.953\\cdots$$`}
      </DisplayEquation>
      <CustomTypography>
        In this example, we also used the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        , the <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Theorems/FirstFundamentalTheoremOfCalculus">
          First Fundamental Theorem of Calculus
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>Example of Disc Method: Shifted</SectionHeading>
      <CustomTypography>
        If we wanted to revolve the above example around, for example,{" "}
        {`$y=-1$`} instead of the x-axis, we would have to repeat this process,
        but adjust our {`$R(x)$`} formula by adding the additional distance
        required to get to {`$-1$`}.
      </CustomTypography>
      <DiskMethodDiscsShifted />
      <DisplayEquation>
        {`$$R(x)=f(x){\\color{${sunsetMagenta}}{+1}}$$`}
        {`$$R(x)=x^3-7x^2+14x-5{\\color{${sunsetMagenta}}{+1}}$$`}
        {`$$\\pi \\int_{1}^{4}  R(x)^2 dx$$`}
        {`$$ \\pi \\int_{1}^{4} \\left (  x^3 - 7x^2 + 14x -5 {\\color{${sunsetMagenta}}{+1}}\\right )^2 dx$$`}
        {`$$ \\frac{39\\pi}{4} $$`}
      </DisplayEquation>
      <CustomTypography>
        In this example, we also used the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        , the <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Theorems/FirstFundamentalTheoremOfCalculus">
          First Fundamental Theorem of Calculus
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <SectionHeading>Example of Washer Method</SectionHeading>
      <CustomTypography>
        The washer method is the same as the disk method, except we are dealing
        with one function nested insode of another. For example, rotate{" "}
        {`$y=x^2$`} and {`$y=\\sqrt{x}$`}, from {`$x=0$`} to {`$x=1$`} around
        the x-axis.
      </CustomTypography>
      <WasherMethod />
      <CustomTypography>
        If we were to take a slice through this, we would see two concentric
        rings. Play with the model above to get an intuitive idea of this.
      </CustomTypography>
      <CustomTypography>
        The radii of the two rings for a slice taken at a given {`$x$`}, we will
        call {`$R(x)$`} and {`$r(x)$`}, where {`$R(x)$`} is the greater radius
        and {`$r(x)$`} is the lesser radius. Here, {`$R(x)=\\sqrt{x}$`}, and{" "}
        {`$r(x)=x^2$`}.
      </CustomTypography>
      <CustomTypography>
        To calculate the volume, we are interested in the area between the two
        concentric circles. To find this area, we subtract the area of the
        smaller circle from the area of the larger circle.
        {`$$\\pi R(x)^2 - \\pi r(x)^2 $$`}
        {`$$\\pi \\left ( R(x)^2 - r(x)^2 \\right ) $$`}
      </CustomTypography>
      <CustomTypography>
        As with the disc method, we can find the volume of a slice by
        multiplying the area of the slice by it's thickness, {`$dx$`}. Using
        integration, we can sum the volumes of all of the slices between the
        endpoints, in this case, {`$x=0$`} and {`$x=1$`}:
      </CustomTypography>
      <DisplayEquation>
        {`$$\\pi \\int_{0}^{1}\\left ( R(x)^2 - r(x)^2 \\right ) dx $$`}
        {`$$\\pi \\int_{0}^{1}\\left ( (\\sqrt{x})^2 - (x^2)^2 \\right ) dx $$`}
        {`$$\\pi \\int_{0}^{1}\\left ( x - x^4 \\right ) dx $$`}
        {`$$ \\pi \\left ( \\frac{x^2}{2} - \\frac{x^5}{5}\\right ) \\biggr ]_0^1 $$`}
        {`$$ \\frac{3\\pi}{10}\\approx 0.942\\cdots $$`}
      </DisplayEquation>
      <CustomTypography>
        In this example, we also used the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        , the <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>{" "}
        and the{" "}
        <CustomLink href="/Theorems/FirstFundamentalTheoremOfCalculus">
          First Fundamental Theorem of Calculus
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
