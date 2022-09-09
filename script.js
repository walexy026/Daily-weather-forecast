"use strict";
let date = document.querySelector('#date')
date.textContent =  new Date();

let searchBtn = document.getElementById('search-cities')
let country = document.getElementById('country')
searchBtn.addEventListener('click', ()=> {
    country.textContent = document.getElementById('search').value
    console.log(showCities)
})
let api =  "3870f5be4e086fca02c03bfe046b80bd";
let baseURL ="https://api.openweathermap.org/data/2.5/weather";
 let getWeatherForecast = function(){
    fetch(
        `${urlbase}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKeys}`
    )
    .then((reposne) => reposne.json())
    .then((data) =>{
          JSON.stringify(data)
    })
 }
// let search = document.getElementById('search-')
// searchBtn.addEventListener('keyup', ()=>{
//     console.log('cities')
//     let showCities = document.getElementById('search').textContent.value
//     console.log(showCities)
// })