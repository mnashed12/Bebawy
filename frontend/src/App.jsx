import React, { useState } from 'react'
import Opener from './pages/Opener'
import Home from './pages/Home'
import Venue from './pages/Venue'
import Events from './pages/Events'
import Travel from './pages/Travel'
import QA from './pages/QA'
import Accommodation from './pages/Accommodation'
import Gifts from './pages/Gifts'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'venue', label: 'Venue' },
  { id: 'events', label: 'Events' },
  { id: 'travel', label: 'Travel' },
  { id: 'accommodation', label: 'Accommodation' },
  { id: 'qa', label: 'Q&A' },
  { href: 'https://withjoy.com/BeMyBebawy/rsvp', label: 'RSVP' },
  { id: 'gifts', label: 'Gifts' },
]

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  if (!unlocked) return <Opener onUnlock={() => setUnlocked(true)} />

  function closeMenu() { setMenuOpen(false) }

  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className="nav">
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 18, fontStyle: 'italic', color: 'var(--burgundy)',
          letterSpacing: '0.05em', userSelect: 'none', justifySelf: 'start'
        }}>C &amp; M</span>

        <div className="nav-desktop-links" style={{ display: 'flex', gap: 32, justifySelf: 'center' }}>
          {NAV_LINKS.map(l => (
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ) : (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={e => {
                  e.preventDefault()
                  scrollToSection(l.id)
                }}
              >
                {l.label}
              </a>
            )
          ))}
        </div>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-mobile-links${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(l => (
          l.href ? (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{l.label}</a>
          ) : (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={e => {
                e.preventDefault()
                closeMenu()
                scrollToSection(l.id)
              }}
            >
              {l.label}
            </a>
          )
        ))}
      </div>

      <main>
        <section id="home" style={{ scrollMarginTop: 90 }}>
          <Home />
        </section>
        <section id="venue" style={{ scrollMarginTop: 90 }}>
          <Venue />
        </section>
        <section id="events" style={{ scrollMarginTop: 90 }}>
          <Events />
        </section>
        <section id="travel" style={{ scrollMarginTop: 90 }}>
          <Travel />
        </section>
        <section id="accommodation" style={{ scrollMarginTop: 90 }}>
          <Accommodation />
        </section>
        <section id="qa" style={{ scrollMarginTop: 90 }}>
          <QA />
        </section>
        <section id="gifts" style={{ scrollMarginTop: 90 }}>
          <Gifts />
        </section>
      </main>
    </>
  )
}

