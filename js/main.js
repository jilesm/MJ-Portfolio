import (
    "https://cferdinandi.github.io/smooth-scroll/dist/smooth-scroll.js"
).then(function(){
    new SmoothScroll('a[href*="#"]'); 
    console.log("Worked");
});