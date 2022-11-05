import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import data from "../data/history.json";

const Charts = () => {
  const [chartData, setChartData] = useState({
    labels: data.slice(0, 6).map((data) => data.date),
    datasets: [
      {
        label: "Number of exercises per session",
        data: data.map((data) => data.exercises?.length),
        backgroundColor: "#06283D",
      },
    ],
  });

  console.log(chartData);
  Chart.register(...registerables);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default Charts;
