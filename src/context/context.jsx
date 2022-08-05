import React, { useState, createContext } from "react";
import useApi from "../hooks/useApi";

export const portfoliocontext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [ballFinish, setBallFinish] = useState(false);
  const api = useApi();
  return (
    <portfoliocontext.Provider value={{ ballFinish, setBallFinish, ...api }}>
      {children}
    </portfoliocontext.Provider>
  );
};
