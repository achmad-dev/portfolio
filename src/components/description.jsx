import React from "react";

const Description = ({ textInput, attribute, name, description }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: 'column' , color: 'white', fontFamily: 'arial', fontSize: '24px'}}>
        <h3>{textInput}</h3>
        <div>{attribute} <span style={{fontSize: '40px', color: 'red'}}>{name}</span></div>
        <div>{description}</div>
      </div>
    </>
  );
};

export default Description;