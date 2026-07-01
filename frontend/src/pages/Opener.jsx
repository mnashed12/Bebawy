import React, { useState, useRef, useEffect, useCallback } from 'react'
import './Opener.css'

const PASSWORD = 'bebawy2027'
const CARD_SIZE = 110   // canvas px
const SCRATCH_THRESHOLD = 0.68  // 68% cleared → auto-reveal

function ScratchCard({ label, onScratched }) {
  const canvasRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const [started, setStarted] = useState(false)
  const isDrawing = useRef(false)
  const lastPos = useRef(null)

  // Draw gold foil once canvas mounts
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    // Gold radial gradient
    const grad = ctx.createRadialGradient(40, 38, 4, 55, 55, 58)
    grad.addColorStop(0, '#f5e070')
    grad.addColorStop(0.35, '#d4a830')
    grad.addColorStop(0.75, '#b8861a')
    grad.addColorStop(1, '#7a5008')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(CARD_SIZE / 2, CARD_SIZE / 2, CARD_SIZE / 2, 0, Math.PI * 2)
    ctx.fill()
    // Shine arc
    ctx.strokeStyle = 'rgba(255,255,200,0.5)'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.arc(CARD_SIZE / 2, CARD_SIZE / 2, 34, Math.PI * 1.25, Math.PI * 1.75)
    ctx.stroke()
    // Subtle ring
    ctx.strokeStyle = 'rgba(255,240,120,0.3)'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(CARD_SIZE / 2, CARD_SIZE / 2, 46, 0, Math.PI * 2)
    ctx.stroke()
    // Hint text
    ctx.font = '600 9px Montserrat, sans-serif'
    ctx.letterSpacing = '0.1em'
    ctx.fillStyle = 'rgba(80,40,0,0.55)'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('SCRATCH', CARD_SIZE / 2, CARD_SIZE / 2)
  }, [])

  function getPos(e, canvas) {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const src = e.touches ? e.touches[0] : e
    return {
      x: (src.clientX - rect.left) * scaleX,
      y: (src.clientY - rect.top) * scaleY,
    }
  }

  function scratch(ctx, x, y) {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineWidth = 32
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y)
      ctx.lineTo(x, y)
    } else {
      ctx.arc(x, y, 16, 0, Math.PI * 2)
    }
    ctx.stroke()
    lastPos.current = { x, y }
  }

  function checkReveal(canvas) {
    const ctx = canvas.getContext('2d')
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let transparent = 0
    for (let i = 3; i < data.length; i += 4) if (data[i] < 128) transparent++
    const total = canvas.width * canvas.height
    if (transparent / total > SCRATCH_THRESHOLD && !revealed) {
      setRevealed(true)
      onScratched()
      // Fade canvas out
      canvas.style.transition = 'opacity 0.5s ease'
      canvas.style.opacity = '0'
    }
  }

  const onStart = useCallback((e) => {
    e.preventDefault()
    isDrawing.current = true
    lastPos.current = null
    setStarted(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const pos = getPos(e, canvas)
    scratch(ctx, pos.x, pos.y)
  }, [])

  const onMove = useCallback((e) => {
    e.preventDefault()
    if (!isDrawing.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const pos = getPos(e, canvas)
    scratch(ctx, pos.x, pos.y)
    checkReveal(canvas)
  }, [revealed])

  const onEnd = useCallback(() => {
    isDrawing.current = false
    lastPos.current = null
    if (canvasRef.current) checkReveal(canvasRef.current)
  }, [revealed])

  return (
    <div className="scratch-wrap">
      {/* Revealed date underneath */}
      <div className="scratch-reveal-text revealed">{label}</div>

      {/* Gold foil canvas on top */}
      {!revealed && (
        <canvas
          ref={canvasRef}
          width={CARD_SIZE}
          height={CARD_SIZE}
          className="scratch-canvas"
          onMouseDown={onStart}
          onMouseMove={onMove}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
          onTouchStart={onStart}
          onTouchMove={onMove}
          onTouchEnd={onEnd}
        />
      )}

      {/* Sparkles on full reveal */}
      {revealed && (
        <div className="sparkle-burst" aria-hidden="true">
          {[...Array(8)].map((_, i) => <span key={i} className="sparkle" style={{ '--i': i }} />)}
        </div>
      )}
    </div>
  )
}

export default function Opener({ onUnlock }) {
  const [stage, setStage] = useState('envelope')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [scratchCount, setScratchCount] = useState(0)

  function handlePassword(e) {
    e.preventDefault()
    if (password.toLowerCase() === PASSWORD) {
      setError(false)
      setStage('fading')
      setTimeout(() => setStage('plane-closed'), 1200)
      setTimeout(() => setStage('plane-open'), 2800)
      setTimeout(() => setStage('scratch'), 8800)
    } else {
      setError(true)
    }
  }

  function handleScratched() {
    setScratchCount(prev => {
      const next = prev + 1
      if (next >= 3) setTimeout(() => setStage('date'), 600)
      return next
    })
  }

  return (
    <div className="opener-root">

      {/* Envelope */}
      {(stage === 'envelope' || stage === 'fading') && (
        <div className={`envelope-scene${stage === 'fading' ? ' fading' : ''}`}>
          <div className="envelope-wrap">
            <img src="/media/envelope.png" alt="" className="envelope-img" draggable={false} />
            <form className="envelope-password" onSubmit={handlePassword}>
              <input
                type="password"
                placeholder="invitation code"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
              />
              {error && <p className="pw-error">Incorrect — please try again</p>}
            </form>
          </div>
        </div>
      )}

      {/* Plane Window */}
      {(stage === 'plane-closed' || stage === 'plane-open') && (
        <div className="plane-scene fade-in">
          <p className="opener-hint">Look out the window…</p>
          <div className="plane-window-outer">
            <div className={`plane-window-frame${stage === 'plane-open' ? ' open' : ''}`}>
              <div className="plane-window-inner">
                <div className="plane-sky" />
                <div className="plane-clouds">
                  <div className="cloud cloud-1" />
                  <div className="cloud cloud-2" />
                  <div className="cloud cloud-3" />
                </div>
                <img src="/media/couple_disney.png" alt="Carolyn and Marco" className="plane-window-video" />
                <div className="window-shade" />
                <div className="cherub-overlay"><p className="cherub-text">The Digital Yes</p></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scratch */}
      {stage === 'scratch' && (
        <div className="scratch-scene fade-in">
          <p className="section-label">Reveal</p>
          <h2 className="scratch-title">Scratch to Discover the Date</h2>
          <div className="scratch-row">
            <ScratchCard label="16" onScratched={handleScratched} />
            <ScratchCard label="May" onScratched={handleScratched} />
            <ScratchCard label="2027" onScratched={handleScratched} />
          </div>
          {scratchCount < 3 && <p className="scratch-hint">Tap each coin to reveal</p>}
        </div>
      )}

      {/* Date Reveal */}
      {stage === 'date' && (
        <div className="date-reveal fade-in">
          <p className="section-label">Save the Date</p>
          <div className="scratch-row">
            <div className="revealed-chip">16</div>
            <div className="revealed-chip">May</div>
            <div className="revealed-chip">2027</div>
          </div>
          <p className="we-getting-married">We&rsquo;re getting married!</p>
          <button className="btn" style={{ marginTop: 40 }} onClick={onUnlock}>Enter</button>
        </div>
      )}
    </div>
  )
}
