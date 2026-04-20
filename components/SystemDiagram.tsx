'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInOnScroll from './ui/FadeInOnScroll'

const flowNodes = [
  {
    label: 'DNA / Core',
    sub: 'Genetic sequence — your biological firmware',
    highlight: true,
  },
  {
    label: 'Interpretation Layer',
    sub: 'Variant analysis · phenotype mapping · risk weighting',
    highlight: false,
  },
  {
    label: 'Recommendations',
    sub: 'Calibrated goals and actions for your genotype',
    highlight: false,
  },
  {
    label: 'Daily Actions',
    sub: 'Nutrition · Training · Recovery · Sleep',
    highlight: false,
  },
  {
    label: 'Longevity Strategy',
    sub: 'Decade-scale priorities unique to your biology',
    highlight: false,
  },
]

const withoutCore = [
  'Population averages as baseline',
  'Generic health targets',
  'Static, one-time recommendations',
  'Unknown personal reference point',
]

const withCore = [
  'Genetic sequence as permanent reference',
  'Personalized goals and priorities',
  'Action plan calibrated to your biology',
  'Every decision anchored to your core',
]

export default function SystemDiagram() {
  const flowRef = useRef(null)
  const inView = useInView(flowRef, { once: true, margin: '-80px' })

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 128px' }}>
      <FadeInOnScroll>
        <h3 className="font-sans font-semibold text-xl lg:text-2xl tracking-tight mb-4" style={{ color: '#C7CCD6' }}>
          How the system works
        </h3>
        <p className="text-base mb-16 max-w-xl" style={{ color: '#8A8A8A' }}>
          DNA isn't another data stream. It's the origin layer that gives all other health data its correct meaning.
        </p>
      </FadeInOnScroll>

      {/* ─── Horizontal flow diagram ─── */}
      <div ref={flowRef} className="mb-5">
        {/* Desktop */}
        <div className="hidden lg:flex items-stretch">
          {flowNodes.map((node, i) => (
            <div key={node.label} className="flex items-stretch flex-1">
              <motion.div
                className="flex-1 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.11 }}
                style={{
                  padding: '24px 20px',
                  background: node.highlight ? 'rgba(124,92,252,0.1)' : '#0C0C0C',
                  border: node.highlight
                    ? '1px solid rgba(124,92,252,0.32)'
                    : '1px solid #141414',
                  borderLeft: i > 0 ? 'none' : undefined,
                  borderRadius:
                    i === 0
                      ? '14px 0 0 14px'
                      : i === flowNodes.length - 1
                      ? '0 14px 14px 0'
                      : '0',
                  boxShadow: node.highlight ? '0 0 40px rgba(124,92,252,0.09) inset' : 'none',
                  minHeight: '130px',
                }}
              >
                {/* Indicator dot */}
                <div
                  style={{
                    width: node.highlight ? 10 : 7,
                    height: node.highlight ? 10 : 7,
                    borderRadius: '50%',
                    background: node.highlight ? '#7C5CFC' : '#242424',
                    boxShadow: node.highlight ? '0 0 12px rgba(124,92,252,0.9)' : 'none',
                    marginBottom: 14,
                    flexShrink: 0,
                  }}
                />
                <p
                  className="font-sans font-semibold text-sm leading-snug mb-2"
                  style={{ color: node.highlight ? '#A895FF' : '#C0C0C0' }}
                >
                  {node.label}
                </p>
                <p
                  className="font-mono leading-relaxed"
                  style={{ color: '#3E3E3E', fontSize: '0.65rem' }}
                >
                  {node.sub}
                </p>
              </motion.div>

              {/* Arrow connector */}
              {i < flowNodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.11 + 0.18 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    flexShrink: 0,
                    background: '#080808',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      color: i === 0 ? 'rgba(124,92,252,0.6)' : '#242424',
                      fontSize: '0.75rem',
                    }}
                  >
                    →
                  </span>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden">
          {flowNodes.map((node, i) => (
            <div key={node.label}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '16px',
                  background: node.highlight ? 'rgba(124,92,252,0.08)' : 'transparent',
                  border: node.highlight ? '1px solid rgba(124,92,252,0.22)' : '1px solid transparent',
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginTop: 4,
                    background: node.highlight ? '#7C5CFC' : '#2A2A2A',
                    boxShadow: node.highlight ? '0 0 10px rgba(124,92,252,0.9)' : 'none',
                  }}
                />
                <div>
                  <p
                    className="font-sans font-semibold text-sm mb-1"
                    style={{ color: node.highlight ? '#A895FF' : '#D0D0D0' }}
                  >
                    {node.label}
                  </p>
                  <p className="font-mono" style={{ color: '#4A4A4A', fontSize: '0.68rem' }}>
                    {node.sub}
                  </p>
                </div>
              </motion.div>
              {i < flowNodes.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 20,
                    marginLeft: 20,
                    background:
                      i === 0
                        ? 'linear-gradient(to bottom, rgba(124,92,252,0.5), #1E1E1E)'
                        : '#1E1E1E',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── Without / With Core ─── */}
      <FadeInOnScroll delay={0.35}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
          style={{ border: '1px solid #181818' }}
        >
          {/* Without core */}
          <div className="p-8" style={{ background: '#060606', borderRight: '1px solid #131313' }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#202020' }} />
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#3E3E3E' }}>
                Without core
              </p>
            </div>
            <div className="space-y-3">
              {withoutCore.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-mono text-xs mt-0.5 flex-shrink-0" style={{ color: '#2E2E2E' }}>—</span>
                  <span className="text-sm leading-relaxed" style={{ color: '#393939' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With core */}
          <div
            className="p-8 relative"
            style={{
              background: 'rgba(124,92,252,0.05)',
              borderLeft: '2px solid rgba(124,92,252,0.22)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at top left, rgba(124,92,252,0.08) 0%, transparent 65%)',
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#7C5CFC', boxShadow: '0 0 8px rgba(124,92,252,0.9)' }}
                />
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#7C5CFC' }}>
                  With core
                </p>
              </div>
              <div className="space-y-3">
                {withCore.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="font-mono text-xs mt-0.5 flex-shrink-0" style={{ color: '#7C5CFC' }}>→</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#F5F5F5' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p
          className="font-mono text-xs mt-4 px-1"
          style={{ color: '#454545' }}
        >
          Core isn't a one-time test result — it's a permanent calibration layer referenced by every recommendation, forever.
        </p>
      </FadeInOnScroll>
    </section>
  )
}
