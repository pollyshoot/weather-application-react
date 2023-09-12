import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-application mt-5">

         

          <Weather defaultCity="Kyiv" />

          <div className="forecast-container" id="forecast"></div>
        </div>

        <footer className="source">
          <a
            href="https://github.com/pollyshoot/shecodesplus_project"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          , by Polina Radahuz
        </footer>
      </div>
    </div>
  );
}

export default App;
