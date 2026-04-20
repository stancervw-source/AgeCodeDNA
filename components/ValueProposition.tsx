'use client'

import FadeInOnScroll from './ui/FadeInOnScroll'

export default function ValueProposition() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 128px' }}>
      <FadeInOnScroll>
        <h2 className="font-sans font-semibold text-4xl lg:text-5xl tracking-tight mb-10" style={{ color: '#F5F5F5' }}>
          Core Value Proposition
        </h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FadeInOnScroll delay={0.1} className="lg:col-span-7">
          <p className="text-base leading-relaxed mb-6" style={{ color: '#B3B3B3' }}>
            DNA is the core configuration of the body. It determines not just risks, but above
            all — opportunities: how you absorb nutrients, which type of training gives you
            maximum response, where you have a genetic edge in sport, which aging factors are
            your priority and which aren't, and how to build a longevity strategy for your
            specific biology.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#B3B3B3' }}>
            Existing personalization (by labs, trackers, questionnaires) answers "where are you
            now." Core answers "what exactly should you aim for, what specifically to do, and in
            what order" — and builds a clear action plan calibrated to your genetics. From
            today's breakfast to a strategy for the next 20 years. This isn't another data
            stream — it's the origin from which all other data gains its correct meaning.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2} className="lg:col-span-5">
          <div
            className="p-8 rounded-2xl h-full flex flex-col justify-center"
            style={{
              background: 'rgba(124,92,252,0.06)',
              border: '1px solid rgba(124,92,252,0.2)',
            }}
          >
            <div className="space-y-6">
              {[
                {
                  label: 'Existing personalization',
                  desc: '"Where are you now vs the norm?"',
                  dim: true,
                },
                {
                  label: 'Core',
                  desc: '"What should you aim for? What to do? In what order?"',
                  dim: false,
                },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="font-mono text-xs uppercase tracking-widest mb-2"
                    style={{ color: item.dim ? '#444444' : '#7C5CFC' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-sans font-medium text-lg"
                    style={{ color: item.dim ? '#555555' : '#F5F5F5' }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
