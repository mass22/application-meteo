import React from "react";
import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";
ReactChartkick.addAdapter(Chart);

const GraphTemperature = ({ cityTemps }) => {
  const graphData = formatChartData(cityTemps);
  return <LineChart xtitle="Date" ytitle="Temperature" data={graphData} />;
};

function formatChartData(cityData) {
  const dataToArray = cityData.list.map(data => {
    const date = new Date(data.dt * 1000).toDateString();
    const temp = Math.round(data.temp.day);
    return [date, temp];
  });

  return dataToArray;
}

export default GraphTemperature;
