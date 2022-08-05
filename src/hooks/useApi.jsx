import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    const response = await axios({
      method: "get",
      url: url,
    });
    setData(response.data);
  }

  return {
    data,
    getData,
  }
}

export default useApi;