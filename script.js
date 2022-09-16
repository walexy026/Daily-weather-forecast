"use strict";
// declaring the variable
let date = document.querySelector("#date");
// date.textContent = new Date();
let latitude = document.querySelector("#lat");
let longitude = document.getElementById("lon");
let searchBtn = document.getElementById("search-cities");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");
let sunRise = document.getElementById("Sunrise");
let desc = document.getElementById("description");
let sunSet = document.getElementById("Sunset");
let temperature = document.getElementById("temp");
let humD = document.getElementById("humidity");
let feelsLike = document.getElementById("feel-like");
let city = document.getElementById("city");
let countryName = document.getElementById("country");
let iconImg = document.getElementById("icons");
let divTemperature = document.getElementsByClassName("temperature");
// searchBtn.addEventListener('click', ()=> {
//   country.textContent = document.getElementById('search').value
//   console.log(showCities)
// })

//Using in-built JS function to get cuurent location
let getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherForecast);
  } else {
    ("Geolocation is not supported by this browser.");
  }
};
// Fetching data from OpenWeather
let getWeatherForecast = (position) => {
  
  let apiKeys = "3870f5be4e086fca02c03bfe046b80bd";
  let unit = "metrics";
  let baseURL = "https://api.openweathermap.org/data/2.5/weather";
  fetch(
    `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKeys}`
  )
    .then((reposne) => reposne.json())
    .then((data) => {
      JSON.stringify(data);
      console.log(data);
      showWeather(data);
    });
};
getUserLocation();
// Destructuring
function showWeather(data) {
  let { icon, description } = data.weather[0];
  let { humidity, temp_max, temp_min, temp, feels_like } = data.main;
  let { lat, lon } = data.coord;
  let { sunrise, sunset, country } = data.sys;
  let { name } = data;
  latitude.innerHTML = lat;
  longitude.innerHTML = lon;
  minTemp.innerHTML = temp_min;
  maxTemp.innerHTML = temp_max;
  sunRise.innerHTML = sunrise;
  desc.innerHTML = description;
  sunSet.innerHTML = sunset;
  temperature.innerHTML = temp;
  humD.innerHTML = humidity;
  feelsLike.innerHTML = feels_like;
  city.innerHTML = `This is ${name}`;
  countryName.innerHTML = country;
  iconImg.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
}

// let search = document.getElementById('search-')
// searchBtn.addEventListener('keyup', ()=>{
//     console.log('cities')
//     let showCities = document.getElementById('search').textContent.value
//     console.log(showCities)
// })
