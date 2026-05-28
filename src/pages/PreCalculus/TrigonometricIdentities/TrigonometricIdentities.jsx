import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import Typography from "@mui/material/Typography";
import DisplayEquation, {InlineEquation} from "components/interface/DisplayEquation";
import UnitCircleGraph from "interactivity/d3Graphs/UnitCircleGraph/UnitCircleGraph";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetOrange,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const cosColor = hexToRgba(synthSunsetMagenta, 1);
const sinColor = hexToRgba(synthSunsetYellow, 1);
const pmColor  = hexToRgba(synthSunsetOrange, 1);

// LaTeX color helpers — inserted into template literals via ${} substitution
const U  = `{\\color{${cosColor}}{u}}`;
const V  = `{\\color{${sinColor}}{v}}`;
const PM = `{\\color{${pmColor}}{\\pm}}`;
const MP = `{\\color{${pmColor}}{\\mp}}`;

const rColor = "#ff6060"; // r / hypotenuse color

// Right-triangle KaTeX helpers
const kX   = `{\\color{${cosColor}}{x}}`;
const kY   = `{\\color{${sinColor}}{y}}`;
const kR   = `{\\color{${rColor}}{r}}`;
const kOpp = `{\\color{${sinColor}}{\\textit{opposite}}}`;
const kHyp = `{\\color{${rColor}}{\\textit{hypotenuse}}}`;
const kAdj = `{\\color{${cosColor}}{\\textit{adjacent}}}`;

// ─── Summary table data ──────────────────────────────────────────────────────
// Uses coloured x (cosine) and y (sine) to reinforce the connection.

const Component = () => (
  <>
    {/* ── SUMMARY ─────────────────────────────────────────────────────────── */}
    <SummaryCard>
      <Typography variant="h6" component="div" style={{ fontStyle: "italic", width: "100%", marginBottom: 8 }}>
        Definitions:
      </Typography>

      {/* ── Diagrams ──────────────────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "32px", width: "100%", flexWrap: "wrap", marginBottom: 8 }}>

        {/* Circle diagram */}
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: "visible" }} aria-hidden="true">
          <line x1="18" y1="100" x2="182" y2="100" stroke="#666" strokeWidth="1" />
          <line x1="100" y1="18" x2="100" y2="182" stroke="#666" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#666" strokeWidth="1.5" />
          {/* x dashed */}
          <line x1="100" y1="100" x2="156" y2="100" stroke={cosColor} strokeWidth="1.5" strokeDasharray="6,3" />
          {/* y dashed */}
          <line x1="156" y1="58" x2="156" y2="100" stroke={sinColor} strokeWidth="1.5" strokeDasharray="6,3" />
          {/* radius r */}
          <line x1="100" y1="100" x2="156" y2="58" stroke={rColor} strokeWidth="2" />
          {/* θ arc */}
          <path d="M 120 100 A 20 20 0 0 0 116 88" fill="none" stroke="#999" strokeWidth="1" />
          <text x="120" y="74" fill={rColor} fontStyle="italic" fontSize="16">r</text>
          <text x="122" y="116" fill={cosColor} fontStyle="italic" fontSize="16">x</text>
          <text x="161" y="84" fill={sinColor} fontStyle="italic" fontSize="16">y</text>
          <text x="108" y="97" fill="#bbb" fontSize="13">θ</text>
          <text x="4" y="196" fill="#888" fontSize="12" fontStyle="italic">x²+y²=r²</text>
        </svg>

        {/* Right triangle diagram */}
        <svg width="220" height="190" viewBox="0 0 220 190" style={{ overflow: "visible" }} aria-hidden="true">
          {/* triangle sides */}
          <line x1="25" y1="165" x2="195" y2="165" stroke="#666" strokeWidth="1.5" />
          <line x1="195" y1="30" x2="195" y2="165" stroke={sinColor} strokeWidth="1.5" />
          <line x1="25" y1="165" x2="195" y2="30" stroke={rColor} strokeWidth="1.5" />
          {/* right-angle box */}
          <polyline points="185,165 185,155 195,155" fill="none" stroke="#888" strokeWidth="1.5" />
          {/* θ arc */}
          <path d="M 50 165 A 25 25 0 0 0 45 150" fill="none" stroke="#999" strokeWidth="1" />
          {/* hypotenuse label along diagonal */}
          <text x="105" y="85" fill={rColor} fontStyle="italic" fontSize="14" textAnchor="middle" transform="rotate(-38.5, 105, 85)">hypotenuse</text>
          {/* opposite label on right side */}
          <text x="212" y="97" fill={sinColor} fontStyle="italic" fontSize="14" textAnchor="middle" transform="rotate(-90, 212, 97)">opposite</text>
          {/* adjacent label on bottom */}
          <text x="110" y="180" fill={cosColor} fontStyle="italic" fontSize="14" textAnchor="middle">adjacent</text>
          <text x="43" y="158" fill="#bbb" fontSize="13">θ</text>
        </svg>
      </div>

      {/* ── Six functions: x/y/r form AND opp/adj/hyp form ─────────────── */}
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%", flexWrap: "wrap", gap: "8px" }}>
        <div>
          <DisplayEquation>{`$$\\sin(\\theta) = \\frac{${kY}}{${kR}} = \\frac{${kOpp}}{${kHyp}}$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\cos(\\theta) = \\frac{${kX}}{${kR}} = \\frac{${kAdj}}{${kHyp}}$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\tan(\\theta) = \\frac{${kY}}{${kX}} = \\frac{${kOpp}}{${kAdj}}$$`}</DisplayEquation>
        </div>
        <div>
          <DisplayEquation>{`$$\\sec(\\theta) = \\frac{${kR}}{${kX}} = \\frac{${kHyp}}{${kAdj}}$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\csc(\\theta) = \\frac{${kR}}{${kY}} = \\frac{${kHyp}}{${kOpp}}$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\cot(\\theta) = \\frac{${kX}}{${kY}} = \\frac{${kAdj}}{${kOpp}}$$`}</DisplayEquation>
        </div>
      </div>

      <CustomTypography>
        While the formal definitions of Trigonometric Functions are more closely
        related to the unit circle definitions, the right triangle paradigm can be
        useful when trying to think through how to find a solution to particular
        problems.
      </CustomTypography>
    </SummaryCard>

    {/* ── UNIT CIRCLE ─────────────────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        The Unit Circle
      </Typography>

      <UnitCircleGraph />

      <CustomTypography>
        On a unit circle the{" "}
        {`$({\\color{${cosColor}}{x}}, {\\color{${sinColor}}{y}})$`}{" "}
        coordinates of the intersection of a ray from the origin at a given
        angle with a horizontal ray directed along the positive x-axis
        correspond with the{" "}
        <em style={{ color: cosColor }}>cosine</em> and{" "}
        <em style={{ color: sinColor }}>sine</em>{" "}
        values of that same angle. For example,{" "}
        {`$\\cos(30°) = \\frac{\\sqrt{3}}{2}$`} and{" "}
        {`$\\sin\\!\\left(\\frac{7\\pi}{6}\\right) = \\frac{-1}{2}$`}.
      </CustomTypography>
    </SectionCard>

    {/* ── RECIPROCAL IDENTITIES ───────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Reciprocal Identities
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Left column: sin, cos, tan */}
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

        {/* Crossing-lines SVG — right col is reordered sec/csc/cot so lines cross */}
        <svg
          viewBox="0 0 100 190"
          preserveAspectRatio="none"
          height="190"
          style={{ flex: "0 0 120px", overflow: "visible", marginTop: 4 }}
          aria-hidden="true"
        >
          {/* sin ↔ csc  (left-row-1 → right-row-2, diagonal down) */}
          <line x1="0" y1="31"  x2="100" y2="94"
            stroke="#93c8c4" strokeWidth="1.5" strokeOpacity="0.8" vectorEffect="non-scaling-stroke" />
          {/* cos ↔ sec  (left-row-2 → right-row-1, diagonal up) */}
          <line x1="0" y1="94"  x2="100" y2="31"
            stroke="#93c8c4" strokeWidth="1.5" strokeOpacity="0.8" vectorEffect="non-scaling-stroke" />
          {/* tan ↔ cot  (left-row-3 → right-row-3, horizontal) */}
          <line x1="0" y1="157" x2="100" y2="157"
            stroke="#93c8c4" strokeWidth="1.5" strokeOpacity="0.8" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Right column: sec first, csc second — swapped so the X lines up */}
        <div>
          <DisplayEquation>
            {`$$\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$\\cot(\\theta) = \\frac{1}{\\tan(\\theta)}$$`}
          </DisplayEquation>
        </div>
      </div>

    </SectionCard>

    {/* ── QUOTIENT IDENTITIES ─────────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Quotient Identities
      </Typography>

      <DisplayEquation>
        {`$$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} \\qquad \\cot(\\theta) = \\frac{\\cos(\\theta)}{\\sin(\\theta)}$$`}
      </DisplayEquation>

    </SectionCard>

    {/* ── PYTHAGOREAN IDENTITIES ──────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Pythagorean Identities
      </Typography>

      <DisplayEquation>
        {`$$ {\\color{${sinColor}}{\\sin^2(\\theta)}} + {\\color{${cosColor}}{\\cos^2(\\theta)}} = 1 $$`}
      </DisplayEquation>

      <div style={{ display: "flex", justifyContent: "center", gap: "48px", width: "100%", flexWrap: "wrap" }}>
        <DisplayEquation>{`$$1 + \\tan^2(\\theta) = \\sec^2(\\theta)$$`}</DisplayEquation>
        <DisplayEquation>{`$$1 + \\cot^2(\\theta) = \\csc^2(\\theta)$$`}</DisplayEquation>
      </div>

      <CustomTypography>
        The Pythagorean identity is one of the most useful identities used in
        manipulating trigonometric expressions. Once you know it in it's primary
        form, {`$\\sin^2(\\theta)+\\cos^2(\\theta)=1$`}, you can find it's other
        two forms by dividing each side of the equation by{" "}
        {`$\\cos^2(\\theta)$`} or {`$\\sin^2(\\theta)$`}.
      </CustomTypography>
    </SectionCard>


    {/* ── COFUNCTION IDENTITIES ──────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Cofunction Identities
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", flexWrap: "wrap" }}>
        <div>
          <DisplayEquation>{`$$\\sin\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\csc\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sec(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\tan\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot(\\theta)$$`}</DisplayEquation>
        </div>
        <div>
          <DisplayEquation>{`$$\\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\sec\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\csc(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\cot\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\tan(\\theta)$$`}</DisplayEquation>
        </div>
      </div>
    </SectionCard>

    {/* ── REDUCTION FORMULAS ────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Reduction Formulas
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", flexWrap: "wrap" }}>
        <div>
          <DisplayEquation>{`$$\\sin(-\\theta) = -\\sin(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\cos(-\\theta) = \\cos(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\tan(-\\theta) = -\\tan(\\theta)$$`}</DisplayEquation>
        </div>
        <div>
          <DisplayEquation>{`$$\\sec(-\\theta) = \\sec(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\csc(-\\theta) = -\\csc(\\theta)$$`}</DisplayEquation>
          <DisplayEquation>{`$$\\cot(-\\theta) = -\\cot(\\theta)$$`}</DisplayEquation>
        </div>
      </div>
    </SectionCard>

    {/* ── SUM OR DIFFERENCE FORMULAS ────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Sum or Difference Formulas
      </Typography>
      <DisplayEquation>{`$$\\sin(${U} ${PM} ${V}) = \\sin(${U})\\cos(${V}) ${PM} \\cos(${U})\\sin(${V})$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\cos(${U} ${PM} ${V}) = \\cos(${U})\\cos(${V}) ${MP} \\sin(${U})\\sin(${V})$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\tan(${U} ${PM} ${V}) = \\frac{\\tan(${U}) ${PM} \\tan(${V})}{1 ${MP} \\tan(${U})\\tan(${V})}$$`}</DisplayEquation>
      <CustomTypography>
        Pay careful attention to the <InlineEquation>{`$${PM}$`}</InlineEquation> and <InlineEquation>{`$${MP}$`}</InlineEquation> signs.
      </CustomTypography>
    </SectionCard>

    {/* ── DOUBLE ANGLE FORMULAS ────────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%" style={{ color: pmColor }}>
        Double Angle Formulas
      </Typography>
      <DisplayEquation>{`$$ {\\color{${pmColor}}{\\sin(2u) = 2\\sin(u)\\cos(u)}} $$`}</DisplayEquation>
      <DisplayEquation>
        {`$$ {\\color{${pmColor}}{\\begin{aligned}\\cos(2u) &= \\cos^2(u) - \\sin^2(u) \\\\ &= 2\\cos^2(u) - 1 \\\\ &= 1 - 2\\sin^2(u)\\end{aligned}}} $$`}
      </DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${pmColor}}{\\tan(2u) = \\frac{2\\tan(u)}{1 - \\tan^2(u)}}} $$`}</DisplayEquation>
    </SectionCard>

    {/* ── POWER-REDUCING FORMULAS ─────────────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%" style={{ color: pmColor }}>
        Power-Reducing Formulas
      </Typography>
      <DisplayEquation>{`$$ {\\color{${pmColor}}{\\sin^2(u) = \\frac{1 - \\cos(2u)}{2}}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${pmColor}}{\\cos^2(u) = \\frac{1 + \\cos(2u)}{2}}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${pmColor}}{\\tan^2(u) = \\frac{1 - \\cos(2u)}{1 + \\cos(2u)}}} $$`}</DisplayEquation>
    </SectionCard>

    {/* ── NOTE: CALCULUS RELEVANCE ─────────────────────────────────────────── */}
    <SideNoteCard>
      <CustomTypography>
        The double angle and power-reducing formulas are highlighted in orange
        because you may not have seen much of them outside of calculus, but
        you will use them constantly in trigonometric integration.
        The power-reducing formulas are especially useful for integrating
        even powers of sine and cosine.
      </CustomTypography>
    </SideNoteCard>

    {/* ── SUM-TO-PRODUCT FORMULAS ───────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Sum-to-Product Formulas
      </Typography>
      <DisplayEquation>{`$$\\sin(${U}) + \\sin(${V}) = 2\\sin\\!\\left(\\frac{${U}+${V}}{2}\\right)\\cos\\!\\left(\\frac{${U}-${V}}{2}\\right)$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\sin(${U}) - \\sin(${V}) = 2\\cos\\!\\left(\\frac{${U}+${V}}{2}\\right)\\sin\\!\\left(\\frac{${U}-${V}}{2}\\right)$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\cos(${U}) + \\cos(${V}) = 2\\cos\\!\\left(\\frac{${U}+${V}}{2}\\right)\\cos\\!\\left(\\frac{${U}-${V}}{2}\\right)$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\cos(${U}) - \\cos(${V}) = -2\\sin\\!\\left(\\frac{${U}+${V}}{2}\\right)\\sin\\!\\left(\\frac{${U}-${V}}{2}\\right)$$`}</DisplayEquation>
    </SectionCard>

    {/* ── PRODUCT-TO-SUM FORMULAS ───────────────────────────────────── */}
    <SectionCard>
      <Typography variant="h6" width="100%">
        Product-to-Sum Formulas
      </Typography>
      <DisplayEquation>{`$$\\sin(${U})\\sin(${V}) = \\frac{\\cos(${U}-${V}) - \\cos(${U}+${V})}{2}$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\cos(${U})\\cos(${V}) = \\frac{\\cos(${U}-${V}) + \\cos(${U}+${V})}{2}$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\sin(${U})\\cos(${V}) = \\frac{\\sin(${U}+${V}) + \\sin(${U}-${V})}{2}$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\cos(${U})\\sin(${V}) = \\frac{\\sin(${U}+${V}) - \\sin(${U}-${V})}{2}$$`}</DisplayEquation>
    </SectionCard>
  </>
);

export default Component;
