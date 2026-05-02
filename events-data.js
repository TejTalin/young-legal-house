// Database of Events (5 Offline, 7 Online)
const eventsDatabase = [
    // === OFFLINE EVENTS (5) ===
    {
        id: 'off-1', type: 'offline', title: 'National Moot Court Competition', date: 'August 12-14, 2026', location: 'Delhi University',
        host: 'Faculty of Law, Delhi University',
        about: 'A premier 3-day moot court competition focusing on constitutional validity and emerging tech laws.',
        audience: 'Law students currently enrolled in 3-year or 5-year LL.B. programs.',
        details: 'Dates: Aug 12-14 | Time: 9:00 AM - 5:00 PM | Venue: Moot Court Hall, Campus Law Centre.',
        speakers: 'Hon. Justice A. Sharma, Adv. R. K. Singh',
        regLink: '#'
    },
    {
        id: 'off-2', type: 'offline', title: 'M&A Masterclass', date: 'September 5, 2026', location: 'Taj Lands End, Mumbai',
        host: 'Khaitan & Co.',
        about: 'An intensive one-day workshop covering the lifecycle of an M&A deal, due diligence, and negotiation tactics.',
        audience: 'Corporate lawyers, in-house counsel, and final-year law students.',
        details: 'Date: Sep 5 | Time: 10:00 AM - 4:00 PM | Networking lunch included.',
        speakers: 'Priya Mehta (Partner), Rahul Desai (Senior Associate)',
        regLink: '#'
    },
    {
        id: 'off-3', type: 'offline', title: 'IPR Prosecution Workshop', date: 'October 10, 2026', location: 'NLSIU Bangalore',
        host: 'Anand and Anand',
        about: 'Learn the practical aspects of filing patents and trademarks in India and internationally.',
        audience: 'IPR practitioners, patent agents, and law students.',
        details: 'Date: Oct 10 | Time: 11:00 AM - 3:00 PM | Bring your laptops for practical drafting sessions.',
        speakers: 'Pravin Anand, Safir Anand',
        regLink: '#'
    },
    {
        id: 'off-4', type: 'offline', title: 'Litigation Strategy Summit', date: 'November 20, 2026', location: 'Supreme Court Bar',
        host: 'Supreme Court Bar Association',
        about: 'A deep dive into cross-examination techniques and evidence handling in complex civil litigation.',
        audience: 'Litigating advocates with 1-5 years of experience.',
        details: 'Date: Nov 20 | Time: 2:00 PM - 6:00 PM | Venue: SCBA Lounge.',
        speakers: 'Mukul Rohatgi, Harish Salve',
        regLink: '#'
    },
    {
        id: 'off-5', type: 'offline', title: 'Tax Law Conclave', date: 'December 15, 2026', location: 'IHC, New Delhi',
        host: 'Lakshmikumaran & Sridharan',
        about: 'Discussing the latest amendments in GST and Direct Tax codes affecting multinational corporations.',
        audience: 'Chartered Accountants, Tax Lawyers, and Corporate Counsel.',
        details: 'Date: Dec 15 | Time: 9:30 AM - 5:30 PM | Venue: India Habitat Centre.',
        speakers: 'V. Lakshmikumaran, Senior Revenue Officials',
        regLink: '#'
    },

    // === ONLINE EVENTS (7) ===
    {
        id: 'on-1', type: 'online', title: 'Tech Law & AI Webinar', date: 'July 25, 2026', location: 'Zoom / Virtual',
        host: 'Young Legal House',
        about: 'Understanding the legal implications of Generative AI in copyright and data privacy.',
        audience: 'Anyone interested in the intersection of law and technology.',
        details: 'Date: July 25 | Time: 5:00 PM IST | Platform: Zoom.',
        speakers: 'Sanjay Krishnan (Tech Policy Expert)',
        regLink: '#'
    },
    {
        id: 'on-2', type: 'online', title: 'Virtual Arbitration Training', date: 'August 5, 2026', location: 'Microsoft Teams',
        host: 'Singapore International Arbitration Centre (SIAC)',
        about: 'How to conduct international commercial arbitrations entirely in a virtual environment.',
        audience: 'Arbitrators, mediators, and corporate dispute resolution lawyers.',
        details: 'Date: Aug 5 | Time: 2:30 PM IST | Platform: Microsoft Teams.',
        speakers: 'Gary Born, Lucy Reed',
        regLink: '#'
    },
    {
        id: 'on-3', type: 'online', title: 'Drafting Commercial Contracts', date: 'August 22, 2026', location: 'Google Meet',
        host: 'Cyril Amarchand Mangaldas',
        about: 'A step-by-step guide to drafting foolproof indemnification and limitation of liability clauses.',
        audience: 'Law students and junior corporate associates.',
        details: 'Date: Aug 22 | Time: 6:00 PM IST | Platform: Google Meet.',
        speakers: 'Cyril Shroff',
        regLink: '#'
    },
    {
        id: 'on-4', type: 'online', title: 'Cryptocurrency Regulations', date: 'September 12, 2026', location: 'Zoom / Virtual',
        host: 'Nishith Desai Associates',
        about: 'Analyzing the RBI guidelines and global compliance standards for crypto exchanges.',
        audience: 'Fintech lawyers, crypto founders, and legal researchers.',
        details: 'Date: Sep 12 | Time: 4:00 PM IST | Platform: Zoom.',
        speakers: 'Nishith Desai, Vaibhav Parikh',
        regLink: '#'
    },
    {
        id: 'on-5', type: 'online', title: 'Space Law Symposium', date: 'October 1, 2026', location: 'Webex',
        host: 'ISRO Legal Department',
        about: 'The future of space exploration contracts, satellite launching rights, and debris liability.',
        audience: 'Aviation and space law enthusiasts.',
        details: 'Date: Oct 1 | Time: 10:00 AM IST | Platform: Webex.',
        speakers: 'Dr. K. Sivan, International Space Law Experts',
        regLink: '#'
    },
    {
        id: 'on-6', type: 'online', title: 'Environmental Law Bootcamp', date: 'October 28, 2026', location: 'Zoom / Virtual',
        host: 'MC Mehta Environmental Foundation',
        about: 'Filing PILs and understanding the jurisdiction of the National Green Tribunal (NGT).',
        audience: 'NGO workers, environmental activists, and law students.',
        details: 'Date: Oct 28 | Time: 3:00 PM IST | Platform: Zoom.',
        speakers: 'M.C. Mehta',
        regLink: '#'
    },
    {
        id: 'on-7', type: 'online', title: 'International Humanitarian Law', date: 'November 10, 2026', location: 'Zoom / Virtual',
        host: 'ICRC (Red Cross)',
        about: 'The Geneva Conventions in modern warfare and the role of the ICC.',
        audience: 'Human rights lawyers and international law students.',
        details: 'Date: Nov 10 | Time: 5:00 PM IST | Platform: Zoom.',
        speakers: 'ICRC Legal Advisors',
        regLink: '#'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const offlineGrid = document.getElementById('offlineEventsGrid');
    const onlineGrid = document.getElementById('onlineEventsGrid');
    const modalOverlay = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (offlineGrid && onlineGrid) {
        eventsDatabase.forEach(event => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.innerHTML = `
                <h3 style="margin-bottom:10px; font-size:1.4rem;">${event.title}</h3>
                <p style="font-size:0.9rem; color:var(--grey-text); margin-bottom:5px;"><i class="fas fa-calendar" style="margin-right:8px;"></i> ${event.date}</p>
                <p style="font-size:0.9rem; color:var(--grey-text); margin-bottom:20px;"><i class="fas fa-map-marker-alt" style="margin-right:8px;"></i> ${event.location}</p>
                <button class="glass-pill view-details-btn" data-id="${event.id}">View Details</button>
            `;
            if (event.type === 'offline') offlineGrid.appendChild(card);
            else onlineGrid.appendChild(card);
        });

        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const event = eventsDatabase.find(e => e.id === btn.getAttribute('data-id'));
                if (event && modalBody) {
                    modalBody.innerHTML = `
                        <h2 style="font-size: 2rem; margin-bottom: 10px;">${event.title}</h2>
                        <span style="display:inline-block; padding:5px 12px; border-radius:20px; font-size:0.8rem; font-weight:bold; background:var(--text-color); color:var(--bg-color); margin-bottom:20px;">
                            ${event.type.toUpperCase()}
                        </span>
                        <h4 style="margin-bottom:5px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">About Hosting Organisation</h4>
                        <p style="color:var(--grey-text); margin-bottom:15px;">${event.host}</p>
                        <h4 style="margin-bottom:5px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">About the Event</h4>
                        <p style="color:var(--grey-text); margin-bottom:15px;">${event.about}</p>
                        <h4 style="margin-bottom:5px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Who can Attend?</h4>
                        <p style="color:var(--grey-text); margin-bottom:15px;">${event.audience}</p>
                        <h4 style="margin-bottom:5px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Details of the event</h4>
                        <p style="color:var(--grey-text); margin-bottom:15px;">${event.details}</p>
                        <h4 style="margin-bottom:5px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Speakers</h4>
                        <p style="color:var(--grey-text); margin-bottom:15px;">${event.speakers}</p>
                        <h4 style="margin-bottom:5px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">How to Register?</h4>
                        <p style="color: var(--text-color); font-weight: 700; font-style: italic; margin-bottom: 25px;">Interested candidates can register online via the link given at the end of the post.</p>
                        <a href="${event.regLink}" target="_blank" class="glass-pill" style="background:var(--text-color); color:var(--bg-color); font-weight:bold; padding:10px 25px;">Register Now</a>
                    `;
                    modalOverlay.classList.add('active');
                }
            });
        });

        if (closeModalBtn) closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
        if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('active'); });
    }
});
