import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import StatCard from '../components/StatCard'
import MosqueCard from '../components/MosqueCard'
import ProgressBar from '../components/ProgressBar'
import PatternBG from '../components/PatternBG'
import { Eye, Shield, Handshake } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const featured = [
  { id:1, name:'Al-Rahman Mosque', nameArabic:'مسجد الرحمن', location:'Algiers, Algeria', image:'https://images.unsplash.com/photo-1583275477741-1813210b5cec?q=80&w=1600&auto=format&fit=crop', targetAmount:1000000, raisedAmount:670000, donorCount:234, status:'interior', badge:'', verified:true },
  { id:2, name:'Masjid Al-Noor', nameArabic:'مسجد النور', location:'Oran, Algeria', image:'https://images.unsplash.com/photo-1596943244759-c5c8b79aa3ef?q=80&w=1600&auto=format&fit=crop', targetAmount:1000000, raisedAmount:540000, donorCount:189, status:'roofing', badge:'verified', verified:true },
  { id:3, name:'Al-Firdaws Mosque', nameArabic:'مسجد الفردوس', location:'Constantine, Algeria', image:'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop', targetAmount:1000000, raisedAmount:230000, donorCount:89, status:'foundation', badge:'urgent', verified:false },
]

export default function Home() {
  const [lang, setLang] = useState('en')

  return (
    <div className="bg-amber-50 min-h-screen text-emerald-900">
      <Navbar lang={lang} onLangChange={setLang} />

      <main>
        {/* Hero */}
        <section className="relative pt-20">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="relative z-10 bg-gradient-to-b from-emerald-900/70 via-emerald-900/60 to-emerald-900/70 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Build Mosques with Complete Transparency
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-emerald-100">ابنِ المساجد بشفافية تامة</p>
              <p className="mt-6 max-w-2xl mx-auto text-emerald-100">
                Donate using blockchain. Track every dinar. Trust the process.
              </p>
              <p className="text-emerald-100">تبرع باستخدام البلوكشين. تتبع كل دينار. ثق في العملية.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="gold" className="px-7 py-3 text-base">Donate Now</Button>
                <Button variant="whiteOutline" className="px-7 py-3 text-base" onClick={()=> window.location.href='/explore'}>Explore Mosques</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-12">
          <PatternBG />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard type="donations" number="2,450,000 DZD" label="Total Donated" />
            <StatCard type="mosques" number="12" label="Mosques Funded" />
            <StatCard type="donors" number="847" label="Active Donors" />
          </div>
        </section>

        {/* How it works */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[{icon:'wallet', title:'1. Connect Wallet', desc:'Connect your MetaMask or any Web3 wallet'}, {icon:'search', title:'2. Choose a Mosque', desc:'Browse verified mosque construction projects'}, {icon:'heart', title:'3. Make Donation', desc:'Donate securely with cryptocurrency'}, {icon:'chart', title:'4. Track Impact', desc:'See exactly how your money is spent'}].map((s, i)=> (
                <div key={i} className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">{i+1}</div>
                  <h3 className="font-semibold text-emerald-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-emerald-800/80">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Mosques */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Urgent Projects Needing Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map(m => <MosqueCard key={m.id} mosque={m} />)}
            </div>
          </div>
        </section>

        {/* Why Blockchain */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Why We Use Blockchain Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{Icon:Eye, title:'Transparency', desc:'Every donation and expense is publicly visible and verifiable'}, {Icon:Shield, title:'Security', desc:'Multi-signature approvals prevent fraud and misuse of funds'}, {Icon:Handshake, title:'Trust', desc:'Smart contracts ensure funds are used exactly as promised'}].map((b, i)=> (
                <div key={i} className="bg-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <b.Icon className="w-6 h-6 text-emerald-800 mb-3" />
                  <h3 className="font-semibold text-emerald-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-emerald-800/80">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-yellow-600" dir="rtl">مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ</p>
            <p className="mt-3 text-emerald-900/80">The example of those who spend their wealth in the way of Allah... (Quran 2:261)</p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-3xl overflow-hidden">
            <div className="px-6 sm:px-10 py-12 text-center text-white relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl" />
              <h2 className="text-3xl sm:text-4xl font-extrabold">Start Your Sadaqah Journey Today</h2>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="gold" className="px-7 py-3 text-base">Make a Donation</Button>
                <Button variant="whiteOutline" className="px-7 py-3 text-base">Create a Project</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
