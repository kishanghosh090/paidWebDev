/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const historycontainerMain = document.getElementById(
    "history-container-main"
  );

  const API_KEY = "d2d7d932933ef6fdea6d7c280218dcde";

  const historyWeather = JSON.parse(localStorage.getItem("history")) || [];
  if (historyWeather.length > 0) {
    const historycontainer = document.createElement("div");

    historyWeather.forEach((data) => {
      console.log(data.temp, data.description);
      const history = document.createElement("div");
      history.innerHTML = `
        <p>${data.name}</p>
        <p>${data.temp}</p>
        <p>${data.description}</p>
        `;
      historycontainer.classList.add("history-container");
      historycontainer.appendChild(history);
    });
    historycontainerMain.appendChild(historycontainer);
  }
  // gwt weather data
  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") return;
    try {
      loader.classList.remove("hidden");
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
      loader.classList.add("hidden");
      saveHistory(weatherData);
      saveHistoryToLocalStorage();
      cityInput.value = "";
    } catch (error) {
      console.log(error);
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    // console.log(typeof response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  }
  function displayWeatherData(data) {
    // console.log(data);
    const { name, main, weather } = data;
    cityName.textContent = `${name}`;
    temperature.textContent = `Temperature : ${main.temp}°C`;
    feelsLike.textContent = `Feels Like : ${main.feels_like}°C`;
    description.textContent = weather[0].description;
    weatherInfo.classList.remove("hidden");
    weatherInfo.classList.add("weather-info");
  }
  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
  function saveHistory(data) {
    const historycontainer = document.createElement("div");
    historycontainer.classList.add("history-container");

    const history = document.createElement("div");
    history.innerHTML = `
    <p>${data.name}</p>
    <p>${data.main.temp}</p>
    <p>${data.weather[0].description}</p>
    `;
    historycontainer.classList.add("history");
    historycontainer.appendChild(history);
    if (historyWeather.length == 0) {
      historycontainerMain.appendChild(historycontainer);
    }

    const historyList = {
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
    };
    historyWeather.push(historyList);
  }
  function saveHistoryToLocalStorage() {
    localStorage.setItem("history", JSON.stringify(historyWeather));
  }
});
