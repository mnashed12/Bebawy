import React from 'react'

export default function Events() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{
        textAlign: 'center', padding: 'clamp(56px,7vw,72px) clamp(16px,5vw,40px) 32px',
        background: 'linear-gradient(to bottom, var(--cream), var(--warm-white))'
      }}>
        <p className="section-label">Join us</p>
        <h1 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 300 }}>Pre-Wedding Events</h1>
        <div className="divider" />
        <p style={{ maxWidth: 600, margin: '0 auto', lineHeight: 2, color: 'var(--text-muted)', fontSize: 15 }}>
          We'd love to share these moments with you. Please RSVP for each event
          by <strong>February 1st, 2027</strong>.
        </p>
      </section>

      {/* Events */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '42px 40px 28px' }}>

        {/* Douro Valley Day Trip */}
        <EventBlock
          title="Douro Valley Vineyards Day Trip"
          description="A trip to Porto is not complete without seeing the Douro Valley. It is the world's oldest wine region and a UNESCO World Heritage Site. We are hosting an optional private group tour to two local boutique wineries. The day includes a tour of the vineyards, 11 wine tastings, a farm-to-table gourmet lunch, and a private boat tour on the Douro River for approximately EUR 95 per person."
          details={[
            { label: 'Duration', value: 'Approximately 10 hours (full-day tour)' },
            { label: 'Transportation', value: 'Round-trip transportation included' },
            { label: 'Note', value: 'If you would like to attend, please RSVP below. We will reach out with additional details.' },
          ]}
          rsvpNote={<a href="https://docs.google.com/forms/d/e/1FAIpQLScojRljCu3vwIZvTmZRs7Nn8mK0YJJsjz4C3dUo9-E9Go-IRA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--burgundy)', textDecoration: 'underline' }}>RSVP for the day trip</a>}
          image="/media/valley.jpg"
          reverse
        />

        <div className="divider" style={{ margin: '42px auto' }} />

        {/* Welcome Dinner */}
        <EventBlock
          title="Welcome Dinner"
          description="Ease into the weekend with cocktails, great food, and even better company -  enjoy golden hour, flowing wine, and the start of something unforgettable with us!"
          details={[
            { label: 'Date', value: 'Friday, May 14th, 2027' },
            { label: 'Location', value: 'TBD — Details to follow' },
            { label: 'Time', value: 'TBD' },
          ]}
          rsvpNote={<a href="https://withjoy.com/BeMyBebawy/rsvp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--burgundy)', textDecoration: 'underline' }}>RSVP here</a>}
          image="/media/oceanchairs.png"
        />

      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 40px 36px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <p className="section-label">Join us</p>
          <h1 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 300 }}>Wedding Day Timeline</h1>
          <div className="divider" />

          <div style={{
            width: '100%',
            height: 'clamp(240px, 45vw, 520px)',
            overflow: 'hidden',
            position: 'relative',
            marginTop: 'clamp(20px, 3vw, 32px)'
          }}>
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

          <div style={{ textAlign: 'center', marginTop: 'clamp(12px,2vw,20px)' }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3.8vw, 40px)',
              fontWeight: 400, color: 'var(--burgundy)', lineHeight: 1.15, marginBottom: 12,
            }}>
              Quinta do Alferes de Crasto
            </h2>
            <p style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: 9, fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: 0,
            }}>
              R. do Crasto, 4485-684 Vairao, Portugal
            </p>
          </div>
        </div>

        {/* Wedding Day */}
        <EventBlock
          tag="Sunday, May 16th 2027"
          title="Wedding Day"
          description="The big day is finally here! From shuttles to the last dance, we can't wait to celebrate every moment with you!"
          details={[
            {
              label: 'Wedding Day Shuttle Buses',
              time: '03:00 PM - 03:30 PM',
              text: 'Shuttle buses will depart from Lapa Church and head straight to the wedding venue. Don\'t be late!',
              mapLink: 'https://maps.google.com/?q=Igreja+da+Lapa,+Porto',
              mapPreview: '/media/googlemaps.png',
            },
            {
              label: 'Wedding Ceremony',
              time: '04:30 PM - 05:30 PM',
              text: 'Grab a seat - it\'s finally happening. We\'re tying the knot! Please arrive no later than 4:15 PM.',
              mapLink: 'https://maps.google.com/?q=Quinta+do+Alferes+de+Crasto,+Vairao,+Portugal',
              mapPreview: '/media/googlemaps2.png',
            },
            { label: 'Cocktail Hour', time: '05:30 PM - 07:30 PM', text: 'Because every great celebration deserves a Hugo Spritz break.' },
            { label: 'Wedding Reception', time: '07:30 PM - 3:00 AM', text: 'An evening of incredible food, overflowing dance floors, and one very happy couple until the sunrise. Enjoy the reception and dance the night away, then kick back on the shuttles going back to the Lapa Church area starting at 11PM. Shuttles will run every hour.' },
          ]}
          rsvpNote={<a href="https://withjoy.com/BeMyBebawy/rsvp" target="_blank" rel="noopener noreferrer" className="btn">RSVP here</a>}
          rsvpAsButton
          hideImage
          secondaryImage="/media/googlemaps2.png"
          reverse
        />

      </section>

      <section style={{
        textAlign: 'center',
        padding: 'clamp(40px,6vw,56px) clamp(16px,5vw,40px) 40px',
        background: 'var(--warm-white)'
      }}>
        <p className="section-label">Join us</p>
        <h1 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 300 }}>Post-Wedding Pool Day</h1>
        <div className="divider" />
        <p style={{ maxWidth: 760, margin: '0 auto', lineHeight: 1.95, color: 'var(--text-muted)', fontSize: 15 }}>
          If you're staying an extra day, join us by the pool [Location TBD]! More details coming soon.
        </p>
      </section>
    </main>
  )
}

function EventBlock({ number, tag, title, description, details, rsvpNote, image, secondaryImage, reverse, hideImage, rsvpAsButton }) {
  return (
    <div
      className="event-block-grid"
      style={{
        direction: reverse ? 'rtl' : 'ltr',
        gridTemplateColumns: hideImage ? '1fr' : undefined,
      }}
    >
      {/* Image */}
      {!hideImage && (
        <div className="event-image" style={{ direction: 'ltr' }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block', transition: 'transform 0.6s ease', background: '#f7f2ea' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {secondaryImage && (
            <div style={{ marginTop: 14 }}>
              <img
                src={secondaryImage}
                alt={`${title} map preview`}
                style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block', marginTop: 10 }}
              />
            </div>
          )}
        </div>
      )}

      {/* Text */}
      <div style={{ direction: 'ltr' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,8vw,72px)', lineHeight: 1, color: 'var(--gold-light)', fontWeight: 300 }}>
          {number}
        </p>
        <p style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>
          {tag}
        </p>
        <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 300, marginBottom: 16 }}>{title}</h2>
        <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>{description}</p>
        {details.map(d => (
          d.time ? (
            <div key={d.label} style={{ marginBottom: 12 }}>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-dark)', fontWeight: 500 }}>
                {d.label} <span style={{ color: 'var(--gold)' }}>|</span> <span style={{ color: 'var(--burgundy)' }}>{d.time}</span>
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                {d.text}
              </p>
              {d.mapLink && d.mapPreview && (
                <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
                  <a
                    href={d.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', width: 'min(260px, 100%)', marginTop: 10 }}
                  >
                    <img
                      src={d.mapPreview}
                      alt="Open Lapa Church in Google Maps"
                      style={{
                        width: '100%',
                        height: 170,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                        border: '1px solid var(--gold-light)',
                        borderRadius: 6,
                      }}
                    />
                  </a>
                </div>
              )}
            </div>
          ) : (
            <p key={d.label} style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: d.label === 'Venue' ? 0 : 6 }}>
              <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{d.label}:</span> {d.value}
            </p>
          )
        ))}
        {rsvpNote && !rsvpAsButton && (
          <p style={{ marginTop: 20, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--burgundy)' }}>
            ↳ {rsvpNote}
          </p>
        )}
        {rsvpNote && rsvpAsButton && (
          <div style={{ marginTop: 22 }}>
            {rsvpNote}
          </div>
        )}
      </div>
    </div>
  )
}
