import React from "react";
import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";
ReactChartkick.addAdapter(Chart);

const GraphTemperature = ({ cityTemps }) => {
  if (!cityTemps) {
    return (
      <tr>
        <td>No data found</td>
      </tr>
    );
  }

  const graphData = formatChartData(cityTemps);

  return <LineChart xtitle="Date" ytitle="Temperature" data={graphData} />;
};

function formatChartData(cityData) {
  const array = cityData.list.map(data => {
    const date = new Date(data.dt * 1000).toDateString();
    const temp = Math.round(data.temp.day);
    return [date, temp];
  });

  return array;
}

export default GraphTemperature;
