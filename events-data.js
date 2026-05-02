// Database of Events (5 Offline, 7 Online)
const eventsDatabase = [
    // === OFFLINE EVENTS (5) ===
    {
        id: 'off-1', type: 'offline', title: 'National Moot Court Competition 2026', date: 'August 12-14, 2026', location: 'Delhi University, New Delhi',
        host: 'Faculty of Law, Delhi University in association with Young Legal House',
        about: 'A premier 3-day moot court competition focusing on constitutional validity and emerging tech laws. Participants will argue before sitting High Court judges.',
        audience: 'Law students currently enrolled in 3-year or 5-year LL.B. programs.',
        details: 'Dates: August 12 to 14, 2026 | Time: 9:00 AM to 5:00 PM daily | Venue: Moot Court Hall, Campus Law Centre, DU.',
        speakers: 'Hon. Justice A. Sharma (Chief Guest), Adv. R. K. Singh (Senior Counsel)',
        regLink: '#'
    },
    {
        id: 'off-2', type: 'offline', title: 'Mergers & Acquisitions Masterclass', date: 'September 5, 2026', location: 'Taj Lands End, Mumbai',
        host: 'Khaitan & Co.',
        about: 'An intensive one-day workshop covering the lifecycle of an M&A deal, including term sheets, due diligence, and negotiation tactics.',
        audience: 'Corporate lawyers, in-house counsel, and final-year law students.',
        details: 'Date: September 5, 2026 | Time: 10:00 AM to 4:00 PM | Includes networking lunch.',
        speakers: 'Partners from the M&A division of Khaitan & Co.',
        regLink: '#'
    },
    {
        id: 'off-3', type: 'offline', title: 'Intellectual Property Rights Summit', date: 'October 10, 2026', location: 'NALSAR, Hyderabad',
        host: 'NALSAR University of Law',
        about: 'A conference discussing the impact of Generative AI on copyright laws and patenting software in India.',
        audience: 'Academics, legal practitioners, and IP enthusiasts.',
        details: 'Date: October 10, 2026 | Venue: Main Auditorium, NALSAR Campus.',
        speakers: 'Dr. V. Menon (IP Scholar), Tech Legal Heads from Google & Microsoft India.',
        regLink: '#'
    },
    {
        id: 'off-4', type: 'offline', title: 'Alternative Dispute Resolution Conclave', date: 'November 18, 2026', location: 'SIAC Branch, Bengaluru',
        host: 'Singapore International Arbitration Centre (SIAC)',
        about: 'Exploring trends in cross-border commercial arbitration and the enforceability of arbitral awards in India.',
        audience: 'Arbitrators, mediators, and commercial litigation lawyers.',
        details: 'Date: November 18, 2026 | Time: 2:00 PM to 7:00 PM | High tea included.',
        speakers: 'Senior Members of the SIAC Registry.',
        regLink: '#'
    },
    {
        id: 'off-5', type: 'offline', title: 'Legal Tech & Innovation Bootcamp', date: 'December 4, 2026', location: 'IIT Kharagpur',
        host: 'Rajiv Gandhi School of Intellectual Property Law',
        about: 'A hands-on workshop teaching young lawyers how to use AI drafting tools and practice e-discovery.',
        audience: 'Law students and junior associates.',
        details: 'Date: December 4, 2026 | Venue: Computer Lab 3, RGSOIPL.',
        speakers: 'Founders of leading Indian LegalTech Startups.',
        regLink: '#'
    },

    // === ONLINE EVENTS (7) ===
    {
        id: 'on-1', type: 'online', title: 'Webinar: Navigating Space Law', date: 'July 20, 2026', location: 'Zoom / Virtual',
        host: 'Young Legal House',
        about: 'An introductory webinar on the commercialization of space, satellite launching regulations, and international space treaties.',
        audience: 'Anyone interested in international law and space exploration.',
        details: 'Date: July 20, 2026 | Time: 6:00 PM IST | Platform: Zoom.',
        speakers: 'Dr. S. Nair (Ex-ISRO Legal Advisor)',
        regLink: '#'
    },
    {
        id: 'on-2', type: 'online', title: 'Virtual Contract Drafting Workshop', date: 'July 28, 2026', location: 'Google Meet',
        host: 'L&L Partners',
        about: 'Learn the foundational skills of drafting airtight commercial contracts, avoiding common pitfalls, and formatting boilerplate clauses.',
        audience: 'Law students from 2nd year onwards.',
        details: 'Date: July 28, 2026 | Time: 4:00 PM to 6:00 PM IST.',
        speakers: 'Senior Associates from the Corporate General team.',
        regLink: '#'
    },
    {
        id: 'on-3', type: 'online', title: 'Data Privacy Masterclass (DPDP Act)', date: 'August 5, 2026', location: 'Microsoft Teams',
        host: 'International Association of Privacy Professionals (IAPP)',
        about: 'A comprehensive breakdown of India’s Digital Personal Data Protection Act and compliance requirements for corporations.',
        audience: 'Tech lawyers, compliance officers, and law students.',
        details: 'Date: August 5, 2026 | Time: 5:00 PM IST.',
        speakers: 'Certified Information Privacy Professionals (CIPP/A).',
        regLink: '#'
    },
    {
        id: 'on-4', type: 'online', title: 'Start-up Funding Legalities', date: 'August 22, 2026', location: 'Zoom / Virtual',
        host: 'Sequoia Capital Legal Team',
        about: 'Understanding Series A & B funding rounds, Founder Vesting, and Shareholder Agreements (SHA).',
        audience: 'Start-up founders and corporate legal enthusiasts.',
        details: 'Date: August 22, 2026 | Time: 7:00 PM IST.',
        speakers: 'In-house Counsel at Sequoia Capital.',
        regLink: '#'
    },
    {
        id: 'on-5', type: 'online', title: 'Virtual Tax Structuring Seminar', date: 'September 12, 2026', location: 'Webex',
        host: 'PricewaterhouseCoopers (PwC) India',
        about: 'Analyzing recent amendments in direct tax codes and strategies for corporate tax optimization.',
        audience: 'Tax practitioners, CA students, and law students.',
        details: 'Date: September 12, 2026 | Time: 3:00 PM IST.',
        speakers: 'Directors from the PwC Tax Advisory Division.',
        regLink: '#'
    },
    {
        id: 'on-6', type: 'online', title: 'Criminal Litigation Strategy Session', date: 'September 30, 2026', location: 'Zoom / Virtual',
        host: 'Young Legal House',
        about: 'A breakdown of high-profile white-collar crime defense strategies, bail proceedings, and evidence handling.',
        audience: 'Budding litigators and law students.',
        details: 'Date: September 30, 2026 | Time: 6:00 PM IST.',
        speakers: 'Advocate Siddharth Luthra (Former ASG).',
        regLink: '#'
    },
    {
        id: 'on-7', type: 'online', title: 'International Human Rights Conference', date: 'October 24, 2026', location: 'Virtual Conference Hall',
        host: 'Amnesty International & YLH',
        about: 'Discussions on global refugee crises, international humanitarian law, and the role of the UN.',
        audience: 'Open to all global citizens.',
        details: 'Date: October 24, 2026 (UN Day) | Time: 1:00 PM to 6:00 PM IST.',
        speakers: 'Human Rights Activists and UN Representatives.',
        regLink: '#'
    }
];

// === RENDER AND MODAL LOGIC ===
const offlineGrid = document.getElementById('offlineEventsGrid');
const onlineGrid = document.getElementById('onlineEventsGrid');
const modalOverlay = document.getElementById('eventModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

function renderEvents() {
    if (!offlineGrid || !onlineGrid) return;

    eventsDatabase.forEach(event => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.style.cursor = 'pointer'; // Makes it obvious it can be clicked
        
        const badgeClass = event.type === 'offline' ? 'offline' : 'online';
        const badgeText = event.type === 'offline' ? 'Offline Event' : 'Online Event';

        card.innerHTML = `
            <span class="event-badge ${badgeClass}">${badgeText}</span>
            <h3>${event.title}</h3>
            <p class="card-date"><i class="far fa-calendar-alt"></i> ${event.date}</p>
            <p class="card-detail"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <button class="glass-pill" style="margin-top: 15px; width: 100%;">View Details</button>
        `;

        // Add click event to open Modal
        card.addEventListener('click', () => openModal(event));

        if (event.type === 'offline') {
            offlineGrid.appendChild(card);
        } else {
            onlineGrid.appendChild(card);
        }
    });
}

function openModal(event) {
    // Populate the modal with exactly the details requested
    modalBody.innerHTML = `
        <h2 style="font-size: 2rem; margin-bottom: 10px;">${event.title}</h2>
        <span class="event-badge ${event.type === 'offline' ? 'offline' : 'online'}">${event.type.toUpperCase()}</span>
        
        <h4>About Hosting Organisation</h4>
        <p>${event.host}</p>

        <h4>About the Event</h4>
        <p>${event.about}</p>

        <h4>Who can Attend?</h4>
        <p>${event.audience}</p>

        <h4>Details of the event</h4>
        <p>${event.details}</p>

        <h4>Speakers</h4>
        <p>${event.speakers}</p>

        <h4>How to Register?</h4>
        <p style="color: var(--text-color); font-weight: 700; font-style: italic;">Interested candidates can register online via the link given at the end of the post.</p>
        
        <a href="${event.regLink}" target="_blank" class="register-btn">Register Now</a>
    `;

    // Show Modal
    modalOverlay.classList.add('active');
}

// Close Modal Logic
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });
}

// Close modal if user clicks outside the glass box
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}

// Run the render function when the page loads
renderEvents();
const offlineGrid = document.getElementById('offlineEventsGrid');
const onlineGrid = document.getElementById('onlineEventsGrid');
const modalOverlay = document.getElementById('eventModal');
const modalBody = document.getElementById('modalBody');

function renderEvents() {
    if(!offlineGrid || !onlineGrid) return;

    eventsDatabase.forEach(event => {
        const card = document.createElement('div');
        card.className = 'glass-card'; // Matches Master CSS
        card.innerHTML = `
            <h3 style="margin-bottom:10px;">${event.title}</h3>
            <p style="font-size:0.85rem; opacity:0.8; margin-bottom:5px;"><i class="fas fa-calendar"></i> ${event.date}</p>
            <p style="font-size:0.85rem; opacity:0.8; margin-bottom:15px;"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <button class="glass-pill" onclick="showEventDetails('${event.id}')">View Details</button>
        `;
        
        if(event.type === 'offline') offlineGrid.appendChild(card);
        else onlineGrid.appendChild(card);
    });
}

function showEventDetails(id) {
    const event = eventsDatabase.find(e => e.id === id);
    if(!event || !modalBody) return;

    modalBody.innerHTML = `
        <h2 style="color:var(--text-color);">${event.title}</h2>
        <hr style="margin:15px 0; border:0; border-top:1px solid var(--glass-border);">
        <p><strong>Host:</strong> ${event.host}</p>
        <p style="margin-top:10px;">${event.about}</p>
        <div style="margin-top:20px;">
            <a href="${event.regLink}" class="glass-pill" style="background:var(--text-color); color:var(--bg-color);">Register Now</a>
        </div>
    `;
    modalOverlay.classList.add('show'); // Logic matches Master CSS/JS
}

document.addEventListener('DOMContentLoaded', renderEvents);
