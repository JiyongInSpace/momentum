const article = document.querySelector("article");
const articleFirst = document.querySelector("article>div:first-child");
const articleSecond = document.querySelector("article>div:last-child");
let startX, endX;
let position = 0;

let mobileJs = window.matchMedia('(max-width: 420px)');
let pcJs = window.matchMedia('(min-width: 421px)')
    function prev(){
        if(position == 0 && mobileJs.matches == true){
                
                articleFirst.style.transform = `translateX(-100%)`;
                articleSecond.style.transform = `translateX(0)`;
                position += 1;
        }
    }
    function next(){
        if(position == 1 && mobileJs.matches == true){
                articleFirst.style.transform = `translateX(0)`;
                articleSecond.style.transform = `translateX(100%)`;
                position -= 1;
        }
    }


    function touchStart(event){
        startX = event.touches[0].pageX;
    }
    function touchEnd(event){
        endX = event.changedTouches[0].pageX;
        if(startX - endX > 50){
            prev();
        } else if(startX - endX < -50){
            next();
        }
    }

    function resizeWidth(){
        if(pcJs.matches == true){
            articleFirst.style.transform = `translateX(0)`;
            articleSecond.style.transform = `translateX(0)`;
        } else{
            articleFirst.style.transform = `translateX(0)`;
            articleSecond.style.transform = `translateX(100%)`;
            position = 0;
        }
    }

    window.addEventListener("resize", resizeWidth)
    articleFirst.addEventListener("touchstart", touchStart);
    articleFirst.addEventListener("touchend", touchEnd);
    articleSecond.addEventListener("touchstart", touchStart);
    articleSecond.addEventListener("touchend", touchEnd);