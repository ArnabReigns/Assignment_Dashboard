import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularBarChart = ({ value }) => {
  const doughnutLabel = {
    id: "doughnutLabel",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = "bold 0.8rem Poppins";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${value}%`, xCoor, yCoor);
    },
  };

  const data = {
    labels: ["Progress"],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ["#2DD7AD", "#D3F7EE"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Doughnut data={data} options={chartOptions} plugins={[doughnutLabel]} />
  );
};

export default CircularBarChart;
