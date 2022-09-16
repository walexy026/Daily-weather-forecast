"use strict";
// declaring the variable
let date = document.querySelector('#date')
date.textContent =  new Date();
let latitude = document.querySelector('#lat')
let longitude = document.getElementById('lon')
let searchBtn = document.getElementById('search-cities')
let minTemp = document.getElementById('min-temp')
let maxTemp = document.getElementById('max-temp')
let sunrise = document.getElementById('sunrise')
let sunset = document.getElementById('sunset')
let temperature = document.getElementById('temp')
let humidity = document.getElementById('humidity')
let feelsLike = document.getElementById('feel-like')
let city = document.getElementById('city')
let country = document.getElementById('country')
let iconsrc = document.getElementById('icons')
// console.log(icon + 0c)
let divTemperature = document.getElementsByClassName('temperature')
// searchBtn.addEventListener('click', ()=> {
//   country.textContent = document.getElementById('search').value
//   console.log(showCities)
// })

let apiKeys =  "3870f5be4e086fca02c03bfe046b80bd";
let unit = "metrics"
let baseURL ="https://api.openweathermap.org/data/2.5/weather";

// get cuurent location
let getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherForecast);
    //  console.log()
  } else {
    "Geolocation is not supported by this browser.";
  }
};
let getWeatherForecast = (position) =>{
let name = "kenneth"
  fetch(
    `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKeys}`
    )
    .then((reposne) => reposne.json())
    .then((data) => {
      // JSON.stringify(data)
      JSON.stringify(data)
      // demo.innerHTML = JSON.stringify(data)
      console.log(data) 
      // showWeather(data)
      // lat.innerHTML =JSON.stringify(data.coord[0]) 
      city.textContent =data.name
      country.textContent =data.sys.country
      latitude.textContent = data.coord.lat
      longitude.textContent = data.coord.lon  
      maxTemp.textContent =data.main.temp_max
      minTemp.textContent =data.main.temp_min 
      feelsLike.textContent =data.main.feels_like
      humidity.textContent =data.main.humidity
      sunset.textContent =data.sys.sunset
      // sunrise.textContent =data.sys.sunrise
      temperature.textContent =data.main.temp
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png` 
      // <img src=" http://openweathermap.org/img/wn/04n@4x.png" alt="SunCloud" class="icon" /> 
      // const {lon  , lat} = coord;
      // const {temp, feels_like, temp_min, temp_max, pressure, humidity} = weather.main
      // const {country, sunrise, sunset} = weather.sys
      // const {name} = weather
    })
  }
  getUserLocation()
      
      // lat.innerHTML = 'go home'
      // showWeather: function (data) {
      //       let { } = data,
      //       let { icon, description } = data.weather[0],
        
      //       let { temp, humidity } = data.main,
      //       let { speed } = data.wind,
      // }
     

//  function showWeather(data) {
//   let {humidity, pressure, sunrise, temp_max, temp_min,} = data.main
// divTemperature.innerHTML = 
// `  <p id="humidity" ${humidity}</p>
//     <p id="pressure">${pressure}</p>
//    <p id="sunrise" ${sunrise}</p>
//    <p id="max-temp" ${temp_max}</p>
//    <p id="min-temp" ${temp_min}</p>
//    minTemp ${temp_min}
// `
//  }
   
// let search = document.getElementById('search-')
// searchBtn.addEventListener('keyup', ()=>{
//     console.log('cities')
//     let showCities = document.getElementById('search').textContent.value
//     console.log(showCities)
// })