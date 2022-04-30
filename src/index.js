let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let currentHour = currentTime.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let formattedDate = `${currentDay} ${currentHour}:${currentMinutes}`;
  return formattedDate;
}
let elementDate = document.querySelector("#current-time");
elementDate.innerHTML = formatDate(currentTime);

// 2ND EXERCICE WEEK 4

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}ºC`;
}

function submitCity(event) {
  event.preventDefault();
  let currentCityWeather = document.querySelector("#city-input");
  let currentCity = document.querySelector("#city-display");
  currentCity.innerHTML = `${currentCityWeather.value}`;
  let apiKey = "b0661e5e22b852583e44461d886f5f6a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCityWeather.value}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  return currentCity;
}
let getCity = document.querySelector("#city-form");
getCity.addEventListener("submit", submitCity);

//

function showCurrentTemperature(response) {
  let heading = document.querySelector("#city-display");
  let temperature = Math.round(response.data.main.temp);
  let tempdisplay = document.querySelector("#temperature");
  heading.innerHTML = `${response.data.name}`;
  tempdisplay.innerHTML = `${temperature}ºC`;
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=b0661e5e22b852583e44461d886f5f6a&units=${units}`;

  axios.get(apiUrl).then(showCurrentTemperature);
}

//

function currentLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let button = document.querySelector("#buttonj");
button.addEventListener("click", currentLoc);
