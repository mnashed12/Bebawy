import React from 'react'

export default function Events() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <section style={{
        textAlign: 'center', padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) 40px',
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
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px' }}>

        {/* Welcome Dinner */}
        <EventBlock
          number="01"
          tag="Friday, May 14th 2027"
          title="Welcome Dinner"
          description="Join us for an intimate welcome dinner to kick off the celebrations. We can't wait to see you in Portugal."
          details={[
            { label: 'Date', value: 'Friday, May 14th, 2027' },
            { label: 'Location', value: 'TBD — Details to follow' },
            { label: 'Time', value: 'TBD' },
          ]}
          rsvpNote={<a href="https://withjoy.com/BeMyBebawy/rsvp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--burgundy)', textDecoration: 'underline' }}>RSVP here</a>}
          image="/media/front_1.jpeg"
        />

        <div className="divider" style={{ margin: '60px auto' }} />

        {/* Day Before */}
        <EventBlock
          number="02"
          tag="Saturday, May 15th 2027"
          title="Suggested Activities"
          description="Consider this our little guide to Portugal. From slow mornings and unforgettable dinners to scenic viewpoints and hidden gems, we've gathered a few of our favorite recommendations to help you make the most of your visit. We hope you love exploring it as much as we do."
          details={[
            { label: 'Date', value: 'Saturday, May 15th, 2027' },
            { label: 'Activities', value: 'Guided suggestions in Porto' },
          ]}
          rsvpNote={<a href="https://maps.app.goo.gl/XnMWjJtQYw34HmMAA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--burgundy)', textDecoration: 'underline' }}>Open activity guide</a>}
          image="/media/front_2.jpeg"
          reverse
        />

        <div className="divider" style={{ margin: '60px auto' }} />

        {/* Wedding Day */}
        <EventBlock
          number="03"
          tag="Sunday, May 16th 2027"
          title="Wedding Day"
          description="The big day is here. From shuttles to the last dance, we can't wait to celebrate every moment with you at Quinta do Alferes de Crasto."
          details={[
            { label: 'Date', value: 'Sunday, May 16th, 2027' },
            { label: 'Venue', value: 'Quinta do Alferes de Crasto, Vairão, Portugal' },
            { label: 'Wedding Day Shuttle Buses', time: '03:00 PM - 03:30 PM', text: 'Shuttle buses will depart from Lapa Church and head straight to the wedding venue. Don\'t be late!' },
            { label: 'Wedding Ceremony', time: '04:15 PM - 05:30 PM', text: 'Grab a seat - it\'s finally happening. We\'re tying the knot! Please arrive no later than 4:15 PM.' },
            { label: 'Cocktail Hour', time: '05:30 PM - 07:30 PM', text: 'Because every great celebration deserves a Hugo Spritz break.' },
            { label: 'Wedding Reception', time: '07:30 PM - 3:00 AM', text: 'An evening of incredible food, overflowing dance floors, and one very happy couple until the sunrise (literally - we have the venue until 4:00 AM).' },
          ]}
          rsvpNote={<a href="https://withjoy.com/BeMyBebawy/rsvp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--burgundy)', textDecoration: 'underline' }}>RSVP here</a>}
          image="/media/front_3.jpeg"
        />

      </section>
    </main>
  )
}

function EventBlock({ number, tag, title, description, details, rsvpNote, image, reverse }) {
  return (
    <div className="event-block-grid" style={{ direction: reverse ? 'rtl' : 'ltr' }}>
      {/* Image */}
      <div className="event-image" style={{ height: 340, overflow: 'hidden', direction: 'ltr' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

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
            </div>
          ) : (
            <p key={d.label} style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>
              <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{d.label}:</span> {d.value}
            </p>
          )
        ))}
        {rsvpNote && (
          <p style={{ marginTop: 20, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--burgundy)' }}>
            ↳ {rsvpNote}
          </p>
        )}
      </div>
    </div>
  )
}
