import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius")

function toFahrenheit (event) {
  setUnit("fahrenheit")
  event.preventDefault()
}

function toCelsius (event) {
  event.preventDefault()
  setUnit("celsius")
}
  if (unit === "celsius") {
  return (
    <div className="current-temperature">
      <span className="temperature" id="temperature">
        {props.celsius}
      </span>
      <span className="units">°C | <a href="/" onClick={toFahrenheit}>°F</a></span>
    </div>
  );
} else {
  let fahrenheit = Math.round(props.celsius * 9 / 5 + 32)
  return (
    <div className="current-temperature">
      <span className="temperature" id="temperature">
        {fahrenheit}
      </span>
      <span className="units"><a href="/" onClick={toCelsius}>°C</a> | °F</span>
    </div>
  );
}

}
