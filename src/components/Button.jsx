import React from 'react'
import { cn } from '../lib/utils'

const base = 'inline-flex items-center justify-center rounded-full transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-emerald-800 text-white hover:scale-[1.03] hover:bg-emerald-900 focus:ring-emerald-700 focus:ring-offset-amber-50',
  gold: 'bg-yellow-600 text-emerald-900 hover:scale-[1.03] hover:bg-yellow-500 focus:ring-yellow-600 focus:ring-offset-amber-50',
  outline: 'border border-emerald-800 text-emerald-800 bg-transparent hover:scale-[1.03] hover:bg-emerald-50 focus:ring-emerald-700 focus:ring-offset-amber-50',
  whiteOutline: 'border border-white text-white hover:scale-[1.03] hover:bg-white/10 focus:ring-white/80 focus:ring-offset-emerald-900',
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  return (
    <button className={cn(base, variants[variant], 'px-5 py-2.5 text-sm md:text-base shadow-sm', className)} {...props}>
      {children}
    </button>
  )
}
