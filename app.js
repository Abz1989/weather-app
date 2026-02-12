const apiKey = "b1f8673efe416d66a7425d05bd6c3c6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();

    console.log(data);

    cityEl.innerHTML = data.name;
    tempEl.innerHTML = Math.round(data.main.temp) + "°C";
    humidityEl.innerHTML = data.main.humidity + "%";
    windEl.innerHTML = data.wind.speed + " km/h";
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

checkWeather();