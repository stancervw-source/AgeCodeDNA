'use client'

import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        borderTop: '1px solid #1A1A1A',
        background: '#0A0A0A',
      }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6"
        style={{ maxWidth: '1200px' }}
      >
        <p className="font-mono text-xs" style={{ color: '#6A6A6A' }}>
          Alexey Deniskin — Creative Brief for AgeCode DNA Insights Launch
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/alexey-deniskin-8b6957213/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: '#6A6A6A' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#7C5CFC')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6A6A6A')}
          >
            <Linkedin size={16} />
          </a>
          <p className="font-mono text-xs" style={{ color: '#555555' }}>
            2026
          </p>
        </div>
      </div>
    </footer>
  )
}
