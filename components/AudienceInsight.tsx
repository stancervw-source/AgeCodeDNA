'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

const introCopy = [
  `People are already investing in their health - tracking, testing, optimizing. But most decisions are still based on averages, not on what is actually right for them.`,
  `Even when people access deeper data, like DNA reports, it rarely translates into clear daily actions.`,
]

const insights = [
  {
    label: 'Insight 01',
    quote: '"I do more for my health than most people around me - but I\'m not sure I\'m doing what\'s right specifically for me."',
    supporting: 'People are already investing time and effort into their health, but lack confidence that their actions are truly right for them.',
    evidence: 'Up to 28% of consumers are willing to pay out of pocket for personalized treatment.',
    sourceLabel: 'PwC 2025 US Healthcare Consumer Insights Survey',
    sourceUrl: 'https://www.pwc.com/us/en/industries/health-industries/library/healthcare-consumer-insights-survey.html',
  },
  {
    label: 'Insight 02',
    quote: '"I took a DNA test - and it never changed a single decision I made."',
    supporting: 'Genetic data is often complex, hard to interpret, and rarely translates into meaningful action.',
    evidence: 'Consumers question the utility of genetic test results and their ability to act on them.',
    sourceLabel: 'Taylor & Francis / Journal on DTC genetic testing',
    sourceUrl: 'https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2456259',
  },
]

export default function AudienceInsight() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px' }}>

      {/* Section header */}
      <FadeInOnScroll>
        <SectionHeader label="01 — Strategy" />
        <h2
          className="font-sans font-semibold text-5xl lg:text-6xl tracking-tight mb-12"
          style={{ color: '#F5F7FA' }}
        >
          Audience Insight
        </h2>
      </FadeInOnScroll>

      {/* Intro — full width */}
      <FadeInOnScroll>
        <p className="text-base mb-10" style={{ color: '#C7CCD6', lineHeight: 1.8 }}>
          {introCopy.join(' ')}
        </p>
      </FadeInOnScroll>

      {/* Insights — 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {insights.map((insight, i) => (
          <FadeInOnScroll key={i} delay={i * 0.1}>
            <div
              className="flex flex-col h-full rounded-2xl"
              style={{
                background: '#111218',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '36px',
              }}
            >
              {/* Label */}
              <p
                className="font-mono text-xs uppercase tracking-widest mb-6"
                style={{ color: '#8A90A2', letterSpacing: '0.13em' }}
              >
                {insight.label}
              </p>

              {/* Quote — primary focus */}
              <p
                className="font-sans font-medium text-lg leading-snug mb-5 flex-1"
                style={{ color: '#F5F7FA', lineHeight: 1.55 }}
              >
                {insight.quote}
              </p>

              {/* Supporting text */}
              <p
                className="text-sm mb-6"
                style={{ color: '#8A90A2', lineHeight: 1.75 }}
              >
                {insight.supporting}
              </p>

              {/* Evidence */}
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{ background: '#161823', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-sm" style={{ color: '#C7CCD6', lineHeight: 1.7 }}>
                  {insight.evidence}
                </p>
              </div>

              {/* Source */}
              <a
                href={insight.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: '#7C5CFF' }}
              >
                Source: {insight.sourceLabel} →
              </a>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

    </section>
  )
}
