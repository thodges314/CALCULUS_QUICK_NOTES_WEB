import CanvasCard from "components/interface/CanvasCard";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CheckboxLabel from "components/interface/CheckboxLabel";
import EqnDisplay from "./EqnDisplay";

import * as d3 from "d3";
import { useRef, useEffect, useMemo } from "react";
import allValuesArray from "./maclaurenValues";
import cosValuesArray from "./cosineValues";
import sinValuesArray from "./sineValues";
import DisplayEquation from "components/interface/DisplayEquation";
import { trigTicks } from "../utilities";

import "./HandKTrigChart.css";

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 3 * Math.PI;
const y_distance = x_distance / goldenRatio;

const x_scale = d3
  .scaleLinear()
  .domain([-2 * Math.PI, 4 * Math.PI])
  .range([0, width]);

const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 2, y_distance / 2])
  .range([height, 0]);

const d_scale = d3
  .scaleLinear()
  .domain([0, 6 * Math.PI])
  .range([0, width]);

const y_ticks = y_scale
  .ticks()
  .filter(Number.isInteger)
  .filter((d) => !!d);

const x_ticks = trigTicks(x_scale);

const marks = [
  {
    value: 0,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>{"$$0$$"}</DisplayEquation>
    ),
  },
  {
    value: Math.PI / 12,
  },
  {
    value: (2 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{\\pi}{6}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (3 * Math.PI) / 12,
  },
  {
    value: (4 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{\\pi}{3}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (5 * Math.PI) / 12,
  },
  {
    value: (6 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{\\pi}{2}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (7 * Math.PI) / 12,
  },
  {
    value: (8 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{2\\pi}{3}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (9 * Math.PI) / 12,
  },
  {
    value: (10 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{5\\pi}{6}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (11 * Math.PI) / 12,
  },
  {
    value: (12 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>{"$$\\pi$$"}</DisplayEquation>
    ),
  },
  {
    value: (13 * Math.PI) / 12,
  },
  {
    value: (14 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{7\\pi}{6}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (15 * Math.PI) / 12,
  },
  {
    value: (16 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{4\\pi}{3}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (17 * Math.PI) / 12,
  },
  {
    value: (18 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{3\\pi}{2}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (19 * Math.PI) / 12,
  },
  {
    value: (20 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{5\\pi}{3}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (21 * Math.PI) / 12,
  },
  {
    value: (22 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$\\frac{11\\pi}{6}$$"}
      </DisplayEquation>
    ),
  },
  {
    value: (23 * Math.PI) / 12,
  },
  {
    value: (24 * Math.PI) / 12,
    label: (
      <DisplayEquation style={{ marginTop: -18 }}>
        {"$$2\\pi$$"}
      </DisplayEquation>
    ),
  },
];

const MaclaurinChart = () => {
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const allValuesRef = useRef(null);
  const svgRef = useRef(null);
  const eqnDisplayRef = useRef(null);
  const hLocationRef = useRef(0);

  const cosValues = useMemo(() => cosValuesArray(), []);
  const sinValues = useMemo(() => sinValuesArray(), []);

  // static portion
  useEffect(() => {
    allValuesRef.current = allValuesArray();
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    const xAxisGridGenerator = d3.axisBottom(x_scale);
    const yAxisGridGenerator = d3.axisLeft(y_scale);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]))
      .curve(d3.curveCardinal);
    xAxisGenerator
      .tickValues(x_ticks.ticks)
      .tickFormat((_d, i) => x_ticks.formattedTicks[i]);
    yAxisGenerator.tickValues(y_ticks).tickFormat(d3.format("d"));
    xAxisGridGenerator
      .tickValues(x_ticks.ticks)
      .tickFormat("")
      .tickSize(height);

    yAxisGridGenerator.tickValues(y_ticks).tickFormat("").tickSize(-width);

    svgRef.current = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    svgRef.current
      .append("g")
      .classed("grid-lines", true)
      .call(yAxisGridGenerator);

    svgRef.current
      .append("g")
      .classed("orange-grid-lines", true)
      .call(xAxisGridGenerator);

    svgRef.current
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height / 2})`)
      .call(xAxisGenerator);

    svgRef.current
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    svgRef.current
      .append("path")
      .datum(sinValues)
      .classed("thick-sunset-magenta-path", true)
      .attr("d", lineRef.current);

    movingGraphRef.current = svgRef.current
      .append("path")
      .datum(cosValues)
      .classed("medium-sunset-yellow-path", true)
      .attr("d", lineRef.current);
  }, [cosValues, sinValues]);

  const shiftGraph = () => {
    movingGraphRef.current
      .transition()
      .duration(150)
      .attr("transform", `translate(${d_scale(hLocationRef.current)},0)`);
  };

  const updateHValue = (h) => {
    hLocationRef.current = h;
    shiftGraph();
    eqnDisplayRef.current.setEqn(h);
  };

  return (
    <div
      style={{
        width: width,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
      }}
    >
      <EqnDisplay ref={eqnDisplayRef} />
      <CanvasCard height={height} width={width}>
        <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
      </CanvasCard>
      <div className="flex flex-col">
        <ControlsCard>
          <ControlsRow>
            <div>h</div>
            <div>
              <CustomSlider
                onChange={(_evt, newValue) => updateHValue(newValue)}
                min={0}
                max={2 * Math.PI}
                step={Math.PI / 12}
                size="small"
                marks={marks}
              />
            </div>
          </ControlsRow>
        </ControlsCard>
      </div>
    </div>
  );
};

export default MaclaurinChart;
