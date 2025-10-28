import { Project, HeroSlide, Product, Article, Author } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Membangun Ruang Impian Anda',
    subtitle: 'Solusi Arsitektur & Interior Inovatif yang Mewujudkan Visi Anda Menjadi Kenyataan.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/portofolio',
    buttonText: 'Lihat Portofolio'
  },
  {
    title: 'Desain yang Berbicara',
    subtitle: 'Setiap garis, bentuk, dan ruang kami rancang dengan tujuan untuk menceritakan kisah unik Anda.',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services',
    buttonText: 'Jelajahi Layanan'
  },
  {
    title: 'Dari Konsep Menjadi Karya Nyata',
    subtitle: 'Kolaborasi, presisi, dan kreativitas adalah kunci kami dalam setiap proyek yang kami tangani.',
    image: 'https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/about',
    buttonText: 'Tentang Kami'
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'rumah-minimalis-modern-blitar',
    title: 'Rumah Minimalis Modern',
    category: 'Arsitektur',
    year: 2024,
    location: 'Blitar',
    mainImage: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Sebuah proyek perancangan rumah tinggal dengan konsep minimalis modern yang mengutamakan fungsi, pencahayaan alami, dan sirkulasi udara yang baik. Desain fasad yang bersih dan penggunaan material ekspos memberikan karakter kuat pada bangunan.',
    gallery: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'interior-kafe-industrial-malang',
    title: 'Interior Kafe Industrial',
    category: 'Interior',
    year: 2023,
    location: 'Malang',
    mainImage: 'https://images.pexels.com/photos/1458933/pexels-photo-1458933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Desain interior untuk sebuah kafe dengan tema industrial yang hangat. Kombinasi material seperti baja, kayu, dan bata ekspos menciptakan suasana yang unik dan nyaman bagi pengunjung.',
    gallery: [
      'https://images.pexels.com/photos/2749448/pexels-photo-2749448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'renovasi-kantor-startup-surabaya',
    title: 'Renovasi Kantor Startup',
    category: 'Renovasi',
    year: 2022,
    location: 'Surabaya',
    mainImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Proyek renovasi total sebuah kantor startup untuk menciptakan ruang kerja yang kolaboratif, modern, dan fleksibel. Penambahan area komunal dan ruang istirahat menjadi fokus utama untuk meningkatkan produktivitas dan kesejahteraan tim.',
    gallery: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'desain-villa-tropis-bali',
    title: 'Desain Villa Tropis',
    category: 'Arsitektur',
    year: 2023,
    location: 'Bali',
    mainImage: 'https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Merancang villa tropis mewah yang menyatu dengan alam sekitar. Menggunakan material lokal dan desain terbuka untuk memaksimalkan pemandangan dan kenyamanan.',
    gallery: [
      'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1268480/pexels-photo-1268480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'interior-apartemen-scandinavian',
    title: 'Interior Apartemen Scandinavian',
    category: 'Interior',
    year: 2024,
    location: 'Jakarta',
    mainImage: 'https://images.pexels.com/photos/439257/pexels-photo-439257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Penataan interior apartemen dengan gaya Scandinavian yang mengutamakan kesederhanaan, fungsionalitas, dan penggunaan warna-warna terang untuk menciptakan kesan luas dan bersih.',
    gallery: [
      'https://images.pexels.com/photos/6585620/pexels-photo-6585620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6587900/pexels-photo-6587900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'pembaruan-fasad-toko-bandung',
    title: 'Pembaruan Fasad Toko',
    category: 'Renovasi',
    year: 2023,
    location: 'Bandung',
    mainImage: 'https://images.pexels.com/photos/220794/pexels-photo-220794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Proyek renovasi fasad sebuah toko ritel untuk memberikan tampilan yang lebih modern dan menarik perhatian pengunjung. Penggunaan material baru dan pencahayaan dramatis menjadi kunci keberhasilan proyek ini.',
    gallery: [
      'https://images.pexels.com/photos/5849572/pexels-photo-5849572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'vr-experience-villa-bali',
    title: 'VR Experience Villa Bali',
    category: '360 Virtual Reality',
    year: 2024,
    location: 'Bali',
    mainImage: 'https://i.imgur.com/uN2o5mj.jpeg',
    description: 'Rasakan pengalaman imersif berjalan di dalam villa mewah di Bali sebelum dibangun. Teknologi Virtual Reality 360 derajat kami memungkinkan klien untuk merasakan setiap sudut ruang secara detail, memberikan pemahaman yang lebih baik tentang skala, pencahayaan, dan atmosfer desain.',
    gallery: [
      'https://i.imgur.com/gE24c0s.jpeg',
      'https://i.imgur.com/hG9zL7s.jpeg',
    ]
  },
  {
    id: 'animasi-3d-apartemen-jakarta',
    title: 'Animasi 3D Apartemen Jakarta',
    category: '3D Animasi',
    year: 2023,
    location: 'Jakarta',
    mainImage: 'https://i.imgur.com/2s2dY3c.jpeg',
    description: 'Animasi 3D sinematik yang menampilkan desain interior sebuah apartemen modern di Jakarta. Video ini menyoroti alur ruang, detail material, dan konsep pencahayaan, memberikan presentasi yang dinamis dan menarik bagi calon pembeli.',
    gallery: [
      'https://i.imgur.com/5O0zF1m.jpeg',
    ]
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'gd-001',
    name: 'Paket Gambar Kerja Lengkap',
    category: 'Gambar Desain',
    price: 5000000,
    description: 'Dapatkan satu set lengkap gambar kerja (DED) untuk proyek rumah tinggal, meliputi gambar arsitektur, struktur, dan MEP. Siap untuk proses perizinan dan konstruksi.',
    image: 'https://i.imgur.com/8a1c6wJ.jpeg',
  },
  {
    id: 'calc-001',
    name: 'Template Excel RAB Profesional',
    category: 'Kalkulasi',
    price: 250000,
    description: 'Template spreadsheet Excel untuk menghitung Rencana Anggaran Biaya (RAB) proyek konstruksi secara detail. Dilengkapi dengan formula dan daftar harga bahan up-to-date.',
    image: 'https://i.imgur.com/5J3z1jY.jpeg',
  },
  {
    id: 'ebook-001',
    name: 'E-Book Panduan Renovasi Rumah',
    category: 'Digital',
    price: 150000,
    description: 'Panduan lengkap dalam format e-book yang membahas semua tahapan renovasi rumah, mulai dari perencanaan, pemilihan kontraktor, hingga tips hemat biaya.',
    image: 'https://i.imgur.com/tqS1c8W.jpeg',
  },
    {
    id: 'consult-001',
    name: 'Sesi Konsultasi Desain 1 Jam',
    category: 'Konsultasi',
    price: 750000,
    description: 'Sesi konsultasi privat selama 1 jam dengan arsitek prinsipal kami untuk membahas ide, konsep, dan solusi untuk proyek Anda.',
    image: 'https://i.imgur.com/vL21BCp.jpeg',
  },
];

export const AUTHORS: Author[] = [
    {
        id: 'haris-zaka',
        name: 'Haris Zaka Abdillah',
        image: 'https://i.imgur.com/5zW1wzJ.jpeg',
        role: 'Principal Architect',
    },
    {
        id: 'aulia-putri',
        name: 'Aulia Putri',
        image: 'https://i.imgur.com/dSYa5is.jpeg',
        role: 'Lead Interior Designer',
    },
    {
        id: 'bima-sanjaya',
        name: 'Bima Sanjaya',
        image: 'https://i.imgur.com/pYf06tq.jpeg',
        role: 'Project Manager & Historian',
    }
];

export const BLOG_ARTICLES: Article[] = [
    {
        id: '5-prinsip-desain-arsitektur-minimalis',
        title: '5 Prinsip Desain Arsitektur Minimalis yang Abadi',
        authorId: 'haris-zaka',
        date: '2024-05-15T10:00:00Z',
        category: 'Tips Desain',
        mainImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Minimalisme bukan hanya tentang mengurangi, tetapi tentang menonjolkan esensi. Pelajari lima prinsip dasar yang membuat desain arsitektur minimalis tetap relevan dan menawan sepanjang masa.',
        content: [
            { type: 'paragraph', text: 'Arsitektur minimalis sering disalahpahami sebagai desain yang dingin dan kosong. Namun, pada intinya, minimalisme adalah filosofi desain yang berfokus pada kesederhanaan, fungsionalitas, dan keindahan esensial. Dengan menghilangkan elemen-elemen yang tidak perlu, arsitektur minimalis menciptakan ruang yang tenang, teratur, dan penuh makna. Berikut adalah lima prinsip kunci yang mendefinisikan pendekatan desain ini.' },
            { type: 'heading', level: 2, text: '1. Bentuk dan Ruang yang Bersih' },
            { type: 'paragraph', text: 'Prinsip utama minimalisme adalah penggunaan geometri yang sederhana dan garis-garis yang bersih. Bangunan minimalis sering kali memiliki bentuk dasar seperti kubus atau balok, tanpa ornamen yang rumit. Fokusnya adalah pada kualitas ruang itu sendiri—bagaimana cahaya masuk, bagaimana sirkulasi udara terjadi, dan bagaimana penghuni berinteraksi dengan lingkungan sekitarnya. Dinding yang bersih, langit-langit yang tinggi, dan tata letak terbuka adalah ciri khasnya.' },
            { type: 'heading', level: 2, text: '2. Palet Material Terbatas dan Jujur' },
            { type: 'paragraph', text: 'Desain minimalis tidak menggunakan banyak jenis material. Sebaliknya, ia memilih beberapa material berkualitas tinggi dan menampilkannya secara "jujur"—membiarkan tekstur dan karakter asli material tersebut berbicara. Beton ekspos, kayu alami, baja, dan kaca sering menjadi pilihan utama. Keterbatasan palet ini menciptakan tampilan yang kohesif dan menenangkan.' },
            { type: 'image', src: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Kombinasi beton ekspos dan kayu menciptakan kehangatan dalam kesederhanaan.' },
            { type: 'heading', level: 2, text: '3. Pencahayaan Alami sebagai Elemen Desain' },
            { type: 'paragraph', text: 'Cahaya adalah elemen krusial dalam arsitektur minimalis. Jendela besar, skylight, dan bukaan strategis digunakan untuk memaksimalkan masuknya cahaya alami ke dalam ruangan. Cahaya tidak hanya berfungsi sebagai penerangan, tetapi juga sebagai elemen dinamis yang membentuk ruang, menciptakan bayangan, dan mengubah suasana sepanjang hari.' },
            { type: 'heading', level: 2, text: '4. Detail yang Sempurna dan Tersembunyi' },
            { type: 'paragraph', text: 'Meskipun terlihat sederhana, arsitektur minimalis sangat memperhatikan detail. Setiap sambungan, setiap tepi, dan setiap pertemuan material harus dieksekusi dengan presisi tinggi. Banyak detail yang justru "disembunyikan" untuk menjaga tampilan yang bersih, seperti pintu tanpa kusen, lemari tanam, atau sistem pencahayaan terintegrasi. Kesempurnaan dalam detail inilah yang membedakan desain minimalis yang baik dari yang biasa.' },
            { type: 'heading', level: 2, text: '5. "Less is More"' },
            { type: 'paragraph', text: 'Diadaptasi dari arsitek legendaris Ludwig Mies van der Rohe, frasa "Less is More" adalah mantra minimalisme. Ini berarti setiap elemen dalam desain harus memiliki tujuan yang jelas. Dengan menghilangkan dekorasi yang tidak perlu, fokus dialihkan ke bentuk, cahaya, dan material, menciptakan ruang yang lebih bermakna dan berdampak.' },
        ],
    },
    {
        id: 'mengenal-konsep-biophilic-design',
        title: 'Mengenal Konsep Biophilic Design: Membawa Alam ke Dalam Ruangan',
        authorId: 'aulia-putri',
        date: '2024-04-22T11:30:00Z',
        category: 'Tren Arsitektur',
        mainImage: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Biophilic design lebih dari sekadar menempatkan pot tanaman di sudut ruangan. Ini adalah pendekatan holistik untuk menghubungkan manusia dengan alam di lingkungan binaan, yang terbukti meningkatkan kesehatan dan kesejahteraan.',
        content: [
            { type: 'paragraph', text: 'Di tengah kehidupan perkotaan yang padat, manusia secara naluriah merindukan koneksi dengan alam. Biophilic design adalah jawaban atas kerinduan ini. Konsep ini didasarkan pada ide "biophilia," yang menyatakan bahwa manusia memiliki kecenderungan bawaan untuk terhubung dengan alam dan bentuk kehidupan lainnya. Dalam arsitektur dan interior, ini diterjemahkan menjadi strategi desain yang mengintegrasikan elemen alam ke dalam ruang hidup dan kerja kita.' },
            { type: 'heading', level: 2, text: 'Mengapa Biophilic Design Penting?' },
            { type: 'paragraph', text: 'Penelitian menunjukkan bahwa ruang yang dirancang dengan prinsip biophilic dapat mengurangi stres, meningkatkan kreativitas, dan mempercepat pemulihan dari penyakit. Di lingkungan kerja, desain ini terbukti meningkatkan produktivitas dan mengurangi tingkat absensi. Ini bukan hanya tentang estetika, tetapi tentang menciptakan lingkungan yang mendukung kesehatan mental dan fisik kita.' },
            { type: 'image', src: 'https://images.pexels.com/photos/1739023/pexels-photo-1739023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Dinding hijau vertikal adalah salah satu contoh penerapan biophilic design yang paling populer.' },
            { type: 'heading', level: 2, text: 'Elemen Kunci Biophilic Design' },
            { type: 'paragraph', text: 'Penerapan biophilic design dapat dibagi menjadi tiga kategori utama:' },
            { type: 'paragraph', text: '1. **Alam di Dalam Ruang (Direct Nature):** Ini adalah cara yang paling literal untuk membawa alam ke dalam, seperti penggunaan tanaman hias, dinding hijau (vertical garden), fitur air (kolam atau air mancur), dan akuarium. Cahaya alami yang melimpah dan sirkulasi udara segar juga termasuk dalam kategori ini.' },
            { type: 'paragraph', text: '2. **Referensi Alam (Indirect Nature):** Menggunakan elemen yang meniru atau merepresentasikan alam. Contohnya termasuk penggunaan material alami seperti kayu dan batu, pemilihan warna yang terinspirasi dari alam (hijau, biru, cokelat), serta bentuk dan pola organik pada furnitur atau tekstil.' },
            { type: 'paragraph', text: '3. **Sifat Ruang (Space and Place):** Menciptakan ruang yang memberikan perasaan seperti berada di alam. Ini bisa berupa menciptakan area dengan pemandangan luas ke luar (prospect), serta ruang yang lebih kecil dan terlindungi untuk relaksasi (refuge). Permainan bayangan dan cahaya yang kompleks juga dapat meniru pengalaman berada di bawah kanopi pohon.' },
            { type: 'heading', level: 2, text: 'Kesimpulan' },
            { type: 'paragraph', text: 'Biophilic design adalah investasi dalam kesejahteraan manusia. Dengan secara sadar mengintegrasikan alam ke dalam desain bangunan kita, kita dapat menciptakan ruang yang tidak hanya indah tetapi juga menyehatkan, menginspirasi, dan restoratif.' },
        ],
    },
    {
        id: 'sejarah-singkat-brutalisme',
        title: 'Sejarah Singkat Brutalisme: Dari Le Corbusier hingga Fasad Beton Modern',
        authorId: 'bima-sanjaya',
        date: '2024-03-18T09:00:00Z',
        category: 'Sejarah Arsitektur',
        mainImage: 'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Brutalisme, gaya arsitektur yang sering diperdebatkan, dikenal dengan penggunaan beton mentah dan bentuk geometris yang masif. Mari kita telusuri asal-usul, filosofi, dan warisannya dalam arsitektur modern.',
        content: [
            { type: 'paragraph', text: 'Brutalisme adalah gaya arsitektur yang muncul pada pertengahan abad ke-20 dan berkembang pesat dari tahun 1950-an hingga 1970-an. Namanya berasal dari bahasa Prancis "béton brut," yang berarti "beton mentah," sebuah istilah yang dipopulerkan oleh arsitek pionir Le Corbusier untuk menggambarkan beton ekspos yang ia gunakan dalam banyak proyeknya.' },
            { type: 'heading', level: 2, text: 'Asal-Usul dan Filosofi' },
            { type: 'paragraph', text: 'Brutalisme lahir dari semangat optimisme pasca-Perang Dunia II di Eropa. Gaya ini sering digunakan untuk proyek-proyek publik seperti gedung pemerintahan, universitas, dan perumahan sosial. Filosofinya adalah kejujuran material—bangunan tidak menyembunyikan strukturnya. Apa yang Anda lihat adalah apa yang Anda dapatkan: beton, baja, dan bata diekspos tanpa polesan.' },
            { type: 'paragraph', text: 'Gaya ini dicirikan oleh bentuk geometris yang berulang dan masif, tekstur permukaan yang kasar, dan fungsionalitas yang jelas. Brutalisme menolak estetika yang dianggap borjuis dan dekoratif, dan sebaliknya, merayakan kekuatan dan kepraktisan.' },
            { type: 'image', src: 'https://i.imgur.com/kSfa5fL.jpeg', caption: 'Unité d\'Habitation di Marseille karya Le Corbusier, salah satu ikon arsitektur brutalis.' },
            { type: 'heading', level: 2, text: 'Kritik dan Kebangkitan Kembali' },
            { type: 'paragraph', text: 'Pada akhir abad ke-20, Brutalisme mulai kehilangan popularitasnya. Bangunan-bangunan ini sering dianggap dingin, tidak ramah, dan bahkan menindas. Permukaan beton yang menua dengan buruk di iklim lembab juga menambah citra negatifnya. Banyak bangunan brutalis ikonik yang terancam dihancurkan.' },
            { type: 'paragraph', text: 'Namun, dalam beberapa dekade terakhir, ada minat baru terhadap Brutalisme. Generasi baru arsitek dan penggemar desain mulai menghargai kejujuran, keberanian, dan kualitas pahatan dari bangunan-bangunan ini. Banyak yang melihatnya sebagai warisan arsitektur penting yang perlu dilestarikan. Di media sosial, tagar seperti #brutalism menjadi populer, menampilkan keindahan fotogenik dari fasad beton yang dramatis.' },
            { type: 'paragraph', text: 'Warisan Brutalisme dapat dilihat dalam arsitektur kontemporer melalui penggunaan beton ekspos yang dipoles, bentuk-bentuk geometris yang kuat, dan fokus pada materialitas. Meskipun tidak lagi dominan, semangat kejujuran dan kekuatan Brutalisme terus menginspirasi arsitek hingga hari ini.' },
        ]
    },
    {
        id: 'psikologi-warna-dalam-desain-interior',
        title: 'Psikologi Warna dalam Desain Interior: Menciptakan Suasana yang Tepat',
        authorId: 'aulia-putri',
        date: '2024-06-01T14:00:00Z',
        category: 'Tips Desain',
        mainImage: 'https://images.pexels.com/photos/545014/pexels-photo-545014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Warna memiliki dampak psikologis yang kuat terhadap suasana hati dan persepsi kita. Pelajari cara menggunakan warna secara efektif dalam desain interior untuk menciptakan ruang yang sesuai dengan fungsinya.',
        content: [
            { type: 'paragraph', text: 'Pemilihan warna cat dinding atau furnitur sering kali dianggap sebagai keputusan estetika semata. Namun, di balik setiap warna terdapat dampak psikologis yang dapat secara signifikan memengaruhi suasana hati, emosi, dan bahkan perilaku kita di dalam sebuah ruangan. Inilah yang disebut psikologi warna, sebuah bidang studi yang menjadi alat penting bagi desainer interior.' },
            { type: 'heading', level: 2, text: 'Warna Hangat: Energi dan Keakraban' },
            { type: 'paragraph', text: 'Warna-warna seperti merah, oranye, dan kuning dikenal sebagai warna hangat. Warna-warna ini cenderung membangkitkan perasaan gembira, optimisme, dan energi. Merah dapat merangsang nafsu makan, menjadikannya pilihan populer untuk ruang makan. Kuning, warna matahari, dapat membuat ruangan terasa lebih ceria dan ramah. Namun, penggunaan warna hangat yang berlebihan dapat menjadi terlalu merangsang, sehingga sering kali digunakan sebagai aksen.' },
            { type: 'image', src: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Aksen warna kuning dapat mencerahkan ruang keluarga dan mendorong interaksi.' },
            { type: 'heading', level: 2, text: 'Warna Dingin: Ketenangan dan Konsentrasi' },
            { type: 'paragraph', text: 'Biru, hijau, dan ungu adalah warna-warna dingin yang memberikan efek menenangkan dan damai. Biru sering dikaitkan dengan ketenangan dan produktivitas, menjadikannya pilihan yang sangat baik untuk kamar tidur atau kantor. Hijau, yang mengingatkan kita pada alam, dapat mengurangi stres dan menciptakan rasa keseimbangan. Warna-warna ini dapat membuat ruangan terasa lebih luas, tetapi jika tidak diimbangi, bisa terasa dingin atau impersonal.' },
            { type: 'heading', level: 2, text: 'Warna Netral: Fleksibilitas dan Keanggunan' },
            { type: 'paragraph', text: 'Putih, abu-abu, krem, dan cokelat adalah fondasi dari banyak skema desain interior. Warna netral memberikan latar belakang yang fleksibel, memungkinkan elemen-elemen lain seperti furnitur, karya seni, atau tekstil untuk menonjol. Putih dapat menciptakan kesan bersih dan luas, sementara abu-abu memberikan nuansa modern dan canggih. Menggunakan berbagai corak warna netral dapat menciptakan kedalaman dan kehangatan tanpa membuat ruangan terasa ramai.' },
            { type: 'paragraph', text: 'Memahami psikologi warna memungkinkan kita untuk merancang ruang yang tidak hanya indah dipandang, tetapi juga mendukung fungsi dan suasana hati yang kita inginkan. Dengan kombinasi yang tepat, warna dapat mengubah sebuah rumah menjadi tempat perlindungan yang sejati.' },
        ]
    },
    {
        id: 'membangun-masa-depan-hijau-prinsip-arsitektur-berkelanjutan',
        title: 'Membangun Masa Depan Hijau: Prinsip Arsitektur Berkelanjutan',
        authorId: 'haris-zaka',
        date: '2024-07-10T09:00:00Z',
        category: 'Tren Arsitektur',
        mainImage: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Arsitektur berkelanjutan bukan lagi pilihan, melainkan keharusan. Temukan prinsip-prinsip utama dari desain pasif hingga material ramah lingkungan yang membentuk bangunan masa depan.',
        content: [
            { type: 'paragraph', text: 'Di hadapan tantangan perubahan iklim, arsitektur berkelanjutan atau "green architecture" muncul sebagai pendekatan desain yang krusial. Tujuannya adalah untuk meminimalkan dampak negatif bangunan terhadap lingkungan melalui efisiensi dan moderasi dalam penggunaan material, energi, dan ruang pengembangan. Ini bukan sekadar tren, melainkan sebuah filosofi mendasar dalam membangun masa depan yang lebih baik.' },
            { type: 'heading', level: 2, text: 'Desain Pasif: Bekerja Sama dengan Alam' },
            { type: 'paragraph', text: 'Inti dari arsitektur berkelanjutan adalah desain pasif, yaitu memanfaatkan elemen-elemen alam untuk menjaga kenyamanan termal bangunan. Ini melibatkan orientasi bangunan yang cermat untuk memaksimalkan cahaya pagi dan meminimalkan panas sore, desain ventilasi silang alami untuk mengurangi ketergantungan pada AC, serta penggunaan elemen peneduh seperti overstek (tritisan) atau secondary skin untuk menghalau panas matahari langsung.' },
            { type: 'heading', level: 2, text: 'Material Ramah Lingkungan dan Lokal' },
            { type: 'paragraph', text: 'Pemilihan material sangat penting. Arsitektur berkelanjutan memprioritaskan material yang dapat diperbarui seperti bambu atau kayu bersertifikat, material daur ulang seperti baja atau beton daur ulang, dan material lokal untuk mengurangi jejak karbon dari transportasi. Selain itu, penggunaan cat rendah VOC (Volatile Organic Compounds) juga penting untuk menjaga kualitas udara dalam ruangan.' },
            { type: 'image', src: 'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Penggunaan material kayu lokal dan ventilasi silang adalah kunci dari desain pasif yang efektif.' },
            { type: 'heading', level: 2, text: 'Efisiensi Energi dan Air' },
            { type: 'paragraph', text: 'Teknologi modern memainkan peran penting dalam melengkapi desain pasif. Penggunaan panel surya untuk menghasilkan listrik sendiri, sistem pemanenan air hujan (rainwater harvesting) untuk kebutuhan non-potabel seperti menyiram tanaman, dan pemasangan perlengkapan hemat air (water-efficient fixtures) adalah beberapa contoh bagaimana bangunan dapat secara signifikan mengurangi konsumsi sumber daya.' },
            { type: 'paragraph', text: 'Pada akhirnya, arsitektur berkelanjutan adalah tentang menciptakan ruang yang sehat bagi penghuninya dan juga bagi planet ini. Ini adalah investasi jangka panjang yang tidak hanya menghemat biaya operasional tetapi juga memberikan kontribusi positif bagi lingkungan.' }
        ]
    },
    {
        id: 'lebih-dari-sekadar-terang-pentingnya-cahaya-alami-dalam-desain',
        title: 'Lebih dari Sekadar Terang: Pentingnya Cahaya Alami dalam Desain',
        authorId: 'aulia-putri',
        date: '2024-07-05T11:00:00Z',
        category: 'Tips Desain',
        mainImage: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Cahaya alami dapat secara dramatis mengubah suasana ruang, meningkatkan mood, dan bahkan menghemat energi. Pelajari strategi untuk memaksimalkan pencahayaan alami di rumah Anda.',
        content: [
            { type: 'paragraph', text: 'Cahaya alami adalah salah satu elemen desain yang paling kuat namun sering diabaikan. Manfaatnya jauh melampaui sekadar penerangan; ia memengaruhi kesehatan psikologis kita, membuat ruang terasa lebih besar, dan menonjolkan tekstur serta warna interior. Desain yang baik selalu mempertimbangkan bagaimana cahaya matahari masuk dan berinteraksi dengan ruang sepanjang hari.' },
            { type: 'heading', level: 2, text: 'Strategi Penempatan Jendela dan Bukaan' },
            { type: 'paragraph', text: 'Ukuran dan penempatan jendela adalah faktor paling fundamental. Jendela besar yang menghadap ke utara atau selatan (di belahan bumi utara) memberikan cahaya yang konsisten tanpa panas berlebih. Skylight sangat efektif untuk menerangi area tengah rumah yang gelap, seperti koridor atau kamar mandi. Jendela sudut (corner windows) dapat menciptakan pemandangan panorama dan memberikan kesan ruang yang lebih terbuka.' },
            { type: 'image', src: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Skylight di area tangga dapat mengubah ruang yang tadinya gelap menjadi titik fokus yang terang dan menarik.' },
            { type: 'heading', level: 2, text: 'Permainan Warna dan Material Interior' },
            { type: 'paragraph', text: 'Interior dapat dirancang untuk memaksimalkan pantulan cahaya. Dinding dengan warna-warna terang (putih, krem, abu-abu muda) akan memantulkan lebih banyak cahaya ke seluruh ruangan. Penggunaan cermin pada dinding strategis dapat secara visual menggandakan jumlah cahaya dan menciptakan ilusi ruang yang lebih luas. Material dengan permukaan reflektif, seperti lantai yang dipoles atau backsplash kaca, juga membantu menyebarkan cahaya.' },
            { type: 'heading', level: 2, text: 'Mengontrol Intensitas dan Privasi' },
            { type: 'paragraph', text: 'Meskipun cahaya melimpah itu baik, kontrol tetap diperlukan untuk menghindari silau (glare) dan panas berlebih, serta untuk menjaga privasi. Penggunaan tirai tipis (sheer curtains) dapat melembutkan cahaya tanpa menghalanginya sepenuhnya. Kisi-kisi kayu atau logam di luar jendela dapat berfungsi sebagai peneduh arsitektural yang estetis. Untuk privasi, kaca es (frosted glass) atau film jendela bisa menjadi solusi efektif.' }
        ]
    },
    {
        id: 'terbuka-atau-tersekat-memilih-antara-denah-open-plan-vs-closed-plan',
        title: 'Terbuka atau Tersekat: Memilih Antara Denah Open-Plan vs. Closed-Plan',
        authorId: 'bima-sanjaya',
        date: '2024-06-28T14:00:00Z',
        category: 'Perencanaan Ruang',
        mainImage: 'https://images.pexels.com/photos/3831847/pexels-photo-3831847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Debat abadi dalam desain interior: denah terbuka yang lapang atau ruang-ruang privat yang terdefinisi? Pahami kelebihan dan kekurangan masing-masing untuk menemukan yang cocok bagi gaya hidup Anda.',
        content: [
            { type: 'paragraph', text: 'Salah satu keputusan paling awal dan paling berdampak dalam desain rumah adalah tata letak atau denahnya. Secara garis besar, ada dua pendekatan utama: open-plan (denah terbuka) yang menggabungkan beberapa fungsi dalam satu ruang besar, dan closed-plan (denah tersekat) yang memisahkan setiap fungsi ke dalam ruangan-ruangan tersendiri. Tidak ada jawaban benar atau salah; pilihan terbaik bergantung sepenuhnya pada kebutuhan dan gaya hidup penghuninya.' },
            { type: 'heading', level: 2, text: 'Kelebihan Konsep Open-Plan' },
            { type: 'paragraph', text: 'Konsep denah terbuka sangat populer karena menciptakan kesan ruang yang luas, terang, dan lapang. Ini sangat ideal untuk keluarga yang menginginkan interaksi sosial yang mudah, di mana orang tua bisa memasak sambil mengawasi anak-anak bermain di ruang keluarga. Aliran cahaya dan udara juga lebih baik, membuat rumah terasa lebih sehat dan terhubung.' },
            { type: 'heading', level: 2, text: 'Kekurangan Konsep Open-Plan' },
            { type: 'paragraph', text: 'Namun, ada beberapa kelemahan. Kurangnya privasi adalah masalah utama; sulit untuk menemukan sudut yang tenang untuk bekerja atau membaca. Kebisingan juga mudah menyebar dari satu area ke area lain. Bau masakan dari dapur bisa menyebar ke seluruh ruang, dan secara umum, denah terbuka menuntut kerapian karena semua area terlihat sekaligus.' },
            { type: 'image', src: 'https://images.pexels.com/photos/6434623/pexels-photo-6434623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Denah terbuka modern menyatukan dapur, ruang makan, dan ruang keluarga menjadi satu area sosial yang besar.' },
            { type: 'heading', level: 2, text: 'Pesona Ruang Tersekat (Closed-Plan)' },
            { type: 'paragraph', text: 'Denah tradisional yang tersekat menawarkan privasi dan ketenangan. Setiap ruangan memiliki fungsi yang jelas, memudahkan dekorasi dan penataan. Kebisingan dan bau dapat dilokalisasi, dan lebih mudah untuk mengontrol suhu di setiap ruangan secara individual, yang bisa lebih hemat energi. Ruangan yang berantakan juga bisa dengan mudah disembunyikan dengan menutup pintu.' },
            { type: 'heading', level: 2, text: 'Solusi Hibrida: Yang Terbaik dari Keduanya' },
            { type: 'paragraph', text: 'Banyak desain modern kini mengadopsi pendekatan hibrida. Misalnya, area publik seperti dapur dan ruang keluarga dibuat terbuka, sementara kamar tidur dan ruang kerja tetap privat. Penggunaan partisi geser, rak buku dua sisi, atau pintu kaca dapat menciptakan pemisahan visual tanpa sepenuhnya memblokir cahaya dan pandangan, memberikan fleksibilitas sesuai kebutuhan.' }
        ]
    },
    {
        id: 'melihat-sebelum-membangun-peran-bim-dan-vr-dalam-arsitektur-modern',
        title: 'Melihat Sebelum Membangun: Peran BIM dan VR dalam Arsitektur Modern',
        authorId: 'haris-zaka',
        date: '2024-06-20T10:00:00Z',
        category: 'Teknologi',
        mainImage: 'https://images.pexels.com/photos/4394622/pexels-photo-4394622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Teknologi Building Information Modeling (BIM) dan Virtual Reality (VR) merevolusi cara arsitek merancang dan klien memahami proyek. Selami bagaimana teknologi ini mengurangi kesalahan dan meningkatkan hasil akhir.',
        content: [
            { type: 'paragraph', text: 'Dulu, klien harus mengandalkan imajinasi dan gambar 2D untuk membayangkan rumah masa depan mereka. Kini, teknologi digital seperti BIM dan VR telah mengubah permainan, memungkinkan visualisasi yang sangat akurat dan pengalaman imersif bahkan sebelum peletakan batu pertama.' },
            { type: 'heading', level: 2, text: 'Apa itu BIM (Building Information Modeling)?' },
            { type: 'paragraph', text: 'BIM lebih dari sekadar model 3D. Ini adalah proses cerdas berbasis model yang memberikan arsitek, insinyur, dan kontraktor wawasan dan alat untuk merencanakan, merancang, membangun, dan mengelola bangunan dan infrastruktur secara lebih efisien. Setiap elemen dalam model BIM, dari dinding hingga jendela, membawa informasi detail tentang spesifikasi, biaya, dan jadwal. Ini memungkinkan deteksi bentrokan (misalnya, pipa menabrak balok struktur) di tahap desain, bukan di lapangan, yang menghemat waktu dan biaya secara signifikan.' },
            { type: 'image', src: 'https://i.imgur.com/k2gYQhV.jpeg', caption: 'Model BIM berisi informasi detail tentang setiap komponen bangunan, dari dimensi hingga material.' },
            { type: 'heading', level: 2, text: 'Pengalaman Imersif dengan Virtual Reality (VR)' },
            { type: 'paragraph', text: 'VR membawa model BIM ke tingkat selanjutnya. Dengan menggunakan headset VR, klien dapat benar-benar "berjalan-jalan" di dalam desain bangunan mereka. Mereka dapat merasakan skala ruang, melihat bagaimana cahaya matahari masuk pada waktu yang berbeda, dan menilai pilihan material dari dekat. Pengalaman ini sangat kuat untuk pengambilan keputusan. Klien bisa berkata, "Saya rasa dapur ini terlalu sempit," atau "Saya ingin jendela yang lebih besar di sini," dengan keyakinan penuh setelah merasakannya secara virtual.' },
            { type: 'paragraph', text: 'Kombinasi BIM dan VR memberdayakan kolaborasi antara tim desain dan klien, mengurangi ketidakpastian, meminimalkan revisi yang mahal selama konstruksi, dan pada akhirnya menghasilkan bangunan yang lebih baik dan lebih sesuai dengan visi klien.' }
        ]
    },
    {
        id: 'jiwa-baru-bangunan-tua-keindahan-adaptive-reuse-dalam-arsitektur',
        title: 'Jiwa Baru Bangunan Tua: Keindahan Adaptive Reuse dalam Arsitektur',
        authorId: 'bima-sanjaya',
        date: '2024-06-15T15:00:00Z',
        category: 'Sejarah Arsitektur',
        mainImage: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Memberikan fungsi baru pada bangunan bersejarah bukan hanya tindakan pelestarian, tetapi juga sebuah pendekatan desain yang berkelanjutan dan penuh karakter. Jelajahi pesona adaptive reuse.',
        content: [
            { type: 'paragraph', text: 'Di tengah laju pembangunan kota, seringkali kita melihat bangunan-bangunan tua yang terbengkalai. Adaptive reuse, atau alih fungsi adaptif, adalah proses mengubah bangunan lama untuk tujuan baru sambil mempertahankan fitur-fitur historisnya. Ini adalah cara yang cerdas untuk menghormati masa lalu sambil membangun untuk masa depan.' },
            { type: 'heading', level: 2, text: 'Mengapa Memilih Adaptive Reuse?' },
            { type: 'paragraph', text: 'Ada tiga alasan utama mengapa adaptive reuse semakin populer. Pertama, keberlanjutan. Memanfaatkan struktur yang ada secara signifikan mengurangi limbah konstruksi dan jejak karbon dibandingkan membangun dari nol. Kedua, karakter dan sejarah. Bangunan tua memiliki "jiwa" dan detail arsitektur yang sulit ditiru, memberikan karakter unik pada proyek baru. Ketiga, keuntungan ekonomis. Dalam banyak kasus, merenovasi struktur yang ada bisa lebih cepat dan lebih murah daripada konstruksi baru, terutama jika mempertimbangkan biaya perizinan dan infrastruktur.' },
            { type: 'image', src: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Contoh klasik adaptive reuse: gudang tua dari bata yang diubah menjadi ruang galeri seni dan kafe modern.' },
            { type: 'heading', level: 2, text: 'Tantangan dalam Desain Adaptif' },
            { type: 'paragraph', text: 'Proses ini bukannya tanpa tantangan. Arsitek harus melakukan investigasi mendalam terhadap kondisi struktur bangunan yang ada dan memastikan bangunan tersebut aman untuk ditingkatkan. Memenuhi peraturan bangunan modern (seperti aksesibilitas atau standar kebakaran) dalam kerangka bangunan lama juga memerlukan solusi desain yang kreatif. Tantangan terbesar seringkali adalah bagaimana mengintegrasikan elemen baru yang modern secara harmonis tanpa merusak integritas sejarah bangunan.' },
            { type: 'paragraph', text: 'Proyek adaptive reuse yang sukses adalah dialog antara masa lalu dan masa kini, menciptakan ruang yang kaya akan cerita dan relevan untuk generasi mendatang. Dari pabrik tua yang menjadi apartemen loteng hingga stasiun kereta yang menjadi museum, kemungkinannya tidak terbatas.' }
        ]
    },
    {
        id: 'wabi-sabi-dan-ruang-kosong-pengaruh-arsitektur-jepang-pada-desain-modern',
        title: 'Wabi-Sabi dan Ruang Kosong: Pengaruh Arsitektur Jepang pada Desain Modern',
        authorId: 'aulia-putri',
        date: '2024-06-10T11:00:00Z',
        category: 'Inspirasi Desain',
        mainImage: 'https://images.pexels.com/photos/2089422/pexels-photo-2089422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Dari kesederhanaan minimalis hingga koneksi mendalam dengan alam, prinsip-prinsip desain Jepang telah lama menginspirasi arsitek di seluruh dunia. Pelajari konsep kunci seperti Wabi-Sabi, Ma, dan Shakkei.',
        content: [
            { type: 'paragraph', text: 'Estetika desain Jepang telah memikat dunia dengan keanggunan, kesederhanaan, dan hubungannya yang mendalam dengan alam. Pengaruhnya dapat dilihat dalam banyak aspek arsitektur modern, terutama minimalisme. Namun, di balik tampilan yang bersih, terdapat filosofi mendalam yang dapat memperkaya cara kita memandang ruang.' },
            { type: 'heading', level: 2, text: 'Wabi-Sabi: Keindahan dalam Ketidaksempurnaan' },
            { type: 'paragraph', text: 'Wabi-sabi adalah pandangan dunia yang berpusat pada penerimaan terhadap kefanaan dan ketidaksempurnaan. Dalam desain, ini diterjemahkan menjadi penghargaan terhadap material alami yang menua dengan anggun—kayu yang lapuk, logam yang berkarat, atau keramik yang retak. Ini adalah antitesis dari produksi massal yang steril, merayakan keunikan dan jejak waktu pada setiap objek.' },
            { type: 'heading', level: 2, text: 'Ma (間): Kekuatan Ruang Negatif' },
            { type: 'paragraph', text: 'Ma adalah konsep Jepang tentang ruang kosong atau interval. Ini bukan sekadar kekosongan, tetapi elemen aktif dalam desain. Dalam arsitektur, Ma adalah ruang di antara pilar, jeda antara not musik, atau kekosongan yang disengaja dalam sebuah komposisi. Dengan tidak mengisi setiap sudut, desainer menciptakan ritme, fokus, dan rasa tenang, memungkinkan elemen-elemen penting untuk "bernapas".' },
            { type: 'image', src: 'https://images.pexels.com/photos/7245330/pexels-photo-7245330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Penggunaan partisi shoji yang ringan menciptakan fleksibilitas ruang dan menyebarkan cahaya secara lembut, sebuah manifestasi dari konsep Ma.' },
            { type: 'heading', level: 2, text: 'Shakkei (借景): Meminjam Pemandangan' },
            { type: 'paragraph', text: 'Shakkei adalah teknik cerdas dalam desain taman dan arsitektur Jepang di mana pemandangan di luar properti, seperti gunung atau pohon di kejauhan, "dipinjam" dan dimasukkan sebagai bagian dari komposisi desain interior atau taman. Jendela dan bukaan dirancang secara hati-hati untuk membingkai pemandangan ini, menciptakan hubungan yang mulus antara ruang dalam dan luar.' },
            { type: 'paragraph', text: 'Dengan memahami prinsip-prinsip ini, kita dapat menciptakan ruang yang tidak hanya indah secara visual tetapi juga menenangkan jiwa dan kaya akan makna.' }
        ]
    },
    {
        id: 'resep-dapur-sempurna-elemen-kunci-desain-dapur-yang-tak-lekang-oleh-waktu',
        title: 'Resep Dapur Sempurna: Elemen Kunci Desain Dapur yang Tak Lekang oleh Waktu',
        authorId: 'aulia-putri',
        date: '2024-05-29T13:00:00Z',
        category: 'Tips Desain',
        mainImage: 'https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Dapur adalah jantung rumah. Hindari tren sesaat dan fokus pada elemen-elemen dasar yang akan membuat dapur Anda fungsional dan indah selama bertahun-tahun, dari tata letak hingga material.',
        content: [
            { type: 'paragraph', text: 'Dapur telah berevolusi dari ruang kerja murni menjadi pusat kegiatan sosial di rumah. Saat merancang dapur, mudah untuk terjebak dalam tren warna atau material terbaru. Namun, untuk investasi jangka panjang, fokuslah pada elemen-elemen abadi yang menjamin fungsionalitas dan keindahan selama bertahun-tahun.' },
            { type: 'heading', level: 2, text: 'Tata Letak yang Efisien: Evolusi Segitiga Kerja' },
            { type: 'paragraph', text: 'Konsep klasik "segitiga kerja"—menghubungkan wastafel, kompor, dan kulkas—masih relevan. Namun, dapur modern sering mengadaptasinya menjadi konsep "zona kerja". Ini melibatkan pengelompokan area berdasarkan fungsi: zona persiapan (dekat wastafel dan kulkas), zona memasak (kompor dan oven), dan zona pembersihan (wastafel dan mesin cuci piring). Pastikan alur kerja di antara zona-zona ini lancar dan tidak terhalang.' },
            { type: 'heading', level: 2, text: 'Pemilihan Material yang Tahan Lama' },
            { type: 'paragraph', text: 'Pilih material yang tidak hanya indah tetapi juga tahan banting. Untuk meja dapur (countertop), material seperti quartz, granit, atau solid surface menawarkan daya tahan tinggi terhadap goresan dan panas. Untuk backsplash, keramik subway tile atau kaca adalah pilihan klasik yang mudah dibersihkan. Kabinet dari kayu solid atau plywood berkualitas tinggi akan bertahan lebih lama daripada particle board.' },
            { type: 'image', src: 'https://images.pexels.com/photos/6207818/pexels-photo-6207818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Kombinasi material berkualitas, tata letak yang efisien, dan pencahayaan yang baik adalah resep untuk dapur yang abadi.' },
            { type: 'heading', level: 2, text: 'Pencahayaan Berlapis (Layered Lighting)' },
            { type: 'paragraph', text: 'Pencahayaan yang baik sangat krusial di dapur. Terapkan tiga lapisan pencahayaan: pencahayaan umum (ambient lighting) dari lampu plafon, pencahayaan tugas (task lighting) di bawah kabinet untuk menerangi area kerja, dan pencahayaan aksen (accent lighting) seperti lampu gantung di atas island untuk menambah gaya dan suasana.' },
            { type: 'paragraph', text: 'Dengan berinvestasi pada tata letak yang cerdas, material berkualitas, dan pencahayaan yang tepat, Anda akan menciptakan dapur yang tidak hanya menjadi pusat perhatian hari ini, tetapi juga tetap fungsional dan relevan di masa depan.' }
        ]
    },
    {
        id: 'besar-dalam-keterbatasan-seni-desain-untuk-hunian-mungil',
        title: 'Besar dalam Keterbatasan: Seni Desain untuk Hunian Mungil',
        authorId: 'aulia-putri',
        date: '2024-05-21T09:00:00Z',
        category: 'Perencanaan Ruang',
        mainImage: 'https://images.pexels.com/photos/545046/pexels-photo-545046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Hidup di ruang kecil bukan berarti harus mengorbankan gaya atau kenyamanan. Temukan trik-trik desain cerdas, dari furnitur multifungsi hingga ilusi optik, untuk memaksimalkan setiap sentimeter persegi.',
        content: [
            { type: 'paragraph', text: 'Urbanisasi dan perubahan gaya hidup membuat hunian berukuran kecil, seperti apartemen studio atau rumah mungil, menjadi semakin umum. Merancang ruang kecil adalah tantangan yang menarik: bagaimana menciptakan fungsionalitas maksimal dan perasaan lapang dalam keterbatasan? Kuncinya terletak pada desain yang cerdas dan efisien.' },
            { type: 'heading', level: 2, text: 'Furnitur Multifungsi adalah Pahlawan' },
            { type: 'paragraph', text: 'Setiap perabot harus bekerja keras. Pikirkan tempat tidur yang memiliki laci penyimpanan di bawahnya (storage bed), meja kopi yang dapat diangkat menjadi meja kerja atau meja makan, atau sofa modular yang dapat diatur ulang sesuai kebutuhan. Furnitur yang dapat dilipat atau ditumpuk juga merupakan solusi brilian untuk menghemat ruang saat tidak digunakan.' },
            { type: 'heading', level: 2, text: 'Ilusi Optik untuk Memperluas Ruang' },
            { type: 'paragraph', text: 'Ada banyak trik visual untuk membuat ruangan terasa lebih besar. Gunakan palet warna terang dan netral pada dinding untuk memantulkan cahaya. Pasang cermin besar di dinding untuk menciptakan ilusi kedalaman. Pilih furnitur dengan kaki yang terlihat (seperti sofa atau meja berkaki ramping) karena ini memungkinkan pandangan melihat lantai di bawahnya, memberikan kesan lebih lapang. Gorden yang dipasang tinggi mendekati langit-langit juga dapat membuat jendela dan ruangan terasa lebih tinggi.' },
            { type: 'image', src: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Cermin besar tidak hanya berfungsi sebagai elemen dekoratif tetapi juga secara dramatis membuat ruangan terasa lebih luas dan terang.' },
            { type: 'heading', level: 2, text: 'Manfaatkan Ruang Vertikal' },
            { type: 'paragraph', text: 'Ketika luas lantai terbatas, lihatlah ke atas. Gunakan rak dinding yang menjulang tinggi hingga langit-langit (floor-to-ceiling shelving) untuk buku atau barang-barang dekoratif. Di dapur, kabinet atas yang mencapai langit-langit memberikan ruang penyimpanan ekstra. Tempat tidur loteng (loft bed) juga bisa menjadi solusi cerdas untuk membebaskan area lantai di bawahnya untuk meja kerja atau area duduk.' },
            { type: 'paragraph', text: 'Dengan perencanaan yang matang, hunian mungil dapat menjadi ruang yang sangat fungsional, nyaman, dan penuh gaya.' }
        ]
    },
    {
        id: 'arsitektur-algoritmik-mengenal-desain-parametrik-dan-masa-depannya',
        title: 'Arsitektur Algoritmik: Mengenal Desain Parametrik dan Masa Depannya',
        authorId: 'haris-zaka',
        date: '2024-05-10T16:00:00Z',
        category: 'Teknologi',
        mainImage: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Bentuk-bentuk organik dan kompleks yang sebelumnya mustahil kini menjadi nyata berkat desain parametrik. Pahami bagaimana arsitek menggunakan algoritma untuk menciptakan bangunan yang lebih efisien dan inovatif.',
        content: [
            { type: 'paragraph', text: 'Anda mungkin pernah melihat bangunan modern dengan fasad yang bergelombang atau struktur atap yang menyerupai jaring laba-laba organik. Bentuk-bentuk kompleks ini seringkali merupakan hasil dari desain parametrik, sebuah pendekatan desain yang menggunakan algoritma komputer untuk menghasilkan dan memanipulasi geometri.' },
            { type: 'heading', level: 2, text: 'Bagaimana Cara Kerjanya?' },
            { type: 'paragraph', text: 'Berbeda dengan pemodelan 3D tradisional di mana setiap garis digambar secara manual, desain parametrik bekerja dengan mendefinisikan aturan dan parameter. Arsitek menetapkan hubungan logis antar elemen (misalnya, "tinggi jendela adalah setengah dari tinggi dinding"). Dengan mengubah satu parameter, seperti tinggi dinding, seluruh model akan secara otomatis menyesuaikan diri sesuai aturan yang telah ditetapkan. Perangkat lunak seperti Grasshopper (plugin untuk Rhino 3D) adalah alat utama dalam proses ini.' },
            { type: 'image', src: 'https://i.imgur.com/L5E05V0.jpeg', caption: 'Fasad bangunan yang kompleks ini dihasilkan melalui proses desain parametrik, di mana setiap panel disesuaikan oleh algoritma untuk mengoptimalkan peneduhan.' },
            { type: 'heading', level: 2, text: 'Keunggulan Desain Parametrik' },
            { type: 'paragraph', text: 'Pendekatan ini membuka berbagai kemungkinan. Pertama, eksplorasi desain. Arsitek dapat dengan cepat menghasilkan ratusan variasi desain hanya dengan mengubah beberapa parameter. Kedua, optimisasi. Algoritma dapat digunakan untuk mengoptimalkan desain berdasarkan tujuan tertentu, seperti memaksimalkan paparan sinar matahari di musim dingin, meminimalkan keuntungan panas di musim panas, atau meningkatkan kekuatan struktural dengan material seminimal mungkin. Ketiga, fabrikasi digital. Desain parametrik sangat cocok dengan proses fabrikasi digital seperti pemotongan laser atau pencetakan 3D, memungkinkan pembuatan komponen bangunan yang sangat kompleks dan presisi.' },
            { type: 'paragraph', text: 'Meskipun sering dikaitkan dengan bentuk-bentuk yang spektakuler, kekuatan sejati desain parametrik terletak pada kemampuannya untuk menciptakan arsitektur yang lebih cerdas, lebih efisien, dan lebih responsif terhadap lingkungannya.' }
        ]
    },
    {
        id: 'membangun-di-iklim-tropis-memilih-material-yang-tepat-dan-tahan-lama',
        title: 'Membangun di Iklim Tropis: Memilih Material yang Tepat dan Tahan Lama',
        authorId: 'bima-sanjaya',
        date: '2024-04-30T10:00:00Z',
        category: 'Material',
        mainImage: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary: 'Iklim tropis yang panas dan lembab memberikan tantangan unik bagi material bangunan. Pelajari cara memilih material yang tahan terhadap cuaca, jamur, dan serangga untuk memastikan rumah Anda awet dan nyaman.',
        content: [
            { type: 'paragraph', text: 'Indonesia, dengan iklim tropisnya, memiliki tantangan spesifik dalam konstruksi: panas terik, kelembaban tinggi, curah hujan deras, dan paparan sinar UV yang intens. Memilih material yang salah dapat menyebabkan masalah seperti pelapukan cepat, pertumbuhan jamur, dan ruang yang tidak nyaman. Oleh karena itu, pemilihan material yang tepat adalah kunci untuk bangunan yang awet dan sehat.' },
            { type: 'heading', level: 2, text: 'Dinding yang "Bernapas" dan Sejuk' },
            { type: 'paragraph', text: 'Dinding harus mampu melepaskan kelembaban dan tidak menyimpan panas. Material seperti batu bata merah adalah pilihan tradisional yang sangat baik karena sifatnya yang berpori, memungkinkan dinding untuk "bernapas". Penggunaan roster atau blok ventilasi juga sangat dianjurkan untuk menciptakan aliran udara silang yang mendinginkan ruang secara alami. Untuk finishing, pilih cat eksterior berkualitas tinggi dengan properti reflektif panas untuk mengurangi penyerapan panas matahari.' },
            { type: 'image', src: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', caption: 'Penggunaan roster atau ventilasi blok tidak hanya estetis tetapi juga fungsional untuk menciptakan sirkulasi udara alami di iklim tropis.' },
            { type: 'heading', level: 2, text: 'Atap yang Melindungi dan Mendinginkan' },
            { type: 'paragraph', text: 'Atap adalah garis pertahanan pertama melawan hujan dan panas. Desain atap miring sangat penting untuk mengalirkan air hujan dengan cepat. Material seperti genteng keramik atau genteng beton lebih baik dalam meredam panas dibandingkan atap logam. Warna terang akan memantulkan lebih banyak sinar matahari. Yang tidak kalah penting adalah adanya ventilasi di bawah atap (misalnya, di bubungan) untuk melepaskan udara panas yang terperangkap, menjaga suhu di bawahnya tetap sejuk.' },
            { type: 'heading', level: 2, text: 'Kayu yang Tahan Cuaca dan Serangga' },
            { type: 'paragraph', text: 'Kayu memberikan kehangatan alami pada desain tropis, tetapi tidak semua kayu cocok. Pilih kayu keras yang padat dan memiliki minyak alami yang membuatnya tahan terhadap rayap dan pelapukan, seperti kayu jati, merbau, atau ulin. Pastikan kayu tersebut berasal dari sumber yang berkelanjutan dan diberikan finishing pelindung UV dan anti air secara berkala untuk menjaga keawetannya.' },
            { type: 'paragraph', text: 'Dengan memilih material yang tepat, kita tidak hanya membangun rumah yang tahan lama tetapi juga menciptakan hunian yang lebih nyaman dan hemat energi di tengah iklim tropis yang menantang.' }
        ]
    }
];