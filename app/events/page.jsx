'use client';
import { useState, useEffect } from 'react';
import NetworkBackground from '@/components/NetworkBackground';

function Countdown() {
  const target = new Date('2026-06-15T00:00:00');
  const regOpen = new Date('2026-05-22T00:00:00');
  const now = new Date();
  const isRegOpen = now >= regOpen;

  const getTimeLeft = () => {
    const diff = target - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', margin: '40px 0 20px' }}>
        {[['Days', time.days], ['Hours', time.hours], ['Minutes', time.minutes], ['Seconds', time.seconds]].map(([label, val]) => (
          <div key={label} className="glass-card" style={{ minWidth: '100px', textAlign: 'center', padding: '24px 20px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1 }}>
              {pad(val)}
            </div>
            <div style={{ color: 'var(--grey-text)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
              {label}
            </div>
          </div>
        ))}
      </div>
      <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', textAlign: 'center' }}>
        15th June 2026 &mdash; {isRegOpen ? 'Registrations are open!' : 'Registrations open 22nd May 2026'}
      </p>
    </div>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', college: '', year: '', city: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const regOpen = new Date('2026-05-22T00:00:00');
  const isRegOpen = new Date() >= regOpen;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePayment = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Step 1: Create Razorpay order
      const orderRes = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 'create_order', ...form }),
      });
      const orderData = await orderRes.json();
      if (!orderData.orderId) throw new Error(orderData.error || 'Failed to create order');

      // Step 2: Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 15000, // ₹150 in paise
        currency: 'INR',
        name: 'Young Legal House',
        description: 'YLH Flagship Event — Trivia Registration',
        order_id: orderData.orderId,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: '#ffffff' },
        handler: async (response) => {
          // Step 3: Verify payment and save to Airtable
          const verifyRes = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              step: 'verify_and_save',
              ...form,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setSuccess(true);
          } else {
            setError('Payment verified but registration failed. Please contact connect.ylh@gmail.com');
          }
          setLoading(false);
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => {
        setError('Payment failed. Please try again.');
        setLoading(false);
      });
      rzp.open();
      setLoading(false);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (!isRegOpen) {
    return (
      <div className="glass-card" style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', padding: '40px' }}>
        <i className="fas fa-lock" style={{ fontSize: '2rem', color: 'var(--grey-text)', marginBottom: '16px', display: 'block' }}></i>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', marginBottom: '12px' }}>
          Registrations Open on 22nd May
        </h3>
        <p style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>
          Mark your calendar! Registration for the YLH Flagship Trivia Event opens on 22nd May 2026.
          Follow us on Instagram and LinkedIn to stay updated.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
          <a href="https://www.instagram.com/younglegalhouse/" target="_blank" rel="noopener noreferrer" className="glass-pill" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <i className="fab fa-instagram" style={{ marginRight: '8px' }}></i>Instagram
          </a>
          <a href="https://www.linkedin.com/company/young-legal-house/" target="_blank" rel="noopener noreferrer" className="glass-pill" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <i className="fab fa-linkedin" style={{ marginRight: '8px' }}></i>LinkedIn
          </a>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="glass-card" style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', padding: '40px' }}>
        <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#4CAF50', marginBottom: '16px', display: 'block' }}></i>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', marginBottom: '12px' }}>
          You&apos;re Registered!
        </h3>
        <p style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>
          Welcome to the YLH Flagship Trivia Event! A confirmation email has been sent to <strong>{form.email}</strong>.
          See you on 15th June 2026!
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', marginBottom: '6px' }}>
        Register Now
      </h2>
      <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem', marginBottom: '24px' }}>
        Registration Fee: <strong>₹150</strong> &nbsp;|&nbsp; Event Date: <strong>15th June 2026</strong>
      </p>

      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input name="name" type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input name="email" type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number *</label>
          <input name="phone" type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">College / Law School *</label>
          <input name="college" type="text" className="form-input" placeholder="Name of your institution" value={form.college} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Year of Study *</label>
          <select name="year" className="form-select" value={form.year} onChange={handleChange} required>
            <option value="">Select year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="5th Year">5th Year</option>
            <option value="LLM">LLM</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">City *</label>
          <input name="city" type="text" className="form-input" placeholder="Your city" value={form.city} onChange={handleChange} required />
        </div>

        {error && (
          <p style={{ color: '#ff6b6b', fontSize: '0.9rem', marginBottom: '16px' }}>{error}</p>
        )}

        <button type="submit" className="submit-btn" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Processing...' : 'Pay ₹150 & Register'}
        </button>

        <p style={{ color: 'var(--muted-text)', fontSize: '0.8rem', marginTop: '12px', textAlign: 'center' }}>
          Secured by Razorpay &nbsp;|&nbsp; You will receive a payment receipt and confirmation email
        </p>
      </form>
    </div>
  );
}

export default function EventsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '999px', padding: '6px 18px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--grey-text)' }}>
          Flagship Event 2026
        </div>
        <h1 className="section-title">YLH Legal Trivia Challenge</h1>
        <p style={{ color: 'var(--grey-text)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto' }}>
          Test your legal knowledge against the best minds across India. An exciting trivia competition
          covering Constitutional Law, Corporate Law, IPR, International Law, and more.
        </p>
        <Countdown />
        <RegistrationForm />
      </main>
    </>
  );
}
