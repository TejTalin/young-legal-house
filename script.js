// 1. THEME TOGGLE LOGIC
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setTheme(isLight) {
    if (isLight) {
        document.body.classList.add('light-mode');
        if(themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('light-mode');
        if(themeIcon) themeIcon.className = 'fas fa-moon';
    }
}

themeToggle.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-mode');
    setTheme(isLight);
    localStorage.setItem('ylh-theme', isLight ? 'light' : 'dark');
});

// LOAD PREFERENCE
if (localStorage.getItem('ylh-theme') === 'light') setTheme(true);

// 2. HAMBURGER MENU LOGIC
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

if(menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
}

document.addEventListener('click', () => {
    if(dropdownMenu) dropdownMenu.classList.remove('show');
});

// 3. CURSOR LOGIC
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    if(cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});
