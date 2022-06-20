import "./App.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import MainBox from "./components/MainBox/MainBox.jsx";
import SelectTheme from "./components/SelectTheme";
import { useSelector } from "react-redux";

//theming thingsss
import styled, { useTheme } from "styled-components";
function App() {
  const theme = useTheme();
  //redux grabbing the state of the colors
  const colorPallet = useSelector((state) => state.theming.value);
  //colors
  const backgroundColor = theme?.[colorPallet].backgroundColor;
  const App = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${backgroundColor};
    height: 100vh;
    margin: 0;
    gap: 20px;
    align-items: center;
    padding-top: 20px;
  `;

  return (
    <App>
      <TopBar />
      <MainBox />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Adam Tarpey</a>.
      </div>
      <SelectTheme />
    </App>
  );
}
export default App;
