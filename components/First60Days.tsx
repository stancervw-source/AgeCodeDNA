'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'
import SectionHeader from './ui/SectionHeader'

const priorities = [
  {
    label: '01 - Sharpen the core message',
    title: 'Sharpen the core message',
    body: [
      'Clarify what DNA Insights actually change for the user - not more data, but better decisions.',
      'Today, the narrative risks spreading across personalization, insights, and potential. The goal is to align the team around one clear idea that translates across product, design, and communication.',
    ],
    outcome: 'Outcome: a single, consistent message that defines how AgeCode is understood internally and externally.',
  },
  {
    label: '02 - Validate the action loop',
    title: 'Validate the action loop',
    body: [
      'Work closely with product and design to understand whether DNA insights translate into real behavior.',
      'This means observing how users interpret recommendations, where they hesitate, and what actually triggers action. The focus is not on the insight itself, but on whether it becomes part of a daily decision.',
    ],
    outcome: 'Outcome: clarity on what makes recommendations credible and actionable - and where the current experience breaks.',
  },
  {
    label: '03 - Build one trust-led launch wedge',
    title: 'Build one trust-led launch wedge',
    body: [
      'Instead of spreading across channels, focus on one high-trust entry point to validate both messaging and distribution.',
      'This could take the form of a KOL-led explainer or a focused partnership pilot - something that demonstrates the product in a credible context and generates real user response.',
    ],
    outcome: 'Outcome: one working distribution path that can later be scaled, rather than multiple untested channels.',
  },
]

export default function First60Days() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '128px 24px' }}>
      <FadeInOnScroll>
        <SectionHeader label="05 - First 60 Days" />
        <h2
          className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-5"
          style={{ color: '#F5F7FA' }}
        >
          If I joined AgeCode tomorrow
        </h2>
        <p className="text-base mb-20" style={{ color: '#8A90A2', lineHeight: 1.7 }}>
          The first 60 days would focus on three priorities:
        </p>
      </FadeInOnScroll>

      {/* Priorities */}
      <div className="space-y-16">
        {priorities.map((p, i) => (
          <FadeInOnScroll key={i} delay={i * 0.08}>
            <div style={{ maxWidth: '720px' }}>
              {/* Label */}
              <p
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: '#8A90A2', letterSpacing: '0.13em' }}
              >
                {p.label}
              </p>

              {/* Body */}
              <div className="space-y-4 mb-5">
                {p.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed"
                    style={{ color: '#C7CCD6', lineHeight: 1.8 }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Outcome */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#8A90A2', lineHeight: 1.75 }}
              >
                {p.outcome}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      {/* Approach closing block */}
      <FadeInOnScroll delay={0.1}>
        <div
          style={{
            maxWidth: '720px',
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p
            className="font-sans font-semibold text-xl mb-4"
            style={{ color: '#F5F7FA' }}
          >
            Approach
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: '#C7CCD6', lineHeight: 1.8 }}
          >
            The goal is not to launch broadly, but to ensure that when AgeCode does scale, it is built on a message that resonates, a product that drives behavior, and a distribution path that already works.
          </p>
        </div>
      </FadeInOnScroll>
    </section>
  )
}
