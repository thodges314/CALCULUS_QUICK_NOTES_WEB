import { useRef, useEffect } from "react";
import * as d3 from "d3";
import CanvasCard from "components/interface/CanvasCard";
import CustomSlider from "components/interface/CustomSlider";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import DisplayEquation from "components/interface/DisplayEquation";
import { FormGroup } from "@mui/material";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetOrange,
  synthSunsetPink,
  synthCyberLightBlue,
  synthCyberPaleBlue,
  themePurple,
} from "interactivity/resources/constants/colors";

import "./UnitCircleGraph.css";

// ─── Standard Unit Circle Angles ───────────────────────────────────────────

const sqrt2 = Math.sqrt(2);
const sqrt3 = Math.sqrt(3);

const STANDARD_ANGLES = [
  { deg: 0,   radLabel: "0",      radVal: 0,                cos:  1,       sin:  0,       cosLabel: "1",       sinLabel: "0",     cosLaTeX: "1",                       sinLaTeX: "0" },
  { deg: 30,  radLabel: "π/6",    radVal: Math.PI / 6,      cos:  sqrt3/2, sin:  1/2,     cosLabel: "√3/2",    sinLabel: "1/2",   cosLaTeX: "\\frac{\\sqrt{3}}{2}",    sinLaTeX: "\\frac{1}{2}" },
  { deg: 45,  radLabel: "π/4",    radVal: Math.PI / 4,      cos:  sqrt2/2, sin:  sqrt2/2, cosLabel: "√2/2",    sinLabel: "√2/2",  cosLaTeX: "\\frac{\\sqrt{2}}{2}",    sinLaTeX: "\\frac{\\sqrt{2}}{2}" },
  { deg: 60,  radLabel: "π/3",    radVal: Math.PI / 3,      cos:  1/2,     sin:  sqrt3/2, cosLabel: "1/2",     sinLabel: "√3/2",  cosLaTeX: "\\frac{1}{2}",            sinLaTeX: "\\frac{\\sqrt{3}}{2}" },
  { deg: 90,  radLabel: "π/2",    radVal: Math.PI / 2,      cos:  0,       sin:  1,       cosLabel: "0",       sinLabel: "1",     cosLaTeX: "0",                       sinLaTeX: "1" },
  { deg: 120, radLabel: "2π/3",   radVal: 2 * Math.PI / 3,  cos: -1/2,     sin:  sqrt3/2, cosLabel: "-1/2",    sinLabel: "√3/2",  cosLaTeX: "-\\frac{1}{2}",           sinLaTeX: "\\frac{\\sqrt{3}}{2}" },
  { deg: 135, radLabel: "3π/4",   radVal: 3 * Math.PI / 4,  cos: -sqrt2/2, sin:  sqrt2/2, cosLabel: "-√2/2",   sinLabel: "√2/2",  cosLaTeX: "-\\frac{\\sqrt{2}}{2}",   sinLaTeX: "\\frac{\\sqrt{2}}{2}" },
  { deg: 150, radLabel: "5π/6",   radVal: 5 * Math.PI / 6,  cos: -sqrt3/2, sin:  1/2,     cosLabel: "-√3/2",   sinLabel: "1/2",   cosLaTeX: "-\\frac{\\sqrt{3}}{2}",   sinLaTeX: "\\frac{1}{2}" },
  { deg: 180, radLabel: "π",      radVal: Math.PI,           cos: -1,       sin:  0,       cosLabel: "-1",      sinLabel: "0",     cosLaTeX: "-1",                      sinLaTeX: "0" },
  { deg: 210, radLabel: "7π/6",   radVal: 7 * Math.PI / 6,  cos: -sqrt3/2, sin: -1/2,     cosLabel: "-√3/2",   sinLabel: "-1/2",  cosLaTeX: "-\\frac{\\sqrt{3}}{2}",   sinLaTeX: "-\\frac{1}{2}" },
  { deg: 225, radLabel: "5π/4",   radVal: 5 * Math.PI / 4,  cos: -sqrt2/2, sin: -sqrt2/2, cosLabel: "-√2/2",   sinLabel: "-√2/2", cosLaTeX: "-\\frac{\\sqrt{2}}{2}",   sinLaTeX: "-\\frac{\\sqrt{2}}{2}" },
  { deg: 240, radLabel: "4π/3",   radVal: 4 * Math.PI / 3,  cos: -1/2,     sin: -sqrt3/2, cosLabel: "-1/2",    sinLabel: "-√3/2", cosLaTeX: "-\\frac{1}{2}",           sinLaTeX: "-\\frac{\\sqrt{3}}{2}" },
  { deg: 270, radLabel: "3π/2",   radVal: 3 * Math.PI / 2,  cos:  0,       sin: -1,       cosLabel: "0",       sinLabel: "-1",    cosLaTeX: "0",                       sinLaTeX: "-1" },
  { deg: 300, radLabel: "5π/3",   radVal: 5 * Math.PI / 3,  cos:  1/2,     sin: -sqrt3/2, cosLabel: "1/2",     sinLabel: "-√3/2", cosLaTeX: "\\frac{1}{2}",            sinLaTeX: "-\\frac{\\sqrt{3}}{2}" },
  { deg: 315, radLabel: "7π/4",   radVal: 7 * Math.PI / 4,  cos:  sqrt2/2, sin: -sqrt2/2, cosLabel: "√2/2",    sinLabel: "-√2/2", cosLaTeX: "\\frac{\\sqrt{2}}{2}",    sinLaTeX: "-\\frac{\\sqrt{2}}{2}" },
  { deg: 330, radLabel: "11π/6",  radVal: 11 * Math.PI / 6, cos:  sqrt3/2, sin: -1/2,     cosLabel: "√3/2",    sinLabel: "-1/2",  cosLaTeX: "\\frac{\\sqrt{3}}{2}",    sinLaTeX: "-\\frac{1}{2}" },
  { deg: 360, radLabel: "2π",     radVal: 2 * Math.PI,      cos:  1,       sin:  0,       cosLabel: "1",       sinLabel: "0",     cosLaTeX: "1",                       sinLaTeX: "0" },
];

// ─── Canvas / Scale Constants ───────────────────────────────────────────────

const SIZE = 540;
const CENTER = SIZE / 2;            // 270
const MATH_EXTENT = 1.82;           // half-domain in math units
const SCALE = CENTER / MATH_EXTENT; // ~148 px per math unit
const CIRCLE_R_PX = SCALE;          // unit circle radius in pixels
const LABEL_R = 1.30;               // label radius in math units

// Convert math coordinates → SVG pixels (y is inverted in SVG)
const toX = (mx) => CENTER + mx * SCALE;
const toY = (my) => CENTER - my * SCALE;

// ─── Color Constants ────────────────────────────────────────────────────────

const COS_COLOR      = hexToRgba(synthSunsetMagenta, 1);
const SIN_COLOR      = hexToRgba(synthSunsetYellow, 1);
const RAD_COLOR      = hexToRgba(synthSunsetOrange, 1);
const DOT_COLOR      = hexToRgba(synthSunsetPink, 1);
const CIRC_COLOR     = hexToRgba(synthCyberLightBlue, 1); // eslint-disable-line no-unused-vars
const PALE_COLOR     = hexToRgba(synthCyberPaleBlue, 1);  // eslint-disable-line no-unused-vars
const HAIRLINE_COLOR = hexToRgba(themePurple, 1);

// ─── Label positioning helpers ──────────────────────────────────────────────

const getTextAnchor = (deg) => {
  if (deg <= 15 || deg >= 345)    return "start";
  if (deg > 15  && deg < 85)      return "start";
  if (deg >= 85 && deg <= 95)     return "middle";
  if (deg > 95  && deg < 175)     return "end";
  if (deg >= 175 && deg <= 185)   return "end";
  if (deg > 185 && deg < 265)     return "end";
  if (deg >= 265 && deg <= 275)   return "middle";
  return "start"; // 275–345
};

// HTML overlay horizontal alignment matching SVG text-anchor
const anchorToTransform = (anchor) => {
  if (anchor === "end")    return "translateX(-100%)";
  if (anchor === "middle") return "translateX(-50%)";
  return "translateX(0)";
};

// ─── Slider marks ───────────────────────────────────────────────────────────

const LABELED_INDICES = new Set([0, 4, 8, 12, 16]);
const SLIDER_MARKS = STANDARD_ANGLES.map((angle, idx) => ({
  value: idx,
  label: LABELED_INDICES.has(idx) ? `${angle.deg}°` : undefined,
}));

// ─── Per-angle coordinate overlay fine-tuning ───────────────────────────────
// Base position: (lx + xShift, ly - 18 + yShift)
// where lx/ly derive from LABEL_R (same anchor point as degree/radian labels).
// Adjust individual entries to nudge labels without changing the layout logic.
// Angles in order: 0° 30° 45° 60° 90° 120° 135° 150° 180° 210° 225° 240° 270° 300° 315° 330° 360°
const COORD_SHIFTS = [
  { xShift:  -20, yShift: 0 }, // 0°
  { xShift:  -20, yShift: -8 }, // 30°
  { xShift:  0, yShift: 0 }, // 45°
  { xShift:  0, yShift: 0 }, // 60°
  { xShift:  0, yShift: 0 }, // 90°
  { xShift:  0, yShift: 0 }, // 120°
  { xShift:  0, yShift: 0 }, // 135°
  { xShift:  0, yShift: 0 }, // 150°
  { xShift:  20, yShift: 0 }, // 180°
  { xShift:  0, yShift: 0 }, // 210°
  { xShift:  0, yShift: 0 }, // 225°
  { xShift:  0, yShift: 0 }, // 240°
  { xShift:  0, yShift: 0 }, // 270°
  { xShift:  0, yShift: 0 }, // 300°
  { xShift:  0, yShift: 0 }, // 315°
  { xShift:  -18, yShift: -10 }, // 330°
  { xShift: -20, yShift: 0 }, // 360°
];

// ─── Component ─────────────────────────────────────────────────────────────

const UnitCircleGraph = () => {
  const svgRef         = useRef(null);
  const initializedRef = useRef(false);

  // Mutable D3 element refs
  const radialRef    = useRef(null);
  const cosLineRef   = useRef(null);
  const sinLineRef   = useRef(null);
  const activeDotRef = useRef(null);

  // Array ref for coordinate label overlay divs
  const coordLabelRefs = useRef([]);

  // DOM display refs (info panel)
  const thetaRef = useRef(null);
  const coordRef = useRef(null);
  const cosRef   = useRef(null);
  const sinRef   = useRef(null);
  const tanRef   = useRef(null);

  useEffect(() => {
    // Guard against double-invoke in React strict mode
    if (initializedRef.current) return;
    initializedRef.current = true;

    const svg = d3.select(svgRef.current)
      .attr("width", SIZE)
      .attr("height", SIZE);

    // ── Axes ──────────────────────────────────────────────────────────────
    svg.append("line")
      .attr("x1", 0).attr("y1", CENTER)
      .attr("x2", SIZE).attr("y2", CENTER)
      .classed("uc-axis", true);

    svg.append("line")
      .attr("x1", CENTER).attr("y1", 0)
      .attr("x2", CENTER).attr("y2", SIZE)
      .classed("uc-axis", true);

    // ── Unit circle ───────────────────────────────────────────────────────
    svg.append("circle")
      .attr("cx", CENTER).attr("cy", CENTER)
      .attr("r", CIRCLE_R_PX)
      .classed("uc-circle", true);

    // ── Hairlines from origin to each standard angle point ────────────────
    STANDARD_ANGLES.forEach((angle) => {
      svg.append("line")
        .attr("x1", CENTER).attr("y1", CENTER)
        .attr("x2", toX(angle.cos)).attr("y2", toY(angle.sin))
        .attr("stroke", HAIRLINE_COLOR)
        .attr("stroke-width", "0.75")
        .attr("stroke-opacity", "0.45");
    });

    // ── Axis labels (±1) ─────────────────────────────────────────────────
    [
      { t: "1",  x:  1, y:  0, dx:  6, dy: -8, a: "start" },
      { t: "−1", x: -1, y:  0, dx: -6, dy: -8, a: "end" },
      { t: "1",  x:  0, y:  1, dx:  7, dy:  4, a: "start" },
      { t: "−1", x:  0, y: -1, dx:  7, dy: -2, a: "start" },
    ].forEach(({ t, x, y, dx, dy, a }) => {
      svg.append("text")
        .attr("x", toX(x) + dx)
        .attr("y", toY(y) + dy)
        .attr("text-anchor", a)
        .classed("uc-axis-label", true)
        .text(t);
    });

    // ── Standard angle dots, degree labels & radian labels ─────────────────
    STANDARD_ANGLES.forEach((angle) => {
      const px  = toX(angle.cos);
      const py  = toY(angle.sin);
      const lx  = toX(LABEL_R * angle.cos);
      const ly  = toY(LABEL_R * angle.sin);
      const anchor = getTextAnchor(angle.deg);

      // Static dot
      svg.append("circle")
        .attr("cx", px).attr("cy", py).attr("r", 3.5)
        .classed("uc-dot", true);

      // Degree label (SVG text)
      svg.append("text")
        .attr("x", lx).attr("y", ly - 6)
        .attr("text-anchor", anchor)
        .classed("uc-deg-label", true)
        .text(`${angle.deg}°`);

      // Radian label (SVG text)
      svg.append("text")
        .attr("x", lx).attr("y", ly + 10)
        .attr("text-anchor", anchor)
        .classed("uc-rad-label", true)
        .text(angle.radLabel);
    });

    // ── Position coordinate label overlays ──────────────────────────────
    // Base top = ly - 18 (just below radian label). Tune via COORD_SHIFTS.
    STANDARD_ANGLES.forEach((angle, i) => {
      const el = coordLabelRefs.current[i];
      if (!el) return;
      const { xShift, yShift } = COORD_SHIFTS[i];
      const lx     = toX((LABEL_R - 0.2) * angle.cos) + xShift;
      const ly     = toY((LABEL_R - 0.2) * angle.sin) -18 + yShift;
      const anchor = getTextAnchor(angle.deg);
      d3.select(el)
        .style("left",      lx + "px")
        .style("top",       ly + "px")
        .style("transform", anchorToTransform(anchor));
    });

    // ── Active angle elements (drawn on top) ──────────────────────────────
    const a0 = STANDARD_ANGLES[0];

    cosLineRef.current = svg.append("line")
      .attr("x1", CENTER).attr("y1", CENTER)
      .attr("x2", toX(a0.cos)).attr("y2", CENTER)
      .attr("stroke", COS_COLOR)
      .classed("uc-thick-line", true);

    sinLineRef.current = svg.append("line")
      .attr("x1", toX(a0.cos)).attr("y1", CENTER)
      .attr("x2", toX(a0.cos)).attr("y2", toY(a0.sin))
      .attr("stroke", SIN_COLOR)
      .classed("uc-thick-line", true);

    radialRef.current = svg.append("line")
      .attr("x1", CENTER).attr("y1", CENTER)
      .attr("x2", toX(a0.cos)).attr("y2", toY(a0.sin))
      .attr("stroke", RAD_COLOR)
      .classed("uc-thick-line", true);

    activeDotRef.current = svg.append("circle")
      .attr("cx", toX(a0.cos)).attr("cy", toY(a0.sin))
      .attr("r", 7)
      .attr("fill", DOT_COLOR)
      .attr("stroke", "none");
  });

  // ── Imperative update on slider change ───────────────────────────────────

  const updateAngle = (idx) => {
    const angle = STANDARD_ANGLES[idx];
    const px = toX(angle.cos);
    const py = toY(angle.sin);

    radialRef.current
      .transition().duration(0)
      .attr("x2", px).attr("y2", py);

    cosLineRef.current
      .transition().duration(0)
      .attr("x2", px);

    sinLineRef.current
      .transition().duration(0)
      .attr("x1", px).attr("y1", CENTER)
      .attr("x2", px).attr("y2", py);

    activeDotRef.current
      .transition().duration(0)
      .attr("cx", px).attr("cy", py);

    // Update info panel
    if (thetaRef.current)
      thetaRef.current.textContent = `${angle.deg}° = ${angle.radLabel}`;
    if (coordRef.current)
      coordRef.current.textContent = `(${angle.cosLabel}, ${angle.sinLabel})`;
    if (cosRef.current)
      cosRef.current.textContent = angle.cosLabel;
    if (sinRef.current)
      sinRef.current.textContent = angle.sinLabel;
    if (tanRef.current) {
      if (Math.abs(angle.cos) < 1e-9) {
        tanRef.current.textContent = "undefined";
      } else {
        tanRef.current.textContent = `${angle.sinLabel} / ${angle.cosLabel}`;
      }
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Info panel */}
      <div style={{ width: SIZE, marginLeft: "auto", marginRight: "auto" }}>
        <div className="uc-info-row">
          <span className="uc-info-label">θ =&nbsp;</span>
          <span ref={thetaRef} className="uc-info-value">0° = 0</span>
          <span className="uc-info-sep">|</span>
          <span className="uc-info-label">Point =&nbsp;</span>
          <span ref={coordRef} className="uc-info-value">(1, 0)</span>
        </div>
        <div className="uc-info-row" style={{ marginBottom: 6 }}>
          <span className="uc-info-label" style={{ color: COS_COLOR }}>cos(θ) =&nbsp;</span>
          <span ref={cosRef} className="uc-info-value" style={{ color: COS_COLOR }}>1</span>
          <span className="uc-info-sep">|</span>
          <span className="uc-info-label" style={{ color: SIN_COLOR }}>sin(θ) =&nbsp;</span>
          <span ref={sinRef} className="uc-info-value" style={{ color: SIN_COLOR }}>0</span>
          <span className="uc-info-sep">|</span>
          <span className="uc-info-label">tan(θ) =&nbsp;</span>
          <span ref={tanRef} className="uc-info-value">0 / 1</span>
        </div>
      </div>

      {/* Canvas — position:relative wrapper lets overlay divs be positioned
          relative to the top-left corner of the SVG */}
      <div style={{ width: SIZE, marginLeft: "auto", marginRight: "auto", marginBottom: 10 }}>
        <CanvasCard height={SIZE} width={SIZE}>
          <div style={{ position: "relative" }}>
            <svg ref={svgRef} fill="none" />

            {/* Coordinate labels as KaTeX overlays */}
            {STANDARD_ANGLES.map((angle, i) => (
              <div
                key={angle.deg}
                style={{ position: "absolute" }}
                ref={(el) => { coordLabelRefs.current[i] = el; }}
              >
                <DisplayEquation style={{ fontSize: "0.68rem", lineHeight: 1 }}>
                  {`$$(\\color{${COS_COLOR}}{${angle.cosLaTeX}},\\; \\color{${SIN_COLOR}}{${angle.sinLaTeX}})$$`}
                </DisplayEquation>
              </div>
            ))}
          </div>
        </CanvasCard>
      </div>

      {/* Slider */}
      <FormGroup>
        <div
          style={{
            width: SIZE + 60,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 10,
          }}
        >
          <ControlsCard>
            <ControlsRow>
              <div>θ</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateAngle(newValue)}
                  min={0}
                  max={16}
                  step={1}
                  defaultValue={0}
                  size="small"
                  marks={SLIDER_MARKS}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(v) => `${STANDARD_ANGLES[v].deg}°`}
                />
              </div>
            </ControlsRow>
          </ControlsCard>
        </div>
      </FormGroup>
    </>
  );
};

export default UnitCircleGraph;
