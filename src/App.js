import { PortfolioProvider } from "./context/context";
import { NavBar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { PinBallGame } from "./components/mini-games/pinBall";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <PortfolioProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <PinBallGame />
      </div>
    </PortfolioProvider>
  );
};

export default App;