import React from 'react';
import { Coffee, Mail, Phone, MapPin, Heart, Globe, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071510] text-[#ded5bb] pt-16 pb-12 border-t-2 border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-headline text-4xl text-white tracking-widest uppercase">
                KOPIKITA<span className="text-gold-500">.</span>
              </span>
            </div>
            <p className="text-cream-200/80 text-xs sm:text-sm max-w-sm leading-relaxed font-medium">
              Kopi lokal nusantara dengan cita rasa autentik dan suasana hangat. Bekerja sama langsung dengan petani Indonesia sejak 2012 untuk secangkir kebanggaan tanah air.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-forest-900 border border-forest-700/60 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-white transition-all text-xs font-bold"
                title="Facebook"
              >
                f
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-forest-900 border border-forest-700/60 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-white transition-all text-xs font-bold"
                title="X"
              >
                𝕏
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-forest-900 border border-forest-700/60 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-white transition-all text-xs font-bold"
                title="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-headline text-lg tracking-wider uppercase">NAVIGASI</h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80 font-bold uppercase tracking-wider">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition-colors">
                  STORIES (BERANDA)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-gold-400 transition-colors">
                  COFFEE (KATALOG MENU)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-gold-400 transition-colors">
                  EQUIPMENT (TENTANG KAMI)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-headline text-lg tracking-wider uppercase">LOKASI & JAM</h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Jl. Biji Kopi No. 24, Kotabaru, Yogyakarta</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>kopikita@email.com</span>
              </li>
              <li className="pt-1 text-gold-400 font-bold text-xs">
                Buka Setiap Hari: 08.00 - 23.00 WIB
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/60 gap-4">
          <p>© {new Date().getFullYear()} KOPIKITA. All rights reserved. Life begins after coffee.</p>
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-1.5 text-gold-400 hover:text-white uppercase font-bold tracking-wider text-[11px] transition-colors"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
