var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

search.addEventListener("keypress", async function (e) {
  if (e.code === "Enter") {
    let keyword = search.value.trim();
    await changeWeatherUI(keyword);
  }
});

//a9b752ed37c2559bd7687e28639286a2
async function changeWeatherUI(keyword) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&appid=a9b752ed37c2559bd7687e28639286a2`;
  const res = await fetch(url);
  if (!res) return null;

  const weather = await res.json();
  if (!weather) return null;
  if (weather.cod !== 200) {
    content.classList.add("hide");
  } else {
    content.classList.remove("hide");
    setValue(weather);
  }
}

function setValue(data) {
  city.innerText = data.name;
  country.innerText = data.sys.country;
  visibility.innerText = data.visibility + " m";
  wind.innerText = data.wind.speed + "m/s";
  sun.innerText = data.main.humidity + "%";
  let temp = Math.round(data.main.temp);
  value.innerText = temp;
  shortDesc.innerText = data.weather[0].main;
  time.innerText = new Date().toLocaleString("vi");

  body.setAttribute("class", "hot");
  if (temp <= 25) {
    body.setAttribute("class", "cool");
  }
}

changeWeatherUI();
