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
          "AgeCode DNA Insights uses your DNA as a core reference point - translating genetic data into{' '}
          <em style={{ color: '#7C5CFC' }}>clear</em>,{' '}
          <em style={{ color: '#7C5CFC' }}>personalized</em> daily{' '}
          <em style={{ color: '#7C5CFC' }}>decisions</em>."
        </blockquote>
      </FadeInOnScroll>
    </section>
  )
}
