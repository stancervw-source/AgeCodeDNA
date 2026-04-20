'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

const defaultItems = [
  'Generic recommendations',
  'Static DNA reports',
  'User interprets alone',
]

const coreItems = [
  'Personalized daily decisions',
  'DNA integrated into the system',
  'Action is guided, not guessed',
]

export default function DefaultVsCoreDemo() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 128px' }}>
      <FadeInOnScroll>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h3
              className="font-sans font-semibold text-xl lg:text-2xl tracking-tight mb-3"
              style={{ color: '#C7CCD6' }}
            >
              Default - Core-aligned
            </h3>
            <p className="text-base max-w-xl" style={{ color: '#8A90A2' }}>
              Same health data. Different layer. One gives averages. One gives answers.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: '#2A2A35' }} />
              <span className="font-mono text-xs" style={{ color: '#8A90A2' }}>Default</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#7C5CFF', boxShadow: '0 0 8px rgba(124,92,255,0.8)' }}
              />
              <span className="font-mono text-xs" style={{ color: '#A78BFA' }}>Core-aligned</span>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Default column */}
          <div
            className="p-10"
            style={{ background: '#060609', borderRight: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2A2A35' }} />
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#8A90A2' }}>
                Default
              </p>
            </div>
            <div className="space-y-5">
              {defaultItems.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span
                    className="font-mono text-xs mt-0.5 flex-shrink-0"
                    style={{ color: '#3A3A4A' }}
                  >
                    —
                  </span>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: '#3A3A4A' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core-aligned column */}
          <div
            className="p-10 relative"
            style={{ background: 'rgba(124,92,255,0.05)' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at top left, rgba(124,92,255,0.08) 0%, transparent 65%)',
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-8">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#7C5CFF', boxShadow: '0 0 8px rgba(124,92,255,0.9)' }}
                />
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#7C5CFF' }}>
                  Core-aligned
                </p>
              </div>
              <div className="space-y-5">
                {coreItems.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span
                      className="font-mono text-xs mt-0.5 flex-shrink-0"
                      style={{ color: '#7C5CFF' }}
                    >
                      →
                    </span>
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: '#F5F7FA' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  )
}
