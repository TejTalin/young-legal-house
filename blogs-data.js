document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. BLOGS GRID & SEARCH LOGIC ---
    const blogsGrid = document.getElementById('blogsGrid');
    const searchInput = document.getElementById('searchInput'); // The Search Bar
    
    if (blogsGrid) {
        let currentFilter = 'All';
        let currentSearch = '';

        function renderBlogs() {
            blogsGrid.innerHTML = '';
            
            // 1. Filter by Category
            let filtered = currentFilter === 'All' 
                ? database 
                : database.filter(b => b.category === currentFilter);

            // 2. Filter by Search Word (Looks inside the 500-word content!)
            if (currentSearch.trim() !== '') {
                const term = currentSearch.toLowerCase();
                filtered = filtered.filter(b => 
                    b.content.toLowerCase().includes(term) || 
                    b.title.toLowerCase().includes(term)
                );
            }

            // 3. Render the Cards
            if (filtered.length === 0) {
                blogsGrid.innerHTML = '<p style="text-align:center; width:100%; color:var(--grey-text);">No articles found matching your search.</p>';
                return;
            }

            filtered.forEach(blog => {
                const card = document.createElement('div');
                card.className = 'glass-card'; 
                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.8rem; color:var(--grey-text);">
                        <span>${blog.category}</span>
                        <span>${blog.date}</span>
                    </div>
                    <h3 style="margin-bottom:15px; font-size:1.3rem;">${blog.title}</h3>
                    <p style="font-size:0.95rem; color:var(--grey-text); margin-bottom:20px;">${blog.excerpt}</p>
                    <a href="article.html?id=${blog.id}" class="action-link" style="font-size:0.9rem;">Read Full Article &rarr;</a>
                `;
                blogsGrid.appendChild(card);
            });
        }

        // Search Bar Event Listener
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                renderBlogs();
            });
        }

        // Category Filter Buttons
        document.querySelectorAll('.filter-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter');
                renderBlogs();
            });
        });

        renderBlogs();
    }

    // --- 2. FULL ARTICLE LOGIC ---
    const articleContainer = document.getElementById('articleContainer');
    
    if (articleContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));
        const blogIndex = database.findIndex(b => b.id === articleId);
        
        if (blogIndex !== -1) {
            const blog = database[blogIndex];
            const prevBlog = database[blogIndex - 1];
            const nextBlog = database[blogIndex + 1];

            // Renders exactly as requested: Category top, Title Center, Author/Date below. Text Justified.
            let html = `
                <div class="article-header" style="text-align:center; margin-bottom: 40px;">
                    <span style="font-size: 0.9rem; color: var(--grey-text); text-transform: uppercase; letter-spacing: 2px;">${blog.category}</span>
                    <h1 style="font-size: 2.5rem; margin: 15px 0; font-family: 'Lora', serif;">${blog.title}</h1>
                    <div style="display:flex; justify-content:space-between; color: var(--grey-text); font-style: italic; font-size: 1rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 20px;">
                        <span>Published: ${blog.date}</span>
                        <span>By ${blog.author}</span>
                    </div>
                </div>
                <div class="article-body" style="line-height: 1.9; font-size: 1.15rem; margin-bottom: 60px; text-align: justify; font-family: 'Lora', serif;">
                    ${blog.content.split('\n\n').map(para => `<p style="margin-bottom: 20px;">${para}</p>`).join('')}
                </div>
                <div style="display:flex; justify-content:space-between; border-top: 1px solid var(--glass-border); padding-top:30px; margin-bottom: 40px;">
            `;

            if (prevBlog) html += `<a href="article.html?id=${prevBlog.id}" style="color:var(--text-color); text-decoration:none; font-weight:bold;">&larr; Previous: ${prevBlog.title}</a>`;
            else html += `<div></div>`;

            if (nextBlog) html += `<a href="article.html?id=${nextBlog.id}" style="color:var(--text-color); text-decoration:none; font-weight:bold; text-align:right;">Next: ${nextBlog.title} &rarr;</a>`;

            html += `</div>`;
            articleContainer.innerHTML = html;
        } else {
            articleContainer.innerHTML = '<h1 style="text-align: center;">Article not found.</h1>';
        }
    }
});
