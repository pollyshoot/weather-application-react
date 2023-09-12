import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
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

  function handleError (error) {
console.log(error)
  }
  function searchCity() {
    let apiKey = "0479fec9478c6c9031d035f5c5efc126";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather).catch(handleError);
  }

  function handleSumbit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div>
        <form className="row m-1" onSubmit={handleSumbit}>
          <input
            type="search"
            placeholder="Type a city"
            className="col-6"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="col-2" />
        </form>
        <WeatherData data={weather}/>
       
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
