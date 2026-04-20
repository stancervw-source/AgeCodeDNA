'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const sections = [
  { id: 'strategy', label: '01' },
  { id: 'creative', label: '02' },
  { id: 'art', label: '03' },
  { id: 'activations', label: '04' },
  { id: 'sixty', label: '05' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (v) => {
      setScrolled(v > 60)
    })
  }, [scrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 lg:px-12"
      style={{
        height: '56px',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1A1A1A' : '1px solid transparent',
        transition: 'background 0.3s, border 0.3s, backdrop-filter 0.3s',
      }}
    >
      <a href="#" className="font-mono text-xs" style={{ color: '#6A6A6A' }}>
        AgeCode DNA Insights
      </a>

      <nav className="flex gap-4">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="font-mono text-xs transition-colors"
            style={{ color: active === id ? '#7C5CFC' : '#6A6A6A' }}
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
