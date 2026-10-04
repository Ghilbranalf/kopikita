import React, { useState, useEffect } from 'react';
import { ShoppingBag, History, Menu as MenuIcon, X, Sparkles, Coffee } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, cartCount, onOpenCart, onOpenHistory, onOpenOrderNow }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-forest-950/95 shadow-2xl backdrop-blur-md py-3' : 'bg-forest-950 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Navigation Links (matching poster: STORIES, COFFEE, EQUIPMENT, STORE) */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => setActiveTab('home')}
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors ${
                activeTab === 'home' ? 'text-gold-500' : 'text-cream-100/80 hover:text-white'
              }`}
            >
              STORIES
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors ${
                activeTab === 'menu' ? 'text-gold-500' : 'text-cream-100/80 hover:text-white'
              }`}
            >
              COFFEE
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors ${
                activeTab === 'about' ? 'text-gold-500' : 'text-cream-100/80 hover:text-white'
              }`}
            >
              EQUIPMENT
            </button>
            <button
              onClick={onOpenHistory}
              className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-cream-100/80 hover:text-gold-400 transition-colors flex items-center gap-1.5"
            >
              <span>RIWAYAT</span>
            </button>
          </nav>

          {/* Center Brand Name (matching "CAFFO.") */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <span className="font-headline text-3xl sm:text-4xl text-white tracking-widest uppercase transition-transform group-hover:scale-105">
              KOPIKITA<span className="text-gold-500">.</span>
            </span>
          </div>

          {/* Right Actions: Order Now Button & Cart */}
          <div className="flex items-center gap-3">
            {/* History icon */}
            <button
              onClick={onOpenHistory}
              title="Lihat Riwayat Struk & QR"
              className="w-9 h-9 rounded-full bg-forest-800 text-cream-100 hover:text-gold-400 hover:bg-forest-700 flex items-center justify-center transition-colors border border-forest-700/60"
            >
              <History className="w-4 h-4" />
            </button>

            {/* Cart trigger */}
            <button
              onClick={onOpenCart}
              className="relative w-9 h-9 rounded-full bg-forest-800 text-cream-100 hover:text-gold-400 hover:bg-forest-700 flex items-center justify-center transition-colors border border-forest-700/60"
              title="Keranjang Belanja"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-forest-950 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Yellow pill button "ORDER NOW" */}
            <button
              onClick={onOpenOrderNow}
              className="px-5 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-500/30 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>ORDER NOW</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-forest-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-forest-800 flex flex-col gap-2 pb-2">
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest ${
                activeTab === 'home' ? 'bg-gold-500 text-forest-950' : 'text-white hover:bg-forest-800'
              }`}
            >
              STORIES (HOME)
            </button>
            <button
              onClick={() => { setActiveTab('menu'); setMobileMenuOpen(false); }}
              className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest ${
                activeTab === 'menu' ? 'bg-gold-500 text-forest-950' : 'text-white hover:bg-forest-800'
              }`}
            >
              COFFEE (MENU)
            </button>
            <button
              onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
              className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest ${
                activeTab === 'about' ? 'bg-gold-500 text-forest-950' : 'text-white hover:bg-forest-800'
              }`}
            >
              EQUIPMENT (ABOUT)
            </button>
            <button
              onClick={() => { onOpenHistory(); setMobileMenuOpen(false); }}
              className="text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-gold-400 hover:bg-forest-800 flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              <span>RIWAYAT TRANSAKSI & QR</span>
            </button>
          </div>
        )}

      </div>
    </header>
  );
}
