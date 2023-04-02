const btn = document.querySelector(".nav-btn");
const hamburger = document.querySelector(".hamb");
const navOpen = document.querySelector("nav");


btn.addEventListener("click", function(){
    navOpen.classList.toggle("nav-open");
});


