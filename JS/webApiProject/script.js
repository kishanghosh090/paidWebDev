document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "d2d7d932933ef6fdea6d7c280218dcde";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      alert("enter your city name");
      return;
    }
    try {
      const weatherData = await fetchWeatherData(city);
      errorMessage.classList.add("hidden");
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      alert(`${city} not found`);
      throw new Error("city no found");
    }
    const data = await res.json();
    console.log(data);
  }
  function displayWeatherData(weatherData) {}

  // error message showing
  function showError() {
    errorMessage.classList.remove("hidden");
  }
});
