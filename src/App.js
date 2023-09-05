import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-application mt-5">

          <form className="row m-1">
            <input type="search" placeholder="Type a city" className="col-6" />
            <input type="submit" value="Search" className="col-2" />
          </form>

          <Weather defaultCity="Sydney" />

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
