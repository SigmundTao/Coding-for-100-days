const output = document.getElementById('output');
const searchBtn = document.getElementById('search-btn')

const url = 'https://api.weatherstack.com/current?access_key=ccba0e9223a51268e4e13f72eda9bc41&query=';
const errorMessage = "Could not load data";

const fetchWeather = () => {
    const city = document.getElementById('search-bar').value;
    
    fetch(url + city)
        .then(response => response.json())
        .then(data => {
            const location = data.location.name;
            const temperature = data.current.temperature;
            const image = data.current.weather_icons;
            const weatherDesctiption = data.current.weather_descriptions[0];
            const feelsLike = data.current.feelslike;
            const sunset = data.current.astro.sunset;
            const sunrise = data.current.astro.sunrise;
            const windSpeed = data.current.wind_speed;
            const visibility = data.current.visibility;

            output.innerHTML = `
                <div class="weather-card">
                    <p class="city">${location}</p>
                    <div class="weather-holder">
                        <img src="${image}" class="weather-png">
                        <div class="weather-info">
                            <p class="temp">${temperature}°C</p>
                            <p class="weather-description">${weatherDesctiption}</p>
                        </div>
                    </div>
                    <div class="stats-display">
                        <p class="stat">Feels like: <span class="stat-value">${feelsLike}</span></p>
                        <p class="stat">Sunrise: <span class="stat-value">${sunrise}</span></p>
                        <p class="stat">Sunset: <span class="stat-value">${sunset}</span></p>
                        <p class="stat">Wind Speed: <span class="stat-value">${windSpeed}</span></p>
                        <p class="stat">Visibility: <span class="stat-value">${visibility}</span></p>
                    </div>
                </div>
            `
        })
        .catch(error => {
            output.innerText = errorMessage
        });
}

searchBtn.addEventListener('click', fetchWeather)