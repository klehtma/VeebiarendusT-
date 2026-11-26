const prev = document.querySelector('.prev'); //chooses elements from html document based on classes
const next = document.querySelector('.next');
const wrap = document.querySelector('.img-wrap');
const imgs = document.querySelectorAll('.img-wrap img');
let idx = 0;
function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(-${idx * 100}%)`; //this does the magic
}
//listens to events
next.addEventListener('click', () => {
    idx++;
    showImg();
});

prev.addEventListener('click', () => {
    idx--;
    showImg();
});

showImg();

//Viide: https://www.geeksforgeeks.org/html/building-a-carousel-with-vanilla-javascript/