'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

const stages = [
  {
    label: '01 - PR',
    title: 'The category problem becomes visible',
    description:
      'Most DNA reports generate information, but fail to change behavior. We make the gap visible before we introduce the solution.',
    caption: 'Role: creates category tension',
    image: '/editorial-dna-behavior-gap.png',
  },
  {
    label: '02 - Partnership',
    title: 'The idea becomes part of care delivery',
    description:
      'A leading health insurer integrates DNA Insights into everyday care, turning a static report into a usable decision layer.',
    caption: 'Role: proves real-world utility',
    image: '/insurance-dna-integration.png',
  },
  {
    label: '03 - Key Opinion Leader',
    title: 'A trusted voice makes it understandable',
    description:
      'A medical expert translates genetic predispositions into clear daily decisions people can actually use.',
    caption: 'Role: converts complexity into trust',
    image: '/kol-dna-explainer.png',
  },
]

export default function EarnedMedia() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px 128px' }}>

      {/* Header */}
      <FadeInOnScroll>
        <h2
          className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-5"
          style={{ color: '#F5F7FA' }}
        >
          Earned Media Activation
        </h2>
        <p
          className="text-base max-w-2xl mb-20"
          style={{ color: '#8A90A2', lineHeight: 1.75 }}
        >
          We don't launch DNA Insights like a product campaign.
          <br />
          We introduce them through systems people already trust - media, healthcare, and expert voices.
        </p>
      </FadeInOnScroll>

      {/* Stages */}
      <div className="space-y-5">
        {stages.map((stage, i) => (
          <FadeInOnScroll key={i} delay={i * 0.08}>
            <div
              className="flex flex-col lg:flex-row overflow-hidden rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#111218' }}
            >
              {/* Image - dominant, left */}
              <div
                style={{
                  flex: '0 0 62%',
                  minHeight: '400px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#09090B',
                }}
              >
                <img
                  src={stage.image}
                  loading="lazy"
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Text - right */}
              <div
                className="flex flex-col justify-center"
                style={{
                  flex: '0 0 38%',
                  padding: '44px 40px',
                  borderLeft: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-4"
                  style={{ color: '#8A90A2', letterSpacing: '0.13em' }}
                >
                  {stage.label}
                </p>

                <h3
                  className="font-sans font-semibold text-2xl leading-snug mb-5"
                  style={{ color: '#F5F7FA' }}
                >
                  {stage.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: '#C7CCD6', lineHeight: 1.8 }}
                >
                  {stage.description}
                </p>

                <p
                  className="font-mono text-xs"
                  style={{
                    color: 'rgba(124,92,255,0.5)',
                    letterSpacing: '0.08em',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '18px',
                  }}
                >
                  {stage.caption}
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>


    </section>
  )
}
