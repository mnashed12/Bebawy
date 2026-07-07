import React from 'react'

export default function Travel() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{
        textAlign: 'center', padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) 60px',
        background: 'linear-gradient(to bottom, var(--cream), var(--warm-white))'
      }}>
        <p className="section-label">Getting Here</p>
        <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 300 }}>Travel Recommendations</h1>
        <div className="divider" />
        <p style={{ maxWidth: 580, margin: '0 auto', lineHeight: 2, color: 'var(--text-muted)', fontSize: 15 }}>
          Portugal is an incredible country to explore. We strongly recommend
          arriving a few days early to soak it all in.
        </p>
      </section>

      {/* Airports */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 40px 60px' }}>
        <div className="airport-grid">
          <AirportCard
            code="OPO"
            name="Porto Airport"
            recommended
            body="The nearest airport — approximately 20 minutes drive into the city centre. There are now direct flights from JFK to Porto through Delta."
          />
          <AirportCard
            code="LIS"
            name="Lisbon Airport"
            body="Located ~3 hours south of Porto and accessible by train. Lisbon is a wonderful starting or ending point for exploring Portugal's largest city — we strongly recommend a visit."
          />
        </div>
      </section>

      {/* Portugal map visual */}
      <section style={{ padding: '70px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="portugal-flex">
        <div style={{ flex: '1 1 300px' }}>
          <p className="section-label">On the Map</p>
          <h2 style={{ fontSize: 38, fontWeight: 300, marginBottom: 20 }}>Portugal</h2>
          <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', fontSize: 15, marginBottom: 16 }}>
            Vairão (where the venue is located) sits just north of Porto in the Minho region —
            one of Portugal's most scenic wine-growing areas.
          </p>
          <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', fontSize: 15 }}>
            If you have time, we strongly recommend exploring Porto, the Douro Valley,
            and Lisbon — a few of our favourite places in the world.
          </p>
        </div>
        {/* Portugal map photo */}
        <div style={{ flex: '0 0 clamp(200px, 35vw, 340px)' }}>
          <img
            src="/media/portugal_map.png"
            alt="Map of Portugal"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        </div>{/* end portugal-flex */}
      </section>

      {/* Suggested Activities */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px 70px' }}>
        <div className="event-block-grid">
          <div className="event-image">
            <img
              src="/media/buildings.png"
              alt="Suggested activities in Porto"
              style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block', background: '#f7f2ea' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 300, marginBottom: 16 }}>Suggested Activities</h2>
            <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', fontSize: 14, marginBottom: 18 }}>
              Consider this our little guide to Portugal. From slow mornings and unforgettable dinners to scenic viewpoints and hidden gems, we've gathered a few of our favorite recommendations to help you make the most of your visit. We hope you love exploring it as much as we do.
            </p>
            <a href="https://maps.app.goo.gl/XnMWjJtQYw34HmMAA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--burgundy)', textDecoration: 'underline', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Open activity guide
            </a>
          </div>
        </div>
      </section>

      {/* Getting around */}
      <section style={{
        background: 'var(--cream)', padding: '70px 40px'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Getting Around</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px,4vw,40px)', fontWeight: 300, marginBottom: 50 }}>How to Navigate Porto</h2>
          <div className="tips-grid">
            <TipCard
              title="Taxis & Uber"
              body="Readily available throughout Porto and relatively inexpensive. This is our recommended option for getting around the city."
            />
            <TipCard
              title="Train"
              body="Porto has an excellent metro and train network. The metro connects the airport directly to the city centre."
            />
            <TipCard
              title="Car Rental"
              body="We do not suggest renting a car in Porto city centre — streets can be quite narrow and congested, and parking is difficult."
            />
          </div>

          <p style={{ marginTop: 22, fontSize: 14, color: 'var(--text-muted)', textAlign: 'center' }}>
            If you have any questions, please check our Q &amp; A section below!{' '}
            <a href="/qa" style={{ color: 'var(--burgundy)', textDecoration: 'underline' }}>View Q&amp;A</a>
          </p>
        </div>
      </section>
    </main>
  )
}

function AirportCard({ code, name, body, recommended }) {
  return (
    <div style={{
      padding: '36px 28px',
      border: `1px solid ${recommended ? 'var(--burgundy)' : 'var(--gold-light)'}`,
      position: 'relative',
      background: 'white'
    }}>
      {recommended && (
        <span style={{
          position: 'absolute', top: -1, right: 20,
          background: 'var(--burgundy)', color: 'white',
          fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
          padding: '4px 10px'
        }}>Nearest</span>
      )}
      <p style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: 52, fontWeight: 300,
        lineHeight: 1, color: 'var(--gold)', marginBottom: 4
      }}>{code}</p>
      <h3 style={{ fontSize: 20, fontWeight: 400, marginBottom: 16 }}>{name}</h3>
      <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: 14 }}>{body}</p>
    </div>
  )
}

function TipCard({ icon, title, body }) {
  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #ffffff 0%, #fbf8f3 100%)',
      border: '1px solid rgba(200, 169, 110, 0.34)',
      boxShadow: '0 10px 30px rgba(43, 31, 31, 0.06)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'left',
      gap: 16,
      padding: '28px 24px 24px',
      minHeight: 260,
      transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease',
    }}>
      <div style={{ height: 3, width: 52, background: 'var(--gold)', opacity: 0.8 }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {icon ? (
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            display: 'grid', placeItems: 'center',
            background: 'rgba(107, 31, 42, 0.08)',
            color: 'var(--burgundy)',
            fontSize: 22,
          }}>{icon}</div>
        ) : (
          <div style={{ fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Porto Guide
          </div>
        )}

        <h3 style={{
          fontSize: 'clamp(20px, 2.2vw, 24px)',
          fontWeight: 400,
          lineHeight: 1.2,
          color: 'var(--text-dark)'
        }}>{title}</h3>

        <p style={{
          fontSize: 13,
          lineHeight: 1.85,
          color: 'var(--text-muted)',
          margin: 0,
        }}>{body}</p>
      </div>

      <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--burgundy)', opacity: 0.9 }}>
        Recommended
      </div>
    </div>
  )
}
