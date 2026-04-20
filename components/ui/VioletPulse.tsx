'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function VioletPulse() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="relative h-px overflow-hidden" style={{ background: '#161616', margin: '0 24px' }}>
      {inView && (
        <motion.div
          className="absolute inset-y-0 left-0 w-full h-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,252,0.7), transparent)' }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      )}
    </div>
  )
}
