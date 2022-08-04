import logo from "./logo.svg";
import SolarSystem from "./components/canvas/world-spin";
import Clock from "./components/canvas/clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <SolarSystem />
          <Clock />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
