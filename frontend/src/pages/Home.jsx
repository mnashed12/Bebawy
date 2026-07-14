import React, { useState, useEffect } from 'react'

const WEDDING_DATE = new Date('2027-05-16T15:45:00')

function useCountdown(target) {
  const [diff, setDiff] = useState(target - Date.now())
  useEffect(() => {
    const id = setInterval(() => setDiff(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])
  const total = Math.max(0, Math.floor(diff / 1000))
  const days = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  return { days, hours, minutes, seconds }
}

function CountdownBox({ value, label }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      border: '1px solid var(--burgundy)', padding: 'clamp(12px,2vw,18px) clamp(16px,3vw,24px)', minWidth: 'clamp(64px,12vw,80px)'
    }}>
      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px,5vw,44px)', fontWeight: 300, lineHeight: 1 }}>
        {String(value).padStart(2, '0')}
      </span>
      <span style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  )
}

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE.getTime())

  return (
    <main>
      {/* Hero — landing page background */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: 'clamp(70px,12vw,100px) clamp(16px,5vw,40px) clamp(40px,6vw,60px)',
        position: 'relative', overflow: 'hidden'
      }}>
        <img
          src="/media/couple_disney.png"
          alt="Carolyn and Marco"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: '55% 50%', transform: 'scale(1.06)', transformOrigin: 'center', zIndex: 0
          }}
        />
        {/* Dark overlay for text legibility */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.5) 100%)'
        }} />
        <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
          <p className="section-label fade-up" style={{ color: 'rgba(255,255,255,0.75)' }}>Together with their families</p>
          <h1 className="fade-up-delay-1" style={{ fontSize: 'clamp(52px, 9vw, 96px)', lineHeight: 1.1, fontWeight: 300, textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}>
            Carolyn<br />&amp; Marco
          </h1>
          <div className="divider fade-up-delay-2" style={{ background: 'rgba(255,255,255,0.6)' }} />
          <p className="fade-up-delay-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontStyle: 'italic', opacity: 0.9 }}>
            request the pleasure of your company
          </p>
          <p className="fade-up-delay-3" style={{ marginTop: 16, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.85 }}>
            May 16, 2027 · Quinta do Alferes de Crasto · Portugal
          </p>
        </div>
      </section>

      {/* Countdown + Welcome Note */}
      <section style={{
        padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,40px)', background: 'var(--warm-white)',
      }}>
        <div className="countdown-welcome-row">
          {/* Countdown */}
          <div className="countdown-col">
            <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, color: 'var(--burgundy)', marginBottom: 'clamp(16px,3vw,28px)' }}>Countdown</h2>
            <div className="countdown-row" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <CountdownBox value={days} label="Days" />
              <CountdownBox value={hours} label="Hours" />
              <CountdownBox value={minutes} label="Min" />
              <CountdownBox value={seconds} label="Sec" />
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic', color: 'var(--text-muted)', marginTop: 20 }}>
              until the big day
            </p>
          </div>

          {/* Divider */}
          <div className="countdown-divider" />

          {/* Welcome Note */}
          <div className="welcome-note-col">
            <p className="section-label" style={{ marginBottom: 12 }}>Welcome</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 300, color: 'var(--burgundy)', marginBottom: 18 }}>
              We're so glad you're here!
            </h3>
            <p style={{ lineHeight: 1.85, color: 'var(--text-muted)', fontSize: 'clamp(14px,1.6vw,16px)', marginBottom: 14 }}>
              We're beyond excited to celebrate this unforgettable weekend with the people who have shaped our lives and our story. Thank you for making the journey to celebrate with us. Your love, support, and presence mean more than we could ever express, and we feel incredibly lucky to share this moment with you.
            </p>
            <p style={{ lineHeight: 1.85, color: 'var(--text-muted)', fontSize: 'clamp(14px,1.6vw,16px)', fontStyle: 'italic' }}>
              We hope this website has everything you need to plan your trip. We can't wait to raise a glass, dance the night away, and create memories we'll cherish together forever in Portugal!
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(40px,7vw,80px) clamp(16px,5vw,40px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Our Story</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 300, marginBottom: 40 }}>How it began</h2>

          {/* Newspaper-wrap prose */}
          <div className="story-prose">

            {/* Left-floated image */}
            <div className="story-img-left">
              <img src="/media/front_2.jpeg" alt="Carolyn and Marco" />
            </div>

            <p>Some people say we're all connected by six degrees of separation—that every stranger is only a handful of introductions away from becoming someone who changes your life. Looking back, it almost feels as though our story was quietly writing itself long before we ever realized we were meant to read the same chapter.</p>
            <p>Our paths first crossed during the summer of 2016. Marco was hosting what can only be described as a Project X-worthy party at his parents' house, and Carolyn's only mission that night was finding the bathroom. We exchanged a few words, then went our separate ways. Neither of us could have imagined that years later, we'd laugh about how insignificant that moment seemed.</p>
            <p>Then came 2021. While quarantining with COVID—and with plenty of time on his hands, Marco decided to send Carolyn a message on Instagram. One DM changed everything.</p>

            {/* Right-floated image */}
            <div className="story-img-right">
              <img src="/media/proposal_1.jpeg" alt="The proposal" />
            </div>

            <p>From our very first date, it felt less like meeting someone new and more like finding someone we'd somehow known all along. As the conversation unfolded, so did an almost unbelievable series of connections. We discovered our childhood homes in Flushing were only a few blocks apart. We grew up visiting the same neighborhood staples—the retro Burger King in Douglaston, Tuesday movie nights with $5 tickets, and so many of the places that shaped our childhoods without us ever meeting. There were even more remarkable threads. Carolyn worked at a CVS that ordered pizza almost every day from the Italian restaurant where Marco delivered pies during college. Years later, Marco unknowingly attended Carolyn's graduation from St. John's University because his sister, Christine, graduated from pharmacy school with her.</p>
            <p>The more we talked, the more it felt like our lives had been gently orbiting one another for years—close enough to leave fingerprints on each other's stories, but waiting for the right moment to finally collide. We met in our late 20s, not because we were late, but because we were ready. We had dreams that demanded long hours, unwavering faith, and a partner who wouldn't just celebrate the destination, but understand the journey. In each other, we found someone who believed in those dreams as deeply as their own—a best friend, a safe place, and the kind of love that makes life's biggest ambitions feel possible.</p>
            <p>Five years later, we're standing here, surrounded by the people who helped shape us into who we are. We couldn't be more grateful that every unexpected detour, every near miss, and every "almost" led us to this moment.</p>
            <p className="story-closing">Thank you for being part of the next chapter of our story. We can't wait to celebrate with you!</p>

            {/* Clear floats */}
            <div style={{ clear: 'both' }} />
          </div>
        </div>
      </section>

    </main>
  )
}

