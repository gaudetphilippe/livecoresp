const burger = document.getElementById('burger');
const menuBurger = document.getElementById('menu-burger')
burger.addEventListener('click', event => {
    menuBurger.classList.toggle('display-block')
})
