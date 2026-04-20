'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

export default function Positioning() {
  return (
    <section className="py-24" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px' }}>
      <FadeInOnScroll>
        <h2 className="font-sans font-medium text-3xl mb-10" style={{ color: '#B3B3B3' }}>
          Positioning Statement
        </h2>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.15}>
        <blockquote
          className="font-sans font-semibold leading-tight"
          style={{ color: '#F5F5F5', fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
        >
          "AgeCode DNA Insights is the only platform that uses genetic data as a core layer: not
          a static risk report, but a permanent reference point that calibrates every
          recommendation — from daily nutrition and training decisions to long-term health and
          longevity strategy — and reveals{' '}
          <em style={{ color: '#7C5CFC' }}>innate advantages invisible to standard analytics.</em>"
        </blockquote>
      </FadeInOnScroll>
    </section>
  )
}
