'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

export default function BigIdea() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px 64px' }}>
      <FadeInOnScroll>
        <SectionHeader label="02 — Creative Platform" />
        <h2
          className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-12"
          style={{ color: '#F5F7FA' }}
        >
          The Big Idea
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <blockquote
          className="font-sans font-semibold leading-tight"
          style={{ color: '#F5F5F5', fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
        >
          "Most people try to improve their health, but still rely on{' '}
          <em style={{ color: '#7C5CFF' }}>guesswork</em> and generic advice.
          <br />
          AgeCode changes that by turning{' '}
          <em style={{ color: '#7C5CFF' }}>your DNA</em> into a system that guides{' '}
          <em style={{ color: '#7C5CFF' }}>personalized daily actions</em> - helping you
          finally act in line with your{' '}
          <em style={{ color: '#7C5CFF' }}>true potential</em>."
        </blockquote>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        <FadeInOnScroll delay={0.2} className="lg:col-span-8">
          <p className="text-base leading-relaxed mb-5" style={{ color: '#C7CCD6', lineHeight: 1.8 }}>
            People who track their health already live in data. But all that data is interpreted
            against population averages. Personalization exists, but it pulls toward "the norm
            for an average person of your type." It doesn't know that your{' '}
            <span className="font-mono text-sm" style={{ color: '#7C5CFF' }}>ACTN3</span> makes
            you built for explosive power. That your{' '}
            <span className="font-mono text-sm" style={{ color: '#7C5CFF' }}>APOE</span>{' '}
            determines which neuroprotection and longevity strategy you specifically need. That
            your{' '}
            <span className="font-mono text-sm" style={{ color: '#7C5CFF' }}>CYP1A2</span>{' '}
            means pre-workout coffee is a performance booster specifically for your genotype.
            Some of these people already took a DNA test — and got a PDF that never once
            influenced their breakfast, workout, or 10-year plan.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#C7CCD6', lineHeight: 1.8 }}>
            Core doesn't change dosages — core changes goals and the plan. Not "catch up to
            average," but "unlock what this body is capable of — in sport, health, and longevity
            — and deliver concrete steps."
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
