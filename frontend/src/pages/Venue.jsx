import React from 'react'

export default function Venue() {
  return (
    <main style={{ padding: 0, margin: 0 }}>

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
      </div>
    </main>
  )
}
