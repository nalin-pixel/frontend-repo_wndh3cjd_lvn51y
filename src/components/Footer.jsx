import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-700 text-white">🕌</span>
            <span className="font-extrabold text-white tracking-tight">Masdaqa</span>
          </div>
          <p className="text-emerald-100/80 text-sm max-w-xs">Transparent, secure, and verified donations for mosque construction powered by blockchain.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook className="w-4 h-4"/></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Twitter className="w-4 h-4"/></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Instagram className="w-4 h-4"/></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-emerald-100/80">
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">Home</a></li>
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">Explore Mosques</a></li>
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">How It Works</a></li>
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-emerald-100/80">
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">FAQ</a></li>
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline hover:decoration-yellow-500">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Newsletter</h4>
          <p className="text-emerald-100/80 text-sm mb-3">Stay Updated</p>
          <div className="flex items-center gap-2">
            <input type="email" placeholder="Your email" className="flex-1 bg-white text-emerald-900 rounded-full px-4 py-2 text-sm focus:outline-none" />
            <button className="bg-yellow-500 text-emerald-900 rounded-full px-4 py-2 text-sm font-medium hover:bg-yellow-400">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-emerald-100/70">
          <span>© 2024 Masdaqa. Built with ❤️ for the Ummah.</span>
          <span dir="rtl">بسم الله الرحمن الرحيم</span>
        </div>
      </div>
    </footer>
  )
}
