import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  function getWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div>
        <h1 id="current-city">{weather.city}</h1>

        <div id="description" className="description text-capitalize">
          {weather.description}
        </div>
        <div>
          <FormattedDate date={weather.date} />
        </div>

        <div className="current-weather row">
          <div className="current-temperature_container col-6">
            <div className="d-flex">
              <img src={weather.iconUrl} alt={weather.description} />
              <div className="current-temperature">
                <span className="temperature" id="temperature">
                  {weather.temperature}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>

          <div className="current-weather_details col-6 d-flex align-items-center">
            <ul>
              <li id="humidity">
                Humidity: <span>{weather.humidity}%</span>
              </li>
              <li id="wind">
                Wind: <span>{weather.wind} m/s</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0479fec9478c6c9031d035f5c5efc126";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
    return "Loading...";
  }
}
