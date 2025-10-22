function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchApp(searchInputElement.value.trim());
}

function searchApp(city) {
  let apiKey = "5a83000tfbfa938fbo55b33e304bb87b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(showTemp);
}

function showTemp(response) {
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let tempElement = document.querySelector(".current-temperature-value");
  cityElement.innerHTML = city;
  tempElement.innerHTML = temperature;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
