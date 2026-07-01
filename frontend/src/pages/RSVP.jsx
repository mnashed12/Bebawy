import React, { useState } from 'react'

const API = '/api/rsvp/'

const EVENTS = [
  { id: 'welcome_dinner', label: 'Welcome Dinner — Friday May 14th' },
  { id: 'day_before', label: 'Day Before Activities — Saturday May 15th' },
  { id: 'wedding', label: 'Wedding — Sunday May 16th' },
]

export default function RSVPPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 0,
    events: ['welcome_dinner', 'day_before', 'wedding'],
    dietary: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  function toggle(id) {
    setForm(f => ({
      ...f,
      events: f.events.includes(id) ? f.events.filter(e => e !== id) : [...f.events, id]
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const payload = {
        name: form.name,
        email: form.email,
        attending: form.attending === 'yes',
        guests: parseInt(form.guests) || 0,
        message: [
          form.dietary ? `Dietary: ${form.dietary}` : '',
          form.events.length ? `Events: ${form.events.join(', ')}` : '',
          form.message,
        ].filter(Boolean).join(' | '),
      }
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{
        textAlign: 'center', padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) 60px',
        background: 'linear-gradient(to bottom, var(--cream), var(--warm-white))'
      }}>
        <p className="section-label">You're invited</p>
        <h1 style={{ fontSize: 'clamp(36px,6vw,56px)', fontWeight: 300 }}>RSVP</h1>
        <div className="divider" />
        <p style={{ maxWidth: 520, margin: '0 auto', lineHeight: 2, color: 'var(--text-muted)', fontSize: 15 }}>
          We kindly ask for your responses to <strong>all</strong> events by{' '}
          <em>February 1st, 2027</em>.
        </p>
      </section>

      {/* Form */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '60px 40px 100px' }}>
        {status === 'done' ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="divider" />
            <h2 style={{ fontSize: 46, fontWeight: 300, color: 'var(--burgundy)', marginBottom: 20 }}>
              Thank you!
            </h2>
            <p style={{ fontSize: 16, lineHeight: 2, color: 'var(--text-muted)' }}>
              Your RSVP has been received. We look forward to celebrating with you.
            </p>
            <p style={{ marginTop: 12, fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontStyle: 'italic' }}>
              — Carolyn &amp; Marco
            </p>
            <div className="divider" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="rsvp-form-grid">
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Full Name</label>
                <input
                  required value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Email Address</label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Will you be attending?</label>
                <select value={form.attending} onChange={e => setForm({ ...form, attending: e.target.value })}>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Unfortunately no</option>
                </select>
              </div>
              <div className="form-group">
                <label>Additional Guests</label>
                <input
                  type="number" min="0" max="10" value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                />
              </div>
            </div>

            {form.attending === 'yes' && (
              <>
                <div style={{ marginBottom: 20 }}>
                  <p style={{
                    fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--text-muted)', marginBottom: 14
                  }}>Which events will you attend?</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {EVENTS.map(ev => (
                      <label key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontSize: 14, color: 'var(--text-dark)' }}>
                        <input
                          type="checkbox"
                          checked={form.events.includes(ev.id)}
                          onChange={() => toggle(ev.id)}
                          style={{ width: 'auto', accentColor: 'var(--burgundy)' }}
                        />
                        {ev.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Dietary Requirements</label>
                  <input
                    value={form.dietary}
                    onChange={e => setForm({ ...form, dietary: e.target.value })}
                    placeholder="Any allergies or dietary needs?"
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Message for the couple (optional)</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="A personal note…"
              />
            </div>

            {status === 'error' && (
              <p style={{ color: 'var(--burgundy)', fontSize: 13, marginBottom: 16 }}>
                Something went wrong — please try again or contact us directly.
              </p>
            )}

            <button type="submit" className="btn" disabled={status === 'sending'} style={{ width: '100%', padding: 18 }}>
              {status === 'sending' ? 'Sending…' : 'Send RSVP'}
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

