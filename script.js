document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const menuToggle = document.getElementById('menuToggleBtn') || document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenuContainer') || document.getElementById('dropdownMenu');
    const cursor = document.getElementById('customCursor');
    const navbar = document.querySelector('.navbar');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const wordCountDisplay = document.getElementById('wordCountDisplay');
    const submitBtn = document.getElementById('submitBtn');

    function setTheme(theme) {
        const isLight = theme === 'light';
        body.classList.toggle('light-mode', isLight);
        body.classList.toggle('dark-mode', !isLight);

        if (themeIcon) {
            themeIcon.classList.toggle('fa-moon', isLight);
            themeIcon.classList.toggle('fa-sun', !isLight);
        } else if (themeToggle) {
            themeToggle.textContent = isLight ? '🌙' : '☀';
        }

        localStorage.setItem('ylh_theme', theme);
    }

    setTheme(localStorage.getItem('ylh_theme') || (body.classList.contains('light-mode') ? 'light' : 'dark'));

    themeToggle?.addEventListener('click', () => {
        setTheme(body.classList.contains('light-mode') ? 'dark' : 'light');
    });

    menuToggle?.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownMenu?.classList.toggle('show');
    });

    dropdownMenu?.addEventListener('click', (event) => event.stopPropagation());

    document.addEventListener('click', () => {
        dropdownMenu?.classList.remove('show');
    });

    document.querySelectorAll('.island-nav a, .nav-right a').forEach((item) => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active-page');
        }
    });

    document.addEventListener('mousemove', (event) => {
        if (!cursor) return;
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        navbar.classList.toggle('is-scrolled', window.scrollY > 40);
    });

    if (feedbackMessage && wordCountDisplay && submitBtn) {
        feedbackMessage.addEventListener('input', () => {
            const wordCount = feedbackMessage.value.trim().split(/\s+/).filter(Boolean).length;
            wordCountDisplay.textContent = `Words: ${wordCount} / 50 minimum`;
            submitBtn.disabled = wordCount < 50;
        });
    }
});
