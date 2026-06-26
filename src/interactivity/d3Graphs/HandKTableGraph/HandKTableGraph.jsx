import { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import CustomTable from "components/interface/CustomTable";
import DisplayEquation from "components/interface/DisplayEquation";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CanvasCard from "components/interface/CanvasCard";
import { hexToRgba } from "utils/utils";
import { marksArray } from "../utilities";
import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import parabolaValuesArray from "./parabolaValuesArray";
import EqnDisplay from "./HandKTableEqnPanel";

import { FormGroup } from "@mui/material";

import "./HandKTableGraph.css";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

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

const numbersXMinusH = d3.range(-10, 10 + 1);

const indexToNumbersScale = d3.scaleLinear().domain([0, 20]).range([-10, 10]);

// rows
// row 1
const row1 = [
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <DisplayEquation>{`$ x $`}</DisplayEquation>
  </div>,
];
for (let i = -5; i <= 5; i++) {
  row1.push(
    <div key={i} className="tableNumber" style={{ color: sunsetYellow }}>
      {i}
    </div>,
  );
}
// row  2
const row2 = [
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <DisplayEquation>{`$ (x-h) $`}</DisplayEquation>
  </div>,
];
for (let i = -5; i <= 5; i++) {
  row2.push(
    <div key={i} className="tableNumber" style={{ color: sunsetYellow }} />,
  );
}
// row  3
const row3 = [
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <DisplayEquation>{`$ (x-h)^2 $`}</DisplayEquation>
  </div>,
];
for (let i = -5; i <= 5; i++) {
  row3.push(
    <div key={i} className="tableNumber" style={{ color: sunsetYellow }} />,
  );
}

const HandKTableGraph = () => {
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);
  const marks = useMemo(() => marksArray(-5, 5), []); // protect from regen when parent rerenders
  const numbersXMinusHRef = useRef(null);
  const numbersXMinusHSqrRef = useRef(null);
  const placeForNumbersXMinusHRef = useRef(null);
  const placeForNumbersXMinusHSqrRef = useRef(null);
  const eqnDisplayRef = useRef(null);

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
      .attr("transform", `translate(${x_scale(2) - width / 2}, 0)`);

    movingGraphRef.current = svgRef.current
      .append("path")
      .datum(parabolaValues)
      .classed("medium-sunset-yellow-path", true)
      .attr("d", lineRef.current);

    numbersXMinusHRef.current = d3
      .select(placeForNumbersXMinusHRef.current)
      .selectAll("div")
      .data(numbersXMinusH)
      .enter()
      .append("div")
      .text((d) => d)
      .classed("numbers-x-minus-h", true)
      .each((_d, i, nodes) =>
        d3
          .select(nodes[i])
          .style("left", `${50 * (indexToNumbersScale(i) + 5)}px`),
      );

    numbersXMinusHSqrRef.current = d3
      .select(placeForNumbersXMinusHSqrRef.current)
      .selectAll("div")
      .data(numbersXMinusH)
      .enter()
      .append("div")
      .text((d) => d ** 2)
      .classed("numbers-x-minus-h-squared", true)
      .each((_d, i, nodes) =>
        d3
          .select(nodes[i])
          .style("left", `${50 * (indexToNumbersScale(i) + 5)}px`),
      );
  });

  const shiftGraph = (h) => {
    movingGraphRef.current
      .transition()
      .duration(750)
      .attr("transform", `translate(${x_scale(h) - width / 2},0)`);

    numbersXMinusHRef.current.each((_d, i, nodes) => {
      d3.select(nodes[i])
        .transition()
        .duration(750)
        .style("left", `${50 * (indexToNumbersScale(i) + 5 + h)}px`);
    });

    numbersXMinusHSqrRef.current.each((_d, i, nodes) => {
      d3.select(nodes[i])
        .transition()
        .duration(750)
        .style("left", `${50 * (indexToNumbersScale(i) + 5 + h)}px`);
    });
  };

  const updateValue = (h) => {
    shiftGraph(h);
    eqnDisplayRef.current.setEqn(h + 5);
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
      <FormGroup>
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
                  onChange={(_evt, newValue) => updateValue(newValue)}
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
      </FormGroup>
      <div
        style={{
          width: "700px",
          marginBottom: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
        }}
      >
        <CustomTable
          sx={{ p: 0, width: "50px" }}
          entries={[row1, row2, row3]}
          headerCol
        />
        <div
          className="placeForNumbers"
          ref={placeForNumbersXMinusHRef}
          style={{ top: 51, left: 148 }}
        />
        <div
          className="placeForNumbers"
          ref={placeForNumbersXMinusHSqrRef}
          style={{ top: 103, left: 148 }}
        />
      </div>
    </>
  );
};

export default HandKTableGraph;
