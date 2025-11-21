import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Globe2, Wallet, Home, Building2 } from 'lucide-react'
import Button from './Button'

const languages = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
  { code: 'fr', label: 'FR', dir: 'ltr' },
]

export default function Navbar({ lang = 'en', onLangChange }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-700 text-white shadow-sm">🕌</span>
            <span className="font-extrabold text-emerald-800 tracking-tight">Masdaqa</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=> `inline-flex items-center gap-1 ${isActive ? 'text-emerald-900 font-semibold' : 'text-emerald-800/80 hover:text-emerald-900'}`}>
              <Home className="w-4 h-4"/> Home
            </NavLink>
            <NavLink to="/explore" className={({isActive})=> `inline-flex items-center gap-1 ${isActive ? 'text-emerald-900 font-semibold' : 'text-emerald-800/80 hover:text-emerald-900'}`}>
              <Building2 className="w-4 h-4"/> Explore Mosques
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-emerald-200 text-emerald-800 text-sm rounded-full px-3 py-1.5 pr-7 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              value={lang}
              onChange={(e)=> onLangChange?.(e.target.value)}
            >
              {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
            <Globe2 className="w-4 h-4 text-emerald-700 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <Button className="hidden sm:inline-flex"><Wallet className="w-4 h-4 mr-2"/> Connect Wallet</Button>
        </div>

        <button onClick={()=> setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-200 text-emerald-800">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            <NavLink to="/" onClick={()=> setOpen(false)} className={({isActive})=> `block ${isActive ? 'text-emerald-900 font-semibold' : 'text-emerald-800/80'}`}>Home</NavLink>
            <NavLink to="/explore" onClick={()=> setOpen(false)} className={({isActive})=> `block ${isActive ? 'text-emerald-900 font-semibold' : 'text-emerald-800/80'}`}>Explore Mosques</NavLink>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-700" />
              <select className="flex-1 bg-white border border-emerald-200 text-emerald-800 text-sm rounded-full px-3 py-1.5" value={lang} onChange={(e)=> onLangChange?.(e.target.value)}>
                {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
              </select>
            </div>
            <Button className="w-full"><Wallet className="w-4 h-4 mr-2"/> Connect Wallet</Button>
          </div>
        </div>
      )}
    </header>
  )
}
