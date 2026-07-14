import React from 'react'

const HOTELS = [
  {
    name: 'Renaissance Porto Lapa Hotel',
    url: 'https://www.marriott.com/en-us/hotels/opobr-renaissance-porto-lapa-hotel/overview/',
    image: '/media/renaissance_porto_hotel.jpg',
    description: 'Luxurious 5-star hotel in the elegant Lapa neighbourhood, featuring a stunning rooftop pool.',
    tier: 'Luxury',
  },
  {
    name: 'Jardins do Porto',
    url: 'https://jardinsdoporto.pt/',
    image: '/media/jardin_do_porto.png',
    description: 'Boutique hotel in a charming 19th-century building with beautifully appointed rooms.',
    tier: 'Boutique',
  },
  {
    name: 'Maison Cabral',
    url: 'https://maison-cabral.hotels-porto-pt.com/en/#main',
    image: '/media/maison-cabral-porto-pic-1.jpg',
    description: 'An intimate guesthouse combining historic Portuguese architecture with contemporary comfort.',
    tier: 'Boutique',
  },
  {
    name: 'The Social Hub Porto',
    url: 'https://www.thesocialhub.co/porto/',
    image: '/media/socialclub.png',
    description: 'A stylish modern stay with a lively social atmosphere, flexible spaces, and a convenient Porto location.',
    tier: 'Mid-range',
  },
  {
    name: 'Room Select Porto Suites',
    url: 'https://www.booking.com/hotel/pt/room-select-porto-suites.html',
    image: '/media/room_select.jpg',
    description: 'Spacious apartment-style suites ideal for longer stays, centrally located.',
    tier: 'Apartment',
  },
]

const TIER_COLORS = {
  Luxury: 'var(--burgundy)',
  Boutique: 'var(--gold)',
  'Mid-range': '#7a8a6a',
  Apartment: '#6a7a8a',
}

export default function Accommodation() {
  return (
    <main>
      {/* Header */}
      <section style={{
        textAlign: 'center', padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) 60px',
        background: 'linear-gradient(to bottom, var(--cream), var(--warm-white))'
      }}>
        <p className="section-label">Where to Stay</p>
        <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 300 }}>Accommodation</h1>
        <div className="divider" />
        <p style={{ maxWidth: 620, margin: '0 auto', lineHeight: 2, color: 'var(--text-muted)', fontSize: 15 }}>
          These are just recommendations — please feel free to stay anywhere you like!
          Porto has many wonderful options for every budget in and around the city centre.
        </p>
      </section>

      {/* Hotel grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 40px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 28
        }}>
          {HOTELS.map(hotel => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>

      </section>
    </main>
  )
}

function HotelCard({ hotel }) {
  return (
    <a
      href={hotel.url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        border: '1px solid var(--gold-light)', background: 'white',
        transition: 'box-shadow 0.3s, transform 0.3s',
        cursor: 'pointer',
        height: '100%',
        display: 'flex', flexDirection: 'column'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.10)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Image or placeholder */}
        {hotel.image ? (
          <img
            src={hotel.image}
            alt={hotel.name}
            style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div style={{
            height: 180,
            background: 'linear-gradient(135deg, var(--cream) 0%, var(--gold-light) 100%)',
          }} />
        )}

        <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{
            fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: TIER_COLORS[hotel.tier] || 'var(--gold)'
          }}>{hotel.tier}</span>
          <h3 style={{ fontSize: 17, fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.3 }}>{hotel.name}</h3>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)', marginTop: 4, flex: 1 }}>{hotel.description}</p>
          <p style={{ fontSize: 11, color: 'var(--burgundy)', marginTop: 12, letterSpacing: '0.1em' }}>View hotel →</p>
        </div>
      </div>
    </a>
  )
}
