'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ maxWidth: '640px', width: '100%' }}>
        <p style={{ color: '#7C5CFC', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '16px' }}>
          RUNTIME ERROR
        </p>
        <h2 style={{ color: '#F5F5F5', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
          {error.message || 'Something went wrong'}
        </h2>
        <pre
          style={{
            color: '#666666',
            fontSize: '11px',
            lineHeight: 1.7,
            background: '#111111',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            marginBottom: '24px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {error.stack}
        </pre>
        <button
          onClick={reset}
          style={{
            background: '#7C5CFC',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '13px',
            cursor: 'pointer',
            fontFamily: 'monospace',
          }}
        >
          Try again →
        </button>
      </div>
    </div>
  )
}
