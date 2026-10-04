# ☕ KopiKita - Modern React Coffee Shop & Ordering System
> **Transformasi Tugas Besar PBO (Pemrograman Berorientasi Objek)** dari Java Web / Servlet & HTML/CSS lama menjadi aplikasi modern berbasis **React, Vite, dan Tailwind CSS**.

🌐 **Live Website di Vercel:** [https://kopikita-gamma.vercel.app](https://kopikita-gamma.vercel.app)

---

## 🌟 Apa yang Baru & Ditingkatkan?

### 1. Desain Tampilan yang Jauh Lebih Estetik & Modern
- **Palet Warna Kopi Premium**: Nuansa warm coffee, espresso, caramel, dan crema dengan tipografi modern (*Poppins*).
- **Efek Visual Halus**: Glassmorphism pada navbar, micro-interactions saat hover, badge rating menu, dan animasi transisi responsif.
- **Mobile Friendly**: Tampilan adaptif sempurna di layar desktop, tablet, maupun smartphone.

### 2. Fitur Pemesanan Interaktif (Sesuai Logika Tubes PBO)
- **Katalog Menu Lengkap & Signature Highlight**: Americano, Kopi Tubruk, Kopi Toraja, Kopi Susu Aren, Kopi Kintamani, Caffe Latte, Cappuccino, Mocha, Affogato, dll.
- **Pencarian Real-Time & Filter Kategori**: Filter berdasarkan *Signature*, *Espresso Based*, *Tradisional*, atau *Spesial*.
- **Modal Kustomisasi Minuman**:
  - Pilihan Suhu: *❄️ Ice Cold* vs *🔥 Hot Fresh*
  - Pilihan Tingkat Gula: *Less Sweet (50%)*, *Normal (100%)*, *Extra Sweet (120%)*
  - Extra Topping / Add-ons: *Extra Espresso Shot, Susu Oat, Caramel Drizzle, Whipped Cream*
  - Catatan khusus untuk Barista
  - Pengatur jumlah pesanan (Quantity Counter)
- **Keranjang Pesanan (Cart Drawer)**:
  - Slide-in drawer dengan detail pesanan
  - Ubah jumlah, ubah kustomisasi (Edit), atau Hapus item
  - Ringkasan subtotal dan total bayar instan
- **Form Data Pelanggan & Pembayaran (Customer & Checkout)**:
  - Pilihan Santap di Tempat (*Dine In*) atau Bawa Pulang (*Take Away*)
  - Nama Lengkap, Nomor Meja (1-100), Nomor Telepon WhatsApp
  - Validasi formulir otomatis
  - Pilihan metode bayar: *QRIS Instant, Tunai di Kasir, Transfer Bank, Kartu Debit/Kredit*
- **Struk Digital & Live QR Code Generator (Menggantikan QrCodeServlet.java)**:
  - Generate QR Code dinamis langsung di sisi client (dapat di-scan sungguhan dengan kamera HP untuk membaca nomor transaksi, meja, pesanan, dan total harga)
  - Desain struk bergaya retro cafe receipt yang rapi
  - Fitur **Cetak Struk** (`Print`) dan **Kirim ke WhatsApp**
  - Efek perayaan (*confetti celebration*) saat pesanan berhasil disimpan
- **Riwayat Transaksi (Order History)**:
  - Tersimpan di `localStorage` sehingga pelanggan atau penguji dapat membuka kembali bukti struk & QR Code transaksi sebelumnya kapan saja.

---

## 🚀 Cara Menjalankan Proyek

1. Masuk ke folder proyek:
   ```bash
   cd D:\TUBESPBO\kopikita-react
   ```
2. Jalankan server lokal:
   ```bash
   npm run dev
   ```
3. Buka browser di:
   ```
   http://localhost:5173
   ```
   *Atau cukup klik ganda file `jalankan-kopikita.bat`.*
