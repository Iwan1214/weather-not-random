const apiKey = "6f49b0d372e46afd7003341110fe5c01";
const city = "Putrajaya";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("temp").innerText = data.main.temp + " °C";
  document.getElementById("hum").innerText = data.main.humidity + " %";
  document.getElementById("rain").innerText = data.weather[0].main;
}

getWeather();
setInterval(getWeather, 600000);