const bgImg = ["ex0.jpg", "ex1.jpg", "ex2.jpg"];
const randomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];
const bodyStyle = document.body.style;
bodyStyle.background = `url('img/${randomBgImg}') no-repeat`;
bodyStyle.backgroundSize = 'cover';

const cafeMenu = [
    {menu:"AMERICANO", photo:"americano.png"},
    {menu:"CAPPUCCINO", photo:"cappuccino.png"},
    {menu:"ESPRESSO", photo:"espresso.png"},
    {menu:"LATTE", photo:"latte.png"},
    {menu:"MOCHA", photo:"mocha.png"}]
const todayCoffee = cafeMenu[Math.floor(Math.random() * cafeMenu.length)];
const coffeeFigure = document.querySelector("#todaycoffee figure");
const coffeeName = document.querySelector("#todaycoffee div");

coffeeFigure.style = `background : lightgray url("img/${todayCoffee.photo}") no-repeat center / 50%;`;
coffeeName.innerText = `${todayCoffee.menu},`;