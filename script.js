document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('mainNav');
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let lastScrollY = window.scrollY;

    // 1. SCROLL FADE LOGIC
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // If scrolling down AND we are not at the very top
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            nav.style.opacity = '0'; // Fade out
            nav.style.pointerEvents = 'none'; // Prevent clicking while invisible
        } 
        // If scrolling up
        else {
            nav.style.opacity = '1'; // Fade in
            nav.style.pointerEvents = 'auto'; // Re-enable clicks
        }
        
        lastScrollY = currentScrollY;
    });

    // 2. THEME TOGGLE LOGIC
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        // Swap icon between Moon (Dark Mode) and Sun (Light Mode)
        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
});
