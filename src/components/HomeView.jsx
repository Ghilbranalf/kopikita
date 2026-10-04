import React, { useState } from 'react';
import { Coffee, Star, ArrowRight, ArrowUpRight, Sparkles, Plus, Check, Heart, ExternalLink } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/coffeeData';
import { formatRupiah } from '../utils/helpers';

export default function HomeView({ onExploreMenu, onSelectItem }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');

  const categoryPills = [
    { label: 'AMERICANO', category: 'Espresso Based', rotate: '-rotate-45' },
    { label: 'DOPPIO', category: 'Espresso Based', rotate: '-rotate-12' },
    { label: 'CALAO', category: 'Signature', rotate: 'rotate-6' },
    { label: 'MOCHANE', category: 'Signature', rotate: '-rotate-6' },
    { label: 'LATTE', category: 'Espresso Based', rotate: 'rotate-0' },
    { label: 'ESPRESSO', category: 'Espresso Based', rotate: 'rotate-12' },
    { label: 'CAPPUCCINO', category: 'Espresso Based', rotate: '-rotate-12' },
    { label: 'FLAT WHITE', category: 'Espresso Based', rotate: 'rotate-45' },
    { label: 'MOCHA', category: 'Espresso Based', rotate: 'rotate-12' },
    { label: 'FRAPPE', category: 'Spesial', rotate: 'rotate-0' },
    { label: 'RED EYE', category: 'Espresso Based', rotate: '-rotate-45' },
    { label: 'CORTADO', category: 'Espresso Based', rotate: 'rotate-45' },
    { label: 'KOPI SUSU AREN', category: 'Signature', rotate: 'rotate-0' },
    { label: 'KOPI TORAJA', category: 'Tradisional', rotate: '-rotate-6' },
    { label: 'AFFOGATO', category: 'Spesial', rotate: 'rotate-12' },
  ];

  const filteredMenuItems = activeCategoryFilter === 'ALL'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => {
        if (item.name.toUpperCase().includes(activeCategoryFilter)) return true;
        if (item.category.toUpperCase().includes(activeCategoryFilter)) return true;
        return false;
      });

  return (
    <div className="min-h-screen bg-[#f7f5ed] text-forest-950 overflow-hidden font-sans">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (DEEP FOREST GREEN with GIANT TYPOGRAPHY & TRIO CUPS)    */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0b2118] text-white pt-28 sm:pt-32 pb-16 overflow-hidden">
        
        {/* Subtle background ambient grain / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,179,1,0.08)_0%,_transparent_70%)] pointer-events-none" />

        {/* Floating Social Icons (matching poster right rail) */}
        <div className="hidden lg:flex flex-col items-center gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-forest-900/80 backdrop-blur-md p-2 rounded-full border border-forest-700/60 shadow-xl">
          <a href="#" className="w-8 h-8 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-xs text-cream-100 transition-colors">
            f
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-xs text-cream-100 transition-colors">
            𝕏
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-xs text-cream-100 transition-colors">
            ig
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Hero Sub-header info badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-4">
            
            {/* Left Badge: Yellow circle with coffee cup icon + text */}
            <div className="flex items-center gap-3 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-forest-950 shrink-0 shadow-lg shadow-gold-500/20">
                <Coffee className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">
                  DISCOVER COFFEE BLISS.
                </p>
                <p className="text-[9px] uppercase tracking-wider text-cream-200/70 mt-0.5">
                  STARTS YOUR BLEND TODAY JOURNAL HERE.
                </p>
              </div>
            </div>

            {/* Right Badge: Embark on your coffee journey */}
            <div className="text-left sm:text-right max-w-xs">
              <div className="flex items-center sm:justify-end gap-1.5 text-gold-400 text-xs font-bold mb-1">
                <span>☕ ☕ ☕</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-cream-200/80 leading-snug">
                EMBARK ON YOUR COFFEE JOURNEY AND SAVOR EVERY MOMENT
              </p>
              <button 
                onClick={onExploreMenu} 
                className="text-[10px] font-black uppercase tracking-widest text-gold-500 hover:text-gold-400 inline-flex items-center gap-1 mt-1 group"
              >
                <span>MORE DETAILS</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Huge Main Headline */}
          <div className="text-center my-6 relative select-none">
            <h1 className="font-headline text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] tracking-tight uppercase leading-[0.88] text-white">
              LIFE BEGINS
            </h1>
            <div className="relative inline-block mt-1 sm:mt-2">
              <h2 className="font-headline text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] tracking-tight uppercase leading-[0.88] text-white flex items-center justify-center gap-2">
                AFTER <span className="text-gold-500 ml-2">FLAVUR</span>
              </h2>
              {/* Overlay yellow cursive script font */}
              <span className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-400 absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 rotate-[-6deg] drop-shadow-md whitespace-nowrap pointer-events-none">
                Coffee Bliss
              </span>
            </div>
          </div>

          {/* Trio of Hero Coffee Drinks Visual */}
          <div className="relative max-w-3xl mx-auto -mt-6 sm:-mt-12 z-10 flex items-end justify-center">
            
            {/* Cup 1 - Left (Vanilla Flavour) */}
            <div 
              onClick={() => onSelectItem(MENU_ITEMS[2])}
              className="w-40 sm:w-56 -mr-6 sm:-mr-10 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer z-10 group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-500/30 bg-forest-900 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80"
                  alt="Vanilla Flavour Coffee"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 inset-x-3 text-center bg-forest-950/80 backdrop-blur-md py-1.5 px-2 rounded-xl border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold-400">VANILLA</p>
                  <p className="text-[8px] uppercase tracking-wider text-cream-100">FLAVOUR</p>
                </div>
              </div>
            </div>

            {/* Cup 2 - Center (Caramel Flavour - Dominant Center) */}
            <div 
              onClick={() => onSelectItem(MENU_ITEMS[1])}
              className="w-48 sm:w-64 transform z-20 hover:scale-105 transition-all duration-300 cursor-pointer group -mb-3"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-500 bg-forest-900 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&auto=format&fit=crop&q=80"
                  alt="Caramel Flavour Coffee"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-75" />
                <div className="absolute top-3 right-3 bg-gold-500 text-forest-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                  SIGNATURE
                </div>
                <div className="absolute bottom-3 inset-x-3 text-center bg-gold-500 py-2 px-2 rounded-xl shadow-lg">
                  <p className="text-xs font-black uppercase tracking-widest text-forest-950">CARAMEL</p>
                  <p className="text-[9px] uppercase tracking-wider text-forest-900 font-bold">FLAVOUR</p>
                </div>
              </div>
            </div>

            {/* Cup 3 - Right (Chocolate Flavour) */}
            <div 
              onClick={() => onSelectItem(MENU_ITEMS[0])}
              className="w-40 sm:w-56 -ml-6 sm:-ml-10 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer z-10 group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-500/30 bg-forest-900 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80"
                  alt="Chocolate / Aren Coffee"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 inset-x-3 text-center bg-forest-950/80 backdrop-blur-md py-1.5 px-2 rounded-xl border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold-400">AREN KOPI</p>
                  <p className="text-[8px] uppercase tracking-wider text-cream-100">FLAVOUR</p>
                </div>
              </div>
            </div>

          </div>

          {/* Yellow Feature Card (docked under the cups, matching poster) */}
          <div className="max-w-4xl mx-auto mt-6 bg-gold-500 rounded-3xl p-5 sm:p-7 shadow-2xl text-forest-950 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-gold-400">
            
            {/* Left Part: Top rated coffee */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-forest-950 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-wider text-forest-950">
                  TOP RATED COFFEE
                </h4>
                <p className="text-[11px] font-semibold text-forest-900/80 mt-0.5">
                  DISCOVER COFFEE BLISS, START YOUR JOURNAL HERE.
                </p>
              </div>
            </div>

            {/* Middle Part: Rating score */}
            <div className="flex items-center gap-2 bg-forest-950/10 px-5 py-2 rounded-2xl border border-forest-950/10">
              <span className="font-headline text-4xl sm:text-5xl tracking-tight text-forest-950">
                5.00
              </span>
              <Star className="w-6 h-6 fill-forest-950 text-forest-950" />
            </div>

            {/* Right Part: Preview Item with mini-thumbnail & Order Button */}
            <div className="flex items-center gap-3 bg-white/90 p-2.5 pr-4 rounded-2xl border border-forest-950/10 shadow-sm w-full md:w-auto">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-forest-900 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80"
                  alt="Frappe Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs font-black uppercase text-forest-950 truncate">
                  MILKSHAKE CHOCOLATE
                </p>
                <p className="text-[10px] text-forest-800 truncate">
                  Embark on your coffee journey
                </p>
              </div>
              <button
                onClick={() => onSelectItem(MENU_ITEMS[5])}
                className="w-8 h-8 rounded-full bg-gold-500 text-forest-950 hover:bg-gold-600 flex items-center justify-center font-bold shadow transition-transform active:scale-95 shrink-0"
                title="Pesan Langsung"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CROSSING RIBBON TAPE MARQUEE (DARK GREEN / WHITE / GOLD STARS)        */}
      {/* ========================================================================= */}
      <section className="relative py-8 bg-[#f7f5ed] overflow-hidden select-none -my-3 z-20">
        
        {/* Ribbon 1: Angled right */}
        <div className="bg-[#0b2118] text-white py-3.5 shadow-xl transform -rotate-1 origin-left border-y-2 border-gold-500/40">
          <div className="flex gap-8 whitespace-nowrap animate-marquee font-headline text-lg sm:text-xl tracking-widest uppercase">
            {[...Array(2)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center gap-8 shrink-0">
                <span className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-gold-500" />
                  <span>MOCHANE</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <span>DOPPIO</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <span>CALAO</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-gold-500" />
                  <span>AMERICANO</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <span>KOPI SUSU AREN</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <span>CAPPUCCINO</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-gold-500" />
                  <span>KINKER MILKSHAKE</span>
                  <span className="text-gold-500">★</span>
                </span>
                <span className="flex items-center gap-3">
                  <span>FLAT WHITE</span>
                  <span className="text-gold-500">★</span>
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. TYPOGRAPHIC STATEMENT SECTION ("USE PREMIUM ARABICA FRESH BEANS...")   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#f7f5ed] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="relative inline-block">
            {/* Yellow script overlay text */}
            <span className="font-script text-5xl sm:text-7xl md:text-8xl text-gold-500 absolute -top-8 sm:-top-12 left-1/4 -translate-x-1/2 rotate-[-5deg] pointer-events-none drop-shadow-sm z-10">
              Coffee Bliss
            </span>

            {/* Giant statement text with inline pill badges matching poster */}
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-forest-950 uppercase leading-[1.12]">
              USE{' '}
              <span className="inline-flex items-center gap-2 bg-gold-500 text-forest-950 px-4 py-1 rounded-full text-base sm:text-xl font-sans font-bold align-middle shadow-sm">
                <Coffee className="w-4 h-4" />
                <span>Nusantara</span>
              </span>{' '}
              PREMIUM ARABICA FRESH BEANS{' '}
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-forest-900 text-gold-400 align-middle shadow">
                ☕
              </span>{' '}
              AND FRESHLY{' '}
              <span className="inline-block w-16 sm:w-24 h-8 sm:h-12 rounded-full overflow-hidden align-middle border-2 border-gold-500 shadow">
                <img
                  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=200&auto=format&fit=crop&q=80"
                  alt="Coffee Pill"
                  className="w-full h-full object-cover"
                />
              </span>{' '}
              GROUND SPICES TO{' '}
              <span className="inline-block w-20 sm:w-28 h-8 sm:h-12 rounded-full overflow-hidden align-middle border-2 border-forest-900 shadow">
                <img
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&auto=format&fit=crop&q=80"
                  alt="Trio Cups Pill"
                  className="w-full h-full object-cover"
                />
              </span>{' '}
              UNDENIABLY FLAVOURS COFFEE
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-forest-800/80 text-sm sm:text-base mt-8 leading-relaxed font-medium">
            Kopi lokal Indonesia dengan cita rasa autentik. Diracik segar dari biji terbaik petani Aceh Gayo, Toraja, hingga Bali Kintamani.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "COFFEE BY CATEGORIES" FLOATING BEAN TAG CLOUD                         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#efebe0] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Section Header with Script Overlay */}
          <div className="relative inline-block mb-12">
            <h3 className="font-headline text-5xl sm:text-7xl md:text-8xl tracking-tight text-forest-950 uppercase leading-none">
              COFFEE BY CATEGORIES
            </h3>
            <span className="font-script text-4xl sm:text-6xl text-gold-500 absolute -top-4 sm:-top-6 right-0 rotate-[-6deg] pointer-events-none drop-shadow-sm">
              Explore Flavor
            </span>
          </div>

          {/* Floating Organic Bean-Shaped Category Tags (Interactive) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {categoryPills.map((pill, idx) => {
              const isSelected = activeCategoryFilter === pill.label;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategoryFilter(isSelected ? 'ALL' : pill.label);
                    // scroll to menu section
                    const el = document.getElementById('menu-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-sm ${
                    isSelected
                      ? 'bg-forest-950 border-forest-950 text-gold-400 scale-105 shadow-lg'
                      : 'bg-white/80 hover:bg-white border-forest-950/20 text-forest-900 hover:border-gold-500 hover:scale-105'
                  }`}
                >
                  <span className="text-gold-500 text-[10px]">☕</span>
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>

          {activeCategoryFilter !== 'ALL' && (
            <div className="mt-6">
              <button
                onClick={() => setActiveCategoryFilter('ALL')}
                className="text-xs font-bold text-forest-800 underline hover:text-gold-600"
              >
                Reset Filter (Tampilkan Semua Menu)
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MENU SELECTION CATALOG (STYLED TO THE POSTER THEME)                    */}
      {/* ========================================================================= */}
      <section id="menu-catalog" className="py-24 bg-[#f7f5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-600">
                PILIHAN KEDAI
              </span>
              <h3 className="font-headline text-4xl sm:text-6xl text-forest-950 tracking-tight uppercase mt-1">
                OUR COFFEE SELECTIONS
              </h3>
            </div>
            <button
              onClick={onExploreMenu}
              className="mt-4 md:mt-0 px-6 py-3 rounded-full bg-forest-950 text-cream-100 hover:bg-forest-900 text-xs font-bold uppercase tracking-wider flex items-center gap-2 group transition-all"
            >
              <span>BUKA HALAMAN MENU LENGKAP</span>
              <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMenuItems.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-forest-950/10 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-forest-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = item.fallbackImage; }}
                    />
                    <div className="absolute top-3 left-3 bg-forest-950 text-gold-400 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-gold-500 text-forest-950 font-black text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Star className="w-3 h-3 fill-forest-950" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-forest-950 text-lg group-hover:text-gold-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-forest-800/70 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-forest-950/10 flex items-center justify-between">
                  <div className="pt-3">
                    <span className="text-[10px] uppercase font-bold text-forest-800/60 block">HARGA</span>
                    <span className="font-headline text-2xl text-forest-950">
                      {formatRupiah(item.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="mt-3 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-black text-xs uppercase tracking-wider shadow-md hover:shadow-gold-500/25 active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>PESAN</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. "ORDER NOW" SECTION (FALLING ROASTED COFFEE BEANS BACKGROUND)           */}
      {/* ========================================================================= */}
      <section className="relative bg-[#071912] text-white py-24 sm:py-32 overflow-hidden text-center">
        
        {/* Falling roasted coffee beans wallpaper background (matching bottom of poster) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-photo/background-roasted-fresh-brown-coffee-beans-perfect-cool-wallpaper_181624-9592.jpg?w=1600&auto=format&fit=crop&q=80"
            alt="Falling Roasted Coffee Beans"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071912] via-[#071912]/80 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-extrabold text-xs uppercase tracking-widest border border-gold-500/40 mb-4">
            FRESH BREW TO ORDER
          </span>

          <h2 className="font-headline text-6xl sm:text-8xl md:text-9xl tracking-tight uppercase leading-[0.9] text-white">
            ORDER <span className="text-gold-500">NOW</span>
          </h2>

          <p className="max-w-xl mx-auto text-cream-100/80 text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Pesan langsung dari meja kedai atau bawa pulang. Pilih tingkat suhu, kadar gula sesuai seleramu, dan dapatkan QR Code transaksi secara instan!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-black text-sm uppercase tracking-wider shadow-2xl hover:shadow-gold-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span>PILIH MENU FAVORIT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
