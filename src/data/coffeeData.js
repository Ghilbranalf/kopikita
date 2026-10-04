export const MENU_ITEMS = [
  {
    id: 'kopi-susu-aren',
    name: 'Kopi Susu Aren Special',
    category: 'Signature',
    price: 23000,
    rating: 5.0,
    reviews: 420,
    description: 'Espresso lokal berpadu susu segar dan gula aren murni organik berkualitas tinggi, legit dan wangi khas nusantara.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Best Seller', 'Signature', 'Manis Legit']
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato Flavour',
    category: 'Signature',
    price: 28000,
    rating: 4.9,
    reviews: 310,
    description: 'Espresso lembut berlapis steamed milk dan sirup karamel gurih manis dengan whipped cream & drizzle karamel emas.',
    image: '/images/caramel-macchiato.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Whipped Cream', 'Sweet Caramel', 'Top Rated']
  },
  {
    id: 'caffe-latte',
    name: 'Vanilla Caffe Latte',
    category: 'Espresso Based',
    price: 27000,
    rating: 4.9,
    reviews: 215,
    description: 'Perpaduan espresso mantap dengan steamed fresh milk yang lembut dan ekstrak vanilla madagascar murni.',
    image: '/images/caffe-latte.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Creamy', 'Vanilla', 'Mild']
  },
  {
    id: 'americano',
    name: 'Classic Americano',
    category: 'Espresso Based',
    price: 15000,
    rating: 4.8,
    reviews: 142,
    description: 'Kopi hitam klasik dengan rasa kuat dan aroma pahit yang khas dari biji kopi pilihan nusantara.',
    image: '/images/americano.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Bold', 'Zero Sugar', 'Classic']
  },
  {
    id: 'doppio',
    name: 'Doppio Double Shot',
    category: 'Espresso Based',
    price: 20000,
    rating: 4.9,
    reviews: 110,
    description: 'Dua shot espresso murni pekat yang diekstraksi bertekanan tinggi untuk tendangan kafein optimal.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Double Shot', 'Intense', 'Energy']
  },
  {
    id: 'mochane',
    name: 'Mochane Chocolate Frappe',
    category: 'Signature',
    price: 30000,
    rating: 4.9,
    reviews: 235,
    description: 'Kopi cokelat kental diblend dengan es batu halus, susu segar, dan topping whipped cream kakao berlimpah.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Frappe', 'Dark Chocolate', 'Signature']
  },
  {
    id: 'kopi-tubruk',
    name: 'Kopi Tubruk Tradisional',
    category: 'Tradisional',
    price: 18000,
    rating: 4.7,
    reviews: 98,
    description: 'Seduhan kopi tradisional khas nusantara tanpa saring dengan aroma kuat dan cita rasa tebal autentik.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80',
    popular: false,
    tags: ['Tradisional', 'Kental', 'Autentik']
  },
  {
    id: 'kopi-toraja',
    name: 'Kopi Toraja Single Origin',
    category: 'Tradisional',
    price: 25000,
    rating: 4.8,
    reviews: 135,
    description: 'Biji kopi asli pegunungan Toraja dengan tingkat keasaman seimbang, sentuhan rempah earthy dan aftertaste manis.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80',
    popular: false,
    tags: ['Single Origin', 'Herbal', 'Earthy']
  },
  {
    id: 'kopi-kintamani',
    name: 'Kopi Kintamani Bali',
    category: 'Tradisional',
    price: 24000,
    rating: 4.8,
    reviews: 112,
    description: 'Kopi dataran tinggi Bali dengan notes citrus buah jeruk segar yang unik dan keasaman menyegarkan.',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop&q=80',
    popular: false,
    tags: ['Fruity', 'Citrus', 'Single Origin']
  },
  {
    id: 'cappuccino',
    name: 'Foamy Cappuccino',
    category: 'Espresso Based',
    price: 26000,
    rating: 4.8,
    reviews: 164,
    description: 'Harmoni seimbang antara espresso pekat, steamed milk hangat, dan taburan foam susu tebal nan lembut.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&auto=format&fit=crop&q=80',
    popular: false,
    tags: ['Foamy', 'Classic', 'Rich']
  },
  {
    id: 'cortado',
    name: 'Cortado Velvet',
    category: 'Espresso Based',
    price: 24000,
    rating: 4.8,
    reviews: 82,
    description: 'Rasio seimbang 1:1 antara espresso pekat dan susu hangat yang dipanaskan tanpa busa tebal.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    popular: false,
    tags: ['Equal Ratio', 'Smooth', 'Intense']
  },
  {
    id: 'flat-white',
    name: 'Flat White Silk',
    category: 'Espresso Based',
    price: 27000,
    rating: 4.8,
    reviews: 95,
    description: 'Microfoam susu ultra-halus yang dituangkan perlahan di atas double shot ristretto kaya crema.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80',
    popular: false,
    tags: ['Microfoam', 'Velvety', 'Modern']
  },
  {
    id: 'affogato',
    name: 'Affogato al Caffe',
    category: 'Spesial',
    price: 32000,
    rating: 4.9,
    reviews: 89,
    description: 'Satu scoop gelato vanilla artisan lembut yang diguyur double shot espresso panas yang pekat.',
    image: 'https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Dessert', 'Gelato', 'Indulgent']
  },
  {
    id: 'frappe-kinker',
    name: 'Kinker Milk Shake Coffee',
    category: 'Spesial',
    price: 32000,
    rating: 4.9,
    reviews: 174,
    description: 'Milkshake kopi dingin dengan sirup caramel butter, biskuit renyah, dan whipped cream menggunung.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
    popular: true,
    tags: ['Milkshake', 'Crunchy', 'Sweet Treats']
  }
];

export const CATEGORIES = [
  'Semua',
  'Signature',
  'Espresso Based',
  'Tradisional',
  'Spesial'
];

export const TESTIMONIALS = [
  {
    quote: "Tempat ngopi favorit! Rasanya autentik, tempatnya cozy, dan pelayanannya ramah. Selalu jadi pilihan utama untuk meeting atau sekedar bersantai nugas.",
    author: "Rina Salsabila",
    role: "Pelanggan Setia",
    city: "Jakarta",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Dari semua kopi lokal yang pernah saya coba, KopiKita paling konsisten dan cocok di lidah. Kualitas biji kopinya kerasa banget kelas premium!",
    author: "Aldi Pratama",
    role: "Coffee Enthusiast",
    city: "Yogyakarta",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Baristanya ramah banget dan mengerti preferensi rasa. Kopi Susu Aren dan Caffe Latte-nya juara banget, bikin betah nongkrong berjam-jam.",
    author: "Clara Anindya",
    role: "Content Creator",
    city: "Bandung",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  }
];

export const PHILOSOPHY_POINTS = [
  {
    title: "Kemitraan Petani Lokal",
    description: "Bekerja sama langsung dengan petani kopi di Aceh Gayo, Toraja, Bali Kintamani, dan Jawa Barat secara fair trade.",
    icon: "HeartHandshake"
  },
  {
    title: "Roasting Berkualitas Tinggi",
    description: "Biji kopi disangrai mingguan secara artisan oleh roaster tersertifikasi untuk menjaga kesegaran rasa dan aroma alami.",
    icon: "Flame"
  },
  {
    title: "Ruang & Komunitas Hangat",
    description: "Menciptakan ruang nyaman untuk berbagi cerita, berdiskusi, bekerja, atau sekadar rehat menikmati secangkir kehangatan.",
    icon: "Coffee"
  }
];
