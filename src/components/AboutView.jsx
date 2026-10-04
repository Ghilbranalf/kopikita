import React from 'react';
import { Coffee, MapPin, Clock, Award, Users, HeartHandshake, Phone } from 'lucide-react';

export default function AboutView({ onExploreMenu }) {
  return (
    <div className="min-h-screen bg-[#f7f5ed] pt-24 pb-24 text-forest-950">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#0b2118] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://img.freepik.com/free-photo/background-roasted-fresh-brown-coffee-beans-perfect-cool-wallpaper_181624-9592.jpg?w=1600&auto=format&fit=crop&q=80"
            alt="Suasana Kedai KopiKita"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2118] via-[#0b2118]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-gold-400 font-extrabold uppercase tracking-widest text-xs">
            SEJARAH & FILOSOFI
          </span>
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none mt-2">
            TENTANG <span className="text-gold-500">KOPIKITA</span>
          </h1>
          <p className="max-w-2xl text-cream-200/90 text-sm sm:text-base mt-4 font-medium leading-relaxed">
            Lebih dari sekadar secangkir kopi, kami adalah simfoni cerita, kehangatan komunitas, dan wujud cinta tulus pada kekayaan tanah Nusantara.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Filosofi Utama */}
        <section className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-forest-950/10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-black text-gold-600 uppercase tracking-widest">AKAR NILAI KAMI</span>
            <h2 className="font-headline text-4xl sm:text-6xl text-forest-950 uppercase mt-2">
              FILOSOFI KOPIKITA
            </h2>
            <div className="w-16 h-1.5 bg-gold-500 mx-auto my-6 rounded-full" />
            <p className="text-forest-800 leading-relaxed text-base sm:text-lg font-medium">
              KopiKita lahir dari kecintaan mendalam terhadap kekayaan kopi lokal Indonesia dan cita-cita luhur untuk memberdayakan petani di pelosok Nusantara. Kami meyakini bahwa setiap cangkir kopi menyimpan tetesan keringat, tradisi, dan cerita unik—tugas kami adalah meraciknya dengan sepenuh hati agar dapat dinikmati dengan sempurna oleh semua kalangan.
            </p>
          </div>
        </section>

        {/* 3 Pilar Utama Misi */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black text-gold-600 uppercase tracking-widest">KOMITMEN KAMI</span>
            <h3 className="font-headline text-4xl sm:text-5xl text-forest-950 uppercase mt-2">
              TIGA PILAR UTAMA MISI
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-forest-950/10 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 overflow-hidden bg-forest-950">
                <img
                  src="/images/cofee-bg.jpg"
                  alt="Pemberdayaan Petani Kopi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500 text-forest-950 flex items-center justify-center mb-3 font-bold">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-2xl text-forest-950 uppercase">PEMBERDAYAAN LOKAL</h4>
                  <p className="text-xs sm:text-sm text-forest-800/80 mt-2 leading-relaxed font-medium">
                    Kami bekerja langsung bersama kelompok petani kopi di Sumatera, Jawa, Bali, dan Sulawesi demi menjamin harga adil dan keberlanjutan.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-forest-950/10 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 overflow-hidden bg-forest-950">
                <img
                  src="/images/coffe-bg8.jpg"
                  alt="Kualitas Biji Kopi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500 text-forest-950 flex items-center justify-center mb-3 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-2xl text-forest-950 uppercase">KUALITAS ARTISAN</h4>
                  <p className="text-xs sm:text-sm text-forest-800/80 mt-2 leading-relaxed font-medium">
                    Setiap varietas biji kopi melalui proses sortasi ketat specialty grade, profil sangrai khusus yang dikalibrasi presisi, dan uji seduh berkala.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-forest-950/10 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 overflow-hidden bg-forest-950">
                <img
                  src="/images/barista-2.jpg"
                  alt="Komunitas Barista"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500 text-forest-950 flex items-center justify-center mb-3 font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-2xl text-forest-950 uppercase">KOMUNITAS HANGAT</h4>
                  <p className="text-xs sm:text-sm text-forest-800/80 mt-2 leading-relaxed font-medium">
                    Kami mendesain kedai KopiKita sebagai ruang ramah bagi para penikmat kopi, pegiat kreatif, dan mahasiswa untuk saling terhubung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Lokasi Kedai */}
        <section className="bg-[#0b2118] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-gold-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-gold-400 font-extrabold uppercase tracking-widest text-xs">KUNJUNGI KAMI</span>
              <h3 className="font-headline text-4xl sm:text-5xl uppercase mt-2">KEDAI KOPIKITA PUSAT</h3>
              <p className="text-cream-200/80 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                Area indoor ber-AC yang tenang untuk bekerja dan area outdoor asri untuk bercengkrama santai.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase text-white">ALAMAT KEDAI:</p>
                    <p className="text-xs text-cream-200/70">Jl. Biji Kopi No. 24, Kotabaru, Kota Yogyakarta</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase text-white">JAM OPERASIONAL:</p>
                    <p className="text-xs text-cream-200/70">Senin - Minggu: 08.00 - 23.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black uppercase text-white">KONTAK & RESERVASI:</p>
                    <p className="text-xs text-cream-200/70">+62 812 3456 7890 • kopikita@email.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-lg aspect-video bg-forest-900">
              <img
                src="/images/bg-11.jpg"
                alt="Kedai Interior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
