import React from 'react'

export default function ProgressBar({ value = 0 }) {
  const clamped = Math.max(0, Math.min(100, value))
  const isGold = clamped >= 90
  return (
    <div className="w-full h-3 bg-emerald-100 rounded-full overflow-hidden">
      <div
        className={`h-full ${isGold ? 'bg-yellow-500' : 'bg-emerald-600'} transition-all duration-500`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
