window.addEventListener("scroll", function () {
    let navbar = document.querySelector("header");
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
});