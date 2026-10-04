import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { CheckCircle, Printer, Share2, X, Coffee } from 'lucide-react';
import { formatRupiah } from '../utils/helpers';

export default function ReceiptModal({ isOpen, onClose, transaction }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const receiptRef = useRef(null);

  useEffect(() => {
    if (isOpen && transaction) {
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      let qrContent = `KOPIKITA - BUKTI TRANSAKSI\n`;
      qrContent += `No: ${transaction.transactionId}\n`;
      qrContent += `Nama: ${transaction.customer.nama}\n`;
      qrContent += `Meja: ${transaction.customer.meja}\n`;
      qrContent += `Waktu: ${new Date(transaction.date).toLocaleString('id-ID')}\n\n`;
      qrContent += `Pesanan:\n`;
      transaction.items.forEach((item) => {
        qrContent += `- ${item.quantity}x ${item.name} (${item.temperature}, ${item.sugar}) = ${formatRupiah(item.unitPrice * item.quantity)}\n`;
      });
      qrContent += `\nTotal: ${formatRupiah(transaction.totalAmount)}\n`;
      qrContent += `Status: ${transaction.status}\n`;
      qrContent += `Metode: ${transaction.paymentMethod.toUpperCase()}`;

      QRCode.toDataURL(qrContent, {
        width: 320,
        margin: 2,
        color: {
          dark: '#0b2118',
          light: '#ffffff',
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('QR Code error:', err));
    }
  }, [isOpen, transaction]);

  if (!isOpen || !transaction) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShareWA = () => {
    let text = `*BUKTI TRANSAKSI KOPIKITA*%0A`;
    text += `ID Transaksi: ${transaction.transactionId}%0A`;
    text += `Nama: ${transaction.customer.nama}%0A`;
    text += `Meja: ${transaction.customer.meja}%0A%0A`;
    text += `*Pesanan:*%0A`;
    transaction.items.forEach(i => {
      text += `• ${i.quantity}x ${i.name} [${i.temperature} - ${i.sugar}] - ${formatRupiah(i.unitPrice * i.quantity)}%0A`;
    });
    text += `%0A*TOTAL: ${formatRupiah(transaction.totalAmount)}*%0A`;
    text += `Metode: ${transaction.paymentMethod.toUpperCase()}%0A`;
    text += `Status: Sukses Lunas`;

    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border-2 border-forest-950/20 my-8 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Header banner */}
        <div className="p-6 bg-[#0b2118] text-white text-center relative border-b-2 border-gold-500">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-forest-900 text-cream-100 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-full bg-gold-500 text-forest-950 mx-auto flex items-center justify-center mb-2 shadow-lg">
            <CheckCircle className="w-8 h-8 stroke-[2.5]" />
          </div>
          <h3 className="font-headline text-3xl tracking-wide uppercase leading-tight text-white">
            PESANAN BERHASIL DISIMPAN!
          </h3>
          <p className="text-xs text-gold-400 font-bold uppercase tracking-wider mt-1">
            Barista kami sedang meracik pesanan nikmat Anda
          </p>
        </div>

        {/* Printable Receipt Paper */}
        <div ref={receiptRef} className="p-6 bg-[#faf8f2] font-mono text-xs text-forest-950 border-b border-dashed border-forest-950/30">
          
          {/* Logo & Cafe Header */}
          <div className="text-center pb-4 border-b border-dashed border-forest-950/30 flex flex-col items-center">
            <img 
              src="/images/logo.PNG" 
              alt="KopiKita" 
              className="w-12 h-12 object-contain mb-1.5"
            />
            <h4 className="font-headline text-2xl text-forest-950 tracking-wider">KOPIKITA.</h4>
            <p className="text-[10px] text-forest-800/80 font-sans font-bold">Jl. Biji Kopi No. 24, Kotabaru, Yogyakarta</p>
            <p className="text-[10px] text-forest-800/80 font-sans">Telp: 0812-3456-7890</p>
          </div>

          {/* Meta Info */}
          <div className="py-3 border-b border-dashed border-forest-950/30 space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span>No. Transaksi:</span>
              <span className="font-bold">{transaction.transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span>Waktu:</span>
              <span>{new Date(transaction.date).toLocaleDateString('id-ID')} {new Date(transaction.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="flex justify-between">
              <span>Pelanggan:</span>
              <span className="font-bold">{transaction.customer.nama}</span>
            </div>
            <div className="flex justify-between">
              <span>Meja:</span>
              <span className="font-bold bg-gold-400 text-forest-950 px-2 py-0.5 rounded">{transaction.customer.meja}</span>
            </div>
          </div>

          {/* Items */}
          <div className="py-3 border-b border-dashed border-forest-950/30 space-y-2">
            {transaction.items.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between font-bold text-forest-950">
                  <span>{item.quantity}x {item.name}</span>
                  <span>{formatRupiah(item.unitPrice * item.quantity)}</span>
                </div>
                <div className="text-[10px] text-forest-800/80 pl-3">
                  <span>• {item.temperature === 'Ice' ? 'Ice Cold' : 'Hot'} | {item.sugar} Sugar</span>
                  {item.addOns?.length > 0 && (
                    <span> | {item.addOns.map(a => a.name).join(', ')}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="py-3 border-b border-dashed border-forest-950/30 space-y-1">
            <div className="flex justify-between text-xs font-bold pt-1 items-baseline">
              <span>TOTAL BAYAR:</span>
              <span className="font-headline text-2xl text-forest-950">{formatRupiah(transaction.totalAmount)}</span>
            </div>
            <div className="flex justify-between text-[11px] text-forest-800">
              <span>Metode Pembayaran:</span>
              <span className="font-bold uppercase text-forest-950">{transaction.paymentMethod}</span>
            </div>
            <div className="flex justify-between text-[11px] text-emerald-800 font-bold">
              <span>Status:</span>
              <span>{transaction.status}</span>
            </div>
          </div>

          {/* Live QR Code from QrCodeServlet logic */}
          <div className="pt-4 text-center">
            <p className="text-[10px] text-forest-800/80 mb-2 font-sans font-bold uppercase tracking-wider">
              SCAN QR CODE UNTUK VERIFIKASI KASIR:
            </p>
            {qrDataUrl ? (
              <div className="inline-block p-2 bg-white rounded-2xl shadow-sm border-2 border-forest-950/20">
                <img src={qrDataUrl} alt="QR Code Transaksi" className="w-44 h-44 mx-auto" />
              </div>
            ) : (
              <div className="w-44 h-44 bg-[#efebe0] rounded-2xl mx-auto flex items-center justify-center font-sans text-xs">
                <span>Membuat QR...</span>
              </div>
            )}
            <p className="text-[9px] text-forest-700/70 mt-2 font-sans">
              Terima kasih atas kunjungan Anda di KopiKita!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-white grid grid-cols-3 gap-2">
          <button
            onClick={handlePrint}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 border-forest-950/20 text-forest-950 hover:bg-[#f7f5ed] transition-colors text-xs font-bold gap-1 uppercase"
          >
            <Printer className="w-4 h-4 text-forest-800" />
            <span>CETAK</span>
          </button>

          <button
            onClick={handleShareWA}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 text-emerald-950 hover:bg-emerald-100 transition-colors text-xs font-bold gap-1 uppercase"
          >
            <Share2 className="w-4 h-4 text-emerald-700" />
            <span>KIRIM WA</span>
          </button>

          <button
            onClick={onClose}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-gold-500 text-forest-950 hover:bg-gold-400 transition-colors text-xs font-black gap-1 uppercase"
          >
            <Coffee className="w-4 h-4 stroke-[2.5]" />
            <span>SELESAI</span>
          </button>
        </div>

      </div>
    </div>
  );
}
