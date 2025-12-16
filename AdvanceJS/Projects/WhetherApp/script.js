// API is a function jo apke system me nahi hota hai aur kisi aur server me rehta hai. it

async function getWeather() {
  let city = document.getElementById("city").value.trim();

  let { lat, lon } = await getLocation(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0d8d7097e15a1d2ec401314b070e3b75`
  );
  const data = await response.json();
  document.getElementById("WeatherData").innerHTML = `
  <div>
    <p>Temperature : ${(data.main.temp-273).toFixed(2)  }</p>
    <p>Humidity : </p>
    <p>Description :${data.weather[0].description}</p>
  </div>
  <img src="https://openweathermap.org/img/wn/10d@2x.png" />`;
}

async function getLocation(city) {
  console.log("Entered getLocation");

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=0d8d7097e15a1d2ec401314b070e3b75`
  );

  const data = await response.json();
  let lat = data[0].lat;
  let lon = data[0].lon;
  return { lat, lon };
}
