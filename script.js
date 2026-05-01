// --- Custom Cursor Logic ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// --- Page Routing Logic ---
function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0); 
}

// --- Dark Mode Logic ---
const body = document.body;
const toggleBtn = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') body.classList.add('dark-mode');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// --- Blog Rendering Logic ---
const blogGrid = document.getElementById('blogGrid');
let currentFilter = 'All';

function renderBlogs() {
    blogGrid.innerHTML = '';
    database.forEach(blog => {
        if (currentFilter === 'All' || blog.category === currentFilter) {
            const card = document.createElement('div');
            card.className = 'blog-card interactive';
            card.innerHTML = `
                <span class="blog-tag">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <span class="read-more">Read Article &rarr;</span>
            `;
            
            card.onclick = () => {
                document.getElementById('readerTag').innerText = blog.category;
                document.getElementById('readerTitle').innerText = blog.title;
                document.getElementById('readerAuthor').innerText = blog.author;
                document.getElementById('readerDate').innerText = blog.date;
                document.getElementById('readerContent').innerText = blog.content;
                switchView('reader-view');
            };
            
            // Cursor interactions for new elements
            card.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
            card.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
            
            blogGrid.appendChild(card);
        }
    });
    
    // Attach hover effects to static interactive elements
    document.querySelectorAll('.interactive').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
    });
}

function filterBlogs(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderBlogs();
}

// Init
renderBlogs();
