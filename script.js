// THEME
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        if(themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('light-mode');
        if(themeIcon) themeIcon.className = 'fas fa-moon';
    }
}

themeToggle?.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    const theme = isLight ? 'light' : 'dark';
    localStorage.setItem('ylh-theme', theme);
    applyTheme(theme);
});

if (localStorage.getItem('ylh-theme') === 'light') applyTheme('light');

// MENU
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu?.classList.toggle('show');
});

document.addEventListener('click', () => dropdownMenu?.classList.remove('show'));

// CURSOR
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    if(cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});
