'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

// ─── Animation types & helpers ───────────────────────────────────────────────

type Phase =
  | 'init'
  | 's1-pulse'
  | 's1-card'
  | 's1-tap'
  | 's1-popover'
  | 'cross-fade'
  | 's2-in'
  | 's2-card'
  | 's2-focused'
  | 's2-tap'
  | 's2-rest'
  | 'exit'

function wait(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms))
}

// ─── Touchpoint content ───────────────────────────────────────────────────────

const touchpoints = [
  {
    n: '01',
    context: 'Onboarding',
    title: 'Expectation setting',
    body: [
      'From the first interaction, users are introduced to the idea that their health data can go deeper.',
      'DNA is positioned as the layer that unlocks full personalization.',
    ],
    footer: '→ early awareness without friction',
  },
  {
    n: '02',
    context: 'Health / Scores',
    title: 'Primary conversion moment',
    body: [
      'Users already trust their health scores. We extend that trust by introducing a deeper layer of precision.',
    ],
    footer: '→ curiosity to explore DNA',
  },
  {
    n: '03',
    context: 'Plan / Notifications',
    title: 'Contextual reinforcement',
    body: [
      "DNA Insights appears inside the user's plan — as a natural next step, not a separate feature.",
    ],
    footer: '→ lowers friction and aligns with intent',
  },
  {
    n: '04',
    context: 'Data / Biomarkers',
    title: 'Depth and credibility',
    body: [
      'In data-heavy views, DNA is introduced as an additional layer — enhancing insights, not replacing them.',
    ],
    footer: '→ reinforces long-term value',
  },
]

// ─── Phone sequence component (not exported) ─────────────────────────────────

function PhoneSequence() {
  const [phase, setPhase] = useState<Phase>('init')

  useEffect(() => {
    let cancelled = false

    async function loop() {
      while (!cancelled) {
        // Screen 1 sequence
        setPhase('init');       await wait(600)
        if (cancelled) break
        setPhase('s1-pulse');   await wait(1200)
        if (cancelled) break
        setPhase('s1-card');    await wait(1300)
        if (cancelled) break
        setPhase('s1-tap');     await wait(380)
        if (cancelled) break
        setPhase('s1-popover'); await wait(3200)
        if (cancelled) break

        // Cross-fade: Screen 1 overlays exit, screens swap
        setPhase('cross-fade'); await wait(750)
        if (cancelled) break

        // Screen 2 sequence
        setPhase('s2-in');      await wait(600)
        if (cancelled) break
        setPhase('s2-card');    await wait(1300)
        if (cancelled) break
        setPhase('s2-focused'); await wait(1500)
        if (cancelled) break
        setPhase('s2-tap');     await wait(380)
        if (cancelled) break
        setPhase('s2-rest');    await wait(1800)
        if (cancelled) break

        // Exit before loop reset
        setPhase('exit');       await wait(650)
        if (cancelled) break
      }
    }

    loop()
    return () => {
      cancelled = true
    }
  }, [])

  // ── Derived states ──────────────────────────────────────────────────────────

  const s1Active = ['init', 's1-pulse', 's1-card', 's1-tap', 's1-popover'].includes(phase)
  const s2Active = ['s2-in', 's2-card', 's2-focused', 's2-tap', 's2-rest'].includes(phase)

  // Screen opacities — during cross-fade both transition simultaneously
  const screen1Opacity = s1Active ? 1 : 0
  const screen2Opacity = phase === 'cross-fade' || s2Active ? 1 : 0

  // Screen 1 overlays
  const showPulse   = ['s1-pulse', 's1-card', 's1-tap', 's1-popover'].includes(phase)
  const showCard1   = ['s1-card', 's1-tap', 's1-popover'].includes(phase)
  const isTapping1  = phase === 's1-tap'
  const showDim     = phase === 's1-popover'
  const showPopover = phase === 's1-popover'

  // Screen 2 overlays
  const showCard2   = ['s2-card', 's2-focused', 's2-tap', 's2-rest'].includes(phase)
  const isFocused2  = ['s2-focused', 's2-tap', 's2-rest'].includes(phase)
  const isTapping2  = phase === 's2-tap'

  return (
    <div style={{ flexShrink: 0 }}>
      {/* ── Phone frame ── */}
      <div style={{ position: 'relative', width: '290px', userSelect: 'none' }}>

        {/* Screen 1 — sets container height */}
        <motion.img
          src="/Screen%201.png"
          alt=""
          draggable={false}
          style={{ width: '100%', display: 'block' }}
          animate={{ opacity: screen1Opacity }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        />

        {/* Screen 2 — absolutely stacked, same dimensions */}
        <motion.img
          src="/Screen%202.png"
          alt=""
          draggable={false}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'block' }}
          animate={{ opacity: screen2Opacity }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        />

        {/* ── S1: Pulse dot at AgeScore ℹ position (~36% top, 58% left) ── */}
        <AnimatePresence>
          {showPulse && (
            <motion.div
              key="s1-pulse"
              style={{
                position: 'absolute',
                top: '36%', left: '58%',
                width: 7, height: 7,
                borderRadius: '50%',
                background: '#7C5CFC',
                pointerEvents: 'none',
                zIndex: 4,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.7, 1.45, 0.7] }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>

        {/* ── S1: Dim overlay — shown only with popover ── */}
        <AnimatePresence>
          {showDim && (
            <motion.div
              key="s1-dim"
              style={{
                position: 'absolute',
                top: '12%', left: '9%', right: '9%', bottom: '8%',
                background: 'rgba(0,0,0,0.52)',
                borderRadius: '24px',
                pointerEvents: 'none',
                zIndex: 5,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
            />
          )}
        </AnimatePresence>

        {/* ── S1: Genetic Optimization card — positioned below Gut Score (~82%) ── */}
        <AnimatePresence>
          {showCard1 && (
            <motion.div
              key="s1-card"
              style={{
                position: 'absolute',
                left: '11%', right: '11%',
                top: '81.5%', height: '9%',
                background: '#18181F',
                borderRadius: 13,
                display: 'flex', alignItems: 'center',
                padding: '0 10px', gap: 8,
                border: '1px solid rgba(124,92,252,0.3)',
                boxShadow: '0 -6px 28px rgba(0,0,0,0.65)',
                zIndex: 6,
              }}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0, scale: isTapping1 ? 0.973 : 1 }}
              exit={{ opacity: 0, y: 14, transition: { duration: 0.22 } }}
              transition={{
                opacity: { duration: 0.32 },
                y: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.13 },
              }}
            >
              {/* Lock icon */}
              <div style={{
                width: 26, height: 26, borderRadius: 8,
                background: 'rgba(124,92,252,0.13)',
                border: '1px solid rgba(124,92,252,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3.5 5V3.8a2.5 2.5 0 015 0V5" stroke="#7C5CFC" strokeWidth="1.25" strokeLinecap="round" />
                  <rect x="1.5" y="5" width="9" height="5.5" rx="1.5" stroke="#7C5CFC" strokeWidth="1.25" fill="none" />
                  <circle cx="6" cy="7.75" r="0.85" fill="#7C5CFC" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: '0.6rem', fontWeight: 600, color: '#EEEEEE', lineHeight: 1.25, fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap' }}>
                  Genetic Optimization
                </p>
                <p style={{ margin: 0, marginTop: 1, fontSize: '0.5rem', color: '#7C5CFC', lineHeight: 1.2, fontFamily: "'JetBrains Mono', monospace" }}>
                  Available with DNA
                </p>
              </div>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                <path d="M3.5 2.5l3 2.5-3 2.5" stroke="#464646" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── S1: Popover — centered above card (~56% top) ── */}
        <AnimatePresence>
          {showPopover && (
            <motion.div
              key="s1-popover"
              style={{
                position: 'absolute',
                left: '11%', right: '11%', top: '56%',
                background: '#13131E',
                borderRadius: 14,
                border: '1px solid rgba(124,92,252,0.32)',
                padding: '13px 13px 11px',
                zIndex: 10,
                boxShadow: '0 8px 32px rgba(0,0,0,0.65)',
              }}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.98, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                margin: 0, fontSize: '0.57rem', color: '#ABABC4',
                lineHeight: 1.6, fontFamily: 'system-ui, sans-serif', marginBottom: 10,
              }}>
                Your health insights are personalized based on your data. Add your DNA to unlock a deeper layer of precision.
              </p>
              <div style={{ background: '#7C5CFC', borderRadius: 8, padding: '7px 10px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.55rem', color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: '0.03em' }}>
                  Align to your core →
                </span>
              </div>
              {/* Arrow pointing down toward card */}
              <div style={{ position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%)' }}>
                <div style={{ width: 12, height: 12, background: '#13131E', border: '1px solid rgba(124,92,252,0.32)', transform: 'rotate(45deg)', borderTop: 'none', borderLeft: 'none' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── S2: Contextual DNA card — injected into notification list (~70%) ── */}
        <AnimatePresence>
          {showCard2 && (
            <motion.div
              key="s2-card"
              style={{
                position: 'absolute',
                left: '11%', right: '11%',
                top: '70%', height: '9.5%',
                background: isFocused2 ? '#20202C' : '#1A1A24',
                borderRadius: 14,
                display: 'flex', alignItems: 'center',
                padding: '0 12px', gap: 10,
                border: isFocused2
                  ? '1px solid rgba(124,92,252,0.38)'
                  : '1px solid rgba(124,92,252,0.14)',
                boxShadow: isFocused2
                  ? '0 2px 20px rgba(124,92,252,0.13), 0 4px 16px rgba(0,0,0,0.5)'
                  : '0 4px 16px rgba(0,0,0,0.45)',
                zIndex: 4,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, scale: isTapping2 ? 0.971 : 1 }}
              exit={{ opacity: 0, y: 12, transition: { duration: 0.22 } }}
              transition={{
                opacity: { duration: 0.35 },
                y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.13 },
                background: { duration: 0.35 },
                border: { duration: 0.35 },
                boxShadow: { duration: 0.35 },
              }}
            >
              {/* Target / precision icon */}
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: isFocused2 ? 'rgba(124,92,252,0.18)' : 'rgba(124,92,252,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.35s',
              }}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke="#7C5CFC" strokeWidth="1.2" fill="none" />
                  <circle cx="8" cy="8" r="3.5" stroke="#7C5CFC" strokeWidth="1.2" fill="none" />
                  <circle cx="8" cy="8" r="1.1" fill="#7C5CFC" />
                </svg>
              </div>
              <p style={{
                margin: 0, fontSize: '0.58rem',
                color: isFocused2 ? '#F0F0F0' : '#C4C4C4',
                lineHeight: 1.4, fontFamily: 'system-ui, sans-serif',
                flex: 1, transition: 'color 0.35s',
              }}>
                Make your plan more precise with DNA insights{' '}
                <span style={{ color: '#7C5CFC' }}>→</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Progress indicator — shows current screen ── */}
      <div style={{ display: 'flex', gap: 5, justifyContent: 'center', marginTop: 14 }}>
        <motion.div
          style={{ width: 5, height: 5, borderRadius: '50%' }}
          animate={{ background: s1Active ? '#7C5CFC' : '#222232' }}
          transition={{ duration: 0.45 }}
        />
        <motion.div
          style={{ width: 5, height: 5, borderRadius: '50%' }}
          animate={{ background: phase === 'cross-fade' || s2Active ? '#7C5CFC' : '#222232' }}
          transition={{ duration: 0.45 }}
        />
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function InProductActivation() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px 128px' }}>

      {/* Section header */}
      <FadeInOnScroll>
        <SectionHeader label="04 — Activations" />
        <h2
          className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-4"
          style={{ color: '#F5F5F5' }}
        >
          In-Product Activation
        </h2>
        <p className="text-base mb-16 max-w-2xl" style={{ color: '#8A8A8A', lineHeight: 1.7 }}>
          DNA Insights is introduced progressively across the product — at the exact moments where users expect more precision.
        </p>
      </FadeInOnScroll>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* Left — sequential phone animation */}
        <FadeInOnScroll>
          <div className="flex justify-center lg:justify-start">
            <PhoneSequence />
          </div>
        </FadeInOnScroll>

        {/* Right — touchpoint system */}
        <div className="flex-1">
          <div className="space-y-0">
            {touchpoints.map((tp, i) => (
              <FadeInOnScroll key={tp.n} delay={i * 0.1}>
                <div
                  style={{
                    paddingLeft: 20,
                    paddingTop: i > 0 ? 28 : 0,
                    paddingBottom: 28,
                    borderLeft: '2px solid rgba(124,92,252,0.22)',
                    borderBottom: i < touchpoints.length - 1 ? '1px solid #111111' : 'none',
                  }}
                >
                  {/* Context label */}
                  <p
                    className="font-mono text-xs mb-3"
                    style={{ color: '#555577' }}
                  >
                    {tp.n} — {tp.context}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-sans font-semibold text-xl mb-3 leading-snug"
                    style={{ color: '#E8E8E8' }}
                  >
                    {tp.title}
                  </h3>

                  {/* Body */}
                  <div className="space-y-3 mb-4">
                    {tp.body.map((para, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed"
                        style={{ color: '#7A7A7A', lineHeight: 1.75 }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Footer note */}
                  <p
                    className="font-mono text-xs"
                    style={{ color: '#7C5CFC', opacity: 0.8 }}
                  >
                    {tp.footer}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
