import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
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

//apparently you need this for the react crap to work
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const theme = useTheme();
  //redux grabbing the state of the colors
  const colorPallet = useSelector((state) => state.theming.value);
  //colors
  const columnColor = theme?.[colorPallet].columnColor;
  const highestColumnColor = theme?.[colorPallet].highestValueColumnColor;

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
  return <Bar options={options} data={data} height="200" />;
}

export default Chart;
