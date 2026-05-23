'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import EventBrochureTile from '@/components/EventBrochureTile';

export default function EventsPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ paddingTop: '24px' }}>
        <h1 className="section-title">Lex Noctis</h1>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '10px' }}>Cinematic Criminal Law Trivia</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: '10px' }}>
            Step into an immersive and intellectually engaging experience where law meets cinema. This unique event is designed as a
            cinematic storyline-based criminal law trivia competition, challenging participants to apply their legal knowledge,
            analytical reasoning, and presence of mind in a fast-paced virtual environment.
          </p>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: '10px' }}>
            Participants will observe a specially curated live-streamed storyline on YouTube, following which criminal law-based
            questions will appear during the stream. Each question requires participants to scan a QR code displayed on the screen
            and submit responses within the stipulated time limit.
          </p>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            The event tests understanding of criminal law principles, interpretation skills, and accurate response under time-bound
            conditions through a powerful blend of storytelling and legal analysis.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '20px', padding: 0, overflow: 'hidden' }}>
          <img
            src="/lex-noctis-launch-poster.jpeg"
            alt="Lex Noctis poster"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              aspectRatio: '3 / 4',
            }}
          />
        </div>

        <EventBrochureTile />

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Who can Participate?</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: 0, lineHeight: '1.8' }}>
            This event is exclusively open to law students pursuing LL.B. (in any year) or LL.M. programs from recognized institutions
            across India.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Flow of Event</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            The event is conducted via YouTube live stream where participants observe the storyline, respond to criminal law questions
            appearing at intervals, scan the on-screen QR code for each question, and submit answers within the prescribed time, with
            each question active for approximately 1 to 1.5 minutes.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Participation Guidelines</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Participants should arrange two devices (one for live stream viewing and one for QR response submission), ensure stable
            internet, submit within time, avoid misconduct, follow organizer instructions, and note that organizers are not responsible
            for participant-side technical issues while retaining rights to revise schedule, format, or rules if required.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Evaluation Criteria</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Evaluation is based on accuracy, legal relevance, and promptness of submission. Answers are assessed by the internal panel,
            including qualified legal professionals, and the panel decision remains final and binding.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Prize & Recognition</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: '8px' }}>
            <strong>Winner(s):</strong> Cash Prize of Rs. 3,000/- and Certificate of Appreciation.
          </p>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            <strong>Runner Up(s):</strong> Cash Prize of Rs. 2,000/- and Certificate of Appreciation.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Registration Fee & Deadline</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: 0, lineHeight: '1.8' }}>
            The registration fee is Rs. 150/- INR per participant, and the last date for registration is 13 June 2026.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px' }}>Important Note</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Participants are encouraged to read all event instructions carefully before the competition. This event promotes legal
            awareness, analytical thinking, and practical criminal law application through an innovative format. For queries, contact
            connect.ylh@gmail.com.
          </p>
        </div>

        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px' }}>Registration</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: '14px' }}>
            Continue to the dedicated registration page to submit your details.
          </p>
          <Link href="/events/register" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Register for Trivia
          </Link>
        </div>
      </main>
    </>
  );
}
