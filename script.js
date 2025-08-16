// Replace with your own API key from https://openweathermap.org/api
const apiKey = "YOUR_API_KEY";

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    document.getElementById("weather-result").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Condition: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weather-result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
