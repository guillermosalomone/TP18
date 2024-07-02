document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.querySelector('.menuBurger');
    const menuPpal = document.querySelector('.menuPpal');

    menuBurger.addEventListener('click', function() {
        menuPpal.classList.toggle('active');
    });
});