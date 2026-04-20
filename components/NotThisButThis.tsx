'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

const notThis = [
  'Static DNA risk report',
  'One-time PDF, filed and forgotten',
  'Generic prevention advice',
]

const butThis = [
  'Living calibration layer',
  'Core-aligned daily decisions',
  'Daily + long-term strategy',
]

export default function NotThisButThis() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 96px' }}>
      <FadeInOnScroll>
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
          style={{ border: '1px solid #1E1E1E' }}
        >
          {/* Not this */}
          <div
            className="p-8"
            style={{ background: '#080808', borderRight: '1px solid #141414' }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: '#3E3E3E' }}>
              Not this
            </p>
            <div className="space-y-4">
              {notThis.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="font-mono text-xs flex-shrink-0" style={{ color: '#363636' }}>✕</span>
                  <p className="text-sm" style={{ color: '#363636', textDecoration: 'line-through', textDecorationColor: '#2A2A2A' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* But this */}
          <div
            className="p-8"
            style={{
              background: 'rgba(124,92,252,0.04)',
              borderLeft: '1px solid rgba(124,92,252,0.12)',
            }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: '#7C5CFC' }}>
              But this
            </p>
            <div className="space-y-4">
              {butThis.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="font-mono text-xs flex-shrink-0" style={{ color: '#7C5CFC' }}>→</span>
                  <p className="text-sm font-medium" style={{ color: '#F5F5F5' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  )
}
