import React from 'react';
import { X, History, QrCode, Trash2 } from 'lucide-react';
import { formatRupiah } from '../utils/helpers';

export default function OrderHistoryModal({ isOpen, onClose, history, onSelectTransaction, onClearHistory }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border-2 border-forest-950/20 my-8 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0b2118] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-forest-950 flex items-center justify-center font-bold">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline text-2xl tracking-wide uppercase leading-tight">
                RIWAYAT PESANAN
              </h3>
              <p className="text-[10px] text-cream-200/80 font-bold uppercase tracking-wider">
                DAFTAR TRANSAKSI & STRUK DIGITAL KOPIKITA
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

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 bg-[#f7f5ed]">
          {history.length === 0 ? (
            <div className="text-center py-12 text-forest-800/70">
              <History className="w-12 h-12 mx-auto text-forest-300 mb-3" />
              <p className="text-sm font-bold uppercase tracking-wider">Belum Ada Riwayat Pesanan</p>
              <p className="text-xs text-forest-600 mt-1">
                Lakukan pesanan pertamamu sekarang dan cek struk digitalnya di sini!
              </p>
            </div>
          ) : (
            history.map((tx) => (
              <div
                key={tx.transactionId}
                className="p-4 rounded-3xl border-2 border-forest-950/10 bg-white hover:border-gold-500 transition-colors flex flex-col justify-between gap-3 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-black text-forest-950 font-mono">
                      {tx.transactionId}
                    </span>
                    <p className="text-[11px] text-forest-700 font-medium mt-0.5">
                      {new Date(tx.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })} • Meja {tx.customer.meja}
                    </p>
                  </div>
                  <span className="text-[10px] font-black uppercase text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {tx.status}
                  </span>
                </div>

                <div className="text-xs text-forest-800 space-y-0.5 border-t border-forest-950/10 pt-2 font-medium">
                  {tx.items.slice(0, 2).map((item, i) => (
                    <p key={i} className="truncate">
                      • {item.quantity}x {item.name} ({item.temperature})
                    </p>
                  ))}
                  {tx.items.length > 2 && (
                    <p className="text-[10px] text-forest-500 italic">
                      + {tx.items.length - 2} item lainnya...
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-forest-950/10">
                  <div>
                    <span className="text-[9px] text-forest-600 uppercase font-black block">TOTAL</span>
                    <span className="font-headline text-xl text-forest-950">{formatRupiah(tx.totalAmount)}</span>
                  </div>

                  <button
                    onClick={() => {
                      onSelectTransaction(tx);
                      onClose();
                    }}
                    className="px-4 py-2 rounded-full bg-forest-950 text-gold-400 hover:bg-forest-900 text-xs font-bold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>LIHAT STRUK & QR</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {history.length > 0 && (
          <div className="p-4 bg-white border-t-2 border-forest-950/10 flex justify-between items-center">
            <button
              onClick={onClearHistory}
              className="text-xs text-red-600 hover:text-red-800 font-bold flex items-center gap-1 uppercase tracking-wider"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>HAPUS SEMUA RIWAYAT</span>
            </button>
            <span className="text-xs font-bold text-forest-800">
              Total {history.length} Transaksi
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
