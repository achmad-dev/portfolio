import { PortfolioProvider } from "./context/context";

const App = () => {
  return (
    <PortfolioProvider>
      <div className="App">
        <h1>My portfolio</h1>
      </div>
    </PortfolioProvider>
  );
};

export default App;