import React from "react";

const Description = ({ textInput, attribute }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: 'column'}}>
        <h3>{textInput}</h3>
        <p>{attribute}</p>
      </div>
    </>
  );
};

export default Description;