'use client'

import { motion } from 'framer-motion'
import { Linkedin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative"
      style={{ background: '#0A0A0A', paddingTop: '80px' }}
    >
      {/* Subtle violet gradient orb */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,92,252,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-content mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              className="font-mono text-xs tracking-widest uppercase mb-6"
              style={{ color: '#7C5CFC' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Creative Brief — AgeCode DNA Insights
            </motion.p>

            <motion.h1
              className="font-sans font-semibold text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight mb-4"
              style={{ color: '#F5F5F5' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Alexey
              <br />
              Deniskin
            </motion.h1>

            <motion.p
              className="text-lg mb-8"
              style={{ color: '#B3B3B3' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Chief Marketing Officer &amp; Growth Head
            </motion.p>

            <motion.p
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: '#B3B3B3' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              10+ years building brands and scaling products across US, UK, Europe &amp; MENA.
              Deep focus on Health, Sport Tech &amp; Marketplaces. Passionate about building
              products that genuinely change how people approach their health. Previously led
              marketing at Bioniq (personalized health supplements) and OZON (top-3 marketplace
              in Eastern Europe).
            </motion.p>

            <motion.a
              href="https://www.linkedin.com/in/alexey-deniskin-8b6957213/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors group"
              style={{ color: '#7C5CFC' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ x: 4 }}
            >
              <Linkedin size={18} />
              <span className="group-hover:underline">LinkedIn Profile</span>
            </motion.a>
          </div>

          {/* Right — Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Violet glow ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(124,92,252,0.4), 0 0 60px rgba(124,92,252,0.15)',
                  borderRadius: '20px',
                }}
              />
              <img
                src="/photo.jpg"
                alt="Alexey Deniskin"
                width={400}
                height={480}
                className="object-cover relative z-10"
                style={{
                  borderRadius: '18px',
                  width: '340px',
                  height: '400px',
                  display: 'block',
                  border: '1px solid #222222',
                }}
              />
              {/* Subtle violet gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
                style={{
                  borderRadius: '0 0 18px 18px',
                  background: 'linear-gradient(to top, rgba(10,10,10,0.4), transparent)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="font-mono text-xs" style={{ color: '#7A7A7A' }}>
          Scroll to explore the brief
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} style={{ color: '#7C5CFC' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
