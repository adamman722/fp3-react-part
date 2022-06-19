import react, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/ThemeSlice";
import styled, { useTheme } from "styled-components";
//this is for the bar chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const MainBox = () => {
  const theme = useTheme();
  const colorPallet = useSelector((state) => state.theming.value);
  const columnColor = theme?.[colorPallet].columnColor;
  const highestColumnColor = theme?.[colorPallet].highestValueColumnColor;

  const MainBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;

    padding: 20px;
    border-radius: 10px;
    margin: auto;
    background-color: white;
  `;
  const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const data = {
    labels,
    datasets: [
      {
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          columnColor,
          columnColor,
          highestColumnColor,
          columnColor,
          columnColor,
          columnColor,
          columnColor,
        ],
        borderRadius: 3,
        borderSkipped: false,
      },
    ],
  };
  const options = {
    responsive: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
          tickLength: 5,
        },
        ticks: {
          padding: 3,
        },
      },
    },
    plugins: {
      legend: {
        position: "hidden",
      },
    },
  };
  return (
    <MainBoxContainer>
      <div>Spending - Last 7 days</div>
      <Bar options={options} data={data} height="200" />

      <div>Total this month $478.33 +2.4% from last month</div>
    </MainBoxContainer>
  );
};

export default MainBox;
