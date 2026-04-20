'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

export default function BigIdea() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px 64px' }}>
      <FadeInOnScroll>
        <SectionHeader label="02 — Creative Platform" />
        <h2 className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-12" style={{ color: '#F5F5F5' }}>
          The Big Idea
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <p
          className="font-sans font-semibold leading-tight mb-12"
          style={{ color: '#F5F5F5', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
        >
          "Your DNA is your{' '}
          <span style={{ color: '#7C5CFC' }}>reference point.</span>{' '}
          Without it, your health data is calibrated to population averages. With it, every
          recommendation aligns to your{' '}
          <span style={{ color: '#7C5CFC' }}>core</span> — and you realize what you were{' '}
          <em>designed to achieve.</em>"
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FadeInOnScroll delay={0.2} className="lg:col-span-8">
          <p className="text-base leading-relaxed mb-5" style={{ color: '#B3B3B3' }}>
            People who track their health already live in data. But all that data is interpreted
            against population averages. Personalization exists, but it pulls toward "the norm
            for an average person of your type." It doesn't know that your{' '}
            <span className="font-mono text-sm" style={{ color: '#7C5CFC' }}>ACTN3</span> makes
            you built for explosive power. That your{' '}
            <span className="font-mono text-sm" style={{ color: '#7C5CFC' }}>APOE</span>{' '}
            determines which neuroprotection and longevity strategy you specifically need. That
            your{' '}
            <span className="font-mono text-sm" style={{ color: '#7C5CFC' }}>CYP1A2</span>{' '}
            means pre-workout coffee is a performance booster specifically for your genotype.
            Some of these people already took a DNA test — and got a PDF that never once
            influenced their breakfast, workout, or 10-year plan.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#B3B3B3' }}>
            Core doesn't change dosages — core changes goals and the plan. Not "catch up to
            average," but "unlock what this body is capable of — in sport, health, and longevity
            — and deliver concrete steps."
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
