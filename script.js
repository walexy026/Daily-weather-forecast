"use strict";
// declaring the variable
let date = document.querySelector('#date')
date.textContent =  new Date();
let lat = document.querySelector('#lat')
let lon = document.getElementById('lon')
let searchBtn = document.getElementById('search-cities')
let minTemp = document.getElementById('min-temp')
let maxTemp = document.getElementById('max-temp')
let avgSun = document.getElementById('avg-sun')
let humidity = document.getElementById('humidity')
let feelsLike = document.getElementById('feel-like')
let country = document.getElementById('country')
let icon = document.querySelector('.icons')
let divTemperature = document.getElementsByClassName('temperature')
// lon.innerHTML = 'go home'
// lat.innerHTML = "tjkdfdjh"
// search cities
searchBtn.addEventListener('click', ()=> {
  country.textContent = document.getElementById('search').value
  console.log(showCities)
})

let apiKeys =  "3870f5be4e086fca02c03bfe046b80bd";
let unit = "metrics"
let baseURL ="https://api.openweathermap.org/data/2.5/weather";

// get cuurent location
let getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherForecast);
    //  console.log()
  } else {
    alert("Geolocation is not supported by this browser.");
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
      showWeather(data)
      // lat.innerHTML =JSON.stringify(data.coord[0]) 
      lat.textContent = data.coord.lat
      lon.textContent = data.coord.lon
      maxTemp.textContent =data.main.temp_max
      minTemp.textContent =data.main.temp_min
      sunrise.textContent =data.main.sunrise
      feelsLike.textContent =data.main.feels_like
      humidity.textContent =data.main.humidity
      sunrise.textContent =data.main.sunrise
      icon.textContent = data.weather[0].icon
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
      function functionNmae(){

        
      }
 function showWeather(data) {
  let {humidity, pressure, sunrise, temp_max, temp_min,} = data.main
divTemperature.innerHTML = 
`  <p id="humidity" ${humidity}</p>
    <p id="pressure">${pressure}</p>
   <p id="sunrise" ${sunrise}</p>
   <p id="max-temp" ${temp_max}</p>
   <p id="min-temp" ${temp_min}</p>
   minTemp ${temp_min}
`

 }
   
// let search = document.getElementById('search-')
// searchBtn.addEventListener('keyup', ()=>{
//     console.log('cities')
//     let showCities = document.getElementById('search').textContent.value
//     console.log(showCities)
// })