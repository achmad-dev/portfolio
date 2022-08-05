import SolarSystem from "./components/canvas/world-spin";
import Clock from "./components/canvas/clock";
import Description from "./components/description";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginLeft: "24px" }}>
          <SolarSystem />
          <Description
            textInput={"Hello World"}
            attribute={`I'm`}
            name={`Human`}
            description={`Frontend Developer`}
          />
        </div>
        <div
          style={{
            flex: 2,
            color: "white",
            margin: "auto",
            left: '45%',
            position: 'absolute',
            top: '20%',
          }}
        >
          <p>Hello</p>
        </div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
