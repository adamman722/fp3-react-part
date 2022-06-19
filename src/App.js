import "./App.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import MainBox from "./components/MainBox/MainBox.jsx";
import SelectTheme from "./components/SelectTheme";
import UnstyledSelectSimple from "./components/UnstyledSelectTheme";

function App() {
  return (
    <div className="App">
      <SelectTheme />
      <TopBar />
      <MainBox />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}
export default App;
