import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  // State to store city input
  const [city, setCity] = useState("");

  // State to store weather data
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data
  const getWeather = async () => {
    try {
      // Replace with your API key (OpenWeatherMap)
      const apiKey = "your_api_key";

      // Fetch data from API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      // Store data in state
      setWeather(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <div className="weather-card">
        <h1>🌤 Weather App</h1>

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Button */}
        <button onClick={getWeather}>Get Weather</button>

        {/* Display weather data */}
        {weather && weather.main && (
          <div className="weather-info">
            <h2>{weather.name}</h2>
            <p>🌡 Temp: {weather.main.temp}°C</p>
            <p>☁ Condition: {weather.weather[0].main}</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
