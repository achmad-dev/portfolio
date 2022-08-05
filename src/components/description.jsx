import React from "react";

const Description = ({ textInput, attribute, description }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: 'column' , color: 'white', fontFamily: 'arial', fontSize: '24px'}}>
        <h3>{textInput}</h3>
        <>{attribute}</>
        <>{description}</>
      </div>
    </>
  );
};

export default Description;