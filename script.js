const nav = document.getElementById('mainNav');
let lastScrollY = window.scrollY;

// SCROLL LOGIC: Fade out on down, Fade in on up
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        nav.classList.add('nav-hidden'); // Scrolling Down
    } else {
        nav.classList.remove('nav-hidden'); // Scrolling Up
    }
    lastScrollY = window.scrollY;
});

// THEME TOGGLE
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
