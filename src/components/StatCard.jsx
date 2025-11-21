import React from 'react'
import { HandCoins, Building2, Users } from 'lucide-react'

const iconMap = {
  donations: HandCoins,
  mosques: Building2,
  donors: Users,
}

export default function StatCard({ type = 'donations', number = '0', label = '' }) {
  const Icon = iconMap[type] || HandCoins
  return (
    <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6 relative">
      <div className="absolute -top-1 left-0 right-0 h-1 bg-emerald-700 rounded-t-xl" />
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-emerald-900">{number}</div>
          <div className="text-sm text-emerald-700/80">{label}</div>
        </div>
      </div>
    </div>
  )
}
