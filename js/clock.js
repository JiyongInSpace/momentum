const calendar = document.querySelector("#clock p:first-child");
const calendarSecond = document.querySelector("#clock p:nth-child(2)");
const clock = document.querySelector("#clock p:last-child");
const clockBox = document.querySelector("#clock");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekNames = ["일", "월", "화", "수", "목", "금", "토"];

let hoursCopy;

function timeNow(){
    const date = new Date();

    const days = date.getDate();
    const weeks = weekNames[date.getDay()];
    const months = monthNames[date.getMonth()];

    const hours = String(date.getHours()).padStart(2,"0");
    hoursCopy = hours;
    const minutes = String(date.getMinutes()).padStart(2,"0");

    calendar.innerText = `${days}`;
    calendarSecond.innerHTML = `${weeks}<br>${months}`;
    if(hours >= 12){
        clock.innerText = `${hours - 12}:${minutes} PM`
    } else{
        clock.innerText = `${hours}:${minutes} AM`;
    }
    
}

function talkAboutTime(){
    if(hoursCopy >= 5 && hoursCopy <= 11){
        answerContent.innerText = `Good morning!`;
    } else if(hoursCopy >= 12 && hoursCopy <= 17){
        answerContent.innerText = `Good afternoon!`
    } else {
        answerContent.innerText = `Good evening!`
    }
}

clockBox.addEventListener("click", talkAboutTime)

timeNow();
setInterval(timeNow, 1000);