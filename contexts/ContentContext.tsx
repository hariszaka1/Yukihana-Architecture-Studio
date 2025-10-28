import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { SiteContent } from '../types';

// Moved from constants.tsx
const INITIAL_CONTENT: SiteContent = {
    home: {
      aboutPreview: {
        title: "Tentang Yukihana Studio",
        subtitle: "Siapa Kami",
        text: "Yukihana Architecture Studio adalah konsultan arsitektur dan interior yang berfokus pada desain fungsional dan estetis. Dengan pengalaman lebih dari 4 tahun, kami telah membantu puluhan klien membangun dan merenovasi ruang impian mereka.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      servicesPreview: {
        title: "Layanan Unggulan Kami",
        subtitle: "Apa yang kami tawarkan",
      },
      testimonials: {
        title: "Apa Kata Klien Kami",
        subtitle: "Testimoni",
        items: [
            {
              quote: 'Yukihana Architecture Studio berhasil mengubah rumah lama kami menjadi hunian modern tanpa kehilangan karakter aslinya. Profesional dan sangat direkomendasikan!',
              author: 'Andi & Keluarga',
              location: 'Surabaya',
            },
            {
              quote: 'Desain interiornya detail sekali, sesuai dengan kepribadian dan kebutuhan kami. Kafe kami jadi jauh lebih hidup dan nyaman untuk pelanggan.',
              author: 'Rina Wijayanti',
              location: 'Pemilik Kafe, Malang',
            },
            {
              quote: 'Tim yang sangat kooperatif dan penuh ide-ide segar. Proses renovasi kantor berjalan lancar dan hasilnya melebihi ekspektasi kami.',
              author: 'David Chen',
              location: 'CEO Startup, Jakarta',
            },
            {
              quote: 'Komunikasi selama proyek sangat lancar. Mereka benar-benar mendengarkan apa yang kami mau dan memberikan solusi desain yang cerdas. Hasilnya luar biasa!',
              author: 'Siti Aisyah',
              location: 'Pemilik Rumah, Blitar',
            },
            {
              quote: 'Saya kagum dengan visualisasi 3D yang mereka buat. Sangat realistis dan membantu saya membayangkan hasil akhir sebelum konstruksi dimulai. Sangat membantu!',
              author: 'Bambang Hartono',
              location: 'Pengembang Properti, Bali',
            },
            {
              quote: 'Pelayanan purna jualnya juga bagus. Setelah serah terima, mereka masih responsif saat kami butuh bantuan kecil. Pelayanan yang tulus.',
              author: 'Dewi Lestari',
              location: 'Klien Renovasi, Bandung',
            },
            {
              quote: 'Dari konsep hingga eksekusi, semuanya ditangani dengan sangat profesional. Yukihana Architecture Studio membuat proses membangun rumah jadi pengalaman yang menyenangkan.',
              author: 'Fajar Nugroho',
              location: 'Klien Arsitektur, Yogyakarta',
            },
            {
              quote: 'Mereka berhasil memaksimalkan lahan terbatas saya menjadi hunian yang fungsional dan terasa lapang. Pemanfaatan ruangnya sangat pintar.',
              author: 'Hendra Setiawan',
              location: 'Pemilik Apartemen, Jakarta',
            }
        ]
      },
      contactPreview: {
          title: "Mari Wujudkan Proyek Anda",
          subtitle: "Hubungi Kami"
      }
    },
    about: {
        bannerTitle: "Tentang Yukihana Architecture Studio",
        story: {
            title: "Kisah Kami",
            p1: "Didirikan pada tahun 2020, Yukihana Architecture Studio lahir dari hasrat untuk menciptakan ruang yang tidak hanya indah secara visual, tetapi juga bermakna dan fungsional. Kami percaya bahwa desain yang baik dapat meningkatkan kualitas hidup. Filosofi kami berpusat pada kolaborasi erat dengan klien, memahami kebutuhan unik mereka, dan menerjemahkannya ke dalam desain yang personal dan abadi.",
            p2: "Dari proyek skala kecil hingga besar, pendekatan kami selalu sama: detail, inovatif, dan berpusat pada manusia.",
            image: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        vision: {
            title: "Visi Kami",
            text: "\"Menjadi konsultan arsitektur terdepan di Indonesia yang dikenal karena inovasi, integritas, dan desain yang ramah lingkungan.\""
        },
        mission: {
            title: "Misi Kami",
            text: "\"Menghadirkan solusi desain yang inovatif, personal, dan berkelanjutan yang melebihi ekspektasi klien kami.\""
        },
        team: {
            title: "Tim Profesional Kami",
            subtitle: "Kenali Ahlinya",
            members: [
                { name: 'Haris Zaka Abdillah', role: 'Founder & Principal Architect', image: 'https://i.pravatar.cc/150?u=haris' },
                { name: 'Aulia Putri', role: 'Lead Interior Designer', image: 'https://i.pravatar.cc/150?u=aulia' },
                { name: 'Bima Sanjaya', role: 'Project Manager', image: 'https://i.pravatar.cc/150?u=bima' },
                { name: 'Sari Lestari', role: 'Junior Architect', image: 'https://i.pravatar.cc/150?u=sari' },
            ]
        },
        awards: {
            title: "Penghargaan & Sertifikasi",
            items: [
                { name: "IAR Award", logo: "https://i.imgur.com/u7YJk3j.png" },
                { name: "Green Build Certified", logo: "https://i.imgur.com/n6iV2m4.png" },
                { name: "Design Weekly Top Firm", logo: "https://i.imgur.com/QiwC21T.png" },
                { name: "ArchDaily Feature", logo: "https://i.imgur.com/JvA4t8w.png" },
            ]
        }
    },
    services: {
        bannerTitle: "Layanan Kami",
        intro: {
            title: "Solusi Desain Komprehensif",
            subtitle: "Mewujudkan Visi Anda, Satu Ruang pada Satu Waktu"
        },
        items: [
            {
              iconName: 'ConsultationIcon',
              title: 'Konsultasi & Studi Kelayakan',
              description: 'Fondasi kuat untuk setiap proyek, dari ide hingga analisis kelayakan.',
              details: 'Langkah pertama dan terpenting. Kami membantu Anda memvalidasi ide, menganalisis potensi & risiko, serta menyusun kerangka kerja yang solid. Ini termasuk studi kelayakan teknis dan finansial, serta bantuan dalam proses perizinan awal.',
              includes: [
                  'Brainstorming Konsep & Ide',
                  'Analisis Kelayakan Proyek',
                  'Bantuan Pengurusan Perizinan',
                  'Estimasi Awal Anggaran & Waktu'
              ]
            },
            {
              iconName: 'ArchitectureIcon',
              title: 'Desain Arsitektur',
              description: 'Konsep & perencanaan bangunan yang efisien dan estetis.',
              details: 'Layanan desain arsitektur kami mencakup perencanaan tata ruang yang komprehensif, desain fasad yang ikonik, pemilihan material yang tepat guna, serta integrasi prinsip efisiensi energi untuk menciptakan bangunan yang berkelanjutan dan bernilai tinggi.',
              includes: [
                  'Gambar Denah, Tampak, Potongan',
                  'Gambar Kerja Detail (DED)',
                  'Visualisasi 3D Eksterior',
                  'Perhitungan Rencana Anggaran Biaya (RAB)'
              ]
            },
            {
              iconName: 'InteriorIcon',
              title: 'Desain Interior',
              description: 'Menghidupkan ruang dalam yang nyaman dan memikat.',
              details: 'Kami ahli dalam menata ruang interior yang fungsional dan personal. Mulai dari pemilihan furnitur kustom, skema warna, desain pencahayaan yang dramatis, hingga pemilihan dekorasi yang merefleksikan karakter Anda.',
              includes: [
                  'Konsep Tata Ruang & Layout Furnitur',
                  'Desain Furnitur Kustom',
                  'Visualisasi 3D Interior Fotorealistis',
                  'Pemilihan Material & Skema Warna'
              ]
            },
            {
              iconName: 'DesignConceptIcon',
              title: 'Desain Lansekap',
              description: 'Merancang ruang luar yang harmonis dengan arsitektur.',
              details: 'Lebih dari sekadar bangunan, kami merancang lingkungan sekitarnya. Layanan ini mencakup desain lansekap, perencanaan tata hijau, hingga pembuatan masterplan untuk menciptakan kesinambungan antara arsitektur dan alam.',
              includes: [
                  'Desain Taman & Ruang Terbuka',
                  'Perencanaan Masterplan',
                  'Analisis Sirkulasi & Zonasi',
                  'Pemilihan Vegetasi & Material Keras'
              ]
            },
            {
              iconName: 'RenovationIcon',
              title: 'Renovasi',
              description: 'Mengubah dan memperbarui bangunan sesuai kebutuhan terbaru.',
              details: 'Kami menyediakan layanan renovasi untuk perbaikan struktural, pembaruan fasad, hingga perombakan interior total. Kami memastikan transformasi ruang Anda berjalan efisien dan sesuai dengan visi yang diinginkan.',
              includes: [
                  'Evaluasi Kondisi Eksisting',
                  'Perancangan Ulang Fasad & Interior',
                  'Penambahan & Perubahan Ruang',
                  'Adaptasi Fungsi Bangunan'
              ]
            },
            {
              iconName: 'ExecutionIcon',
              title: 'Manajemen Proyek & Pengawasan',
              description: 'Memastikan proyek berjalan sesuai rencana, waktu, dan anggaran.',
              details: 'Kami menawarkan layanan manajemen proyek penuh untuk mengawasi setiap tahap konstruksi. Dari pemilihan kontraktor hingga pengawasan harian di lapangan, kami memastikan kualitas, kepatuhan terhadap desain, dan penyelesaian proyek yang efisien.',
              includes: [
                  'Manajemen Jadwal & Anggaran',
                  'Seleksi & Koordinasi Kontraktor',
                  'Pengawasan Kualitas Konstruksi',
                  'Pelaporan Progres Berkala'
              ]
            },
        ],
        workflow: {
            title: "Proses Kerja Kami",
            subtitle: "Bagaimana Kami Bekerja",
            steps: [
                {
                  iconName: 'ConsultationIcon',
                  title: 'Konsultasi & Pengarahan',
                  description: 'Kami memulai dengan mendengarkan visi, kebutuhan, dan anggaran Anda untuk memahami tujuan proyek secara mendalam.'
                },
                {
                  iconName: 'DesignConceptIcon',
                  title: 'Pengembangan Konsep',
                  description: 'Tim kami mengembangkan konsep desain awal, termasuk denah tata ruang dan mood board untuk visualisasi.'
                },
                {
                  iconName: 'RevisionIcon',
                  title: 'Revisi & Finalisasi',
                  description: 'Berdasarkan masukan Anda, kami menyempurnakan desain hingga semua detail sesuai dengan ekspektasi Anda.'
                },
                {
                  iconName: 'ExecutionIcon',
                  title: 'Gambar Kerja & Eksekusi',
                  description: 'Kami menyiapkan gambar kerja teknis yang detail dan dapat mengawasi proses konstruksi untuk memastikan kualitas.'
                },
                {
                  iconName: 'HandoverIcon',
                  title: 'Serah Terima Proyek',
                  description: 'Proyek selesai dan kami menyerahkan hasilnya kepada Anda, siap untuk dinikmati dan dihuni.'
                }
            ]
        },
        cta: {
            title: "Siap Membangun Impian Anda?",
            text: "Masih bingung menentukan layanan atau punya kebutuhan khusus? Hubungi kami untuk konsultasi gratis tanpa komitmen. Tim kami siap membantu Anda."
        }
    },
    pricing: {
        bannerTitle: "Biaya Layanan",
        packages: {
            title: "Pilihan Paket Fleksibel",
            subtitle: "Temukan paket yang paling sesuai dengan skala dan kompleksitas proyek Anda.",
            items: [
              {
                name: 'Paket Basic',
                price: 'Mulai dari Rp 20000/m²',
                features: [
                  'Gambar kerja arsitektur dasar (denah, tampak, potongan)',
                  'Visualisasi fasad sederhana',
                  'Ideal untuk perizinan awal (IMB/PBG)',
                  '2x Revisi',
                ],
                buttonText: 'Pilih Paket',
                popular: false,
              },
              {
                name: 'Paket Standard',
                price: 'Mulai dari Rp 45000/m²',
                features: [
                  'Semua di Paket Basic',
                  'Gambar kerja detail (arsitektur, struktur, MEP)',
                  'Rencana Anggaran Biaya (RAB)',
                  'Desain 3D eksterior',
                  '3x Revisi',
                ],
                buttonText: 'Pilih Paket',
                popular: true,
              },
              {
                name: 'Paket Premium',
                price: 'Mulai dari Rp 90000/m²',
                features: [
                  'Semua di Paket Standard',
                  'Desain 3D interior',
                  'Animasi walkthrough video',
                  'Revisi tanpa batas (selama fase desain)',
                ],
                buttonText: 'Pilih Paket',
                popular: false,
              },
            ]
        },
        calculator: {
            title: "Kalkulator Estimasi Biaya",
            subtitle: "Dapatkan perkiraan biaya proyek Anda secara instan"
        },
        faq: {
            title: "Pertanyaan Umum (FAQ)",
            subtitle: "Jawaban untuk pertanyaan yang sering diajukan",
            items: [
                {
                  question: 'Apakah harga sudah termasuk PPN?',
                  answer: 'Ya, semua harga yang tertera sudah termasuk PPN 11%. Kami menjunjung tinggi transparansi dalam setiap transaksi.',
                },
                {
                  question: 'Apakah revisi desain dikenakan biaya tambahan?',
                  answer: 'Paket Standard mencakup dua kali revisi minor. Paket Premium menawarkan revisi tanpa batas selama fase desain. Revisi besar atau perubahan konsep di luar cakupan awal akan didiskusikan lebih lanjut untuk penyesuaian biaya.',
                },
                {
                  question: 'Bagaimana sistem pembayarannya?',
                  answer: 'Sistem pembayaran kami fleksibel, biasanya dibagi menjadi beberapa termin sesuai progres proyek: Uang Muka (DP) 30%, Progres Desain 40%, dan Finalisasi Desain 30%.',
                },
                {
                  question: 'Berapa lama proses desainnya?',
                  answer: 'Lama proses desain bervariasi tergantung kompleksitas dan skala proyek, mulai dari 2-4 minggu untuk paket basic hingga beberapa bulan untuk paket premium yang lebih detail dan komprehensif.',
                }
            ]
        },
        cta: {
            title: "Siap Membangun Impian Anda?",
            text: "Masih bingung menentukan paket atau punya kebutuhan khusus? Hubungi kami untuk konsultasi gratis tanpa komitmen."
        }
    },
    contact: {
        bannerTitle: "Hubungi Kami",
        intro: {
            title: "Mari Berdiskusi",
            subtitle: "Tetap Terhubung"
        },
        info: {
            address: "Jl. Cimandiri GG V No. 6, Kota Blitar, Jawa Timur, Indonesia",
            email: "kontak@yukihanastudio.com",
            phone: "+62 812-3456-7890",
            hours: "Senin–Jumat, 09.00–17.00 WIB",
            socials: {
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
                linkedin: "https://linkedin.com"
            }
        }
    },
    footer: {
        tagline: "Menciptakan ruang yang menginspirasi."
    }
};


interface ContentContextType {
    content: SiteContent;
    setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<SiteContent>(() => {
        try {
            const localData = localStorage.getItem('siteContent');
            return localData ? JSON.parse(localData) : INITIAL_CONTENT;
        } catch (error) {
            console.error("Could not parse site content from localStorage", error);
            return INITIAL_CONTENT;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('siteContent', JSON.stringify(content));
        } catch (error) {
            console.error("Could not save site content to localStorage", error);
        }
    }, [content]);

    return (
        <ContentContext.Provider value={{ content, setContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};