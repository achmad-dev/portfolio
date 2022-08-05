import SolarSystem from "./components/canvas/world-spin";
import Clock from "./components/canvas/clock";
import Description from "./components/description";
import PinBall from "./components/mini-games/ball";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1, marginLeft: "24px", width: "25%" }}>
          <SolarSystem />
          <Description
            textInput={"Hello World"}
            attribute={`Let's see my`}
            name={`Portfolio`}
            description={`this is my porfolio with time symbols`}
          />
        </div>
        <div
          style={{
            flex: 2,
            color: "white",
            margin: "auto",
            left: "35%",
            width: "50%",
            position: "absolute",
            top: "20%",
          }}
        >
          <p>Hello</p>
          <PinBall />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            width: "30%",
          }}
        >
          <div style={{ position: "absolute", left: "80%" }}>
            <Clock />
          </div>
          <p>
            <span
              style={{
                fontSize: "2em",
                color: "red",
                fontWeight: "bold",
                fontStyle: "italic",
                top: "17%",
                position: "absolute",
              }}
            >
              React
            </span>
          </p>
          <p
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              fontStyle: "italic",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "22%",
            }}
          >
            <span>Based in Indonesia</span>
            <span>I'm a Frontend Developer.</span>
          </p>
          <p style={{
            fontSize: "1.3em",
            fontFamily: 'arial',
            fontStyle: "italic",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "33%",
          }}>
            <span>
              Hey are you looking for Frontend Developer?
            </span>
            <span>
              let's have a call with me.
            </span>
          </p>
          <a style={{
            color: "white",
            position: "absolute",
            fontSize: "1.5em",
            top: "60%",
          }} href="mailto: ">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default App;
