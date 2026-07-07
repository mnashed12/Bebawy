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
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(36px,5vw,56px) clamp(24px,6vw,80px) clamp(28px,4vw,42px)' }}>

        {/* Venue name + address — centered */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(12px,2vw,20px)' }}>
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
      </section>
    </main>
  )
}
