const nav = document.getElementById('mainNav');
const themeBtn = document.getElementById('themeToggle');
let lastScrollY = window.scrollY;

// SCROLL FADE LOGIC
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling Down - Hide
        nav.classList.add('nav-hidden');
    } else {
        // Scrolling Up - Show
        nav.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
});

// THEME SWITCHER
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});
