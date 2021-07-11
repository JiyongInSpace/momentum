const article = document.querySelector("article");
const articleFirst = document.querySelector("article>div:first-child");
const articleSecond = document.querySelector("article>div:last-child");
let startX, endX;
let position = 0;


function prev(){
    if(position == 0){
        articleFirst.style.transform = `translateX(-100%)`;
        articleSecond.style.transform = `translateX(0)`;
        position += 1;
    }
}
function next(){
    if(position == 1){
        articleFirst.style.transform = `translateX(0)`;
        articleSecond.style.transform = `translateX(100%)`;
        
        position -= 1;
    }
}


function touchStart(event){
    startX = event.touches[0].pageX;
}
function touchEnd(event){
    startX = event.changedTouches[0].pageX;
    if(startX > endX){
        next();
    } else if(startX < endX){
        prev();
    }
}


article.addEventListener("touchstart", touchStart);
article.addEventListener("touchend", touchEnd);