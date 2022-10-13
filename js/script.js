const cityName =document.getElementById("city-name");
const day =document.getElementById("day-name");
const tempature =document.getElementById('tempature');
const searchBar =document.getElementById("search-input");
const weather=document.getElementById("weather");
const maxMin=document.getElementById("max-min");



const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d6a6af851440ceceedf74e5105cbdc3`);
    const data = await response.json();
    return data;

}
const setQuery = (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        getData(searchBar.value);
        console.log(searchBar.value);
    }
}

getWeather('izmir').then(data => {
    console.log(data);
    cityName.innerHTML = data.name;
    day.innerHTML = new Date().toDateString();
    weather.innerHTML = data.weather[0].main;
    tempature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    maxMin.innerHTML = `${Math.round(data.main.temp_max - 273.15)}°C / ${Math.round(data.main.temp_min - 273.15)}°C`;
})


const getData = async (city) => {
    const data = await getWeather(city);
    cityName.innerHTML = data.name;
    day.innerHTML = new Date().toDateString();
    weather.innerHTML = data.weather[0].main;
    tempature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    maxMin.innerHTML = `${Math.round(data.main.temp_max - 273.15)}°C / ${Math.round(data.main.temp_min - 273.15)}°C`;

}




searchBar.addEventListener('keypress', setQuery)







