import React from 'react';
import { X, Trash2, Edit3, ShoppingBag, ArrowRight, Plus, Minus, Coffee } from 'lucide-react';
import { formatRupiah } from '../utils/helpers';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onEditItem, onProceedCheckout }) {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-forest-950/70 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f2] shadow-2xl flex flex-col justify-between border-l-2 border-forest-950/20">
          
          {/* Header */}
          <div className="p-6 border-b border-forest-900 bg-[#0b2118] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-forest-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline text-2xl tracking-wide uppercase leading-tight">
                  PESANAN ANDA
                </h3>
                <p className="text-[11px] text-cream-200/80 font-bold uppercase tracking-wider">
                  {totalItemsCount} ITEM SIAP DIPROSES
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-forest-900 text-cream-100 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-forest-950/10 text-forest-900 flex items-center justify-center mb-4">
                  <Coffee className="w-10 h-10" />
                </div>
                <h4 className="font-headline text-2xl text-forest-950 uppercase">Keranjang Masih Kosong</h4>
                <p className="text-xs text-forest-800/70 mt-1 max-w-xs font-medium">
                  Ayo jelajahi menu kopi nusantara terbaik kami dan tambahkan minuman favoritmu.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-3 rounded-full bg-forest-950 text-gold-400 text-xs font-black uppercase tracking-wider hover:bg-forest-900 transition-colors"
                >
                  Mulai Pesan Sekarang
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.cartId} 
                  className="p-4 rounded-3xl bg-white border-2 border-forest-950/10 shadow-sm flex gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-forest-950 shrink-0 border border-forest-950/20">
                    <img
                      src={item.item?.image || '/images/americano.jpg'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&auto=format&fit=crop&q=80"; }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-forest-950 text-sm truncate">
                        {item.name}
                      </h4>
                      <span className="font-headline text-lg text-forest-950 whitespace-nowrap">
                        {formatRupiah(item.unitPrice * item.quantity)}
                      </span>
                    </div>

                    {/* Custom details */}
                    <div className="flex flex-wrap gap-1 mt-1 text-[10px] text-forest-800">
                      <span className="bg-[#efebe0] px-2 py-0.5 rounded-full font-bold">
                        {item.temperature === 'Ice' ? 'Ice Cold' : 'Hot'}
                      </span>
                      <span className="bg-[#efebe0] px-2 py-0.5 rounded-full font-bold">
                        {item.sugar} Sugar
                      </span>
                      {item.addOns?.map((a) => (
                        <span key={a.id} className="bg-gold-500/20 text-forest-950 px-2 py-0.5 rounded-full font-bold">
                          +{a.name}
                        </span>
                      ))}
                    </div>

                    {item.notes && (
                      <p className="text-[10px] text-forest-700 italic mt-1 truncate">
                        "{item.notes}"
                      </p>
                    )}

                    {/* Quantity & Actions */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-forest-950/10">
                      <div className="flex items-center gap-2 bg-[#efebe0] rounded-full border border-forest-950/15 px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                          className="text-forest-700 hover:text-forest-950 p-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-black text-forest-950 min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                          className="text-forest-700 hover:text-forest-950 p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onEditItem(item)}
                          className="p-1.5 rounded-lg text-forest-600 hover:text-forest-950 hover:bg-[#efebe0] transition-colors"
                          title="Ubah pesanan"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          className="p-1.5 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t-2 border-forest-950/20 bg-white space-y-4">
              <div className="space-y-1 text-xs text-forest-800">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal ({totalItemsCount} item)</span>
                  <span className="font-bold text-forest-950">{formatRupiah(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Biaya Meja & Layanan</span>
                  <span className="font-bold text-emerald-700">GRATIS (Rp 0)</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-forest-950/10">
                  <span className="font-black text-sm uppercase tracking-wider text-forest-950">TOTAL BAYAR</span>
                  <span className="font-headline text-3xl text-forest-950">{formatRupiah(totalAmount)}</span>
                </div>
              </div>

              <button
                onClick={onProceedCheckout}
                className="w-full py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-gold-500/30 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>LANJUT KE DATA PELANGGAN</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
