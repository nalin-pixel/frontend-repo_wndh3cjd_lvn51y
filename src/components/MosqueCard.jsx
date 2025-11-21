import React from 'react'
import { MapPin, Users, BadgeCheck } from 'lucide-react'
import ProgressBar from './ProgressBar'
import Button from './Button'
import { formatCurrency } from '../lib/utils'

export default function MosqueCard({ mosque }) {
  const {
    name,
    nameArabic,
    location,
    image,
    targetAmount,
    raisedAmount,
    donorCount,
    status,
    badge,
    verified,
  } = mosque

  const progress = Math.round((raisedAmount / targetAmount) * 100)

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_40%)] pointer-events-none" />
        <img src={image} alt={name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300" />
        {badge && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow ${badge === 'urgent' ? 'bg-red-600 text-white' : badge === 'verified' ? 'bg-emerald-600 text-white' : 'bg-yellow-500 text-emerald-900'}`}>
            {badge === 'urgent' ? 'URGENT' : badge === 'verified' ? 'VERIFIED' : 'ALMOST FUNDED'}
          </span>
        )}
        {verified && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs bg-white/90 text-emerald-700 px-2 py-1 rounded-full">
            <BadgeCheck className="w-3.5 h-3.5" /> Verified
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-emerald-900">{name}</h3>
            <p className="text-sm text-emerald-700/80" dir="rtl">{nameArabic}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-emerald-800/80 text-sm">
          <MapPin className="w-4 h-4" /> {location}
        </div>

        <div className="mt-4">
          <ProgressBar value={progress} />
          <div className="mt-2 flex items-center justify-between text-sm text-emerald-900">
            <span>{formatCurrency(raisedAmount)} raised</span>
            <span className="text-emerald-700/80">of {formatCurrency(targetAmount)}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="inline-flex items-center gap-1 text-emerald-800/80">
            <Users className="w-4 h-4" /> {donorCount} donors
          </div>
          <div className="inline-flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${status === 'foundation' ? 'bg-orange-100 text-orange-700' : status === 'roofing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
              <span className={`w-2 h-2 rounded-full ${status === 'foundation' ? 'bg-orange-500' : status === 'roofing' ? 'bg-green-600' : 'bg-blue-600'}`} />
              {status === 'foundation' ? 'Foundation Phase' : status === 'roofing' ? 'Roofing Phase' : 'Interior Phase'}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button variant="gold" className="px-4 py-2">Donate</Button>
          <button className="text-emerald-800 hover:underline hover:underline-offset-4 hover:decoration-yellow-500">See Details →</button>
        </div>
      </div>
    </div>
  )
}
