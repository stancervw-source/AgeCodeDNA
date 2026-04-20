'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

const cards = [
  {
    n: '01',
    title: 'Demand for precision',
    body: [
      'Users already invest in optimizing their health — and increasingly, they take DNA tests.',
      'But most results remain static: long reports with no clear next steps.',
    ],
    footer: "→ The need isn't more data. It's a system that turns it into action.",
  },
  {
    n: '02',
    title: 'From data to action',
    body: [
      "AgeCode doesn't treat DNA as a report.",
      'It becomes the core layer of the product — powering a clear, personalized plan embedded directly into existing workflows.',
    ],
    footer: "→ Users don't analyze results. They follow a system.",
  },
  {
    n: '03',
    title: 'From insight to behavior',
    body: [
      'When users understand what to do — and how it impacts their health — data becomes actionable.',
      'DNA transforms from information into a source of direction and motivation.',
    ],
    footer: '→ Insight turns into behavior.',
  },
]

export default function Rationale() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 128px' }}>
      <FadeInOnScroll>
        <h2
          className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-3"
          style={{ color: '#F5F5F5' }}
        >
          Rationale
        </h2>
        <p className="text-base mb-14" style={{ color: '#666666' }}>
          Why this approach works for the audience, the product, and conversion.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <FadeInOnScroll key={card.n} delay={i * 0.1}>
            <div
              className="flex flex-col h-full rounded-2xl"
              style={{
                background: '#0C0C0C',
                border: '1px solid #181818',
                padding: '28px 24px',
              }}
            >
              {/* Number */}
              <p className="font-mono text-xs mb-5" style={{ color: '#7C5CFC' }}>
                {card.n}
              </p>

              {/* Title */}
              <h3
                className="font-sans font-semibold text-xl mb-5 leading-snug"
                style={{ color: '#F0F0F0' }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <div className="space-y-3 flex-1">
                {card.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed"
                    style={{ color: '#787878', lineHeight: 1.75 }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <p
                className="font-mono text-xs mt-8 pt-5"
                style={{
                  color: '#555577',
                  borderTop: '1px solid #161616',
                  lineHeight: 1.7,
                }}
              >
                {card.footer}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  )
}
