
import axios from 'axios';
import React, { useState, useRef } from 'react';
import '../index.css';

const Weather = () => {
  const [addWeatherData, setaddWeatherData] = useState([]);
  const inputVal = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    if (inputVal.current.value === "") {
      alert("Please, Enter any City Name!");
    } else {
      axios(`https://api.weatherapi.com/v1/current.json?key=c3afac881b484bfcb0e82723240809&q=${inputVal.current.value}&aqi=no`)
        .then(res => {
          setaddWeatherData(prevState => [res.data, ...prevState]);
        })
        .catch(err => {
          alert("The City name is incorrect! Try again with the correct city name.");
        });

      inputVal.current.value = "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <h1 className="text-4xl font-extrabold text-white mb-8">Weather App</h1>

      <form onSubmit={formSubmit} className="flex flex-col items-center w-full max-w-md space-y-4 p-6 bg-white rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Enter City Name..."
          ref={inputVal}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900"
        />
        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700"
        >
          Check Weather
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full px-4">
        {addWeatherData.map((item, index) => (
          <div key={index} className="bg-white border-4 border-teal-500 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src={item.current.condition.icon}
              className="w-16 h-16 mx-auto mb-4"
              alt="Current Weather Icon"
            />
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {item.location.name}, {item.location.country}
            </h2>
            <p className="text-gray-600 text-lg mt-4">Temperature: <span className="text-teal-600 font-bold">{item.current.temp_c}°C</span></p>
            <p className="text-gray-600 text-lg">Condition: <span className="text-teal-600 font-bold">{item.current.condition.text}</span></p>
            <p className="text-gray-600 text-lg">Wind: <span className="text-teal-600 font-bold">{item.current.wind_kph} Kph</span></p>
            <p className="text-gray-600 text-lg">Humidity: <span className="text-teal-600 font-bold">{item.current.humidity}%</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
