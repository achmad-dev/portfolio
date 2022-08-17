import SolarSystem from "./components/canvas/world-spin";
import Clock from "./components/canvas/clock";
import Description from "./components/description";
import Button from "./components/mini-games/button.jsx";
import PinBall from "./components/mini-games/ball";
import { PortfolioProvider } from "./context/context";
//import Weather from "./components/weather/weather";

//[todo] add skill pages
//[todo] rapihin text on description
//[todo] pages lurus kebawah
//[code] add code js to text with syntax highlighting
//hi i'm alfazari i'm ffrontend developer
//[todo] add weather

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, marginLeft: "24px", width: "25%" }}>
            <SolarSystem />
            <Description
              textInput={"Hi"}
              attribute={`I'm`}
              name={`Achmad`}
              description={`this is my porfolio website`}
            />
            <Button text={'Start Game'} />
            <PinBall />
            <div
              style={{
                top: "80%",
              }}
            >
              {/* <Weather /> */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              width: "30%",
            }}
          >
            <div >
              <Clock />
            </div>
            <p>
              <span
                style={{
                  fontSize: "2em",
                  color: "red",
                  fontWeight: "bold",
                  fontStyle: "italic",
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
                top: "22%",
              }}
            >
              <span>Based in Indonesia</span>
              <span>I'm a Frontend Developer.</span>
            </p>
            <p
              style={{
                fontSize: "1.3em",
                fontFamily: "arial",
                fontStyle: "italic",
                display: "flex",
                flexDirection: "column",
                top: "33%",
              }}
            >
              <span>Hey are you looking for Frontend Developer?</span>
              <span>let's have a call with me.</span>
            </p>
            <a
              style={{
                color: "white",
                fontSize: "1.5em",
                top: "60%",
              }}
              href="mailto: "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </PortfolioProvider>
  );
}

export default App;
