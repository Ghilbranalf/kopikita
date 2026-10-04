import React, { useState, useMemo } from 'react';
import { Search, Star, Sparkles, Plus, Coffee } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/coffeeData';
import { formatRupiah } from '../utils/helpers';

export default function MenuView({ onSelectItem }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Signature items
  const signatureItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === 'Signature' || item.popular);
  }, []);

  // Filtered menu
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f7f5ed] pt-24 pb-24 text-forest-950">
      
      {/* Header Banner */}
      <section className="relative py-16 mb-12 overflow-hidden bg-[#0b2118] text-white">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src="https://img.freepik.com/free-photo/background-roasted-fresh-brown-coffee-beans-perfect-cool-wallpaper_181624-9592.jpg?w=1600&auto=format&fit=crop&q=80" 
            alt="Coffee Header" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2118] via-[#0b2118]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-black uppercase tracking-widest mb-3 border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KATALOG SEDUHAN KOPIKITA</span>
          </span>
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none">
            SIMFONI RASA <span className="text-gold-500">NUSANTARA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-cream-200/80 text-xs sm:text-sm mt-3 font-medium">
            Setiap cangkir kopi diracik segar dari biji terbaik petani Indonesia dengan profil sangrai artisan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Signature Coffee Carousel */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-black text-gold-600 uppercase tracking-widest">RACIKAN KHUSUS</span>
              <h3 className="font-headline text-3xl sm:text-4xl text-forest-950 uppercase">SIGNATURE FLAVOURS</h3>
            </div>
            <span className="text-xs text-forest-800/60 hidden sm:inline font-bold">Geser untuk melihat menu unggulan →</span>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
            {signatureItems.map((sig) => (
              <div
                key={sig.id}
                onClick={() => onSelectItem(sig)}
                className="min-w-[260px] sm:min-w-[290px] bg-white rounded-3xl p-3 border-2 border-forest-950/10 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer snap-start group flex flex-col"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden bg-forest-950 mb-3">
                  <img
                    src={sig.image}
                    alt={sig.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = sig.fallbackImage; }}
                  />
                  <div className="absolute top-2.5 right-2.5 bg-gold-500 text-forest-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow">
                    Signature
                  </div>
                </div>
                <div className="flex items-center justify-between px-1">
                  <h4 className="font-bold text-forest-950 group-hover:text-gold-600 transition-colors text-base truncate">
                    {sig.name}
                  </h4>
                  <span className="font-headline text-xl text-forest-950">
                    {formatRupiah(sig.price)}
                  </span>
                </div>
                <p className="text-xs text-forest-800/70 line-clamp-1 mt-1 px-1">{sig.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filter & Search Bar Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border-2 border-forest-950/10 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-forest-950 text-gold-400 shadow-md scale-105'
                    : 'bg-[#f7f5ed] text-forest-900 hover:bg-forest-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-forest-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kopi pilihanmu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full bg-[#f7f5ed] border border-forest-950/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-medium text-forest-950"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-forest-500 hover:text-forest-950 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-forest-950/10 p-8">
            <Coffee className="w-14 h-14 text-forest-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-forest-950">Minuman tidak ditemukan</h4>
            <p className="text-xs text-forest-700 mt-1 max-w-sm mx-auto">
              Tidak ada menu yang sesuai dengan "{searchQuery}". Coba kata kunci lain atau reset filter.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="mt-4 px-5 py-2 rounded-full bg-forest-950 text-gold-400 text-xs font-bold uppercase tracking-wider"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-forest-950/10 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-forest-950">
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
        )}

      </div>
    </div>
  );
}
