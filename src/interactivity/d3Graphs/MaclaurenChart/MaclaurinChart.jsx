import CanvasCard from "components/interface/CanvasCard";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CheckboxLabel from "components/interface/CheckboxLabel";
import EqnDisplay from "./EqnDisplay";

import * as d3 from "d3";
import { useRef, useEffect, useMemo } from "react";
import allValuesArray from "./maclaurenValues";
import cosValuesArray from "./cosineValues";
import { marksArray } from "../utilities";

import "./MaclaurinChart.css";

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

const MaclaurinChart = () => {
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const allValuesRef = useRef(null);
  const svgRef = useRef(null);
  const childRef = useRef(null);
  const marks = useMemo(() => marksArray(0, 11), []);
  const cosValues = useMemo(() => cosValuesArray(), []);

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
      .tickValues([
        -2 * Math.PI,
        -1 * Math.PI,
        0,
        1 * Math.PI,
        2 * Math.PI,
        3 * Math.PI,
        4 * Math.PI,
      ])
      .tickFormat((_d, i) => ["-2π", "-1π", "", "1π", "2π", "3π", "4π"][i]);
    yAxisGenerator.tickValues([-2, -1, 1, 2]).tickFormat(d3.format("d"));
    xAxisGridGenerator
      .tickValues([
        -2 * Math.PI,
        -1 * Math.PI,
        0,
        1 * Math.PI,
        2 * Math.PI,
        3 * Math.PI,
        4 * Math.PI,
      ])
      .tickFormat("")
      .tickSize(height);

    yAxisGridGenerator
      .tickValues([-2, -1, 1, 2])
      .tickFormat("")
      .tickSize(-width);

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
      .datum(cosValues)
      .classed("thick-sunset-magenta-path", true)
      .attr("d", lineRef.current);

    movingGraphRef.current = svgRef.current
      .append("path")
      .datum(allValuesRef.current[0])
      .classed("medium-sunset-yellow-path", true)
      .attr("d", lineRef.current);
  }, [cosValues]);

  const switchGraphs = (n) => {
    movingGraphRef.current
      .transition()
      .duration(750)
      .attr("d", lineRef.current(allValuesRef.current[n]));
    childRef.current.setEqn(n);
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
      <EqnDisplay ref={childRef} />
      <CanvasCard height={height} width={width}>
        <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
      </CanvasCard>
      <div className="flex flex-col">
        <ControlsCard>
          <ControlsRow>
            <div>iterations</div>
            <div>
              <CustomSlider
                onChange={(_evt, newValue) => switchGraphs(newValue)}
                min={0}
                max={11}
                step={1}
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
