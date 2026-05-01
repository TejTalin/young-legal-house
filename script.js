document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. NAVBAR SCROLL FADE LOGIC
    // ==========================================
    const nav = document.getElementById('mainNav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Hide if scrolling down past 50px
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            nav.style.opacity = '0'; 
            nav.style.pointerEvents = 'none'; 
        } 
        // Show if scrolling up
        else {
            nav.style.opacity = '1'; 
            nav.style.pointerEvents = 'auto'; 
        }
        lastScrollY = currentScrollY;
    });

    // ==========================================
    // 2. THEME TOGGLE LOGIC
    // ==========================================
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        // Swap Icon
        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // ==========================================
    // 3. ABOUT PAGE: WORD COUNT VALIDATION
    // ==========================================
    const feedbackMessage = document.getElementById('feedbackMessage');
    const wordCountDisplay = document.getElementById('wordCountDisplay');
    const submitBtn = document.getElementById('submitBtn');

    if (feedbackMessage) {
        feedbackMessage.addEventListener('input', () => {
            // Get text, trim spaces, split by spaces to count words
            const text = feedbackMessage.value.trim();
            const words = text.length > 0 ? text.split(/\s+/) : [];
            const wordCount = words.length;

            // Update display text
            wordCountDisplay.innerText = `Words: ${wordCount} / 50 minimum`;

            // Enable submit button only if 50+ words are typed
            if (wordCount >= 50) {
                submitBtn.disabled = false;
                wordCountDisplay.style.color = "var(--text-color)"; // Turn white/black when valid
            } else {
                submitBtn.disabled = true;
                wordCountDisplay.style.color = "var(--grey-text)"; // Stay grey when invalid
            }
        });
    }
});
