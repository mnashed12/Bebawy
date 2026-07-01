import React, { useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Opener from './pages/Opener'
import Home from './pages/Home'
import Venue from './pages/Venue'
import Events from './pages/Events'
import Travel from './pages/Travel'
import QA from './pages/QA'
import Accommodation from './pages/Accommodation'
import RSVPPage from './pages/RSVP'
import Gifts from './pages/Gifts'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/venue', label: 'Venue' },
  { to: '/events', label: 'Events' },
  { to: '/travel', label: 'Travel' },
  { to: '/qa', label: 'Q&A' },
  { to: '/accommodation', label: 'Accommodation' },
  { href: 'https://withjoy.com/BeMyBebawy/rsvp', label: 'RSVP' },
  { to: '/gifts', label: 'Gifts' },
]

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  if (!unlocked) return <Opener onUnlock={() => setUnlocked(true)} />

  function closeMenu() { setMenuOpen(false) }

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
              <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>
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
            <NavLink key={l.to} to={l.to} end={l.end} onClick={closeMenu}>{l.label}</NavLink>
          )
        ))}
      </div>

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/events" element={<Events />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/rsvp" element={<RSVPPage />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </>
  )
}

