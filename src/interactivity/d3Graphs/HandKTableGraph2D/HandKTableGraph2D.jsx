import { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CanvasCard from "components/interface/CanvasCard";
import { marksArray } from "../utilities";
import parabolaValuesArray from "./parabolaValuesArray";
import EqnDisplay from "./HandKTableEqnPanel2D";

import CheckboxLabel from "components/interface/CheckboxLabel";

import "./HandKTableGraph2D.css";

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 11;
const y_distance = x_distance / goldenRatio;

const x_scale = d3.scaleLinear().domain([-5.5, 5.5]).range([0, width]);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 5, (y_distance * 4) / 5])
  .range([height, 0]);

const x_ticks = x_scale
  .ticks()
  .filter(Number.isInteger)
  .filter((d) => !!d);
const y_ticks = y_scale
  .ticks()
  .filter(Number.isInteger)
  .filter((d) => !!d);

const HandKTableGraph = () => {
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);
  const marks = useMemo(() => marksArray(-5, 5), []);
  const eqnDisplayRef = useRef(null);
  const hLocationRef = useRef(0);
  const kLocationRef = useRef(0);

  useEffect(() => {
    const parabolaValues = parabolaValuesArray();
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    const xAxisGridGenerator = d3.axisBottom(x_scale);
    const yAxisGridGenerator = d3.axisLeft(y_scale);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]))
      .curve(d3.curveMonotoneX);
    xAxisGenerator.tickValues(x_ticks).tickFormat(d3.format("d"));
    yAxisGenerator.tickValues(y_ticks).tickFormat(d3.format("d"));
    xAxisGridGenerator.tickValues(x_ticks).tickFormat("").tickSize(height);

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
      .classed("grid-lines", true)
      .call(xAxisGridGenerator);

    svgRef.current
      .append("g")
      .classed("axis", true)
      .attr("transform", `translate(0,${(height * 4) / 5})`)
      .call(xAxisGenerator);

    svgRef.current
      .append("g")
      .classed("axis", true)
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    svgRef.current
      .append("path")
      .datum(parabolaValues)
      .classed("thick-sunset-magenta-path", true)
      .attr("d", lineRef.current)
      .attr(
        "transform",
        `translate(${x_scale(2) - width / 2},${y_scale(1) - (height * 4) / 5})`
      );

    movingGraphRef.current = svgRef.current
      .append("path")
      .datum(parabolaValues)
      .classed("medium-sunset-yellow-path", true)
      .attr("d", lineRef.current);
  });

  const shiftGraph = () => {
    movingGraphRef.current
      .transition()
      .duration(750)
      .attr(
        "transform",
        `translate(${x_scale(hLocationRef.current) - width / 2},${
          y_scale(kLocationRef.current) - (height * 4) / 5
        })`
      );
  };

  const updateHValue = (h) => {
    hLocationRef.current = h;
    shiftGraph();
    eqnDisplayRef.current.setEqnH(h + 5);
  };

  const updateKValue = (k) => {
    kLocationRef.current = k;
    shiftGraph();
    eqnDisplayRef.current.setEqnK(k + 5);
  };

  return (
    <>
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
      </div>
      <div className="flex flex-col">
        <div
          style={{
            width: "860px",
            marginBottom: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ControlsCard>
            <ControlsRow>
              <div>h</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateHValue(newValue)}
                  min={-5}
                  max={5}
                  step={1}
                  defaultValue={0}
                  size="small"
                  marks={marks}
                />
              </div>
            </ControlsRow>
            <ControlsRow>
              <div>k</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateKValue(newValue)}
                  min={-5}
                  max={5}
                  step={1}
                  defaultValue={0}
                  size="small"
                  marks={marks}
                />
              </div>
            </ControlsRow>
          </ControlsCard>
        </div>
      </div>
    </>
  );
};

export default HandKTableGraph;
