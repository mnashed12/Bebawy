import React from 'react'

export default function Gifts() {
  return (
    <main style={{ paddingTop: 60 }}>
      {/* Header */}
      <section style={{
        textAlign: 'center', padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) 60px',
        background: 'linear-gradient(to bottom, var(--cream), var(--warm-white))'
      }}>
        <p className="section-label">Gifts</p>
        <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 300 }}>A Note on Gifts</h1>
        <div className="divider" />
      </section>

      {/* Image + Content */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 40px 100px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(24px, 4vw, 56px)',
          alignItems: 'center'
        }}>
          <div>
            <img
              src="/media/proposal_1.jpeg"
              alt="The proposal"
              style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
            />
            <p style={{
              marginTop: 14,
              textAlign: 'center',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontStyle: 'italic',
              color: 'var(--text-dark)'
            }}>Kyoto, Japan · November 2024</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontStyle: 'italic',
              lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: 40
            }}>
              "Your presence at our wedding is a gift enough for us."
            </p>
            <div className="divider" />
            <p style={{ lineHeight: 2, color: 'var(--text-muted)', fontSize: 15, marginTop: 40, marginBottom: 50 }}>
              Should you choose to honor us with a gift, we've created funds for the adventures ahead—our honeymoon
              and future home improvement projects! Your generosity will help us make memories we'll treasure for
              years to come, and we are so grateful for your love and support.
            </p>

            <a
              href="https://withjoy.com/BeMyBebawy/registry?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ marginTop: 8 }}
            >
              View Registry
            </a>

            <div style={{ marginTop: 60 }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontStyle: 'italic',
                color: 'var(--burgundy)'
              }}>
                Carolyn &amp; Marco
              </p>
              <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 10 }}>
                See you in Portugal!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function GiftOption({ icon, title, description }) {
  return (
    <div style={{
      padding: '36px 24px', border: '1px solid var(--gold-light)', background: 'white',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center'
    }}>
      <span style={{ fontSize: 42 }}>{icon}</span>
      <h3 style={{ fontSize: 18, fontWeight: 400 }}>{title}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--text-muted)' }}>{description}</p>
    </div>
  )
}
