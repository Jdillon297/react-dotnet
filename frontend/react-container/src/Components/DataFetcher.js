import axios from "axios";
import { useState, useEffect } from "react";

export const DataFetcher = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:7236/WeatherForecast");
      if (!response.status === 200) {
        console.error("Something failed dummy");
      } else {
        setData(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <div>{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};
