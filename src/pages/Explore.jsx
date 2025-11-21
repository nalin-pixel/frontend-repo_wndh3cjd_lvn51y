import React, { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MosqueCard from '../components/MosqueCard'
import Button from '../components/Button'

const wilayas = ['All','Algiers','Oran','Constantine','Annaba','Tlemcen','Blida','Setif','Skikda','Batna','Bejaia','Mostaganem','Ghardaia','Tizi Ouzou','Saida','Laghouat','Oum El Bouaghi','Ouargla','Relizane','Chlef','Mascara','Tiaret','Tipaza','Jijel','Boumerdes','Medea','Biskra','Mila','El Oued','Tamanrasset','Ain Defla','El Bayadh','Naama','Khenchela','Souk Ahras','Tindouf','Tissemsilt','Ain Temouchent','Bordj Bou Arreridj','Bouira','Guelma','Illizi','Sidi Bel Abbes','Tarf','Tebessa','Adrar','Bechar','Msila']

const sample = Array.from({length:12}).map((_,i)=>({
  id: i+1,
  name: ['Al-Firdaws Mosque','Masjid Al-Noor','Ar-Rahman Mosque','Al-Huda Mosque'][i%4],
  nameArabic: ['مسجد الفردوس','مسجد النور','مسجد الرحمن','مسجد الهدى'][i%4],
  location: `${wilayas[(i%10)+1]}, Algeria`,
  image: ['https://images.unsplash.com/photo-1583275477741-1813210b5cec?q=80&w=1600&auto=format&fit=crop','https://images.unsplash.com/photo-1596943244759-c5c8b79aa3ef?q=80&w=1600&auto=format&fit=crop','https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop'][i%3],
  targetAmount: 1000000,
  raisedAmount: [150000,450000,620000,880000,310000,560000,720000,940000,390000,230000,780000,850000][i],
  donorCount: [50,120,220,410,95,180,260,521,143,89,342,398][i],
  status: ['foundation','structure','roofing','interior','finishing'][i%5],
  badge: ['urgent','verified','featured',''][i%4],
  verified: i%2===0
}))

export default function Explore(){
  const [lang, setLang] = useState('en')
  const [query, setQuery] = useState('')
  const [wilaya, setWilaya] = useState('All')
  const [active, setActive] = useState(true)
  const [urgent, setUrgent] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [sort, setSort] = useState('Newest First')

  const filtered = useMemo(()=>{
    let items = sample.filter(m => (
      m.name.toLowerCase().includes(query.toLowerCase()) || m.nameArabic.includes(query)
    ))
    if(wilaya !== 'All') items = items.filter(m => m.location.startsWith(wilaya))
    if(urgent) items = items.filter(m => (m.raisedAmount/m.targetAmount) < 0.3 || m.badge==='urgent')
    if(!completed) items = items.filter(m => (m.raisedAmount/m.targetAmount) < 1)

    switch (sort){
      case 'Most Funded': items.sort((a,b)=> (b.raisedAmount/b.targetAmount)-(a.raisedAmount/a.targetAmount)); break
      case 'Least Funded': items.sort((a,b)=> (a.raisedAmount/a.targetAmount)-(b.raisedAmount/b.targetAmount)); break
      case 'Most Donors': items.sort((a,b)=> b.donorCount - a.donorCount); break
      default: break
    }

    return items
  },[query,wilaya,urgent,completed,sort])

  return (
    <div className="bg-amber-50 min-h-screen text-emerald-900">
      <Navbar lang={lang} onLangChange={setLang} />

      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold">Discover Mosque Projects</h1>
          <p className="text-emerald-800/80">Choose a project to support and track your impact</p>
          <p className="text-sm text-emerald-700/70 mt-1">Showing {filtered.length} mosque projects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl p-4 border border-emerald-100">
              <input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search mosques..." className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
            <div className="bg-white rounded-xl p-4 border border-emerald-100">
              <label className="block text-sm font-medium mb-2">Wilaya</label>
              <select value={wilaya} onChange={(e)=> setWilaya(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                {wilayas.map(w=> <option key={w}>{w}</option>)}
              </select>
            </div>
            <div className="bg-white rounded-xl p-4 border border-emerald-100 space-y-2">
              <label className="block text-sm font-medium mb-2">Status</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={active} onChange={(e)=> setActive(e.target.checked)} /> Active Projects</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={urgent} onChange={(e)=> setUrgent(e.target.checked)} /> Urgent (&lt; 30% funded)</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={completed} onChange={(e)=> setCompleted(e.target.checked)} /> Completed</label>
            </div>
            <div className="bg-white rounded-xl p-4 border border-emerald-100">
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select value={sort} onChange={(e)=> setSort(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                {['Newest First','Most Funded','Least Funded','Ending Soon','Most Donors'].map(s=> <option key={s}>{s}</option>)}
              </select>
            </div>
          </aside>

          {/* Content */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-end mb-4 gap-2">
              <Button variant="outline">Grid</Button>
              <Button variant="outline">List</Button>
              <Button variant="outline">Map</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(m => <MosqueCard key={m.id} mosque={m} />)}
            </div>

            <div className="mt-10 flex items-center justify-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              {[1,2,3,4,5,6,7,8].map(n=> (
                <button key={n} className={`w-9 h-9 rounded-full border ${n===1? 'bg-emerald-700 text-white border-emerald-700' : 'border-emerald-200 text-emerald-800/80 hover:bg-emerald-50'}`}>{n}</button>
              ))}
              <Button variant="outline">Next</Button>
            </div>
            <p className="text-center text-sm text-emerald-700/70 mt-2">Showing 1-12 of 94 projects</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
