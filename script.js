// === 1. THEME TOGGLE WITH MEMORY ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

const currentTheme = localStorage.getItem('ylh_theme');

if (currentTheme === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('ylh_theme', 'dark'); 
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('ylh_theme', 'light'); 
    }
});

// === 2. HAMBURGER MENU DROPDOWN ===
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// === 3. HIGHLIGHT THE ACTIVE PAGE IN MENU ===
const currentPath = window.location.pathname.split("/").pop();
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    if (item.getAttribute('href') === currentPath || (currentPath === '' && item.getAttribute('href') === 'index.html')) {
        item.classList.add('active-page');
    }
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
