const calendar = document.querySelector("#clock p:first-child");
const calendarSecond = document.querySelector("#clock p:nth-child(2)");
const clock = document.querySelector("#clock p:last-child");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekNames = ["일", "월", "화", "수", "목", "금", "토"];

function timeNow(){
    const date = new Date();

    const days = date.getDate();
    const weeks = weekNames[date.getDay()];
    const months = monthNames[date.getMonth()];

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");

    calendar.innerText = `${days}`;
    calendarSecond.innerHTML = `${weeks}<br>${months}`;
    if(hours >= 12){
        clock.innerText = `${hours - 12}:${minutes} PM`
    } else{
        clock.innerText = `${hours}:${minutes} AM`;
    }
}

timeNow();
setInterval(timeNow, 1000);