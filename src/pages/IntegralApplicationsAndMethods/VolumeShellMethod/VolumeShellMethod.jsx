import Typography from "@mui/material/Typography";

import DisplayEquation from "components/interface/DisplayEquation";
import CustomLink from "components/interface/CustomLink";

import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";

import CustomTable from "components/interface/CustomTable";
import {
  ShellMethodShells,
  ShellMethodAccumulation,
} from "interactivity/graphs/VolumeShellMethod";

import {
  synthSunsetPink,
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetPink = hexToRgba(synthSunsetPink, 1);
const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const entries_ex_1 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v}} = {\\color{${sunsetYellow}}{-\\cos(x)}}$$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u'}} = {\\color{${sunsetMagenta}}{\\mathrm{d}x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{\\sin(x) \\mathrm{d}x}}$$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {"$$2\\pi \\int_{a}^{b} x f(x) \\mathrm{d}x\\;\\;$$"}
      </DisplayEquation>
      <Typography>or</Typography>
      <DisplayEquation>
        {"$$\\;\\;2\\pi \\int_{a}^{b} y f(y) \\mathrm{d}y$$"}
      </DisplayEquation>
    </SummaryCard>

    <SectionCard>
      <Typography variant="h6">Explanation</Typography>
      <CustomTypography>
        The shell method is used for finding the volume of a solid of
        revolution. A solid of revolution is made by taking a graph of a
        function and spinning it around an axis of revolution. The shell
        method is used when it's easiest to integrate along an axis{" "}
        <em>perpendicular</em> to the axis of revolution.
      </CustomTypography>
      <CustomTypography>
        If you have a function integrable along the y-axis that you wish to spin
        around an axis parallel to the x-axis, then you can use these same
        methods, substituting y whenever you see x:{" "}
        <span style={{ color: sunsetPink }}>
          {`$2\\pi \\int_{a}^{b} y f(y) \\mathrm{d}y$`}
        </span>
        .
      </CustomTypography>
    </SectionCard>

    <SectionCard>
      <Typography variant="h6">Example of Shell Method: Concentric Slices</Typography>
      <CustomTypography>
        Suppose that you started with the graph of the region bounded by the
        x-axis ({`$g(x)=0$`}) and {`$f(x)=\\sin(x)$`} from {`$x=0$`} to {`$x=\\pi$`} and
        rotated it around the y-axis.
      </CustomTypography>
      <CustomTypography>
        To approximate the volume of this solid, we could cut the region into
        discrete vertical strips. Rotating each strip around the y-axis creates a
        hollow, thick-walled cylindrical shell. The sum of the volumes of these
        concentric shells gives a Riemann sum approximation of the total solid
        volume. Slide the slider below to see the approximation built shell by shell!
      </CustomTypography>

      <ShellMethodShells />

      <CustomTypography>
        As we increase the number of shells, the thickness{" "}
        {`$\\Delta x$`} of each shell decreases, and the sum of their volumes
        converges to the exact volume of the solid of revolution.
      </CustomTypography>
    </SectionCard>

    <SectionCard>
      <Typography variant="h6">Example of Shell Method: Continuous Integration</Typography>
      <CustomTypography>
        Consider what would happen if you chose some {`$x$`} value, and used
        this to slice an infinitely thin cylindrical shell out of this solid.
      </CustomTypography>
      <CustomTypography>
        Play with the 3D model below. You can click Rotate Graph to see
        the solid in 3D, and drag the Unroll Shell slider to watch the cylindrical
        slice at the active {`$x$`} beautifully unwrap into a flat, rectangular sheet.
      </CustomTypography>
      <CustomTypography>
        If you removed this slice and laid it flat, it would form a rectangular prism.
        It would have a length equivalent to the circumference of a circle with radius{" "}
        {`$x$`} (which is {`$2\\pi x$`}), and a height equivalent to the value of the function{" "}
        {`$f(x)$`} at {`$x$`} (in this case, {`$\\sin(x)$`}). The thickness of this slice is the
        infinitesimal {`$\\mathrm{d}x$`}.
      </CustomTypography>
      <CustomTypography>
        If you view the model below wrapped in 3D, and click Unroll Shell, you will see a representation of one of these shells, laid flat.  Notice it has a height of {`$f(x)$`}, and a width of {`$2\\pi x$`}.  As you move the slider to the right, the shell gets wider.
      </CustomTypography>

      <ShellMethodAccumulation />

      <CustomTypography>
        Therefore, the volume of this single slice is {`$2\\pi \\cdot x \\cdot f(x) \\cdot \\mathrm{d}x$`}, which
        in this specific case is {`$2\\pi x \\sin(x) \\mathrm{d}x$`}.
      </CustomTypography>
      <CustomTypography>
        To find the volume of the entire solid of revolution, we use integration to add up the volumes
        of all these cylindrical shells from {`$x=0$`} to {`$x=\\pi$`}:
      </CustomTypography>

      <DisplayEquation>
        {`$$2\\pi \\int_{a}^{b} x f(x) \\mathrm{d}x = 2\\pi \\int_{0}^{\\pi} x \\sin(x) \\mathrm{d}x$$`}
      </DisplayEquation>

      <CustomTypography>
        To perform this integration, we can use{" "}
        <CustomLink href="/Integrals/IntegrationByParts">Integration by Parts</CustomLink>{" "}
        with {`$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{x}}$`} and {`$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{\\sin(x) \\mathrm{d}x}}$`}. Let's set up our parts:
      </CustomTypography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_ex_1} />
      </div>

      <DisplayEquation>
        {`$$ \\int {\\color{${sunsetMagenta}}{u}} \\, {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetMagenta}}{u}} \\, {\\color{${sunsetYellow}}{v}} - \\int {\\color{${sunsetYellow}}{v}} \\, {\\color{${sunsetMagenta}}{u'}} $$`}
      </DisplayEquation>

      <CustomTypography>
        To perform the integration, we substitute our parts into the integration by parts formula:
      </CustomTypography>

      <DisplayEquation>
        {`$$2\\pi \\int_{0}^{\\pi} {\\color{${sunsetMagenta}}{x}} \\, {\\color{${sunsetYellow}}{\\sin(x) \\mathrm{d}x}} = 2\\pi \\left( {\\color{${sunsetMagenta}}{x}}{\\color{${sunsetYellow}}{(-\\cos(x))}} \\biggr]_0^\\pi - \\int_{0}^{\\pi} {\\color{${sunsetYellow}}{-\\cos(x)}} \\, {\\color{${sunsetMagenta}}{\\mathrm{d}x}} \\right)$$`}
        {`$$= 2\\pi \\left( -x\\cos(x) \\biggr]_0^\\pi + \\int_{0}^{\\pi} \\cos(x) \\mathrm{d}x \\right)$$`}
        {`$$= 2\\pi \\left( -x\\cos(x) + \\sin(x) \\biggr]_0^\\pi \\right)$$`}
        {`$$= 2\\pi \\left( \\left( -\\pi\\cos(\\pi) + \\sin(\\pi) \\right) - \\left( -0\\cos(0) + \\sin(0) \\right) \\right)$$`}
        {`$$= 2\\pi \\left( (\\pi + 0) - (0 + 0) \\right)$$`}
        {`$$= 2\\pi^2 \\approx 19.740\\cdots$$`}
      </DisplayEquation>

      <CustomTypography>
        In this example, we also made use of the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">Constant Multiple Rule</CustomLink>, the{" "}
        <CustomLink href="/Theorems/FirstFundamentalTheoremOfCalculus">
          First Fundamental Theorem of Calculus
        </CustomLink>
        , and standard trigonometric evaluations.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
