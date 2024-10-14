document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');
    const API_KEY = 'd2d7d932933ef6fdea6d7c280218dcde';

    // gwt weather data
    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (city === '') return;
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
            cityInput.value = '';
        } catch (error) {
            console.log(error);
            showError();
        }
    })


    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url)
        console.log(typeof response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
    }
    function displayWeatherData(data) {
        console.log(data);
        const {
            name,
            main,
            weather
        } = data
        cityName.innerText = name;
        temperature.innerText = `${main.temp}°C`;
        description.innerText = weather[0].description

        weatherInfo.classList.remove('hidden');

    }
    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})