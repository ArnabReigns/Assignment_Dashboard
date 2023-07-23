import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

const currencyFormat = (value) => `$${value}`;

const dataSet = Array.from({ length: 10 }, (_, index) => (index + 1) * 10);

const data = {
  labels: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
  datasets: [
    {
      label: "Employer",
      data: dataSet,
      backgroundColor: "#0800A3",
      borderColor: "black",
      barPercentage: 0.5,
    },
    {
      label: "Employee",
      barPercentage: 0.5,
      data: dataSet,
      borderColor: "black",
      backgroundColor: "#4935FF",
    },
    {
      label: "Total Interest",
      barPercentage: 0.5,
      data: dataSet,
      borderColor: "black",
      backgroundColor: "#85AFFF",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      min: 0, // Set the minimum value of the y-axis scale
      max: 300, // Set the maximum value of the y-axis scale
      ticks: {
        stepSize: 100, // Set the gap between labels on the y-axis
        callback: currencyFormat,
      },
      drawBorder: false,
      grid: {
        display: true,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

Chart.register({
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
});

const barChart = () => {
  return <Bar style={{ width: "100%" }} data={data} options={options} />;
};

export default barChart;
