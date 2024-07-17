async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'a469e87073b79cbb2cd3abc52c387073'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const weatherButton = document.getElementById('weatherButton');
    weatherButton.disabled = true; // Disable the button
    weatherButton.textContent = 'Loading...'; // Change button text to loading

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weather = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherResult').innerHTML = weather;
        } else {
            document.getElementById('weatherResult').innerHTML = '<p>City not found. Please try again.</p>';
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = '<p>An error occurred. Please try again.</p>';
    } finally {
        weatherButton.disabled = false; // Re-enable the button
        weatherButton.textContent = 'Get Weather'; // Reset button text
    }
}