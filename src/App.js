import { PortfolioProvider } from "./context/context";
import { NavBar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <PortfolioProvider>
      <div className="App">
        <NavBar />
        <Banner />
      </div>
    </PortfolioProvider>
  );
};

export default App;