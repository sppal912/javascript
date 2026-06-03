

const searchBtn = document.querySelector("#search-btn");

const apiKey = "a976ab6cf442cc145e867636f49c60c4";

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const cityInput = document.querySelector("#city-input");
  const stateInput = document.querySelector("#state-input");
  const countryInput = document.querySelector("#country-input");

  const cityName = document.querySelector("#city-name");
  const temp = document.querySelector("#temperature");
  const weatherCondition = document.querySelector("#weather-condition");
  const humidity = document.querySelector("#humidity");
  const windSpeed = document.querySelector("#wind-speed");
  const weatherIcon = document.querySelector("#weather-icon");

  if (!cityInput.value.trim()) {
    cityInput.value = "";
    cityInput.placeholder = "Enter city name";
    cityInput.focus();
    return;
  }

  if (!stateInput.value.trim()) {
    stateInput.value = "";
    stateInput.placeholder = "Enter state code";
    stateInput.focus();
    return;
  }

  if (!countryInput.value.trim()) {
    countryInput.value = "";
    countryInput.placeholder = "Enter country code";
    countryInput.focus();
    return;
  }

  const city = cityInput.value.trim();
  const stateCode = stateInput.value.trim().toUpperCase();
  const countryCode = countryInput.value.trim().toUpperCase();

  try {
    // Step 1: Get Latitude & Longitude
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=1&appid=${apiKey}`;

    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.length) {
      cityName.textContent = "City not found";
      return;
    }

    const { lat, lon } = geoData[0];

    // Step 2: Get Weather Data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    // Step 3: Update UI
    cityName.textContent = weatherData.name;

    temp.textContent = `${Math.round(weatherData.main.temp)}°C`;

    weatherCondition.textContent = weatherData.weather[0].main;

    humidity.textContent = `${weatherData.main.humidity}%`;

    windSpeed.textContent = `${weatherData.wind.speed} m/s`;

    const iconCode = weatherData.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.alt = weatherData.weather[0].description;
  } catch (error) {
    console.error(error);
    cityName.textContent = "Failed to fetch weather data";
  }
}

