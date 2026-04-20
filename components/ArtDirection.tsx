'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

// ─── Data ────────────────────────────────────────────────────────────────────

const forbiddenVisuals = [
  'DNA helixes', 'test tubes', 'lab coats', 'particle effects', 'gradient mesh', 'stock photography',
]

const forbiddenWords = [
  'decode', 'discover your risks', 'reveal', 'journey', 'empower', 'transform', 'hack', 'optimize',
]

const directions = [
  {
    n: '01',
    label: 'Personalization',
    images: ['/d1_1.png', '/d1_2.png', '/d1_3.png'],
    story: [
      { text: 'People expect health to be personal.', dim: true },
      { text: 'Most systems are still built on averages.', dim: true },
      { text: 'Your DNA is where personalization starts.', dim: false },
    ],
  },
  {
    n: '02',
    label: 'Data → Action',
    images: ['/d2_1.png'],
    story: [
      { text: 'People get data, but not direction.', dim: true },
      { text: 'Most insights never turn into action.', dim: true },
      { text: 'We translate your DNA into clear decisions.', dim: false },
    ],
  },
  {
    n: '03',
    label: 'Potential',
    images: ['/d3_1.png', '/d3_2.png', '/d3_3.png', '/d3_4.png', '/d3_5.png'],
    story: [
      { text: "Your biology defines what's possible.", dim: true },
      { text: 'Most people never fully use it.', dim: true },
      { text: 'Your DNA unlocks your potential.', dim: false },
    ],
  },
]

const ROTATION_INTERVAL = 3000
const FADE_DURATION = 0.4

// ─── Rotating image component ─────────────────────────────────────────────────

function RotatingImage({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Preload next image in sequence
  useEffect(() => {
    if (images.length <= 1) return
    const next = (index + 1) % images.length
    const img = new window.Image()
    img.src = images[next]
  }, [index, images])

  // Auto-rotation — pauses on hover (desktop)
  useEffect(() => {
    if (images.length <= 1 || paused) return
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, ROTATION_INTERVAL)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [images.length, paused])

  // Static image (Direction 2)
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        loading="lazy"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    )
  }

  return (
    <div
      style={{ position: 'absolute', inset: 0 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          loading="lazy"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Sequence indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          display: 'flex',
          gap: '6px',
          zIndex: 10,
        }}
      >
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => { setIndex(i); setPaused(true) }}
            style={{
              height: '2px',
              width: '32px',
              borderRadius: '2px',
              background: i === index ? '#FFFFFF' : 'rgba(255,255,255,0.3)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
            animate={{ background: i === index ? '#FFFFFF' : 'rgba(255,255,255,0.3)' }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Direction card ───────────────────────────────────────────────────────────

function DirectionCard({
  direction,
  index,
}: {
  direction: (typeof directions)[0]
  index: number
}) {
  return (
    <FadeInOnScroll delay={0.08}>
      <div
        className="flex flex-col lg:flex-row overflow-hidden rounded-2xl"
        style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#111218' }}
      >
        {/* Image area */}
        <div
          style={{
            position: 'relative',
            minHeight: '480px',
            overflow: 'hidden',
            background: '#000000',
            flex: '0 0 70%',
          }}
        >
          <RotatingImage images={direction.images} />
        </div>

        {/* Text block */}
        <div
          className="flex flex-col justify-center"
          style={{
            flex: '0 0 30%',
            padding: '48px 40px',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Number */}
          <p
            className="font-mono text-xs mb-4"
            style={{ color: 'rgba(124,92,252,0.55)', letterSpacing: '0.14em' }}
          >
            {direction.n}
          </p>

          {/* Title */}
          <h3
            className="font-sans font-semibold text-2xl mb-8 leading-snug"
            style={{ color: '#F5F7FA' }}
          >
            {direction.label}
          </h3>

          {/* Story lines */}
          <div className="space-y-3">
            {direction.story.map((line, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed"
                style={{
                  color: line.dim ? '#8A90A2' : '#C7CCD6',
                  lineHeight: 1.75,
                  fontWeight: line.dim ? 400 : 500,
                }}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function ArtDirection() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px 64px' }}>
      <FadeInOnScroll>
        <SectionHeader label="03 — Art Direction" />
        <h2
          className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-4"
          style={{ color: '#F5F7FA' }}
        >
          Visual moodboard
        </h2>
        <p className="text-base mb-16 max-w-2xl" style={{ color: '#8A90A2', lineHeight: 1.7 }}>
          A set of campaign directions showing how DNA insights translate into personalization, action, and human potential.
        </p>
      </FadeInOnScroll>

      <div className="space-y-5">
        {directions.map((dir, i) => (
          <DirectionCard key={dir.n} direction={dir} index={i} />
        ))}
      </div>

      {/* Forbidden list */}
      <FadeInOnScroll delay={0.15}>
        <div style={{ marginTop: '64px' }}>
          <h3
            className="font-mono text-xs uppercase tracking-widest mb-6"
            style={{ color: '#8A90A2' }}
          >
            Forbidden - Never use
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl"
              style={{ background: '#111218', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#8A90A2' }}>
                Visuals
              </p>
              <div className="flex flex-wrap gap-2">
                {forbiddenVisuals.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full line-through"
                    style={{ background: '#161823', color: '#8A90A2', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="p-6 rounded-xl"
              style={{ background: '#111218', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#8A90A2' }}>
                Words
              </p>
              <div className="flex flex-wrap gap-2">
                {forbiddenWords.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full line-through"
                    style={{ background: '#161823', color: '#8A90A2', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  )
}
