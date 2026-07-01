import React from 'react'

export default function Venue() {
  return (
    <main style={{ paddingTop: 60 }}>

      {/* Full-width hero image */}
      <div style={{ width: '100%', height: 'clamp(320px, 55vw, 620px)', overflow: 'hidden', position: 'relative' }}>
        <img
          src="/media/venue_bg.png"
          alt="Quinta do Alferes de Crasto"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.35) 100%)'
        }} />
        <p style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 500,
          letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
          whiteSpace: 'nowrap',
        }}>
          The Celebration Will Take Place At
        </p>
      </div>

      {/* Main content */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(60px,8vw,100px) clamp(24px,6vw,80px)' }}>

        {/* Venue name + address — centered */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px,7vw,80px)' }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: 400, color: 'var(--burgundy)', lineHeight: 1.15, marginBottom: 16,
          }}>
            Quinta do Alferes de Crasto
          </h1>
          <p style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 500,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-muted)',
          }}>
            R. do Crasto, 4485-684 Vairão, Portugal
          </p>
        </div>

        {/* Two-column details */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start',
        }}>

          {/* Left: date + arrival */}
          <div style={{ borderTop: '1px solid var(--gold-light)', paddingTop: 32 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, fontWeight: 500,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: 16 }}>Date &amp; Time</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 40px)',
              fontStyle: 'italic', fontWeight: 300, color: 'var(--text-dark)', marginBottom: 24, lineHeight: 1.2 }}>
              16 May 2027
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 2,
              color: 'var(--text-muted)' }}>
              Please arrive by 4:15PM<br />
              Group transportation to the wedding<br />
              venue will be provided.<br />
              Departure details &amp; pick-up location to follow.
            </p>
          </div>

          {/* Right: reception + map */}
          <div style={{ borderTop: '1px solid var(--gold-light)', paddingTop: 32 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, fontWeight: 500,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: 16 }}>After the Ceremony</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 40px)',
              fontStyle: 'italic', fontWeight: 300, color: 'var(--burgundy)', marginBottom: 24, lineHeight: 1.2 }}>
              Reception to Follow
            </p>
            <a
              href="https://maps.google.com/?q=Quinta+do+Alferes+de+Crasto,+Vairao,+Portugal"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Open in Google Maps
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}
