import React from 'react'

const FAQS = [
  {
    question: "What's the weather like in Porto in May?",
    answer:
      "Porto in May is glorious, with daytime temperatures typically ranging from 18°C to 21°C (64°F to 70°F) and cooler nights dropping to around 12°C to 13°C (53°F). You can expect plenty of pleasant sunshine and long daylight hours, making it an ideal time for sightseeing. While you'll be in town right before high season rolls in, we strongly recommend booking your travel as soon as possible for the best rates and availability.",
  },
  {
    question: 'What is the dress code?',
    answer:
      "Our celebration calls for Black Tie Optional attire inspired by the effortless elegance of Portugal. Picture flowing gowns, impeccably tailored suits, polished shoes, and classic accessories. Think Old Money, Quiet Luxury, and European Summer. We encourage timeless styles over trends for an evening that feels both sophisticated and celebratory. Leave the stilettos at home though! The wedding venue has a mix of grass, pavers, and cobblestones, so go for block or martini heels instead. We don't want anyone ruining their shoes or twisting an ankle. We can't wait to celebrate in style with all of you!",
  },
  {
    question: "What's the RSVP deadline?",
    answer: 'Please RSVP by February 15 so we can get an accurate headcount. :)',
  },
  {
    question: 'Can I bring a date?',
    answer:
      "To keep our celebration intimate, we are only able to accommodate the guests listed on each invitation. If a plus-one has been reserved for you, it will be reflected in your RSVP. We truly appreciate your understanding and can't wait to celebrate together.",
  },
  {
    question: 'Are kids welcome?',
    answer:
      'We love your little ones, but the ceremony and reception are adults-only. However, we know some of you will be traveling with kids, so please come with them to the welcome dinner and the post-wedding pool day! Please reach out if you have any questions!',
  },
]

export default function QA() {
  return (
    <main style={{ paddingTop: 80 }}>
      <section
        style={{
          textAlign: 'center',
          padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) 40px',
          background: 'linear-gradient(to bottom, var(--cream), var(--warm-white))',
        }}
      >
        <p className="section-label">Need-to-Know</p>
        <h1 style={{ fontSize: 'clamp(32px,6vw,56px)', fontWeight: 300 }}>Q &amp; A</h1>
        <div className="divider" />
        <p
          style={{
            maxWidth: 700,
            margin: '0 auto',
            lineHeight: 1.9,
            color: 'var(--text-muted)',
            fontSize: 15,
          }}
        >
          If you have any questions, please check our Q &amp; A section below!
        </p>
      </section>

      <section style={{ maxWidth: 980, margin: '0 auto', padding: '34px 40px 70px' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          {FAQS.map((item) => (
            <article
              key={item.question}
              style={{
                background: 'white',
                border: '1px solid var(--gold-light)',
                padding: '18px 20px',
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--burgundy)',
                  marginBottom: 10,
                }}
              >
                Q
              </p>
              <h2
                style={{
                  fontSize: 'clamp(22px,3vw,30px)',
                  fontWeight: 300,
                  marginBottom: 10,
                  lineHeight: 1.25,
                }}
              >
                {item.question}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: 'var(--text-muted)',
                  marginBottom: 8,
                }}
              >
                <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>A:</span> {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
