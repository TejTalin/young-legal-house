// === THEME TOGGLE LOGIC ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Swap between Moon and Sun icons depending on the theme
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}

// === HAMBURGER MENU LOGIC ===
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

if (menuToggle && dropdownMenu) {
    // Open/Close menu when clicking the hamburger
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents click from instantly closing the menu
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
