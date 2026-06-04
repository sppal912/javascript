const searchBtn = document.querySelector("#search-btn");

const apiKey = "a976ab6cf442cc145e867636f49c60c4";
const cityInput = document.querySelector("#city-input");

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
searchBtn.addEventListener("click", getWeather);
async function getWeather() {

  const cityName = document.querySelector("#city-name");
  const temp = document.querySelector("#temperature");
  const weatherCondition = document.querySelector("#weather-condition");
  const humidity = document.querySelector("#humidity");
  const windSpeed = document.querySelector("#wind-speed");
  const weatherIcon = document.querySelector("#weather-icon");
  const sunrise = document.querySelector("#sunrise");
  const sunset = document.querySelector("#sunset");

  if (!cityInput.value.trim()) {
    cityInput.value = "";
    cityInput.placeholder = "Enter city name";
    cityInput.focus();
    return;
  }

  const city = cityInput.value.trim();
  cityName.textContent = "Loading...";
  try {
    // Step 1: Get Latitude & Longitude
    const getCityDetailsUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    const geoResponse = await fetch(getCityDetailsUrl);
    const geoData = await geoResponse.json();

    if (!geoData.length) {
      cityName.textContent = "City not found";
      setTimeout(() => {
        cityName.textContent = "- -";
      }, 2000);
      return;
    }

    const { lat, lon, country } = geoData[0];

    // Step 2: Get Weather Data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    // Step 3: Update UI
    cityName.textContent = `${weatherData.name}, ${country}`;

    temp.textContent = `${Math.round(weatherData.main.temp)}°C`;

    weatherCondition.textContent = weatherData.weather[0].main;

    humidity.textContent = `${weatherData.main.humidity}%`;

    windSpeed.textContent = `${Math.round(weatherData.wind.speed * 3.6)} km/h`;

    const sunriseTime = new Date(weatherData.sys.sunrise * 1000);
    const sunsetTime = new Date(weatherData.sys.sunset * 1000);

    sunrise.textContent = sunriseTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    sunset.textContent = sunsetTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const iconCode = weatherData.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.alt = weatherData.weather[0].description;
    // clear input field after search
    cityInput.value = "";
  } catch (error) {
    console.log(error);
    cityName.textContent = "Failed to fetch weather data";
  }
}

// api result
// {
//   coord: { lon: 88.36, lat: 22.57 },
//   weather: [
//     {
//       id: 802,
//       main: 'Clouds',
//       description: 'scattered clouds',
//       icon: '03n'
//     }
//   ],
//   base: 'stations',
//   main: {
//     temp: 27.74,
//     feels_like: 31.32,
//     temp_min: 27.74,
//     temp_max: 27.74,
//     pressure: 1002,
//     humidity: 79,
//     sea_level: 1002,
//     grnd_level: 1001
//   },
//   visibility: 10000,
//   wind: { speed: 11.91, deg: 245, gust: 17.98 },
//   clouds: { all: 26 },
//   dt: 1780579841,
//   sys: { country: 'IN', sunrise: 1780528894, sunset: 1780577303 },
//   timezone: 19800,
//   id: 1275004,
//   name: 'Kolkata',
//   cod: 200
// }
