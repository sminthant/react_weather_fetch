/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchWeather from "./components/SearchWeather";
import WeatherInfo from "./components/WeatherInfo";
import { api, api_key } from "./api/api";

const App = () => {
  const [city, setCity] = useState("yangon");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    try {
      const response = await api.get(`?q=${city}&appid=${api_key}`);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(weather);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <>
      <div className=" h-screen p-10 flex justify-center items-center flex-col bg-slate-700">
        <h1 className="text-3xl font-bold text-slate-200">
          Weather API Small Project
        </h1>
        <SearchWeather weather={(searchweather) => setCity(searchweather)} />
        {!loading && city === "" && JSON.stringify(weather) && (
          <h1 className="text-2xl text-slate-200">There is no data</h1>
        )}
        {loading ? (
          <div class="typing-indicator">
            <div class="typing-circle"></div>
            <div class="typing-circle"></div>
            <div class="typing-circle"></div>
            <div class="typing-shadow"></div>
            <div class="typing-shadow"></div>
            <div class="typing-shadow"></div>
          </div>
        ) : (
          <WeatherInfo weather={weather} />
        )}
      </div>
    </>
  );
};

export default App;
