import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div>
      <h1 id="current-city">{props.data.city}</h1>

      <div id="description" className="description text-capitalize">
        {props.data.description}
      </div>
      <div>
        <FormattedDate date={props.data.date} />
      </div>

      <div className="current-weather row">
        <div className="current-temperature_container col-6">
          <div className="d-flex">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="current-weather_details col-6 d-flex align-items-center">
          <ul>
            <li id="humidity">
              Humidity: <span>{props.data.humidity}%</span>
            </li>
            <li id="wind">
              Wind: <span>{props.data.wind} m/s</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
