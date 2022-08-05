import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [data, setData] = useState([]);

  // const getData = async (url) => {
  //   const response = await axios({
  //     // headers: {
  //     //   "Retry-After": "300",
  //     // },
  //     method: "get",
  //     url: url,
  //   });
  //   setData(response.data);
  //   console.log(response.data);
  // }
  // const option = {
  //   method: "GET",
  //   url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
  //   params: { lat: "35.5", lon: "-78.5" },
  //   headers: {
  //     "X-RapidAPI-Key": "c55204e7cemshbc3a5da79624700p14e083jsn85fc6de0e9d6",
  //     "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  //   },
  // };
  // const getData = async () => {
  //   // const response = await axios.request(option).then((response) => {
  //   //   setData(response.data);
  //   //   console.log(response.data);
  //   // }).catch((error) => {
  //   //   console.log(error);
  //   // }
  //   // );
  //   // const response = await axios(option);
  //   setData(response.data);
  //   console.log(response.data);
  // }
  let key2 = '0532b65c9cf14616992135956220308';
  const key = '405b8f62f32b46cb999155617220508';
  const getData = async () => {
    const response = await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=Jakarta&days=1&aqi=no&alerts=no`
      )
      .then((response) => response.data);
    setData(response);
    console.log(data);
  };
  return {
    data,
    getData,
  };
};

export default useApi;
