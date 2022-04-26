import React, { useState, useEffect } from "react";
import Weathercard from "./WeatherCard";
import "./style.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Allahabad");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e35bc66250c83fd57ad78c7c38e0a3de`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed, deg } = data.wind;
      const { country, sunset, sunrise } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        deg,
        country,
        sunset,
        sunrise,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="container">
        <div className="wrap">
          <div className="name">Forecast</div>
          <div className="search">
            <input type="search" placeholder="Enter city..." id="search" className="searchTerm" autoFocus value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button className="searchButton" type="button" onClick={getWeatherInfo}>
              Search
            </button>
          </div>
        </div>

        {/* our temp card  */}
        <Weathercard {...tempInfo} />
      </div>
    </>
  );
};

export default Weather;
