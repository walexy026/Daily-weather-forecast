"use strict";
// declaring the variable
let date = document.querySelector("#date");
date.textContent = new Date();
let latitude = document.querySelector("#lat");
let longitude = document.getElementById("lon");
let searchBtn = document.getElementById("search-cities");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");
let sunRise = document.getElementById("Sunrise");
let desc = document.getElementById('description')
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

let apiKeys = "3870f5be4e086fca02c03bfe046b80bd";
let unit = "metrics";
let baseURL = "https://api.openweathermap.org/data/2.5/weather";

// get cuurent location
let getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherForecast);
    //  console.log()
  } else {
    ("Geolocation is not supported by this browser.");
  }
};
let getWeatherForecast = (position) => {
  let name = "kenneth";
  fetch(
    `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKeys}`
  )
    .then((reposne) => reposne.json())
    .then((data) => {
      // JSON.stringify(data)
      JSON.stringify(data);
      // demo.innerHTML = JSON.stringify(data)
      console.log(data);
      showWeather(data);
      // lat.innerHTML =JSON.stringify(data.coord[0])
      //    city.textContent =`you are in  ${data.name}`
      //   country.textContent =data.sys.country
      //   latitude.textContent = data.coord.lat
      //   longitude.textContent = data.coord.lon
      //   maxTemp.textContent =data.main.temp_max
      //   minTemp.textContent =`${data.main.temp_min}  °C`
      //   feelsLike.textContent =data.main.feels_like
      //   humidity.textContent =data.main.humidity
        // desc.textContent =data.weather[0].description
        // icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
      //   temperature.textContent =data.main.temp
      //   sunset.textContent =data.sys.sunset
      //  sunrise.textContent =data.sys.sunrise
    });
};
getUserLocation();

// lat.innerHTML = 'go home'
// showWeather: function (data) {

// }

function showWeather(data) {
  let { icon, description } = data.weather[0];
  let { humidity, temp_max, temp_min, temp, feels_like } = data.main;
  let { lat, lon } = data.coord;
  let {sunrise, sunset, country} = data.sys
  let {name} = data
  latitude.innerHTML =lat
  longitude.innerHTML =lon
  minTemp.innerHTML = temp_min
 maxTemp.innerHTML = temp_max
 sunRise.innerHTML = sunrise
 desc.innerHTML = description
 sunSet.innerHTML =sunset
 temperature.innerHTML =temp
 humD.innerHTML = humidity
 feelsLike.innerHTML = feels_like 
 city.innerHTML = name
 countryName.innerHTML = country
 iconImg.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
 
  // console.log( icon, description)
  // divTemperature.innerHTML =
  // `  <p id="humidity" ${humidity}</p>
  //     <p id="pressure">${pressure}</p>
  //    <p id="sunrise" ${sunrise}</p>
  //    <p id="max-temp" ${temp_max}</p>
  //    <p id="min-temp" ${temp_min}</p>
  //    minTemp ${temp_min}
  // `
}

// let search = document.getElementById('search-')
// searchBtn.addEventListener('keyup', ()=>{
//     console.log('cities')
//     let showCities = document.getElementById('search').textContent.value
//     console.log(showCities)
// })
