//make component to display weather data
import React, { useEffect, useContext } from "react";
import { portfoliocontext } from "../../context/context";
// import { useEffect } from "react";

// const api = process.env.REACT_WEATHER_API_KEY

const Weather = () => {
  const { data, getData } = useContext(portfoliocontext);

  useEffect(() => {
    getData();
  }, []);
  //   useEffect(() => {
  //     getData(
  //       `https://api.openweathermap.org/data/2.5/weather?q=London&appid=a0946bfb273443295a92ce8fb963e036`
  //     );
  //   }, []);
  return (
    <>
    <div style={{ color: "white", display: 'flex', fontFamily: 'arial', fontSize: '20px' }}>
      <span style={{marginRight: '20px'}}>{data.location?.name} {data.location?.name.length > 0 ? 'weather:' : ''}</span>
      <span>{data.current?.condition?.text}</span>
    </div>
    </>
  );
};
export default Weather;
