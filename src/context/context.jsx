import React, { useState, createContext } from "react";

export const portfoliocontext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [ballFinish, setBallFinish] = useState(false);
  const [ballStart, setBallStart] = useState(false);
  return (
    <portfoliocontext.Provider
      value={{ ballFinish, setBallFinish, ballStart, setBallStart }}
    >
      {children}
    </portfoliocontext.Provider>
  );
};
