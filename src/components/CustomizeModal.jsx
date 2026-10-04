import React, { useState, useEffect } from 'react';
import { X, Flame, Snowflake, Plus, Minus, Check, Coffee } from 'lucide-react';
import { formatRupiah } from '../utils/helpers';

export default function CustomizeModal({ isOpen, onClose, item, onAddToCart, editingItem = null }) {
  const [temperature, setTemperature] = useState('Ice');
  const [sugar, setSugar] = useState('Normal');
  const [addOns, setAddOns] = useState([]);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const availableAddons = [
    { id: 'extra-shot', name: 'Extra Espresso Shot', price: 5000 },
    { id: 'oat-milk', name: 'Ganti Susu Oat Creamy', price: 7000 },
    { id: 'caramel-drizzle', name: 'Caramel Golden Drizzle', price: 4000 },
    { id: 'whipped-cream', name: 'Whipped Cream Flavour', price: 4000 }
  ];

  useEffect(() => {
    if (editingItem) {
      setTemperature(editingItem.temperature || 'Ice');
      setSugar(editingItem.sugar || 'Normal');
      setAddOns(editingItem.addOns || []);
      setNotes(editingItem.notes || '');
      setQuantity(editingItem.quantity || 1);
    } else {
      setTemperature('Ice');
      setSugar('Normal');
      setAddOns([]);
      setNotes('');
      setQuantity(1);
    }
  }, [editingItem, item, isOpen]);

  if (!isOpen || !item) return null;

  const toggleAddon = (addon) => {
    if (addOns.some(a => a.id === addon.id)) {
      setAddOns(addOns.filter(a => a.id !== addon.id));
    } else {
      setAddOns([...addOns, addon]);
    }
  };

  const addonsTotal = addOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = item.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderPayload = {
      cartId: editingItem ? editingItem.cartId : Date.now() + Math.random(),
      item: item,
      name: item.name,
      temperature,
      sugar,
      addOns,
      notes,
      quantity,
      unitPrice,
      totalPrice
    };
    onAddToCart(orderPayload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border-2 border-forest-950/20 my-8 transition-all transform animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-48 bg-forest-950">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover opacity-75"
            onError={(e) => { e.target.src = item.fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-forest-950/60 text-white hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest">
              {item.category}
            </span>
            <h3 className="text-2xl font-black text-white leading-tight mt-0.5">
              {item.name}
            </h3>
            <p className="font-headline text-2xl text-gold-400 mt-0.5">
              {formatRupiah(item.price)}
            </p>
          </div>
        </div>

        {/* Customization Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Temperature Choice (Ice vs Hot) */}
          <div>
            <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-2">
              PILIHAN SUHU <span className="text-gold-600">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTemperature('Ice')}
                className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border-2 font-bold text-xs uppercase tracking-wider transition-all ${
                  temperature === 'Ice'
                    ? 'border-forest-950 bg-forest-950 text-gold-400 shadow-md'
                    : 'border-forest-950/20 text-forest-800 hover:border-forest-950/40'
                }`}
              >
                <Snowflake className="w-4 h-4 text-cyan-400" />
                <span>❄️ DINGIN (ICE COLD)</span>
              </button>

              <button
                type="button"
                onClick={() => setTemperature('Hot')}
                className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border-2 font-bold text-xs uppercase tracking-wider transition-all ${
                  temperature === 'Hot'
                    ? 'border-forest-950 bg-forest-950 text-gold-400 shadow-md'
                    : 'border-forest-950/20 text-forest-800 hover:border-forest-950/40'
                }`}
              >
                <Flame className="w-4 h-4 text-gold-500" />
                <span>🔥 PANAS (HOT FRESH)</span>
              </button>
            </div>
          </div>

          {/* Sugar Level */}
          <div>
            <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-2">
              TINGKAT GULA (SUGAR LEVEL) <span className="text-gold-600">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'Less', label: '🍃 LESS', desc: '50% Gula' },
                { id: 'Normal', label: '🍯 NORMAL', desc: '100% Pas' },
                { id: 'Extra', label: '🍭 EXTRA', desc: '120% Manis' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSugar(opt.id)}
                  className={`p-3 rounded-2xl border-2 text-center transition-all ${
                    sugar === opt.id
                      ? 'border-forest-950 bg-forest-950 text-gold-400 shadow-md font-black'
                      : 'border-forest-950/20 text-forest-800 hover:border-forest-950/40'
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-wider">{opt.label}</p>
                  <p className="text-[10px] text-cream-100/70 mt-0.5">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Toppings / Add-ons */}
          <div>
            <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-2">
              EXTRA TOPPING (OPSIONAL)
            </label>
            <div className="space-y-2">
              {availableAddons.map((addon) => {
                const isSelected = addOns.some(a => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-gold-500 bg-gold-500/10 text-forest-950'
                        : 'border-forest-950/15 text-forest-800 hover:bg-[#f7f5ed]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border-2 text-xs ${
                        isSelected ? 'bg-forest-950 border-forest-950 text-gold-400' : 'border-forest-950/30'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-bold">{addon.name}</span>
                    </div>
                    <span className="font-headline text-base text-forest-950">
                      +{formatRupiah(addon.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-1.5">
              CATATAN UNTUK BARISTA
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: jangan terlalu pahit, es batu sedikit saja..."
              className="w-full p-3 text-xs rounded-2xl bg-[#f7f5ed] border-2 border-forest-950/15 focus:bg-white focus:outline-none focus:border-gold-500 font-medium text-forest-950"
            />
          </div>

          {/* Quantity Counter */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] font-black text-forest-950 uppercase tracking-widest">
              JUMLAH MINUMAN
            </span>
            <div className="flex items-center gap-3 bg-[#efebe0] p-1.5 rounded-full border border-forest-950/20">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-white text-forest-950 flex items-center justify-center font-bold shadow hover:bg-gold-400 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center font-black text-sm text-forest-950">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-forest-950 text-gold-400 flex items-center justify-center font-bold shadow hover:bg-gold-500 hover:text-forest-950 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-forest-950/10">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-gold-500/30 active:scale-95 transition-all flex items-center justify-between px-7"
            >
              <span>{editingItem ? 'SIMPAN PERUBAHAN' : 'TAMBAHKAN KE PESANAN'}</span>
              <span className="font-headline text-xl text-forest-950">
                {formatRupiah(totalPrice)}
              </span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
