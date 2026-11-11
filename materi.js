// ======================================================
// FILE: materi.js
// BANK MATERI LITERASI DIGITAL
// Tema:
// 1. Teknik Pencarian Informasi
// 2. Mengenali Sumber Informasi
// 3. Membandingkan Informasi
// 4. Mengenali Hoaks dan Disinformasi
// 5. Keamanan Digital
// 6. Etika Bermedia Sosial
// 7. Kuis Literasi Digital dan Evaluasi
//
// FORMAT SERAGAM:
// - Soal pilihan ganda memakai: pilihan: { A: "...", B: "...", C: "..." }
// - jawabanBenar berisi huruf kunci ("A", "B", atau "C")
// - Setiap soal punya pesanBenar dan pesanSalah
// ======================================================


// ======================================================
// 1. BANK DATA: CARA MENCARI INFORMASI
// Fokus: Menentukan kata kunci pencarian yang efektif
// (2 pilihan: A dan B)
// ======================================================

const bankMencari = [

    {
        kasus: "Kamu mendapat tugas PKN untuk menganalisis kebijakan pendidikan terbaru dari pemerintah. Kata kunci apa yang paling tepat digunakan?",
        pilihan: {
            A: "Kebijakan pemerintah",
            B: "Peraturan pemerintah tentang kebijakan pendidikan terbaru"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Kata kunci yang spesifik membantu menemukan informasi sesuai topik, terutama jika menyebutkan jenis kebijakan dan bidang yang dibahas.",
        pesanSalah: "Kata kunci terlalu umum. Tambahkan bidang, jenis kebijakan, dan periode agar hasil pencarian lebih relevan."
    },

    {
        kasus: "Kamu ingin mencari informasi dampak kabut asap akibat kebakaran hutan di Kutai Barat terhadap kesehatan masyarakat.",
        pilihan: {
            A: "Dampak ISPA akibat kabut asap kebakaran hutan di Kutai Barat",
            B: "Kebakaran hutan"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Penggunaan nama daerah dan topik kesehatan membuat pencarian lebih terarah.",
        pesanSalah: "Kata kunci terlalu luas. Tambahkan lokasi dan aspek yang ingin diteliti."
    },

    {
        kasus: "Kamu membutuhkan data pengangguran usia muda di Indonesia untuk bahan presentasi ekonomi.",
        pilihan: {
            A: "Statistik pengangguran usia muda Indonesia BPS",
            B: "Anak muda sulit mendapatkan pekerjaan"
        },
        jawabanBenar: "A",
        pesanBenar: "Bagus! Menyebutkan BPS membantu mengarahkan pencarian ke sumber statistik resmi.",
        pesanSalah: "Pencarian tersebut belum mengarah pada data statistik. Gunakan kata kunci yang menyebutkan indikator dan sumber data."
    },

    {
        kasus: "Kamu melihat informasi viral tentang aturan penggunaan kendaraan bermotor oleh pelajar. Bagaimana mencari aturan sebenarnya?",
        pilihan: {
            A: "Berita anak sekolah dilarang naik motor",
            B: "Persyaratan penerbitan SIM C Korlantas Polri"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Mencari berdasarkan lembaga dan peraturan terkait lebih baik daripada hanya menggunakan judul viral.",
        pesanSalah: "Jangan hanya mengandalkan judul viral. Cari aturan dari lembaga yang berwenang."
    },

    {
        kasus: "Kamu sedang membuat makalah tentang perkembangan ekonomi digital Indonesia.",
        pilihan: {
            A: "Ekonomi digital keren",
            B: "Perkembangan ekonomi digital Indonesia laporan resmi"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Kata kunci tersebut lebih akademis dan mengarahkan pencarian ke laporan yang dapat dijadikan referensi.",
        pesanSalah: "Kata kunci kurang jelas dan tidak mengarah pada sumber yang dapat dipertanggungjawabkan."
    },

    {
        kasus: "Kamu ingin mengetahui jumlah penduduk Kabupaten Kutai Barat berdasarkan data terbaru yang tersedia.",
        pilihan: {
            A: "Data jumlah penduduk Kabupaten Kutai Barat BPS tahun terbaru",
            B: "Orang yang tinggal di Kutai Barat"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Menyertakan wilayah, indikator, dan BPS membantu menemukan data kependudukan yang lebih akurat.",
        pesanSalah: "Gunakan nama wilayah secara lengkap dan arahkan pencarian ke lembaga statistik resmi."
    },

    {
        kasus: "Kamu ingin mencari jurnal ilmiah tentang pengaruh media sosial terhadap prestasi belajar mahasiswa.",
        pilihan: {
            A: "Jurnal pengaruh penggunaan media sosial terhadap prestasi akademik mahasiswa",
            B: "Mahasiswa bermain media sosial"
        },
        jawabanBenar: "A",
        pesanBenar: "Bagus! Kata kunci akademis membantu menemukan penelitian yang relevan.",
        pesanSalah: "Pencarian belum menunjukkan bahwa kamu membutuhkan penelitian ilmiah."
    },

    {
        kasus: "Kamu ingin memeriksa apakah sebuah foto kebakaran hutan merupakan foto lama atau kejadian terbaru.",
        pilihan: {
            A: "Foto kebakaran hutan viral",
            B: "Penelusuran gambar terbalik foto kebakaran hutan"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Pencarian gambar terbalik (reverse image search) dapat membantu menemukan penggunaan gambar yang sama di halaman lain.",
        pesanSalah: "Pencarian biasa belum cukup. Cobalah menggunakan pencarian gambar terbalik."
    },

    {
        kasus: "Kamu ingin mengetahui perkembangan penggunaan kecerdasan buatan atau AI di dunia pendidikan.",
        pilihan: {
            A: "Penelitian pemanfaatan kecerdasan buatan dalam pembelajaran di Indonesia",
            B: "AI dan pendidikan"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Kata kunci yang lebih terperinci dapat mempersempit hasil pencarian ke penelitian yang relevan.",
        pesanSalah: "Kata kunci masih terlalu luas. Tambahkan konteks penelitian yang ingin dicari."
    },

    {
        kasus: "Kamu ingin mengetahui anggaran pembangunan infrastruktur suatu daerah.",
        pilihan: {
            A: "Pembangunan daerah mahal",
            B: "Dokumen APBD dan realisasi anggaran pembangunan pemerintah daerah"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Istilah APBD dan realisasi anggaran mengarahkan pencarian pada dokumen yang lebih relevan.",
        pesanSalah: "Gunakan istilah resmi yang berkaitan dengan dokumen anggaran pemerintah."
    },

    {
        kasus: "Kamu ingin mencari informasi penyebab banjir di suatu wilayah.",
        pilihan: {
            A: "Banjir mengerikan",
            B: "Penyebab banjir dan faktor perubahan tata guna lahan di wilayah tersebut"
        },
        jawabanBenar: "B",
        pesanBenar: "Bagus! Kata kunci yang memuat faktor penyebab membantu menemukan penjelasan lebih mendalam.",
        pesanSalah: "Kata kunci hanya menggambarkan kejadian, bukan informasi yang ingin kamu teliti."
    },

    {
        kasus: "Kamu membutuhkan informasi resmi mengenai program beasiswa perguruan tinggi.",
        pilihan: {
            A: "Informasi pendaftaran beasiswa melalui situs resmi kementerian atau universitas",
            B: "Beasiswa kuliah gratis"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Sumber resmi membantu memastikan persyaratan, jadwal, dan prosedur pendaftaran.",
        pesanSalah: "Informasi beasiswa harus diperiksa melalui penyelenggara resmi, bukan hanya unggahan media sosial."
    }
];


// ======================================================
// 2. BANK DATA: MEMILIH SUMBER INFORMASI
// Fokus: Menentukan sumber yang paling dapat dipercaya
// (3 pilihan: A, B, dan C untuk setiap kasus)
// ======================================================

const bankSumber = [

    {
        kasus: "Beredar potongan video di media sosial yang memperlihatkan seorang pejabat sedang berbicara. Kamu ingin memastikan apakah video tersebut asli atau hasil manipulasi AI.",
        pilihan: {
            A: "Membagikan video ke grup agar banyak yang ikut menilai",
            B: "Melihat jumlah suka dan komentar pada video tersebut",
            C: "Mencari rekaman asli di kanal resmi pejabat atau instansi dan memeriksa situs pemeriksa fakta"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Rekaman asli dari kanal resmi dan hasil pemeriksa fakta adalah pembanding yang paling kuat untuk mendeteksi manipulasi.",
        pesanSalah: "Jumlah suka dan banyaknya orang yang membagikan tidak membuktikan keaslian video. Bandingkan dengan rekaman dari kanal resmi."
    },

    {
        kasus: "Grup WhatsApp keluarga menerima pesan berantai yang mengklaim pemerintah membagikan bantuan sosial melalui sebuah tautan pendaftaran.",
        pilihan: {
            A: "Memeriksa pengumuman di situs atau akun resmi instansi pemerintah terkait",
            B: "Mengisi data lewat tautan karena banyak anggota grup yang sudah mengisi",
            C: "Menanyakan di grup apakah ada yang sudah menerima bantuan"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Program bantuan pemerintah harus dipastikan melalui kanal resmi penyelenggaranya.",
        pesanSalah: "Banyaknya orang yang mengisi tidak menjamin tautan itu asli. Tautan tidak resmi dapat dipakai untuk mencuri data pribadi."
    },

    {
        kasus: "Kamu sedang menyusun karya tulis ilmiah tentang faktor penyebab kebakaran hutan di Kalimantan.",
        pilihan: {
            A: "Potongan video viral yang menampilkan kebakaran hutan",
            B: "Opini di blog pribadi seorang pengguna media sosial",
            C: "Jurnal ilmiah dan laporan resmi dari lembaga pemerintah atau lembaga penelitian"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Karya tulis ilmiah memerlukan referensi yang dapat ditelusuri dan dipertanggungjawabkan, seperti jurnal dan laporan resmi.",
        pesanSalah: "Video viral dan opini pribadi tidak cukup kuat sebagai rujukan ilmiah karena metode dan sumber datanya belum tentu jelas."
    },

    {
        kasus: "Ada tren viral di Instagram tentang obat herbal yang diklaim dapat menyembuhkan berbagai penyakit dalam waktu singkat.",
        pilihan: {
            A: "Video testimoni dan komentar para pengguna",
            B: "Informasi dari lembaga kesehatan resmi, tenaga kesehatan, atau jurnal kesehatan",
            C: "Pesan berantai dari kerabat yang sudah mencobanya"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Klaim kesehatan perlu diperiksa melalui lembaga kesehatan dan bukti ilmiah.",
        pesanSalah: "Testimoni pribadi bukan bukti ilmiah. Klaim kesembuhan instan perlu diperiksa oleh sumber yang kompeten di bidang kesehatan."
    },

    {
        kasus: "Terjadi pergantian pejabat kabinet. Kamu membutuhkan daftar nama pejabat terbaru untuk presentasi PKN.",
        pilihan: {
            A: "Unggahan akun anonim yang menyebut dirinya pengamat politik",
            B: "Situs resmi pemerintah atau media berita nasional kredibel yang mencantumkan tanggal terbaru",
            C: "Daftar nama dari ingatan temanmu"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Informasi jabatan harus diambil dari sumber resmi atau media kredibel yang memuat tanggal pembaruan.",
        pesanSalah: "Akun anonim dan ingatan seseorang tidak dapat diverifikasi. Gunakan sumber resmi yang memiliki tanggal pembaruan."
    },

    {
        kasus: "Kamu menerima informasi tentang gempa bumi di Kalimantan melalui grup percakapan dan ingin memastikan lokasi serta kekuatan gempanya.",
        pilihan: {
            A: "Pesan yang paling banyak diteruskan di grup",
            B: "Perkiraan berdasarkan getaran yang dirasakan teman",
            C: "Kanal resmi BMKG"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! BMKG adalah lembaga resmi yang menyampaikan data lokasi dan kekuatan gempa.",
        pesanSalah: "Pesan berantai dan perkiraan pribadi tidak dapat dijadikan dasar. Data kegempaan sebaiknya diperiksa langsung ke BMKG."
    },

    {
        kasus: "Sebuah akun media sosial mengunggah informasi bahwa seluruh mahasiswa akan mendapatkan bantuan pendidikan tanpa persyaratan.",
        pilihan: {
            A: "Pengumuman dari situs resmi kementerian atau penyelenggara bantuan",
            B: "Komentar pengguna lain di unggahan tersebut",
            C: "Unggahan ulang dari akun lain yang juga banyak pengikutnya"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Bantuan pendidikan memiliki syarat dan mekanisme resmi yang diumumkan penyelenggaranya.",
        pesanSalah: "Banyaknya pengikut atau komentar tidak membuktikan kebenaran. Program bantuan hanya dapat dipastikan lewat penyelenggara resmi."
    },

    {
        kasus: "Kamu sedang mencari data jumlah penduduk dan tingkat kemiskinan di Kabupaten Kutai Barat.",
        pilihan: {
            A: "Perkiraan dari artikel opini tanpa mencantumkan data",
            B: "Cerita warga yang diunggah di media sosial",
            C: "Publikasi statistik resmi dari BPS"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! BPS adalah lembaga resmi yang menyediakan data kependudukan dan kemiskinan beserta periodenya.",
        pesanSalah: "Opini dan cerita pribadi belum dapat dijadikan data. Gunakan statistik resmi yang menyebutkan periode dan metodenya."
    },

    {
        kasus: "Kamu menemukan berita tentang perubahan aturan perpajakan dan ingin memahami ketentuan yang berlaku.",
        pilihan: {
            A: "Situs resmi otoritas perpajakan dan dokumen peraturannya",
            B: "Video penjelasan singkat dari akun yang mengaku ahli keuangan",
            C: "Ringkasan yang dibagikan di grup obrolan"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Ketentuan pajak sebaiknya dibaca langsung dari peraturan dan situs otoritas resmi.",
        pesanSalah: "Ringkasan pihak lain bisa keliru atau sudah kedaluwarsa. Periksa dokumen peraturan dan situs resmi."
    },

    {
        kasus: "Sebuah video memperlihatkan kerusakan lingkungan yang diklaim terjadi akibat aktivitas pertambangan di Kalimantan Timur.",
        pilihan: {
            A: "Memeriksa lokasi dan tanggal video, lalu membandingkannya dengan laporan instansi dan media kredibel",
            B: "Langsung menyimpulkan bahwa klaim tersebut benar karena videonya jelas",
            C: "Langsung menyimpulkan bahwa video itu bohong karena tidak ada keterangan"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Verifikasi lokasi, waktu, dan laporan pembanding membantu menilai klaim tanpa langsung percaya atau menolak.",
        pesanSalah: "Video yang jelas belum tentu benar konteksnya, dan video tanpa keterangan belum tentu bohong. Periksa dulu lokasi, tanggal, dan laporan pembanding."
    },

    {
        kasus: "Kamu ingin mengetahui informasi resmi mengenai jadwal penerimaan mahasiswa baru suatu universitas.",
        pilihan: {
            A: "Poster di akun media sosial yang tidak terverifikasi",
            B: "Kabar dari teman yang mendengarnya dari temannya",
            C: "Situs resmi universitas (biasanya berakhiran .ac.id)"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Jadwal penerimaan mahasiswa baru diumumkan oleh kampus melalui situs dan kanal resminya.",
        pesanSalah: "Kabar dari mulut ke mulut dan poster tidak resmi dapat keliru atau tidak diperbarui. Periksa situs resmi universitas."
    },

    {
        kasus: "Kamu menemukan unggahan yang menyatakan bahwa suatu perusahaan besar mengalami kebangkrutan, tetapi tidak mencantumkan sumber berita.",
        pilihan: {
            A: "Menyebarkannya agar orang lain berhati-hati",
            B: "Memeriksa pengumuman resmi perusahaan atau pemberitaan media ekonomi yang kredibel",
            C: "Mempercayainya karena banyak yang menyukai unggahan itu"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Kabar kebangkrutan harus dikonfirmasi lewat pernyataan resmi perusahaan atau media ekonomi kredibel.",
        pesanSalah: "Unggahan tanpa sumber tidak boleh disebarkan. Banyaknya suka tidak membuktikan kebenaran."
    },

    {
        kasus: "Kamu membutuhkan informasi perkembangan harga pangan untuk tugas ekonomi.",
        pilihan: {
            A: "Data resmi dari BPS atau Badan Pangan Nasional",
            B: "Keluhan pembeli yang diunggah di kolom komentar",
            C: "Tebakan harga berdasarkan belanja bulan lalu"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Data harga pangan dari lembaga resmi memiliki periode dan cakupan wilayah yang jelas.",
        pesanSalah: "Keluhan pribadi dan tebakan tidak dapat dijadikan data untuk tugas ekonomi. Gunakan data resmi."
    },

    {
        kasus: "Sebuah akun anonim mengunggah tangkapan layar percakapan yang diklaim berasal dari seorang pejabat.",
        pilihan: {
            A: "Mempercayainya karena tampilan tangkapan layarnya meyakinkan",
            B: "Menunggu konfirmasi dari pejabat atau instansi bersangkutan dan pemberitaan media kredibel",
            C: "Membagikannya sambil menambahkan komentar pribadi"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Tangkapan layar mudah dipalsukan, sehingga perlu konfirmasi dari pihak terkait dan sumber yang kredibel.",
        pesanSalah: "Tampilan yang meyakinkan bukan bukti keaslian. Tangkapan layar dari akun anonim mudah diubah atau dibuat-buat."
    },

    {
        kasus: "Kamu ingin mengetahui perkembangan kualitas udara saat terjadi kebakaran hutan di Kalimantan.",
        pilihan: {
            A: "Foto langit berkabut yang diunggah warganet",
            B: "Data pemantauan kualitas udara dari BMKG atau instansi lingkungan hidup pemerintah",
            C: "Pendapat orang di kolom komentar berita"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Data pemantauan resmi memuat waktu, lokasi, dan metode pengukuran yang dapat dipertanggungjawabkan.",
        pesanSalah: "Foto dan komentar hanya gambaran sesaat dan tidak menunjukkan angka kualitas udara. Gunakan data pemantauan resmi."
    }
];


// ======================================================
// 3. BANK DATA: MEMBANDINGKAN INFORMASI
// Fokus: Mengevaluasi kualitas dan kredibilitas sumber
// (2 pilihan: Sumber A dan Sumber B)
// ======================================================

const bankBandingkan = [

    {
        konteks: "Mencari referensi untuk makalah PKN tentang Pemilu dan Demokrasi.",
        sumberA: [
            "Penulis dan identitas lembaga jelas",
            "Tanggal publikasi tercantum",
            "Mengutip data KPU dan Bawaslu"
        ],
        sumberB: [
            "Penulis menggunakan akun anonim",
            "Tanggal publikasi tidak diketahui",
            "Berisi tuduhan tanpa bukti"
        ],
        jawabanBenar: "A",
        pesanBenar: "Benar! Sumber A memiliki identitas dan referensi yang dapat ditelusuri.",
        pesanSalah: "Sumber anonim tanpa bukti tidak layak dijadikan referensi utama untuk makalah akademik."
    },

    {
        konteks: "Mencari data kualitas udara di Kalimantan Timur saat terjadi kebakaran hutan.",
        sumberA: [
            "Berasal dari blog pribadi",
            "Judul menggunakan kalimat provokatif",
            "Tidak menjelaskan asal data"
        ],
        sumberB: [
            "Berasal dari portal BMKG atau instansi lingkungan hidup pemerintah",
            "Memiliki informasi waktu dan lokasi pengukuran",
            "Metode pengukuran dijelaskan"
        ],
        jawabanBenar: "B",
        pesanBenar: "Tepat! Data dari lembaga terkait dengan metode pengukuran yang jelas lebih dapat dipertanggungjawabkan.",
        pesanSalah: "Jangan langsung mempercayai data tanpa mengetahui asal, waktu, dan metode pengukurannya."
    },

    {
        konteks: "Mengecek informasi mengenai pengunduran diri seorang pejabat negara.",
        sumberA: [
            "Ada pernyataan resmi dari lembaga terkait",
            "Informasi memiliki tanggal publikasi",
            "Dikonfirmasi beberapa media kredibel"
        ],
        sumberB: [
            "Video dengan suara hasil manipulasi",
            "Tidak memiliki sumber asli",
            "Judul menggunakan kata-kata sensasional"
        ],
        jawabanBenar: "A",
        pesanBenar: "Benar! Pernyataan resmi dan konfirmasi silang menjadi dasar yang lebih kuat.",
        pesanSalah: "Video viral belum tentu asli. Cari sumber asli dan konfirmasi dari pihak terkait."
    },

    {
        konteks: "Mencari informasi mengenai kesehatan masyarakat.",
        sumberA: [
            "Testimoni pengguna anonim",
            "Mengklaim hasil instan",
            "Tidak mencantumkan penelitian"
        ],
        sumberB: [
            "Artikel dari lembaga kesehatan resmi",
            "Mencantumkan referensi penelitian",
            "Ditulis berdasarkan bukti ilmiah"
        ],
        jawabanBenar: "B",
        pesanBenar: "Tepat! Informasi kesehatan sebaiknya menggunakan sumber ilmiah dan lembaga kesehatan yang kompeten.",
        pesanSalah: "Testimoni pribadi bukan bukti ilmiah bahwa suatu klaim kesehatan benar."
    },

    {
        konteks: "Mencari informasi lowongan kerja atau magang.",
        sumberA: [
            "Tautan berasal dari situs resmi perusahaan",
            "Persyaratan dan kontak perusahaan jelas",
            "Tidak meminta biaya pendaftaran"
        ],
        sumberB: [
            "Tautan berasal dari akun tidak dikenal",
            "Meminta transfer biaya administrasi",
            "Tidak memiliki identitas perekrut"
        ],
        jawabanBenar: "A",
        pesanBenar: "Benar! Pastikan lowongan berasal dari kanal resmi dan jangan mudah memberikan uang atau data pribadi.",
        pesanSalah: "Waspadai lowongan palsu, terutama yang meminta pembayaran atau data sensitif tanpa kejelasan."
    },

    {
        konteks: "Mencari data tingkat kemiskinan suatu daerah.",
        sumberA: [
            "Menggunakan perkiraan penulis",
            "Tidak menyebutkan tahun",
            "Tidak memiliki referensi"
        ],
        sumberB: [
            "Menggunakan data BPS",
            "Menyertakan periode pengumpulan data",
            "Memiliki tabel statistik"
        ],
        jawabanBenar: "B",
        pesanBenar: "Bagus! Data statistik resmi dengan periode yang jelas lebih tepat digunakan untuk analisis.",
        pesanSalah: "Angka tanpa metode dan sumber yang jelas tidak dapat dianggap sebagai statistik resmi."
    },

    {
        konteks: "Mengecek informasi tentang perubahan kebijakan pendidikan.",
        sumberA: [
            "Dokumen peraturan dari lembaga pemerintah",
            "Memiliki nomor dan tanggal peraturan",
            "Memuat isi ketentuan"
        ],
        sumberB: [
            "Komentar pengguna media sosial",
            "Tidak menyertakan dokumen",
            "Menggunakan informasi dari tahun lama"
        ],
        jawabanBenar: "A",
        pesanBenar: "Tepat! Dokumen peraturan resmi merupakan sumber utama untuk memeriksa isi kebijakan.",
        pesanSalah: "Komentar media sosial tidak dapat menggantikan dokumen peraturan yang sebenarnya."
    },

    {
        konteks: "Mengecek foto banjir yang sedang viral.",
        sumberA: [
            "Foto hanya berasal dari satu unggahan",
            "Tidak diketahui waktu pengambilan",
            "Tidak ada informasi lokasi"
        ],
        sumberB: [
            "Asal foto dapat ditelusuri dan waktu pengambilannya jelas",
            "Lokasi kejadian dapat diverifikasi",
            "Ada laporan kejadian dari sumber lain yang kredibel"
        ],
        jawabanBenar: "B",
        pesanBenar: "Benar! Pemeriksaan asal gambar, waktu, dan lokasi membantu mengetahui konteks sebenarnya.",
        pesanSalah: "Foto tanpa konteks dapat digunakan kembali untuk menggambarkan kejadian yang berbeda."
    },

    {
        konteks: "Mencari informasi kondisi keuangan suatu perusahaan.",
        sumberA: [
            "Menggunakan laporan tahunan perusahaan",
            "Mencantumkan periode laporan",
            "Memuat laporan keuangan"
        ],
        sumberB: [
            "Menggunakan komentar anonim",
            "Tidak ada bukti dokumen",
            "Hanya berisi rumor"
        ],
        jawabanBenar: "A",
        pesanBenar: "Bagus! Laporan tahunan merupakan salah satu sumber yang dapat digunakan untuk menilai kondisi perusahaan.",
        pesanSalah: "Rumor bukan dasar yang kuat untuk menilai kondisi keuangan perusahaan."
    },

    {
        konteks: "Membandingkan dua berita tentang peristiwa politik.",
        sumberA: [
            "Menggunakan judul provokatif",
            "Hanya menampilkan satu sudut pandang",
            "Tidak memberikan bukti"
        ],
        sumberB: [
            "Menyampaikan fakta dan konteks",
            "Membedakan fakta dengan opini",
            "Mencantumkan sumber informasi"
        ],
        jawabanBenar: "B",
        pesanBenar: "Tepat! Berita yang baik memberikan konteks, bukti, dan pemisahan antara fakta dengan opini.",
        pesanSalah: "Informasi yang hanya memancing emosi tanpa bukti perlu diperiksa lebih lanjut."
    }
];


// ======================================================
// 4. BANK DATA: MENGENALI HOAKS DAN DISINFORMASI
// Fokus: Memahami informasi palsu dan manipulatif
// (3 pilihan: A, B, dan C)
// ======================================================

const bankHoaks = [

    {
        soal: "Apa yang dimaksud dengan hoaks?",
        pilihan: {
            A: "Informasi yang selalu berasal dari media sosial",
            B: "Informasi palsu atau menyesatkan yang disebarkan seolah-olah benar",
            C: "Informasi yang memiliki banyak komentar"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Hoaks merupakan informasi palsu atau menyesatkan yang dapat membuat masyarakat salah memahami suatu kejadian.",
        pesanSalah: "Hoaks tidak ditentukan dari jumlah komentar atau platformnya, tetapi dari kebenaran informasi."
    },

    {
        soal: "Apa perbedaan misinformasi dan disinformasi?",
        pilihan: {
            A: "Misinformasi selalu benar, disinformasi selalu salah",
            B: "Keduanya hanya terjadi di media sosial",
            C: "Misinformasi salah tanpa harus disengaja, sedangkan disinformasi sengaja dibuat atau disebarkan untuk menyesatkan"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Perbedaan utamanya terletak pada unsur kesengajaan dalam penyebaran informasi.",
        pesanSalah: "Perhatikan unsur kesengajaan. Misinformasi tidak selalu disebarkan dengan niat menipu."
    },

    {
        soal: "Sebuah pesan menyatakan bahwa semua masyarakat akan mendapatkan uang bantuan jika mengisi tautan tertentu. Apa tindakan terbaik?",
        pilihan: {
            A: "Memeriksa informasi melalui situs resmi pemerintah",
            B: "Langsung mengisi formulir",
            C: "Meneruskan pesan ke semua kontak"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Program bantuan harus diperiksa melalui kanal resmi penyelenggara.",
        pesanSalah: "Jangan terburu-buru mengisi tautan yang belum jelas karena dapat menjadi modus pencurian data."
    },

    {
        soal: "Mengapa judul berita yang menggunakan kata-kata sangat berlebihan perlu diwaspadai?",
        pilihan: {
            A: "Karena semua berita panjang pasti palsu",
            B: "Karena judul tersebut mungkin dibuat untuk menarik perhatian tanpa menggambarkan isi secara akurat",
            C: "Karena berita resmi tidak boleh menggunakan judul"
        },
        jawabanBenar: "B",
        pesanBenar: "Bagus! Judul sensasional bisa menjadi clickbait. Selalu baca isi berita dan periksa faktanya.",
        pesanSalah: "Tidak semua judul berlebihan otomatis palsu, tetapi perlu diperiksa kesesuaiannya dengan isi."
    },

    {
        soal: "Apa yang sebaiknya dilakukan ketika menemukan video lama yang diklaim sebagai kejadian hari ini?",
        pilihan: {
            A: "Langsung menyebarkannya",
            B: "Mengubah judul video",
            C: "Memeriksa tanggal, lokasi, dan sumber asli video"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Konteks waktu dan lokasi sangat penting dalam memverifikasi sebuah video.",
        pesanSalah: "Video lama dapat digunakan kembali dengan narasi baru. Periksa konteks aslinya."
    },

    {
        soal: "Apa yang dimaksud dengan deepfake?",
        pilihan: {
            A: "Teknologi AI yang dapat memanipulasi gambar, video, atau suara seseorang",
            B: "Sistem keamanan untuk menghapus virus",
            C: "Aplikasi untuk mempercepat internet"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Deepfake memanfaatkan teknologi AI untuk menghasilkan atau memanipulasi konten yang menyerupai seseorang.",
        pesanSalah: "Deepfake berkaitan dengan manipulasi konten menggunakan teknologi kecerdasan buatan."
    },

    {
        soal: "Kamu menerima berita yang sama dari tiga akun media sosial. Apakah itu berarti berita tersebut pasti benar?",
        pilihan: {
            A: "Ya, karena sudah dibagikan banyak akun",
            B: "Tidak, karena ketiga akun bisa saja mengambil informasi dari sumber yang sama dan belum terverifikasi",
            C: "Ya, selama jumlah pengikutnya banyak"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Banyaknya unggahan tidak menjamin kebenaran. Periksa sumber asli informasi.",
        pesanSalah: "Popularitas dan jumlah pengikut tidak menjamin suatu informasi benar."
    },

    {
        soal: "Apa tujuan utama melakukan fact-checking?",
        pilihan: {
            A: "Membuat berita menjadi viral",
            B: "Meningkatkan jumlah pengikut",
            C: "Memastikan kebenaran suatu klaim berdasarkan bukti"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! Fact-checking membantu memisahkan informasi yang terbukti dari klaim yang belum memiliki bukti.",
        pesanSalah: "Fact-checking bertujuan memverifikasi klaim, bukan meningkatkan popularitas konten."
    },

    {
        soal: "Sebuah pesan berantai berbunyi, \"Sebarkan dalam 10 menit atau akunmu akan diblokir!\" Apa sikap yang tepat?",
        pilihan: {
            A: "Segera menyebarkannya agar akunmu aman",
            B: "Mengirimkannya ke semua grup sekaligus",
            C: "Tidak meneruskannya dan memeriksa kebenarannya, karena pesan yang menekan agar cepat disebarkan adalah ciri umum hoaks"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Hoaks sering memakai ancaman atau desakan waktu agar orang menyebarkannya tanpa berpikir.",
        pesanSalah: "Pesan yang memaksa untuk segera disebarkan patut dicurigai. Periksa dulu kebenarannya sebelum meneruskan."
    },

    {
        soal: "Sebuah foto asli dari peristiwa tahun lalu diunggah ulang dengan keterangan seolah-olah baru terjadi hari ini. Jenis informasi menyesatkan ini disebut...",
        pilihan: {
            A: "Konten dengan konteks yang keliru",
            B: "Berita investigasi",
            C: "Data terbuka"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Gambarnya asli, tetapi keterangan waktu atau tempatnya tidak sesuai sehingga menyesatkan.",
        pesanSalah: "Perhatikan bahwa gambarnya asli, tetapi konteks yang menyertainya salah. Itulah yang membuatnya menyesatkan."
    },

    {
        soal: "Kanal apa yang tepat digunakan untuk memeriksa kebenaran sebuah klaim viral?",
        pilihan: {
            A: "Akun anonim yang sering membagikan kabar mengejutkan",
            B: "Kolom komentar pada unggahan klaim tersebut",
            C: "Situs pemeriksa fakta yang terpercaya dan kanal klarifikasi resmi instansi terkait"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Pemeriksa fakta dan klarifikasi resmi bekerja berdasarkan bukti yang dapat ditelusuri.",
        pesanSalah: "Akun anonim dan komentar pengguna tidak dapat menjadi dasar pemeriksaan. Gunakan pemeriksa fakta dan sumber resmi."
    }
];


// ======================================================
// 5. BANK DATA: KEAMANAN DIGITAL
// Fokus: Privasi, akun, dan perlindungan data pribadi
// (3 pilihan: A, B, dan C)
// ======================================================

const bankKeamanan = [

    {
        soal: "Mengapa kita tidak boleh membagikan nomor KTP dan data pribadi secara sembarangan?",
        pilihan: {
            A: "Karena data tersebut dapat disalahgunakan oleh pihak lain",
            B: "Karena data pribadi tidak boleh disimpan",
            C: "Karena internet tidak dapat menyimpan data"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Data pribadi perlu dijaga karena dapat digunakan untuk penipuan atau penyalahgunaan identitas.",
        pesanSalah: "Data pribadi harus dilindungi dari akses dan penggunaan yang tidak sah."
    },

    {
        soal: "Apa yang harus dilakukan jika menerima email yang meminta kata sandi akun?",
        pilihan: {
            A: "Langsung membalas email",
            B: "Memeriksa pengirim dan tidak memberikan kata sandi melalui email",
            C: "Mengirimkan kata sandi agar akun tetap aktif"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Jangan pernah memberikan kata sandi melalui email atau pesan yang mencurigakan.",
        pesanSalah: "Permintaan kata sandi melalui pesan patut dicurigai sebagai upaya pencurian akun."
    },

    {
        soal: "Apa fungsi HTTPS pada alamat situs?",
        pilihan: {
            A: "Menjamin seluruh isi situs benar",
            B: "Menjamin situs bebas penipuan",
            C: "Menunjukkan koneksi menggunakan enkripsi antara browser dan situs"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! HTTPS membantu melindungi komunikasi, tetapi tidak otomatis menjamin situs tersebut terpercaya.",
        pesanSalah: "HTTPS berkaitan dengan keamanan koneksi, bukan jaminan bahwa seluruh isi situs benar."
    },

    {
        soal: "Apa risiko menggunakan Wi-Fi publik untuk mengakses akun penting tanpa perlindungan?",
        pilihan: {
            A: "Informasi dapat lebih berisiko disadap jika jaringan tidak aman",
            B: "Laptop otomatis rusak",
            C: "Seluruh data otomatis terhapus"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Hindari aktivitas sensitif pada jaringan publik yang tidak terpercaya.",
        pesanSalah: "Jaringan publik yang tidak aman dapat meningkatkan risiko terhadap privasi dan keamanan data."
    },

    {
        soal: "Apa yang dimaksud dengan backup data?",
        pilihan: {
            A: "Menghapus seluruh file lama",
            B: "Membuat salinan data agar dapat dipulihkan ketika data utama hilang",
            C: "Mengubah semua file menjadi gambar"
        },
        jawabanBenar: "B",
        pesanBenar: "Bagus! Backup membantu mengurangi risiko kehilangan informasi penting.",
        pesanSalah: "Backup adalah proses membuat salinan data sebagai cadangan."
    },

    {
        soal: "Mengapa pembaruan sistem operasi dan aplikasi penting?",
        pilihan: {
            A: "Agar tampilan selalu berubah",
            B: "Agar kapasitas penyimpanan habis",
            C: "Untuk mendapatkan perbaikan keamanan dan peningkatan fungsi"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! Pembaruan sering membawa perbaikan kerentanan keamanan.",
        pesanSalah: "Pembaruan aplikasi juga penting untuk menjaga keamanan perangkat."
    },

    {
        soal: "Seorang teman mengirim tautan untuk mengunduh aplikasi berformat APK dari luar toko aplikasi resmi. Apa yang sebaiknya kamu lakukan?",
        pilihan: {
            A: "Mengunduhnya karena dikirim oleh teman sendiri",
            B: "Mengunduh aplikasi hanya dari toko aplikasi resmi, karena file dari sumber lain dapat mengandung malware",
            C: "Menginstalnya lalu memberikan semua izin yang diminta"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Aplikasi dari luar toko resmi lebih berisiko mengandung malware yang dapat mencuri data.",
        pesanSalah: "Kiriman dari teman belum tentu aman, karena akun atau ponsel temanmu bisa saja sudah disalahgunakan."
    },

    {
        soal: "Sebuah aplikasi senter meminta izin mengakses kontak dan lokasi. Apa tindakan yang tepat?",
        pilihan: {
            A: "Memberikan semua izin agar aplikasi dapat berjalan",
            B: "Menganggap izin aplikasi tidak penting",
            C: "Mempertimbangkan kembali dan hanya memberi izin yang sesuai dengan fungsi aplikasi"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! Izin yang diminta sebaiknya sesuai dengan fungsi aplikasi. Izin berlebihan perlu dicurigai.",
        pesanSalah: "Izin aplikasi menentukan data apa yang dapat diakses. Aplikasi senter tidak memerlukan akses kontak."
    },

    {
        soal: "Setelah memakai komputer umum, misalnya di warnet, untuk membuka akun, apa yang harus dilakukan?",
        pilihan: {
            A: "Keluar (logout) dari akun dan tidak menyimpan kata sandi di peramban",
            B: "Menutup jendela peramban saja",
            C: "Membiarkan akun tetap masuk agar lain kali lebih cepat"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Logout dan tidak menyimpan kata sandi mencegah orang berikutnya mengakses akunmu.",
        pesanSalah: "Menutup jendela saja tidak selalu mengeluarkan akun. Orang berikutnya masih bisa masuk ke akunmu."
    },

    {
        soal: "Manakah kata sandi yang paling aman?",
        pilihan: {
            A: "Tanggal lahir sendiri",
            B: "Kombinasi panjang dari huruf besar, huruf kecil, angka, dan simbol yang tidak mudah ditebak",
            C: "Nama sendiri diikuti nomor urut"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Kata sandi yang panjang dan beragam karakternya lebih sulit ditebak.",
        pesanSalah: "Tanggal lahir dan nama sendiri mudah ditebak oleh orang lain."
    }
];


// ======================================================
// 6. BANK DATA: ETIKA BERMEDIA SOSIAL
// Fokus: Tanggung jawab dan perilaku digital
// (3 pilihan: A, B, dan C)
// ======================================================

const bankEtika = [

    {
        soal: "Apa tindakan yang tepat sebelum mengunggah foto teman ke media sosial?",
        pilihan: {
            A: "Meminta izin terlebih dahulu",
            B: "Langsung mengunggahnya",
            C: "Menambahkan informasi pribadinya"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Menghargai privasi orang lain merupakan bagian dari etika digital.",
        pesanSalah: "Foto dan informasi orang lain tidak sebaiknya dibagikan tanpa mempertimbangkan izin dan privasinya."
    },

    {
        soal: "Apa yang dimaksud dengan cyberbullying?",
        pilihan: {
            A: "Belajar menggunakan komputer",
            B: "Perundungan yang dilakukan melalui media atau platform digital",
            C: "Membuat konten edukasi"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Cyberbullying dapat terjadi melalui komentar, pesan, unggahan, atau platform digital lainnya.",
        pesanSalah: "Cyberbullying merupakan tindakan perundungan yang menggunakan teknologi digital."
    },

    {
        soal: "Bagaimana cara memberikan komentar yang baik di media sosial?",
        pilihan: {
            A: "Menggunakan kata-kata kasar",
            B: "Menyerang kehidupan pribadi seseorang",
            C: "Menyampaikan kritik secara sopan dan berfokus pada permasalahan"
        },
        jawabanBenar: "C",
        pesanBenar: "Bagus! Kritik yang baik berfokus pada gagasan atau masalah, bukan menyerang pribadi.",
        pesanSalah: "Gunakan bahasa yang sopan dan hindari serangan pribadi."
    },

    {
        soal: "Mengapa penting mencantumkan sumber ketika menggunakan informasi dari orang lain?",
        pilihan: {
            A: "Untuk menghargai pemilik karya dan memudahkan pemeriksaan informasi",
            B: "Agar tulisan menjadi lebih panjang",
            C: "Agar terlihat memiliki banyak referensi"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Mencantumkan sumber merupakan bentuk penghargaan terhadap karya orang lain.",
        pesanSalah: "Sumber diperlukan untuk menghargai pembuat informasi dan membantu pembaca melakukan verifikasi."
    },

    {
        soal: "Apa yang sebaiknya dilakukan ketika melihat teman menjadi korban perundungan digital?",
        pilihan: {
            A: "Ikut menyebarkan unggahannya",
            B: "Tidak ikut memperburuk situasi, menyimpan bukti seperlunya, dan melaporkannya melalui kanal yang tepat",
            C: "Membuat komentar yang lebih kasar"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Jangan memperluas perundungan. Berikan dukungan dan gunakan fitur pelaporan jika diperlukan.",
        pesanSalah: "Ikut menyebarkan konten perundungan hanya akan memperburuk situasi."
    },

    {
        soal: "Apa yang dimaksud dengan literasi digital?",
        pilihan: {
            A: "Kemampuan bermain game",
            B: "Kemampuan menggunakan perangkat tanpa memahami risikonya",
            C: "Kemampuan menggunakan, memahami, mengevaluasi, dan membuat informasi melalui teknologi digital secara bertanggung jawab"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! Literasi digital bukan hanya tentang menggunakan teknologi, tetapi juga memahami dan bertanggung jawab dalam penggunaannya.",
        pesanSalah: "Literasi digital mencakup kemampuan teknis, berpikir kritis, keamanan, dan etika."
    },

    {
        soal: "Kamu menerima tangkapan layar percakapan pribadi seorang teman. Apa sikap yang tepat?",
        pilihan: {
            A: "Menyebarkannya ke grup agar semua orang tahu",
            B: "Tidak menyebarkannya karena percakapan pribadi perlu dihormati",
            C: "Menyimpannya lalu mengancam akan menyebarkannya"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Percakapan pribadi adalah hak privasi pemiliknya dan tidak boleh disebarkan tanpa izin.",
        pesanSalah: "Menyebarkan atau mengancam menyebarkan percakapan pribadi melanggar privasi dan dapat merugikan orang lain."
    },

    {
        soal: "Sebuah unggahan membuatmu sangat marah. Apa yang sebaiknya dilakukan sebelum memberi komentar?",
        pilihan: {
            A: "Langsung membalas dengan emosi",
            B: "Meminta teman-teman ikut menyerang akun tersebut",
            C: "Menenangkan diri, membaca ulang dengan teliti, dan memastikan komentarmu tidak menyakiti pihak lain"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Memberi jeda sebelum berkomentar membantu kita menanggapi dengan lebih bijak.",
        pesanSalah: "Komentar yang ditulis dalam kemarahan sering menyakiti orang lain dan sulit ditarik kembali setelah tersebar."
    },

    {
        soal: "Seseorang dituduh melakukan kesalahan di media sosial. Apakah boleh menyebarkan alamat rumah dan data pribadinya?",
        pilihan: {
            A: "Boleh, karena ia sudah dianggap bersalah",
            B: "Tidak boleh, karena menyebarkan data pribadi (doxing) melanggar privasi dan dapat membahayakan orang tersebut",
            C: "Boleh, jika banyak orang yang setuju"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Siapa pun berhak atas privasinya. Persoalan hukum sebaiknya diselesaikan melalui jalur yang berwenang.",
        pesanSalah: "Banyaknya dukungan tidak membenarkan penyebaran data pribadi. Tindakan ini dapat membahayakan keselamatan seseorang."
    },

    {
        soal: "Bagaimana sikap yang tepat terhadap konten yang berisi ujaran kebencian terhadap suku, agama, atau kelompok tertentu?",
        pilihan: {
            A: "Menyebarkannya sebagai peringatan bagi orang lain",
            B: "Memberi suka agar terlihat mengikuti tren",
            C: "Tidak menyebarkannya, tidak membalas dengan kebencian, dan melaporkannya melalui fitur platform"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Menghentikan penyebaran dan melaporkan konten tersebut membantu menjaga ruang digital tetap aman.",
        pesanSalah: "Menyebarkan atau menyukai konten ujaran kebencian turut memperluas dampaknya."
    }
];


// ======================================================
// 7. BANK DATA: KUIS LITERASI DIGITAL
// Fokus: Evaluasi pemahaman secara keseluruhan
// (3 pilihan: A, B, dan C)
// ======================================================

const bankKuis = [

    {
        soal: "Saat musim Pemilu, media sosial dipenuhi berita saling menyerang antarcalon. Apa sikap yang paling tepat?",
        pilihan: {
            A: "Ikut menyebarkan berita buruk tentang calon yang tidak disukai",
            B: "Memeriksa rekam jejak melalui sumber berita kredibel dan dokumen resmi",
            C: "Memblokir semua orang yang berbeda pilihan"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Sikap kritis dan pemeriksaan fakta membantu menjaga diskusi politik tetap sehat.",
        pesanSalah: "Jangan menyebarkan informasi yang belum terverifikasi hanya karena sesuai dengan pilihan pribadi."
    },

    {
        soal: "Temanmu mengirim video pejabat yang gerak bibirnya terlihat aneh dan suaranya seperti robot. Apa yang harus dilakukan?",
        pilihan: {
            A: "Langsung percaya karena wajahnya terlihat jelas",
            B: "Membagikannya ke grup kelas",
            C: "Mencari rekaman asli melalui kanal resmi dan membandingkan konteksnya"
        },
        jawabanBenar: "C",
        pesanBenar: "Hebat! Membandingkan dengan sumber asli membantu mendeteksi kemungkinan manipulasi AI.",
        pesanSalah: "Wajah dan suara dalam video dapat dimanipulasi. Periksa sumber aslinya."
    },

    {
        soal: "Bagaimana memastikan foto kebakaran hutan yang viral bukan foto dari kejadian beberapa tahun sebelumnya?",
        pilihan: {
            A: "Melakukan pencarian gambar terbalik dan memeriksa konteks foto",
            B: "Membaca komentar terbanyak",
            C: "Menunggu unggahan berikutnya"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Pencarian gambar terbalik dapat menemukan penggunaan gambar yang sama di berbagai situs.",
        pesanSalah: "Komentar dan unggahan ulang tidak cukup untuk memastikan waktu pengambilan foto."
    },

    {
        soal: "Mengapa informasi di media sosial tidak boleh langsung dipercaya?",
        pilihan: {
            A: "Karena seluruh informasi media sosial pasti palsu",
            B: "Karena siapa saja dapat mengunggah informasi tanpa proses pemeriksaan fakta",
            C: "Karena media sosial tidak memiliki gambar"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Siapa saja dapat membuat konten sehingga pengguna harus memeriksa kebenarannya.",
        pesanSalah: "Tidak semua informasi media sosial salah, tetapi sumber dan buktinya perlu diperiksa."
    },

    {
        soal: "Sebuah berita memiliki judul \"Angka Kemiskinan Naik 1000%\". Setelah dibaca, isi berita ternyata membahas permainan simulasi. Fenomena ini disebut...",
        pilihan: {
            A: "Jurnalisme investigasi",
            B: "Berita ilmiah",
            C: "Clickbait"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! Clickbait menggunakan judul yang menarik atau menyesatkan untuk memancing klik.",
        pesanSalah: "Perhatikan hubungan antara judul dan isi. Judul yang sengaja dibuat tidak sesuai termasuk clickbait."
    },

    {
        soal: "Apa fungsi utama mesin pencari seperti Google?",
        pilihan: {
            A: "Membantu menemukan informasi berdasarkan kata kunci",
            B: "Menjamin seluruh informasi di internet benar",
            C: "Menghapus semua informasi palsu"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Mesin pencari membantu menemukan informasi, tetapi pengguna tetap harus menilai kualitas sumbernya.",
        pesanSalah: "Mesin pencari tidak menjamin seluruh hasil pencarian benar."
    },

    {
        soal: "Apa arti domain .go.id pada situs internet Indonesia?",
        pilihan: {
            A: "Situs milik perusahaan swasta",
            B: "Domain yang digunakan instansi pemerintahan Indonesia sesuai ketentuan",
            C: "Situs pribadi seseorang"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Domain .go.id digunakan untuk instansi pemerintahan Indonesia yang memenuhi persyaratan.",
        pesanSalah: "Domain .go.id berkaitan dengan instansi pemerintahan, bukan situs pribadi."
    },

    {
        soal: "Kamu menerima pesan yang meminta kode OTP akunmu. Apa tindakan yang benar?",
        pilihan: {
            A: "Memberikan kode jika pengirim mengaku sebagai admin",
            B: "Mengirim kode melalui pesan pribadi",
            C: "Tidak membagikan OTP kepada siapa pun"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! OTP merupakan kode rahasia untuk verifikasi. Jangan membagikannya kepada orang lain.",
        pesanSalah: "Kode OTP bersifat rahasia. Pihak resmi tidak seharusnya meminta kamu mengirimkannya."
    },

    {
        soal: "Apa manfaat menggunakan kata kunci yang spesifik saat mencari informasi?",
        pilihan: {
            A: "Membantu memperoleh hasil pencarian yang lebih relevan",
            B: "Menghilangkan seluruh iklan",
            C: "Menjamin semua hasil pencarian benar"
        },
        jawabanBenar: "A",
        pesanBenar: "Tepat! Kata kunci spesifik membantu mempersempit hasil pencarian sesuai kebutuhan.",
        pesanSalah: "Kata kunci spesifik meningkatkan relevansi, tetapi tetap tidak menjamin kebenaran hasil."
    },

    {
        soal: "Ketika menggunakan gambar dari internet untuk tugas sekolah, apa yang harus diperhatikan?",
        pilihan: {
            A: "Menghapus nama pembuat gambar",
            B: "Memperhatikan hak cipta dan mencantumkan sumber sesuai ketentuan penggunaan",
            C: "Menganggap semua gambar bebas digunakan"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Menghargai hak cipta dan mencantumkan atribusi merupakan bagian dari etika digital.",
        pesanSalah: "Tidak semua gambar internet bebas digunakan. Periksa lisensi dan ketentuan penggunaannya."
    },

    {
        soal: "Apa yang dimaksud dengan jejak digital?",
        pilihan: {
            A: "Riwayat langkah kaki seseorang",
            B: "Kumpulan data yang hanya tersimpan di komputer",
            C: "Rekaman aktivitas atau informasi yang ditinggalkan ketika menggunakan layanan digital"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Aktivitas digital dapat meninggalkan jejak yang berpotensi tersimpan dan ditemukan kembali.",
        pesanSalah: "Jejak digital berkaitan dengan aktivitas seseorang ketika menggunakan teknologi digital."
    },

    {
        soal: "Kamu menemukan dua berita dengan informasi yang berbeda mengenai kejadian yang sama. Apa yang sebaiknya dilakukan?",
        pilihan: {
            A: "Membandingkan sumber, tanggal, bukti, dan konfirmasi dari pihak terkait",
            B: "Memilih berita dengan judul paling menarik",
            C: "Mempercayai berita yang paling banyak dibagikan"
        },
        jawabanBenar: "A",
        pesanBenar: "Bagus! Membandingkan beberapa sumber membantu memperoleh gambaran kejadian yang lebih lengkap.",
        pesanSalah: "Popularitas berita tidak selalu menunjukkan kebenarannya."
    },

    {
        soal: "Apa tindakan yang tepat ketika menerima tautan mencurigakan di media sosial?",
        pilihan: {
            A: "Langsung membuka dan memasukkan kata sandi",
            B: "Memeriksa alamat situs dan memastikan sumber tautan sebelum membukanya",
            C: "Meneruskan tautan ke semua teman"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! Memeriksa alamat situs dapat membantu menghindari phishing dan pencurian akun.",
        pesanSalah: "Jangan memasukkan informasi pribadi ke situs yang belum terverifikasi."
    },

    {
        soal: "Mengapa kita perlu membedakan fakta dan opini dalam sebuah berita?",
        pilihan: {
            A: "Agar berita menjadi lebih panjang",
            B: "Agar dapat menentukan berita yang paling viral",
            C: "Agar dapat memisahkan informasi yang dapat dibuktikan dari pendapat seseorang"
        },
        jawabanBenar: "C",
        pesanBenar: "Benar! Fakta dapat diperiksa melalui bukti, sedangkan opini merupakan pandangan atau penilaian.",
        pesanSalah: "Memisahkan fakta dan opini membantu kita memahami informasi secara objektif."
    },

    {
        soal: "Apa tindakan paling tepat jika kamu telanjur membagikan informasi yang ternyata salah?",
        pilihan: {
            A: "Menghapus atau mengoreksi unggahan dan menyampaikan klarifikasi",
            B: "Membiarkannya karena sudah terlanjur viral",
            C: "Menyalahkan orang yang pertama kali mengirimkannya"
        },
        jawabanBenar: "A",
        pesanBenar: "Bagus! Mengoreksi informasi merupakan bentuk tanggung jawab dalam menggunakan media digital.",
        pesanSalah: "Informasi yang salah perlu dikoreksi agar tidak terus menyebar."
    },

    {
        soal: "Apa yang dimaksud dengan phishing?",
        pilihan: {
            A: "Teknik mempercepat koneksi internet",
            B: "Upaya menipu pengguna agar memberikan informasi rahasia melalui pesan atau situs palsu",
            C: "Metode pencarian informasi akademik"
        },
        jawabanBenar: "B",
        pesanBenar: "Benar! Phishing merupakan salah satu bentuk penipuan digital untuk mendapatkan data sensitif.",
        pesanSalah: "Phishing merupakan ancaman keamanan digital yang perlu diwaspadai."
    },

    {
        soal: "Mengapa kata sandi yang berbeda untuk setiap akun lebih disarankan?",
        pilihan: {
            A: "Agar semua akun terlihat profesional",
            B: "Agar lebih mudah ditebak",
            C: "Agar kebocoran satu kata sandi tidak otomatis membuka akun lainnya"
        },
        jawabanBenar: "C",
        pesanBenar: "Tepat! Penggunaan kata sandi unik membantu membatasi dampak jika salah satu akun mengalami kebocoran.",
        pesanSalah: "Menggunakan satu kata sandi untuk semua akun meningkatkan risiko keamanan."
    },

    {
        soal: "Ketika membaca informasi politik, mengapa kita perlu memeriksa tanggal publikasinya?",
        pilihan: {
            A: "Karena informasi politik dan kebijakan dapat berubah dari waktu ke waktu",
            B: "Karena berita lama selalu palsu",
            C: "Karena tanggal tidak berhubungan dengan isi berita"
        },
        jawabanBenar: "A",
        pesanBenar: "Benar! Informasi yang benar pada masa lalu belum tentu menggambarkan kondisi saat ini.",
        pesanSalah: "Tanggal publikasi penting untuk memahami apakah informasi masih relevan."
    },

    {
        soal: "Apa manfaat mengaktifkan autentikasi dua faktor (2FA)?",
        pilihan: {
            A: "Membuat internet menjadi lebih cepat",
            B: "Menambahkan lapisan verifikasi ketika seseorang masuk ke akun",
            C: "Menghilangkan seluruh iklan"
        },
        jawabanBenar: "B",
        pesanBenar: "Tepat! 2FA menambah perlindungan akun selain kata sandi.",
        pesanSalah: "2FA merupakan fitur keamanan tambahan untuk melindungi akun digital."
    },

    {
        soal: "Bagaimana sikap yang tepat saat berdiskusi di media sosial dengan orang yang berbeda pendapat?",
        pilihan: {
            A: "Menghina pendapat orang lain",
            B: "Menyebarkan identitas pribadinya",
            C: "Menyampaikan argumen secara sopan dan berdasarkan informasi yang dapat diperiksa"
        },
        jawabanBenar: "C",
        pesanBenar: "Bagus! Menghargai perbedaan pendapat merupakan bagian dari etika digital.",
        pesanSalah: "Perbedaan pendapat sebaiknya diselesaikan dengan komunikasi yang sehat dan saling menghormati."
    }
];


// ======================================================
// AKHIR FILE MATERI.JS
// ======================================================