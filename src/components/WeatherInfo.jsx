import React from "react";

const WeatherInfo = ({ weather }) => {
  if (JSON.stringify(weather) !== "{}") {
    return (
      <div>
        <div className="cardContainer">
          <div className="card">
            <p className="city">{weather.name}</p>
            <p className="weather">{weather.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="weatherIcon"
            />
            <p className="temp">{Math.round(weather.main.temp - 273.15)}°</p>
            <div className="minmaxContainer">
              <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">
                  {Math.round(weather.main.temp_min - 273.15)}°
                </p>
              </div>
              <div className="max">
                <p className="maxHeading">Max</p>
                <p className="maxTemp">
                  {Math.round(weather.main.temp_max - 273.15)}°
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WeatherInfo;
