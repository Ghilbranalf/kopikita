import React, { useState } from 'react';
import { X, User, Phone, Hash, CreditCard, QrCode, Banknote, ShieldCheck } from 'lucide-react';
import { formatRupiah, generateTransactionId } from '../utils/helpers';

export default function CheckoutModal({ isOpen, onClose, cart, onCompleteOrder }) {
  const [nama, setNama] = useState('');
  const [meja, setMeja] = useState('');
  const [telepon, setTelepon] = useState('');
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'take-away'
  const [paymentMethod, setPaymentMethod] = useState('qris');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  const validate = () => {
    const errs = {};
    if (!nama.trim() || nama.trim().length < 2) {
      errs.nama = 'Nama lengkap minimal 2 karakter';
    }
    if (orderType === 'dine-in') {
      const mejaNum = parseInt(meja);
      if (!meja || isNaN(mejaNum) || mejaNum < 1 || mejaNum > 100) {
        errs.meja = 'Nomor meja harus antara 1 - 100';
      }
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!telepon.trim() || !phoneRegex.test(telepon.trim())) {
      errs.telepon = 'Nomor telepon harus valid (10-15 angka)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const transactionData = {
      transactionId: generateTransactionId(),
      date: new Date().toISOString(),
      customer: {
        nama: nama.trim(),
        meja: orderType === 'dine-in' ? meja : 'Take Away',
        telepon: telepon.trim(),
        orderType
      },
      items: cart,
      totalAmount,
      paymentMethod,
      status: 'LUNAS (Sukses)'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onCompleteOrder(transactionData);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border-2 border-forest-950/20 my-8 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0b2118] text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black text-gold-400 uppercase tracking-widest block">
              CHECKOUT & PEMBAYARAN
            </span>
            <h3 className="font-headline text-2xl tracking-wide uppercase mt-0.5">
              DATA PELANGGAN & MEJA
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-forest-900 text-cream-100 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Order Type Toggle */}
          <div>
            <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-2">
              TIPE PESANAN
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                className={`p-3 rounded-2xl border-2 text-xs font-black uppercase tracking-wider transition-all ${
                  orderType === 'dine-in'
                    ? 'border-forest-950 bg-forest-950 text-gold-400 shadow-md'
                    : 'border-forest-950/20 text-forest-800'
                }`}
              >
                🍽️ SANTAP DI TEMPAT (DINE IN)
              </button>
              <button
                type="button"
                onClick={() => setOrderType('take-away')}
                className={`p-3 rounded-2xl border-2 text-xs font-black uppercase tracking-wider transition-all ${
                  orderType === 'take-away'
                    ? 'border-forest-950 bg-forest-950 text-gold-400 shadow-md'
                    : 'border-forest-950/20 text-forest-800'
                }`}
              >
                🛍️ BAWA PULANG (TAKE AWAY)
              </button>
            </div>
          </div>

          {/* Customer Inputs */}
          <div className="space-y-4">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-1.5">
                NAMA LENGKAP PELANGGAN <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-forest-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Contoh: Ghilbran Alfaries"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-[#f7f5ed] border-2 text-xs font-medium text-forest-950 focus:bg-white focus:outline-none ${
                    errors.nama ? 'border-red-400' : 'border-forest-950/15 focus:border-gold-500'
                  }`}
                />
              </div>
              {errors.nama && <p className="text-xs text-red-500 mt-1 font-bold">{errors.nama}</p>}
            </div>

            {/* Nomor Meja (jika dine in) */}
            {orderType === 'dine-in' && (
              <div>
                <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-1.5">
                  NOMOR MEJA ANDA <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Hash className="w-4 h-4 text-forest-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="Contoh: 12"
                    value={meja}
                    onChange={(e) => setMeja(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-[#f7f5ed] border-2 text-xs font-medium text-forest-950 focus:bg-white focus:outline-none ${
                      errors.meja ? 'border-red-400' : 'border-forest-950/15 focus:border-gold-500'
                    }`}
                  />
                </div>
                {errors.meja && <p className="text-xs text-red-500 mt-1 font-bold">{errors.meja}</p>}
              </div>
            )}

            {/* Nomor Telepon */}
            <div>
              <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-1.5">
                NOMOR WHATSAPP / TELEPON <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-forest-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-[#f7f5ed] border-2 text-xs font-medium text-forest-950 focus:bg-white focus:outline-none ${
                    errors.telepon ? 'border-red-400' : 'border-forest-950/15 focus:border-gold-500'
                  }`}
                />
              </div>
              {errors.telepon && <p className="text-xs text-red-500 mt-1 font-bold">{errors.telepon}</p>}
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-[11px] font-black text-forest-950 uppercase tracking-widest mb-2">
              PILIHAN METODE PEMBAYARAN
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'qris', name: 'QRIS Instant', icon: QrCode, desc: 'BCA, GoPay, OVO, Shopee' },
                { id: 'cash', name: 'Tunai di Kasir', icon: Banknote, desc: 'Bayar saat pesanan siap' },
                { id: 'transfer', name: 'Transfer Bank', icon: CreditCard, desc: 'BCA / Mandiri / BNI' },
                { id: 'debit', name: 'Kartu Debit/EDC', icon: CreditCard, desc: 'Mesin EDC di Meja' }
              ].map((m) => {
                const IconComponent = m.icon;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-3 rounded-2xl border-2 text-left transition-all ${
                      paymentMethod === m.id
                        ? 'border-forest-950 bg-forest-950 text-gold-400 shadow-md font-bold'
                        : 'border-forest-950/15 text-forest-800 hover:border-forest-950/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-gold-500" />
                      <span className="text-xs font-black">{m.name}</span>
                    </div>
                    <p className="text-[10px] text-cream-200/80 mt-1">{m.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Order Summary Recap */}
          <div className="bg-[#efebe0] p-4 rounded-3xl border-2 border-forest-950/10 space-y-2">
            <h4 className="font-headline text-lg text-forest-950 uppercase tracking-wide">
              RINGKASAN PEMBAYARAN
            </h4>
            <div className="max-h-28 overflow-y-auto space-y-1 text-xs text-forest-800 divide-y divide-forest-950/10">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between py-1">
                  <span>{item.quantity}x {item.name} ({item.temperature})</span>
                  <span className="font-bold">{formatRupiah(item.unitPrice * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-forest-950/15 flex justify-between items-baseline">
              <span className="font-black text-xs uppercase tracking-wider text-forest-950">TOTAL BAYAR:</span>
              <span className="font-headline text-2xl text-forest-950">{formatRupiah(totalAmount)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-gold-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
            >
              {isSubmitting ? (
                <span>MEMPROSES PESANAN ANDA...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                  <span>SELESAIKAN & TERBITKAN QR TRANSAKSI</span>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
