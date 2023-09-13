import React from "react";

export default function FormattedDate(props) {
  let days = [
     "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
   
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div id="time">
      {days[props.date.getDay()]}, {months[props.date.getMonth()]} {props.date.getDate()}, {" "}
      {props.date.getFullYear()} 
      {/* {props.date.getHours()}:{props.date.getMinutes()} */}
    </div>
  );
}
