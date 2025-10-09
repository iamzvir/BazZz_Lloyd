const btnMenu = document.querySelector('.btn__menu');
const menu = document.querySelector('.menu-list');

btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active');

})