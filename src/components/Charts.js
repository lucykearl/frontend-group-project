import React, { useEffect, useState } from "react";
import axios from "axios";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Charts = () => {
  const [historyData, setHistoryData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: "",
    datasets: [
      {
        label: "Number of exercises per session",
        data: "",
        backgroundColor: "#256d85",
      },
    ],
  });

  const getHistory = async () => {
    await axios
      .get("http://localhost:5000/session")
      .then((res) => setHistoryData(res.data));
  };

  useEffect(() => {
    getHistory();

    const date = historyData.slice(-7).map((data) => data.date);
    const exercises = historyData
      .slice(-7)
      .map((data) => data.exercises?.length);

    setChartData({
      labels: date,
      datasets: [
        {
          label: "Number of exercises per session",
          data: exercises,
          backgroundColor: "#256d85",
        },
      ],
    });
  }, [historyData]);

  return (
    <div className="graph---wrapper">
      <Chart type="bar" data={chartData} />
    </div>
  );
};

export default Charts;
