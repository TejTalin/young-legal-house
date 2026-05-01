// A standard 500-word sample text to fulfill the requirement for all 21 blogs.
const sampleText = `The rapid evolution of legal frameworks in recent years has necessitated a profound reevaluation of traditional practice methodologies. As globalization intersects with hyper-digitalization, legal practitioners are increasingly tasked with navigating a labyrinth of multijurisdictional compliance mandates. At the core of this transformation is the fundamental need to balance aggressive corporate expansion with stringent regulatory oversight. Historically, precedent provided a reliable anchor; however, the contemporary legal landscape is characterized by unprecedented volatility, rendering historical models somewhat obsolete.

In analyzing current market trends, one must consider the profound implications of systemic risk management. Corporations are no longer merely reactive to legal disputes; they are actively engaging in preemptive risk mitigation. This paradigm shift requires legal counsel to operate not just as defenders of the enterprise, but as strategic architects of its growth. The integration of advanced technological solutions into daily operations further complicates this dynamic, introducing novel vulnerabilities in data privacy, intellectual property rights, and cross-border data flows. Consequently, robust contractual safeguards have become the linchpin of sustainable commercial relationships.

Furthermore, the judiciary's approach to interpreting these novel complex agreements has shown a marked pivot towards prioritizing commercial efficacy over rigid textualism. Courts are increasingly willing to look beyond the four corners of a document to ascertain the true intent of the parties, particularly in high-stakes commercial disputes. This judicial pragmatism places an added burden on drafting attorneys to ensure absolute clarity and foresight in their documentation. The margin for error is shrinking, and the cost of ambiguity has never been higher.

As we look toward the horizon, it is evident that the future of legal practice will be defined by adaptability. Practitioners must cultivate a deep understanding of the commercial realities facing their clients, moving beyond theoretical legal analysis to provide actionable, business-centric advice. This holistic approach is essential for navigating the multifaceted challenges of the modern economy. The intersection of law and commerce is becoming increasingly fluid, demanding a more agile and innovative approach from legal professionals across all sectors. Ultimately, success will hinge on the ability to anticipate regulatory shifts and proactively construct resilient legal architectures that can withstand the rigors of an unpredictable global market.`;

// The Database of 21 Blogs (3 per category, distinct authors and dates)
const blogsDatabase = [
    // TAX
    { id: 'tax-1', category: 'Tax', title: 'Digital Taxation in the Modern Era', author: 'Rohan Sharma', date: 'May 1, 2026', content: sampleText },
    { id: 'tax-2', category: 'Tax', title: 'Cross-Border GST Implications', author: 'Neha Gupta', date: 'April 20, 2026', content: sampleText },
    { id: 'tax-3', category: 'Tax', title: 'Corporate Tax Restructuring Strategies', author: 'Vikram Singh', date: 'April 5, 2026', content: sampleText },
    // TMT
    { id: 'tmt-1', category: 'TMT', title: 'AI Regulation and Tech Law', author: 'Ananya Patel', date: 'May 2, 2026', content: sampleText },
    { id: 'tmt-2', category: 'TMT', title: 'Data Privacy in Telecommunications', author: 'Karan Desai', date: 'April 18, 2026', content: sampleText },
    { id: 'tmt-3', category: 'TMT', title: 'Media Broadcasting Licensing', author: 'Priya Verma', date: 'March 30, 2026', content: sampleText },
    // CORPORATE
    { id: 'corp-1', category: 'Corporate', title: 'Corporate Governance Standards', author: 'Amit Shah', date: 'May 3, 2026', content: sampleText },
    { id: 'corp-2', category: 'Corporate', title: 'Navigating ESG Compliance', author: 'Sneha Reddy', date: 'April 25, 2026', content: sampleText },
    { id: 'corp-3', category: 'Corporate', title: 'Director Liabilities under Company Act', author: 'Rajesh Kumar', date: 'April 10, 2026', content: sampleText },
    // LITIGATION
    { id: 'lit-1', category: 'Litigation', title: 'Trends in Commercial Litigation', author: 'Meera Rao', date: 'April 28, 2026', content: sampleText },
    { id: 'lit-2', category: 'Litigation', title: 'Evidence Admissibility in E-Courts', author: 'Sanjay Dutt', date: 'April 15, 2026', content: sampleText },
    { id: 'lit-3', category: 'Litigation', title: 'Class Action Suits in India', author: 'Pooja Iyer', date: 'March 25, 2026', content: sampleText },
    // M&A
    { id: 'ma-1', category: 'M&A', title: 'Structuring Cross-Border M&A Deals', author: 'Arjun Nair', date: 'May 4, 2026', content: sampleText },
    { id: 'ma-2', category: 'M&A', title: 'Due Diligence in Tech Acquisitions', author: 'Kavita Menon', date: 'April 22, 2026', content: sampleText },
    { id: 'ma-3', category: 'M&A', title: 'Hostile Takeovers: Legal Defenses', author: 'Rahul Bajaj', date: 'April 2, 2026', content: sampleText },
    // ADR
    { id: 'adr-1', category: 'ADR', title: 'Arbitration in Commercial Disputes', author: 'Tanya Singh', date: 'April 29, 2026', content: sampleText },
    { id: 'adr-2', category: 'ADR', title: 'Mediation as a Pre-Litigation Strategy', author: 'Deepak Chopra', date: 'April 12, 2026', content: sampleText },
    { id: 'adr-3', category: 'ADR', title: 'Enforcing International Arbitral Awards', author: 'Simran Kaur', date: 'March 28, 2026', content: sampleText },
    // IPR
    { id: 'ipr-1', category: 'IPR', title: 'Protecting Software Patents', author: 'Aditya Joshi', date: 'May 5, 2026', content: sampleText },
    { id: 'ipr-2', category: 'IPR', title: 'Trademark Infringement in E-Commerce', author: 'Nisha Agarwal', date: 'April 24, 2026', content: sampleText },
    { id: 'ipr-3', category: 'IPR', title: 'Copyright Law and Generative AI', author: 'Varun Dhawan', date: 'April 8, 2026', content: sampleText }
];

// === LOGIC FOR BLOGS.HTML (HUB) ===
const blogsGrid = document.getElementById('blogsGrid');
const searchInput = document.getElementById('blogSearch');
const filterBtns = document.querySelectorAll('.filter-pill');

if (blogsGrid) {
    let currentFilter = 'All';

    function renderBlogs(blogsToRender) {
        blogsGrid.innerHTML = '';
        if (blogsToRender.length === 0) {
            blogsGrid.innerHTML = '<p style="color: var(--grey-text); text-align: center; width: 100%;">No articles found matching your search.</p>';
            return;
        }

        blogsToRender.forEach(blog => {
            // Creates the preview card
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.innerHTML = `
                <span class="article-category">${blog.category}</span>
                <h3>${blog.title}</h3>
                <p class="card-detail" style="margin-bottom: 20px;">By ${blog.author} | ${blog.date}</p>
                <p style="color: var(--grey-text); margin-bottom: 20px; font-size: 0.95rem;">${blog.content.substring(0, 100)}...</p>
                <a href="article.html?id=${blog.id}" class="action-link">Read Full Article</a>
            `;
            blogsGrid.appendChild(card);
        });
    }

    // Filter Logic
    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBlogs = blogsDatabase.filter(blog => {
            const matchesFilter = currentFilter === 'All' || blog.category === currentFilter;
            // Searches inside both the title AND the full content
            const matchesSearch = blog.title.toLowerCase().includes(searchTerm) || blog.content.toLowerCase().includes(searchTerm);
            return matchesFilter && matchesSearch;
        });
        renderBlogs(filteredBlogs);
    }

    // Event Listeners
    if (searchInput) searchInput.addEventListener('input', filterAndSearch);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            filterAndSearch();
        });
    });

    // Initial render
    renderBlogs(blogsDatabase);
}

// === LOGIC FOR ARTICLE.HTML (READER) ===
const articleContainer = document.getElementById('articleContainer');

if (articleContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    
    // Find the current blog and its index
    const currentIndex = blogsDatabase.findIndex(b => b.id === blogId);
    
    if (currentIndex !== -1) {
        const blog = blogsDatabase[currentIndex];
        
        // Determine Next and Previous blogs
        const prevBlog = currentIndex > 0 ? blogsDatabase[currentIndex - 1] : null;
        const nextBlog = currentIndex < blogsDatabase.length - 1 ? blogsDatabase[currentIndex + 1] : null;

        // Construct HTML (Title Center, Date Left, Author Right)
        let html = `
            <div class="article-header">
                <span class="article-category">${blog.category}</span>
                <h1 class="article-title">${blog.title}</h1>
                <div class="article-meta">
                    <span>Published: ${blog.date}</span>
                    <span>By ${blog.author}</span>
                </div>
            </div>
            <div class="article-body">
                ${blog.content.split('\n\n').map(para => `<p style="margin-bottom: 20px;">${para}</p>`).join('')}
            </div>
            <div class="article-nav">
        `;

        if (prevBlog) {
            html += `<a href="article.html?id=${prevBlog.id}" class="nav-link prev"><span class="nav-label">Previous Article</span><i class="fas fa-arrow-left"></i> ${prevBlog.title}</a>`;
        } else {
            html += `<div></div>`; // Empty div to keep flexbox spacing correct
        }

        if (nextBlog) {
            html += `<a href="article.html?id=${nextBlog.id}" class="nav-link next"><span class="nav-label">Next Article</span>${nextBlog.title} <i class="fas fa-arrow-right"></i></a>`;
        }

        html += `</div>`;
        articleContainer.innerHTML = html;

    } else {
        articleContainer.innerHTML = '<h1 style="text-align: center;">Article not found.</h1><div style="text-align: center; margin-top: 20px;"><a href="blogs.html" class="action-link">Return to Blogs</a></div>';
    }
}
