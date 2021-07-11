const API_KEY = "cce5bf7eb759500e3a448e8b59a7d21e";
const weather = document.querySelector("#weather div span:first-child");
const city = document.querySelector("#weather div span:last-child");
const weatherBox = document.querySelector("#weather");

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // const weather = document.querySelector("#weather span:first-child")
        // const city = document.querySelector("#weather span:last-child")
        weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}°`;
        city.innerText = `@${data.name}`;
        
    });
}
function onGeoError(){
    weather.innerText = 'no answer';
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

function talkAboutWeather(){
    if(weather.innerText == 'no answer'){
        answerContent.innerText = `I don't know where you are.`;
    } else {
        answerContent.innerHTML = `Look out the window.<br>I like the ${data.weather[0].main}`;
    }
}

weatherBox.addEventListener("click", talkAboutWeather)


// const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.3415591&lon=126.98633099999998&appid=cce5bf7eb759500e3a448e8b59a7d21e&units=metric`
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         city.innerText = `@${data.name}`;
//         weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}°`;
//     });