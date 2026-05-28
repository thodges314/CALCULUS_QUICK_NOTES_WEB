import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import Typography from "@mui/material/Typography";
import DisplayEquation from "components/interface/DisplayEquation";
import UnitCircleGraph from "interactivity/d3Graphs/UnitCircleGraph/UnitCircleGraph";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const cosColor = hexToRgba(synthSunsetMagenta, 1);
const sinColor = hexToRgba(synthSunsetYellow, 1);

// ─── Summary table data ──────────────────────────────────────────────────────
// Uses coloured x (cosine) and y (sine) to reinforce the connection.

const Component = () => (
  <>
    {/* ── SUMMARY ─────────────────────────────────────────────────────────── */}
    <SummaryCard>
      <CustomTypography>
        The six trigonometric functions relate the angle{" "}
        {`$\\theta$`} formed by a ray from the origin to a point{" "}
        {`$({\\color{${cosColor}}{x}}, {\\color{${sinColor}}{y}})$`}{" "}
        on a circle of radius{" "}{`$r$`}:
      </CustomTypography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: 8,
        }}
      >
        {/* Left column */}
        <div>
          <DisplayEquation>
            {`$$\\sin(\\theta) = \\frac{{\\color{${sinColor}}{y}}}{r}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\cos(\\theta) = \\frac{{\\color{${cosColor}}{x}}}{r}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\tan(\\theta) = \\frac{{\\color{${sinColor}}{y}}}{{\\color{${cosColor}}{x}}}$$`}
          </DisplayEquation>
        </div>

        {/* Right column */}
        <div>
          <DisplayEquation>
            {`$$\\csc(\\theta) = \\frac{r}{{\\color{${sinColor}}{y}}}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\sec(\\theta) = \\frac{r}{{\\color{${cosColor}}{x}}}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\cot(\\theta) = \\frac{{\\color{${cosColor}}{x}}}{{\\color{${sinColor}}{y}}}$$`}
          </DisplayEquation>
        </div>
      </div>
    </SummaryCard>

    {/* ── UNIT CIRCLE ─────────────────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        The Unit Circle
      </Typography>

      <CustomTypography>
        The <em>unit circle</em> is a circle of radius {`$r = 1$`} centred at
        the origin. For any angle {`$\\theta$`} measured counterclockwise from
        the positive {`$x$`}-axis, the ray from the origin intersects the unit
        circle at the point
      </CustomTypography>

      <DisplayEquation>
        {`$$\\bigl({\\color{${cosColor}}{\\cos(\\theta)}},\\; {\\color{${sinColor}}{\\sin(\\theta)}}\\bigr)$$`}
      </DisplayEquation>

      <CustomTypography>
        Because {`$r = 1$`}, the definitions simplify to{" "}
        {`${`$\\sin(\\theta) = {\\color{${sinColor}}{y}}$`}`} and{" "}
        {`${`$\\cos(\\theta) = {\\color{${cosColor}}{x}}$`}`}.
        The diagram below shows all sixteen standard angles. Use the slider to
        highlight any angle and read off its exact cosine and sine values.
      </CustomTypography>

      <UnitCircleGraph />

      <CustomTypography>
        The coordinates shown are <em>exact</em> values at the standard angles
        (multiples of {`$30°$`} and {`$45°$`}). These are worth memorising
        because they appear constantly in calculus.
      </CustomTypography>
    </SectionCard>

    {/* ── RECIPROCAL IDENTITIES ───────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Reciprocal Identities
      </Typography>

      <CustomTypography>
        Each of the six functions is the reciprocal of one of the others:
      </CustomTypography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div>
          <DisplayEquation>
            {`$$\\sin(\\theta) = \\frac{1}{\\csc(\\theta)}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\cos(\\theta) = \\frac{1}{\\sec(\\theta)}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\tan(\\theta) = \\frac{1}{\\cot(\\theta)}$$`}
          </DisplayEquation>
        </div>

        <div>
          <DisplayEquation>
            {`$$\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\cot(\\theta) = \\frac{1}{\\tan(\\theta)}$$`}
          </DisplayEquation>
        </div>
      </div>

      <CustomTypography>
        A helpful way to remember the pairings: the reciprocal of a function
        whose name starts with a vowel ({`$\\sin$`}, {`$\\cos$`}, {`$\\tan$`}) is
        the function whose name starts with "co" plus that name, or vice versa.
        So {`$\\sin$`} ↔ {`$\\csc$`}, {`$\\cos$`} ↔ {`$\\sec$`},{" "}
        {`$\\tan$`} ↔ {`$\\cot$`}.
      </CustomTypography>
    </SectionCard>

    {/* ── QUOTIENT IDENTITIES ─────────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Quotient Identities
      </Typography>

      <CustomTypography>
        Tangent and cotangent can each be expressed as a ratio of sine and
        cosine, which follows directly from their definitions:
      </CustomTypography>

      <DisplayEquation>
        {`$$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} \\qquad \\cot(\\theta) = \\frac{\\cos(\\theta)}{\\sin(\\theta)}$$`}
      </DisplayEquation>

      <CustomTypography>
        These identities are frequently used to rewrite expressions that mix
        tangent and cotangent with sine and cosine before integrating or
        differentiating.
      </CustomTypography>
    </SectionCard>

    {/* ── PYTHAGOREAN IDENTITIES ──────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Pythagorean Identities
      </Typography>

      <CustomTypography>
        Every point on the unit circle satisfies {`$x^2 + y^2 = 1$`}. Because{" "}
        {`$x = \\cos(\\theta)$`} and {`$y = \\sin(\\theta)$`} on the unit
        circle, we immediately get the first Pythagorean identity:
      </CustomTypography>

      <DisplayEquation>
        {`$$ {\\color{${cosColor}}{\\cos^2(\\theta)}} + {\\color{${sinColor}}{\\sin^2(\\theta)}} = 1 $$`}
      </DisplayEquation>

      <CustomTypography>
        Dividing both sides by {`$\\cos^2(\\theta)$`} gives the second identity:
      </CustomTypography>

      <DisplayEquation>
        {`$$1 + \\tan^2(\\theta) = \\sec^2(\\theta)$$`}
      </DisplayEquation>

      <CustomTypography>
        Dividing both sides of the original identity by {`$\\sin^2(\\theta)$`}{" "}
        gives the third:
      </CustomTypography>

      <DisplayEquation>
        {`$$\\cot^2(\\theta) + 1 = \\csc^2(\\theta)$$`}
      </DisplayEquation>

      <CustomTypography>
        The Pythagorean identities are among the most useful tools in
        trigonometric integration. You will frequently encounter expressions like{" "}
        {`$1 - \\sin^2(\\theta)$`} or {`$\\sec^2(\\theta) - 1$`} that can be
        replaced immediately using these three identities.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
