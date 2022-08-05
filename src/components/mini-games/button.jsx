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
                style={{ color: "red", fontSize: "24px", fontFamily: "arial" }}
              >
                Hello
              </span>
              , click button to play pin ball
            </p>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#ab2eb9",
                color: "white",
                height: "50px",
                widht: "70px",
                borderRadius: "10px",
                border: "1px solid white",
              }}
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
