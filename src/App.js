import "./App.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import MainBox from "./components/MainBox/MainBox.jsx";
import SelectTheme from "./components/SelectTheme";
import UnstyledSelectSimple from "./components/UnstyledSelectTheme";
//theming thingsss
import styled, { useTheme } from "styled-components";
function App() {
  const App = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  `;

  return (
    <App>
      <SelectTheme />
      <TopBar />
      <MainBox />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Adam Tarpey</a>.
      </div>
    </App>
  );
}
export default App;
