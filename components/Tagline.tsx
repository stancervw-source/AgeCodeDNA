'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

const touchpoints = [
  { label: 'Headline', text: '"Align to your core. Realize what you\'re built for."' },
  { label: 'CTA', text: '"Align to your core →"' },
  { label: 'In-product', text: '"Your core is loaded. Here\'s what changed."' },
  { label: 'Series format', text: '"Default / Core-aligned"' },
  { label: 'Hashtag', text: '#AlignToYourCore' },
]

export default function Tagline() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 128px' }}>
      <FadeInOnScroll>
        <h2 className="font-sans font-medium text-3xl mb-16" style={{ color: '#B3B3B3' }}>
          Campaign Tagline
        </h2>
      </FadeInOnScroll>

      {/* Hero tagline — full-width centered */}
      <FadeInOnScroll delay={0.1}>
        <div
          className="text-center mb-20 py-20 relative"
          style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
        >
          {/* Subtle violet atmosphere */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(124,92,252,0.05) 0%, transparent 70%)',
            }}
          />
          <p
            className="font-sans font-semibold leading-none tracking-tight mb-5 relative"
            style={{ color: '#F5F5F5', fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Align to your core.
          </p>
          <p
            className="font-sans font-normal relative"
            style={{ color: '#7C5CFC', fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}
          >
            Realize what you're built for.
          </p>
        </div>
      </FadeInOnScroll>

      {/* Touchpoints — horizontal strip, no cards */}
      <FadeInOnScroll delay={0.2}>
        <p className="font-sans font-medium text-xl mb-8" style={{ color: '#7A7A7A' }}>
          How it works across touchpoints
        </p>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid #181818' }}
        >
          {touchpoints.map((t, i) => (
            <div
              key={t.label}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 px-6 py-4"
              style={{
                background: i % 2 === 0 ? '#080808' : '#060606',
                borderBottom: i < touchpoints.length - 1 ? '1px solid #101010' : 'none',
              }}
            >
              <span
                className="font-mono text-xs uppercase tracking-widest flex-shrink-0"
                style={{ color: '#7C5CFC', minWidth: '100px' }}
              >
                {t.label}
              </span>
              <p className="text-sm" style={{ color: '#D0D0D0' }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  )
}
