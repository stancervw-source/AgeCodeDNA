import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgeCode DNA Insights — Creative Brief by Alexey Deniskin',
  description: 'CMO Creative Brief: AgeCode DNA Insights product launch campaign. Positioning, creative platform, art direction, activations.',
  openGraph: {
    title: 'AgeCode DNA Insights — Creative Brief by Alexey Deniskin',
    description: 'CMO Creative Brief: AgeCode DNA Insights product launch campaign.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
