import "./App.css";
import TopBar from "./components/TopBar";
import SelectTheme from "./components/SelectTheme";

function App() {
  return (
    <div className="App">
      <SelectTheme />
      <TopBar />
      Spending - Last 7 days mon tue wed thu fri sat sun Total this month
      $478.33 +2.4% from last month
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
