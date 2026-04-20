'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

const posters = [
  {
    n: '01',
    category: 'Performance',
    lines: [
      'You run 5K three times a week.',
      'Solid habit. Generic plan.',
      '',
      'Your ACTN3 says you\'re built',
      'for explosive power, not endurance.',
      '',
      'You\'ve been leaving your',
      'best performance on the table.',
    ],
    genes: ['ACTN3'],
  },
  {
    n: '02',
    category: 'Nutrition',
    lines: [
      'You cut carbs last January.',
      'Lost 3 kilos. Gained them back.',
      '',
      'Your AMY1 says you digest starch',
      'better than 70% of people.',
      '',
      'Carbs aren\'t your enemy.',
      'They\'re your advantage.',
    ],
    genes: ['AMY1'],
  },
  {
    n: '03',
    category: 'Recovery',
    lines: [
      'Your recovery day is 48 hours.',
      'That\'s what the app says.',
      '',
      'Your IL-6 profile says you',
      'recover faster than most.',
      '',
      'You could be training again',
      'while others are still resting.',
    ],
    genes: ['IL-6'],
  },
  {
    n: '04',
    category: 'Longevity',
    lines: [
      'Your anti-aging plan: antioxidants,',
      'supplements, caloric restriction.',
      'Same protocol as everyone else.',
      '',
      'Your APOE and FOXO3 say your',
      'longevity responds strongest',
      'to cardiovascular fitness.',
      '',
      'Your best years aren\'t behind you.',
      'They\'re in your core.',
    ],
    genes: ['APOE', 'FOXO3'],
  },
  {
    n: '05',
    category: 'Cognitive',
    lines: [
      'You do crosswords for brain health.',
      'Your doctor said "stay sharp."',
      '',
      'Your BDNF variant says aerobic',
      'exercise does more for YOUR brain',
      'than any puzzle or nootropic.',
      '',
      'Your sharpest tool was always',
      'a pair of running shoes.',
    ],
    genes: ['BDNF'],
  },
  {
    n: '06',
    category: 'Anchor',
    lines: [
      'Your health data knows',
      'your numbers.',
      '',
      'It doesn\'t know your core.',
      '',
      'Your core knows what you',
      'were built for.',
      '',
      'Align to your core.',
      'Realize what you\'re built for.',
    ],
    genes: [],
  },
]

function Poster({ poster, index }: { poster: typeof posters[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="flex flex-col"
    >
      {/* Outer frame */}
      <div
        className="relative flex flex-col h-full"
        style={{
          background: '#050505',
          border: '1px solid #1C1C1C',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 2px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset',
        }}
      >
        {/* Corner accents */}
        {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
          <div
            key={pos}
            style={{
              position: 'absolute',
              width: 16,
              height: 16,
              top: pos.startsWith('t') ? 0 : undefined,
              bottom: pos.startsWith('b') ? 0 : undefined,
              left: pos.endsWith('l') ? 0 : undefined,
              right: pos.endsWith('r') ? 0 : undefined,
              borderTop: pos.startsWith('t') ? '1px solid rgba(124,92,252,0.35)' : undefined,
              borderBottom: pos.startsWith('b') ? '1px solid rgba(124,92,252,0.35)' : undefined,
              borderLeft: pos.endsWith('l') ? '1px solid rgba(124,92,252,0.35)' : undefined,
              borderRight: pos.endsWith('r') ? '1px solid rgba(124,92,252,0.35)' : undefined,
            }}
          />
        ))}

        {/* Meta header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid #0E0E0E' }}
        >
          <span className="font-mono text-xs" style={{ color: '#555555', letterSpacing: '0.12em' }}>
            {poster.n} / 06
          </span>
          <span className="font-mono text-xs" style={{ color: '#555555', letterSpacing: '0.1em' }}>
            {poster.category.toUpperCase()}
          </span>
        </div>

        {/* Poster body */}
        <div className="flex-1 px-6 py-8 flex flex-col justify-between">
          <div className="space-y-px">
            {poster.lines.map((line, i) => {
              if (line === '') return <div key={i} style={{ height: '1em' }} />
              let content: React.ReactNode = line
              poster.genes.forEach((gene) => {
                if (typeof content === 'string' && content.includes(gene)) {
                  const parts = content.split(gene)
                  content = (
                    <>
                      {parts[0]}
                      <span style={{ color: '#7C5CFC' }}>{gene}</span>
                      {parts[1]}
                    </>
                  )
                }
              })
              return (
                <p
                  key={i}
                  className="font-mono leading-loose"
                  style={{ color: '#D0D0D0', fontSize: '0.78rem' }}
                >
                  {content}
                </p>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-5" style={{ borderTop: '1px solid #111111' }}>
            <p className="font-mono text-xs mb-1" style={{ color: '#7C5CFC', letterSpacing: '0.06em' }}>
              Align to your core.
            </p>
            <p className="font-mono text-xs" style={{ color: '#3E3E3E' }}>
              AgeCode DNA Insights
            </p>
          </div>
        </div>
      </div>

      {/* Location badge */}
      <p className="font-mono text-xs text-center mt-3" style={{ color: '#3E3E3E' }}>
        NYC L Train · London Central Line
      </p>
    </motion.div>
  )
}

export default function SubwayPosters() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px' }}>
      <FadeInOnScroll>
        <SectionHeader label="04 — Activations" />
        <h2 className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-4" style={{ color: '#F5F5F5' }}>
          Subway Campaign
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        {/* Campaign spec strip */}
        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-16 px-6 py-4 rounded-xl"
          style={{ background: '#0C0C0C', border: '1px solid #181818' }}
        >
          {[
            { label: 'Format', value: '6 OOH posters' },
            { label: 'Duration', value: '4–6 weeks' },
            { label: 'Location', value: 'NYC L Train · London Central Line' },
            { label: 'Budget', value: '$50–120K' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="font-mono text-xs" style={{ color: '#4A4A4A' }}>{item.label}</span>
              <span
                className="font-mono text-xs px-2.5 py-0.5 rounded-full"
                style={{
                  color: '#7C5CFC',
                  background: 'rgba(124,92,252,0.08)',
                  border: '1px solid rgba(124,92,252,0.16)',
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Poster grid — larger, more weight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {posters.map((p, i) => (
          <Poster key={p.category} poster={p} index={i} />
        ))}
      </div>

      {/* Why it works */}
      <FadeInOnScroll delay={0.1}>
        <h3 className="font-sans font-semibold text-2xl mb-8" style={{ color: '#F5F5F5' }}>
          Why it works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              n: '01',
              label: 'Opportunity, not fear',
              desc: 'Every poster says "you could do more" — positive tension, not risk anxiety.',
            },
            {
              n: '02',
              label: 'Proven format',
              desc: 'Single-location saturation proven by Nucleus Genomics (Broadway-Lafayette, 2025) and Friend AI (September 2025).',
            },
            {
              n: '03',
              label: 'Visual alien',
              desc: 'Text-on-black is a visual anomaly in subway advertising and health-tech. Stops the eye.',
            },
            {
              n: '04',
              label: 'Earned media by design',
              desc: 'Photographable, debatable, shareable. Specific gene facts invite screenshots and discussion.',
            },
          ].map((item) => (
            <FadeInOnScroll key={item.label}>
              <div
                className="p-6 rounded-xl flex gap-5"
                style={{ background: '#0C0C0C', border: '1px solid #181818' }}
              >
                <span className="font-mono text-xs pt-1 flex-shrink-0" style={{ color: '#7C5CFC' }}>
                  {item.n}
                </span>
                <div>
                  <p className="font-sans font-semibold text-sm mb-2" style={{ color: '#F5F5F5' }}>
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A7A7A' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  )
}
