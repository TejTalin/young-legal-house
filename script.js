// --- INITIALIZE THEME ---
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('light-mode');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
}

themeToggle?.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('ylh-theme', newTheme);
    applyTheme(newTheme);
});

// Load saved theme
applyTheme(localStorage.getItem('ylh-theme') || 'dark');

// --- DROPDOWN MENU ---
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu?.classList.toggle('show');
});

document.addEventListener('click', () => {
    dropdownMenu?.classList.remove('show');
});

// --- CUSTOM CURSOR ---
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// --- DYNAMIC ISLAND SCROLL EFFECT ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // When scrolled down: Shrink the island slightly
        navbar.style.padding = '5px 25px';
        navbar.style.width = '85%';
        navbar.style.top = '15px';
    } else {
        // At the top of the page: Return to normal size
        navbar.style.padding = '10px 30px';
        navbar.style.width = '90%';
        navbar.style.top = '25px';
    }
});
