import React, { useEffect } from "react";
const Weathercard = ({ temp, humidity, pressure, weathermood, name, speed, deg, sunrise, sunset }) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // converting the seconds into time
  let sunriseSec = sunrise;
  let sunsetSec = sunset;

  let sunriseTime = new Date(sunriseSec * 1000);
  let sunsetTime = new Date(sunsetSec * 1000);

  let sunriseTimeStr = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()} ${sunriseTime.getHours() < 12 ? "AM" : "PM"}`;
  let sunsetTimeStr = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()} ${sunsetTime.getHours() < 12 ? "AM" : "PM"}`;

  let dateStamp = new Date();
  let day = days[dateStamp.getDay()];
  let date = dateStamp.getDate();
  let month = months[dateStamp.getMonth()];
  let year = dateStamp.getFullYear();

  return (
    <>
      <div className="widget">
        <div className="title">{name}</div>

        <div className="widget-details">
          <div className="temperature">
            {temp}
            <i className="wi wi-celsius"></i>
          </div>
          <div className="weather-condition">
            {weathermood}
            <i className={`wi ${weatherState}`} id="w-icon"></i>
          </div>
          <div className="timeStamp">
            {day}
            {", " + date}
            {" " + month}
            {" " + year}
          </div>
        </div>

        <div className="other-details-1">
          <div className="infoCard">
            <div className="icon">
              <i className={"wi wi-sunrise"}></i>
            </div>
            <div className="details">
              Sunrise
              <br />
            </div>
            {sunriseTimeStr}
          </div>
          <div className="infoCard">
            <div className="icon">
              <i className={"wi wi-sunset"}></i>
            </div>
            <div className="details">
              Sunset
              <br />
            </div>
            {sunsetTimeStr}
          </div>
          <div className="infoCard">
            <div className="icon degree-icon">
              <i className={"wi wi-direction-up"}></i>
            </div>
            <div className="details">
              Degree
              <br />
            </div>
            {deg}&deg;
          </div>
        </div>
        <div className="other-details-2">
          <div className="infoCard">
            <div className="icon">
              <i className={"wi wi-humidity"}></i>
            </div>
            <div className="details">
              Humidity
              <br />
            </div>
            {humidity} %
          </div>
          <div className="infoCard">
            <div className="icon">
              <i className={"wi wi-barometer"}></i>
            </div>
            <div className="details">
              Pressure
              <br />
            </div>
            {pressure} hPa
          </div>
          <div className="infoCard">
            <div className="icon degree-icon">
              <i className={"wi wi-strong-wind"}></i>
            </div>
            <div className="details">
              Speed
              <br />
            </div>
            {speed} m/sec
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
