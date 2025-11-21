import React from 'react'

export default function PatternBG({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden>
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, #0f5132 2px, transparent 0), radial-gradient(circle at 75px 75px, #0f5132 2px, transparent 0)`,
        backgroundSize: '100px 100px'
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
    </div>
  )
}
