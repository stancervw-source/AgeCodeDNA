'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

const leftCopy = [
  `People who actively invest in their health - running labs, wearing trackers, optimizing supplements - already live inside a system of data. They treat health like a tech platform and know that outcomes depend on data.`,
  `The market responds with personalized formulas, AI trainers, adaptive protocols. But all of this personalization pulls toward a population average. It answers "what are you missing compared to the norm" - not "what norm is right specifically for you."`,
  `Some have already taken a DNA test. They received a 100+ page PDF: predispositions, probabilities, gene names. And no idea what to do with it. The most personal information about their body - and the most useless in its current form.`,
  `Behind all these numbers there is one layer that determines how this specific body processes everything. That layer is DNA. Your core. And for most people, it's factored into zero decisions.`,
]

export default function AudienceInsight() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px' }}>
      <FadeInOnScroll>
        <SectionHeader label="01 - Strategy" />
        <h2
          className="font-sans font-semibold text-5xl lg:text-6xl tracking-tight mb-16"
          style={{ color: '#F5F7FA' }}
        >
          Audience Insight
        </h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left - copy */}
        <div className="lg:col-span-7 space-y-6">
          {leftCopy.map((text, i) => (
            <FadeInOnScroll key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed" style={{ color: '#C7CCD6', lineHeight: 1.8 }}>
                {text}
              </p>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Right - unified evidence container */}
        <div className="lg:col-span-5">
          <FadeInOnScroll delay={0.15}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#111218', border: '1px solid rgba(255,255,255,0.08)' }}
            >

              {/* Insight 01 */}
              <div style={{ padding: '32px' }}>
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-5"
                  style={{ color: '#8A90A2', letterSpacing: '0.13em' }}
                >
                  Insight 01
                </p>

                <p
                  className="font-sans font-medium text-base leading-snug mb-4"
                  style={{ color: '#F5F7FA', lineHeight: 1.6 }}
                >
                  "I do more for my health than most people around me - but I'm not sure I'm doing what's right specifically for me."
                </p>

                <p
                  className="text-sm mb-5"
                  style={{ color: '#8A90A2', lineHeight: 1.75 }}
                >
                  People are already investing time and effort into their health, but lack confidence that their actions are truly right for them.
                </p>

                {/* Evidence callout */}
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ background: '#161823', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="text-sm leading-relaxed mb-1"
                    style={{ color: '#C7CCD6', lineHeight: 1.7 }}
                  >
                    Up to <span style={{ color: '#A78BFA', fontWeight: 600 }}>28%</span> of consumers are willing to pay out of pocket for personalized treatment.
                  </p>
                  <p className="text-xs" style={{ color: '#8A90A2', lineHeight: 1.6 }}>
                    Personalization is seen as a key driver of future healthcare improvement.
                  </p>
                </div>

                <a
                  href="https://www.pwc.com/us/en/industries/health-industries/library/healthcare-consumer-insights-survey.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs hover:underline"
                  style={{ color: '#7C5CFF' }}
                >
                  Source: PwC 2025 US Healthcare Consumer Insights Survey →
                </a>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

              {/* Insight 02 */}
              <div style={{ padding: '32px' }}>
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-5"
                  style={{ color: '#8A90A2', letterSpacing: '0.13em' }}
                >
                  Insight 02
                </p>

                <p
                  className="font-sans font-medium text-base leading-snug mb-4"
                  style={{ color: '#F5F7FA', lineHeight: 1.6 }}
                >
                  "I took a DNA test - and it never changed a single decision I made."
                </p>

                <p
                  className="text-sm mb-5"
                  style={{ color: '#8A90A2', lineHeight: 1.75 }}
                >
                  Genetic data is often complex, hard to interpret, and rarely translates into meaningful action.
                </p>

                {/* Evidence callout */}
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ background: '#161823', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="text-sm leading-relaxed mb-1"
                    style={{ color: '#C7CCD6', lineHeight: 1.7 }}
                  >
                    Consumers question the utility of genetic test results and their ability to act on them.
                  </p>
                  <p className="text-xs" style={{ color: '#8A90A2', lineHeight: 1.6 }}>
                    Critics consistently raise concerns about utility, interpretation, and actionable value.
                  </p>
                </div>

                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/14636778.2025.2456259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs hover:underline"
                  style={{ color: '#7C5CFF' }}
                >
                  Source: Taylor &amp; Francis / Journal on DTC genetic testing →
                </a>
              </div>

            </div>
          </FadeInOnScroll>
        </div>

      </div>
    </section>
  )
}
