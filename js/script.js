const navList = document.querySelector('.nav__list');
const burger = document.querySelector(".nav__burger");
const navbar = document.querySelector(".nav");
burger.addEventListener('click', () => {
    navList.classList.toggle('nav__list1');
    // navbar.classList.toggle('navbar')
})