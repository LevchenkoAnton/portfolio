var burgerButton = document.querySelector(".header__open-nav");
var mainNav = document.querySelector(".main-nav");

burgerButton.addEventListener('click', function (event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--closed");
});

