'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInOnScroll from './ui/FadeInOnScroll'

const tags = [
  { label: 'Built for power.', gene: 'ACTN3' },
  { label: 'Fast recoverer.', gene: 'IL-6' },
  { label: 'Efficient converter.', gene: 'AMY1' },
  { label: 'Caffeine responder.', gene: 'CYP1A2' },
  { label: 'Longevity: cardio-driven.', gene: 'APOE · FOXO3' },
  { label: 'Neuroplasticity responder.', gene: 'BDNF Val66Met' },
]

export default function AbilityTagsPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 96px',
      }}
    >
      {/* Full-width atmospheric container */}
      <FadeInOnScroll>
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(124,92,252,0.1) 0%, rgba(124,92,252,0.02) 50%, transparent 100%)',
            border: '1px solid rgba(124,92,252,0.16)',
            padding: '64px 48px',
          }}
        >
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: '1px solid rgba(124,92,252,0.4)', borderLeft: '1px solid rgba(124,92,252,0.4)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderTop: '1px solid rgba(124,92,252,0.4)', borderRight: '1px solid rgba(124,92,252,0.4)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 20, borderBottom: '1px solid rgba(124,92,252,0.4)', borderLeft: '1px solid rgba(124,92,252,0.4)' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: '1px solid rgba(124,92,252,0.4)', borderRight: '1px solid rgba(124,92,252,0.4)' }} />

          {/* Header */}
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: '#7C5CFC' }}>
              Product output — ability tags
            </p>
            <h3
              className="font-sans font-semibold mb-3"
              style={{ color: '#F5F5F5', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              Your core abilities
            </h3>
            <p className="text-sm leading-relaxed mx-auto" style={{ color: '#6A6A8A', maxWidth: '420px' }}>
              Not data. Not a PDF. Shareable, actionable ability tags derived from your genetics.
            </p>
          </div>

          {/* Tags cluster */}
          <div ref={ref} className="flex flex-wrap justify-center gap-4">
            {tags.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="cursor-default transition-all duration-300"
                  style={{
                    padding: '14px 24px',
                    borderRadius: '14px',
                    background: 'rgba(124,92,252,0.1)',
                    border: '1px solid rgba(124,92,252,0.26)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(124,92,252,0.2)'
                    el.style.borderColor = 'rgba(124,92,252,0.5)'
                    el.style.boxShadow = '0 0 28px rgba(124,92,252,0.22)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(124,92,252,0.1)'
                    el.style.borderColor = 'rgba(124,92,252,0.26)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <p
                    className="font-mono font-medium leading-none mb-2"
                    style={{ color: '#A895FF', fontSize: '0.88rem' }}
                  >
                    {tag.label}
                  </p>
                  <p
                    className="font-mono leading-none"
                    style={{ color: '#5A5A8A', fontSize: '0.72rem' }}
                  >
                    {tag.gene}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hashtag */}
          <p
            className="font-mono text-xs text-center mt-10"
            style={{ color: '#3C3C5A' }}
          >
            #AlignToYourCore
          </p>
        </div>
      </FadeInOnScroll>
    </section>
  )
}
