'use client'

interface SectionHeaderProps {
  label: string
}

export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <p
      className="font-mono text-xs tracking-widest uppercase mb-8"
      style={{ color: '#7C5CFC' }}
    >
      {label}
    </p>
  )
}
