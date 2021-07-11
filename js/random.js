const bgImg = ["ex0.jpg", "ex1.jpg", "ex2.jpg"];
const randomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];
const bodyStyle = document.body.style;
const coffeeBox = document.querySelector("#todaycoffee")
bodyStyle.background = `url('img/${randomBgImg}') no-repeat`;
bodyStyle.backgroundSize = 'cover';

const cafeMenu = [
    {menu:"Americano", photo:"americano.png"},
    {menu:"Cappuccino", photo:"cappuccino.png"},
    {menu:"Espresso", photo:"espresso.png"},
    {menu:"Latte", photo:"latte.png"},
    {menu:"Mocha", photo:"mocha.png"}]
const todayCoffee = cafeMenu[Math.floor(Math.random() * cafeMenu.length)];
const coffeeFigure = document.querySelector("#todaycoffee figure");
const coffeeName = document.querySelector("#todaycoffee div");

coffeeFigure.style = `background : lightgray url("img/${todayCoffee.photo}") no-repeat center / 50%;`;
coffeeName.innerText = `${todayCoffee.menu}`;

function talkAboutCoffee(){
    answerContent.innerText = `Would you like some ${todayCoffee.menu}?`;
}

coffeeBox.addEventListener("click", talkAboutCoffee)

