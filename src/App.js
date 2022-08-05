import SolarSystem from "./components/canvas/world-spin";
import Clock from "./components/canvas/clock";
import Description from "./components/description";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginLeft: '24px' }}>
          <SolarSystem />
          <Description
            textInput={"Hello World"}
            attribute={`let's see some sign of time in universe`}
            description={`This is a description of the text input`}
          />
        </div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
