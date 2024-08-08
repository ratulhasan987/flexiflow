// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});
