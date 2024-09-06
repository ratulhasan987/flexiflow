// script.js
document.querySelector('.menu-button').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.nav-menu').classList.toggle('active');
});
