import React, { useContext } from "react";
import { portfoliocontext } from "../../context/context";

const Button = ({ text }) => {
  const { setBallFinish, setBallStart, ballStart } =
    useContext(portfoliocontext);
  return (
    <>
      {ballStart === false && (
        <div>
          <div>
            <p>
              <span
                style={{ color: "red", fontSize: "24px" }}
              >
                Hello
              </span>
              , click button to play pin ball
            </p>
          </div>
          <div>
            <button
              className="start-game"
              onClick={() => {
                setBallFinish(false);
                setBallStart(true);
              }}
            >
              {text}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
