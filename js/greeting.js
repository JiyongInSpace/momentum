const nameForm = document.querySelector("#greeting form");
const nameInput = document.querySelector("#greeting input");

const firstTalk = document.querySelector("#greeting div");
const answer = document.querySelector("#greeting .answer");
const answerContent = document.querySelector(".talk2");
const HIDDEN_CLASSNAME = "hidden";

const colorfocus = document.querySelector(".talk input")
const COLORFOCUS2 = "colorfocus2";

function submitName(event){
    event.preventDefault();
    firstTalk.classList.add(HIDDEN_CLASSNAME);
    const username = nameInput.value;
    localStorage.setItem("username", username);
    baristaAnswer(username);
}
function baristaAnswer(username){
    answerContent.innerText = `Hi, ${username}`;
    answer.classList.remove(HIDDEN_CLASSNAME);
}
nameForm.addEventListener("submit", submitName);

const savedUsername = localStorage.getItem("username");

if(savedUsername == null){
    
} else {
    firstTalk.classList.add(HIDDEN_CLASSNAME);
    baristaAnswer(savedUsername);
}


function changeColor(){
    colorfocus.classList.toggle(COLORFOCUS2);
}

setInterval(changeColor, 1000);