// === THEME TOGGLE & MEMORY LOGIC ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// 1. Check memory when the page first loads
const savedTheme = localStorage.getItem('ylh-theme');

if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// 2. Change theme and update memory when the button is clicked
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('ylh-theme', 'light'); // Save to memory
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('ylh-theme', 'dark'); // Save to memory
        }
    });
}

// === HAMBURGER MENU LOGIC ===
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

if (menuToggle && dropdownMenu) {
    // Open/Close menu when clicking the hamburger
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); 
        dropdownMenu.classList.toggle('show');
    });

    // Close menu when clicking anywhere else on the screen
    document.addEventListener('click', (e) => {
        if (!dropdownMenu.contains(e.target) && e.target !== menuToggle) {
            dropdownMenu.classList.remove('show');
        }
    });
}

// === CUSTOM CURSOR LOGIC ===
const cursor = document.getElementById('customCursor');

if (cursor) {
    // Make circle follow the mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add shrinking fill animation when user clicks
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click-effect');
    });

    // Remove animation when user releases click
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click-effect');
    });
}
// THEME SWITCHER
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('ylh-theme', isLight ? 'light' : 'dark');
    themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
});

// CURSOR
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// HAMBURGER
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', () => dropdownMenu.classList.remove('show'));

// LOAD THEME
if (localStorage.getItem('ylh-theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.className = 'fas fa-sun';
}
