const navList = document.querySelector('.nav__list');
const burger = document.querySelector(".nav__burger");
burger.addEventListener('click', () => {
    navList.classList.toggle('nav__list1');
})