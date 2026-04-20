'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import FadeInOnScroll from './ui/FadeInOnScroll'

const abilityTags = [
  'Built for power.',
  'Longevity: cardio-driven.',
  'Efficient converter.',
  'Fast recoverer.',
  'Caffeine responder.',
]

const defaultRecs = [
  { label: 'Heart', score: 78, rec: 'Standard cardio 3x/week' },
  { label: 'Metabolic', score: 82, rec: 'Balanced macros, reduce processed food' },
  { label: 'Brain', score: 71, rec: 'Omega-3, puzzles, stay mentally active' },
]

const coreRecs = [
  { label: 'Heart', score: 78, rec: 'Zone 2 + HIIT: your ACTN3 responds to explosive load' },
  { label: 'Metabolic', score: 82, rec: 'Carbs are your fuel — AMY1 high copy number' },
  { label: 'Brain', score: 71, rec: '30 min aerobic 4x/week beats any nootropic for your BDNF' },
]

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-xs" style={{ color: '#A0A0A0' }}>
          {label}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {score}
        </span>
      </div>
      <div className="h-1 rounded-full" style={{ background: '#1A1A1A' }}>
        <motion.div
          className="h-1 rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function useTypingEffect(text: string, active: boolean, delay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) { setDisplayed(''); setDone(false); return }
    const timer = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, 22)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(timer)
  }, [active, text, delay])

  return { displayed, done }
}

function PhoneScreen() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [phase, setPhase] = useState<'default' | 'loading' | 'core'>('default')

  useEffect(() => {
    if (!inView) return
    const t1 = setTimeout(() => setPhase('loading'), 800)
    const t2 = setTimeout(() => setPhase('core'), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [inView])

  const rec0 = useTypingEffect(coreRecs[0].rec, phase === 'core', 200)
  const rec1 = useTypingEffect(coreRecs[1].rec, phase === 'core', 900)
  const rec2 = useTypingEffect(coreRecs[2].rec, phase === 'core', 1600)
  const recArr = [rec0, rec1, rec2]

  return (
    <div
      ref={ref}
      className="relative mx-auto"
      style={{
        width: '320px',
        height: '620px',
        background: '#0D0D14',
        borderRadius: '40px',
        border: '1px solid #222222',
        boxShadow: phase === 'core'
          ? '0 0 60px rgba(124,92,252,0.25), 0 0 0 1px rgba(124,92,252,0.3)'
          : '0 0 0 1px #222222',
        overflow: 'hidden',
        transition: 'box-shadow 0.8s ease',
        padding: '28px 20px 20px',
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full"
        style={{ background: '#222222' }}
      />

      {/* Header */}
      <div className="mb-5">
        <p className="font-mono text-xs" style={{ color: '#8A8A8A' }}>
          {phase === 'core' ? 'Your core is loaded.' : 'Health overview'}
        </p>
        {phase === 'core' && (
          <motion.p
            className="font-sans font-semibold text-xl mt-1"
            style={{ color: '#F5F5F5' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Here's what changed.
          </motion.p>
        )}
      </div>

      {/* Score bars */}
      <div className="mb-5">
        <ScoreBar label="Heart" score={78} color={phase === 'core' ? '#7C5CFC' : '#A0A0A0'} />
        <ScoreBar label="Metabolic" score={82} color={phase === 'core' ? '#7C5CFC' : '#A0A0A0'} />
        <ScoreBar label="Brain" score={71} color={phase === 'core' ? '#7C5CFC' : '#A0A0A0'} />
      </div>

      {/* Violet sweep */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(124,92,252,0.15) 50%, transparent 100%)',
            }}
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Recommendations */}
      <div className="space-y-3 mb-4">
        {(phase === 'core' ? coreRecs : defaultRecs).map((r, i) => (
          <div
            key={r.label}
            className="p-3 rounded-xl"
            style={{
              background: phase === 'core' ? 'rgba(124,92,252,0.07)' : '#141414',
              border: `1px solid ${phase === 'core' ? 'rgba(124,92,252,0.2)' : '#1A1A1A'}`,
              transition: 'background 0.4s, border 0.4s',
            }}
          >
            <p className="font-mono text-xs mb-1" style={{ color: phase === 'core' ? '#7C5CFC' : '#6A6A6A' }}>
              {r.label}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: phase === 'core' ? '#F5F5F5' : '#6A6A6A' }}>
              {phase === 'core'
                ? recArr[i].displayed + (!recArr[i].done ? '|' : '')
                : r.rec}
            </p>
          </div>
        ))}
      </div>

      {/* CTA or ability tags */}
      <AnimatePresence mode="wait">
        {phase !== 'core' ? (
          <motion.div
            key="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2"
          >
            <p className="text-xs mb-3 text-center" style={{ color: '#8A8A8A', lineHeight: 1.5 }}>
              Your data is calibrated to population averages.
            </p>
            {phase === 'default' && (
              <button
                className="w-full py-2.5 rounded-xl font-mono text-xs font-semibold"
                style={{ background: '#7C5CFC', color: '#fff' }}
              >
                Align to your core →
              </button>
            )}
            {phase === 'loading' && (
              <div className="w-full py-2.5 rounded-xl text-center font-mono text-xs" style={{ background: 'rgba(124,92,252,0.2)', color: '#7C5CFC' }}>
                Loading your core…
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="tags"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-wrap gap-1.5"
          >
            {abilityTags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-2 py-1 rounded-full font-mono text-xs"
                style={{
                  background: 'rgba(124,92,252,0.12)',
                  border: '1px solid rgba(124,92,252,0.3)',
                  color: '#7C5CFC',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + i * 0.15 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CoreLoadingMockup() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 128px' }}>
      <FadeInOnScroll>
        <h2 className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-4" style={{ color: '#F5F5F5' }}>
          In-Product Activation
        </h2>
        <p className="text-base mb-16 max-w-xl" style={{ color: '#8A8A8A' }}>
          Core Loading Sequence — the moment everything recalibrates.
        </p>
      </FadeInOnScroll>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-shrink-0">
          <PhoneScreen />
        </div>
        <div className="space-y-8 max-w-lg">
          {[
            { n: '01', label: 'Default state', desc: 'Health scores shown with generic recommendations calibrated to population averages.' },
            { n: '02', label: 'Core CTA', desc: '"Your data is calibrated to population averages. Load your core to align it to you."' },
            { n: '03', label: 'Violet pulse', desc: 'A sweep of violet light moves through the interface as the core loads.' },
            { n: '04', label: 'Core-aligned', desc: 'Recommendations update with typing effect in monospace. Gene variants highlighted in violet.' },
            { n: '05', label: 'Ability tags', desc: '"Built for power." "Longevity: cardio-driven." "Caffeine responder." — your core, readable.' },
          ].map((step, i) => (
            <FadeInOnScroll key={step.n} delay={i * 0.1}>
              <div className="flex gap-4">
                <p className="font-mono text-xs pt-1" style={{ color: '#7C5CFC', minWidth: '28px' }}>
                  {step.n}
                </p>
                <div>
                  <p className="font-sans font-semibold text-lg mb-1" style={{ color: '#F5F5F5' }}>
                    {step.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#8A8A8A' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
