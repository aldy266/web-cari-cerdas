// ==========================================
// FILE: script.js (Mesin Sesi 5 Soal & Anti-Repetisi)
// Cocok dengan: caricerdas.html + materi.js (versi revisi)
// ==========================================

const JUMLAH_SOAL_PER_SESI = 5;
const HURUF = ['A', 'B', 'C', 'D'];

// ----------------------------------------------------
// KONFIGURASI KATEGORI
// halaman   : id <section> di HTML
// bank      : fungsi yang mengembalikan array soal dari materi.js
// kunciTeks : nama properti teks soal di materi.js
// tipe      : 'pilihan' (tombol dibuat JS) atau 'banding' (kartu A/B)
// ----------------------------------------------------
const KATEGORI = {
    mencari:    { halaman: 'cara-mencari',    bank: () => bankMencari,    kunciTeks: 'kasus', tipe: 'pilihan' },
    sumber:     { halaman: 'pilih-sumber',    bank: () => bankSumber,     kunciTeks: 'kasus', tipe: 'pilihan' },
    bandingkan: { halaman: 'bandingkan-info', bank: () => bankBandingkan,  kunciTeks: 'konteks', tipe: 'banding' },
    hoaks:      { halaman: 'hoaks',           bank: () => bankHoaks,      kunciTeks: 'soal',  tipe: 'pilihan' },
    keamanan:   { halaman: 'keamanan',        bank: () => bankKeamanan,   kunciTeks: 'soal',  tipe: 'pilihan' },
    etika:      { halaman: 'etika',           bank: () => bankEtika,      kunciTeks: 'soal',  tipe: 'pilihan' },
    kuis:       { halaman: 'kuis',            bank: () => bankKuis,       kunciTeks: 'soal',  tipe: 'pilihan' }
};

// Penyimpanan antrean soal yang sedang dikerjakan di sesi aktif
const sesiAktif = {};

// Memori pelacak soal yang sudah keluar (agar sesi berikutnya tidak mengulang)
const riwayatTerpakai = {};

Object.keys(KATEGORI).forEach(k => {
    sesiAktif[k] = {
        daftarSoal: [],
        indexSekarang: 0,
        sudahJawab: false,
        opsi: [],       // urutan opsi yang tampil (untuk tipe 'pilihan')
        tukar: false    // apakah Sumber A/B ditukar posisinya (untuk tipe 'banding')
    };
    riwayatTerpakai[k] = [];
});

// ----------------------------------------------------
// FUNGSI BANTU
// ----------------------------------------------------

// Pengacak array (Fisher-Yates Shuffle)
function acakArray(arr) {
    const salinan = [...arr];
    for (let i = salinan.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [salinan[i], salinan[j]] = [salinan[j], salinan[i]];
    }
    return salinan;
}

// Mengambil soal untuk satu sesi tanpa mengulang soal sesi sebelumnya
function siapkanSoal(bankData, kategori) {
    const jumlah = Math.min(JUMLAH_SOAL_PER_SESI, bankData.length);
    const semuaIndex = bankData.map((_, idx) => idx);
    const indexTersedia = semuaIndex.filter(idx => !riwayatTerpakai[kategori].includes(idx));

    let indexTerpilih;

    if (indexTersedia.length >= jumlah) {
        // Stok soal baru masih cukup
        indexTerpilih = acakArray(indexTersedia).slice(0, jumlah);
        riwayatTerpakai[kategori].push(...indexTerpilih);
    } else {
        // Stok baru kurang: pakai sisa yang belum keluar, lalu lengkapi dari soal lain.
        // Putaran baru dimulai dengan soal-soal yang terpilih ini.
        const pelengkap = acakArray(semuaIndex.filter(idx => !indexTersedia.includes(idx)))
            .slice(0, jumlah - indexTersedia.length);
        indexTerpilih = acakArray([...indexTersedia, ...pelengkap]);
        riwayatTerpakai[kategori] = [...indexTerpilih];
    }

    return indexTerpilih.map(idx => bankData[idx]);
}

// Efek visual tombol (benar = hijau, salah = merah + getar)
function beriEfekTombol(tombol, tipe) {
    if (!tombol) return;
    tombol.classList.remove('jawaban-benar', 'jawaban-salah', 'getar');
    void tombol.offsetWidth;
    if (tipe === 'benar') tombol.classList.add('jawaban-benar');
    if (tipe === 'salah') tombol.classList.add('jawaban-salah', 'getar');
}

function formatKotakFeedback(el, teks, apakahBenar) {
    el.textContent = teks;
    el.style.padding = "14px";
    el.style.borderRadius = "12px";
    if (apakahBenar) {
        el.style.color = "#15803d";
        el.style.backgroundColor = "#f0fdf4";
        el.style.border = "1px solid #86efac";
    } else {
        el.style.color = "#b91c1c";
        el.style.backgroundColor = "#fef2f2";
        el.style.border = "1px solid #fca5a5";
    }
}

function bersihkanFeedback(kategori) {
    const feedbackEl = document.getElementById(`feedback-${kategori}`);
    if (feedbackEl) {
        feedbackEl.textContent = "";
        feedbackEl.style.color = "";
        feedbackEl.style.backgroundColor = "transparent";
        feedbackEl.style.border = "none";
        feedbackEl.style.padding = "0";
    }
}

// ----------------------------------------------------
// 1. NAVIGASI HALAMAN & MULAI SESI
// ----------------------------------------------------

function pindahHalaman(idTujuan) {
    document.querySelectorAll('.halaman').forEach(h => h.classList.remove('aktif'));
    const target = document.getElementById(idTujuan);
    if (target) target.classList.add('aktif');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dipanggil dari tombol di Menu Utama (idTujuan = id <section>)
function bukaMenu(idTujuan) {
    const kategori = Object.keys(KATEGORI).find(k => KATEGORI[k].halaman === idTujuan);
    if (!kategori) return;

    const bankData = KATEGORI[kategori].bank();
    if (!Array.isArray(bankData) || bankData.length === 0) {
        alert("Materi untuk menu ini belum tersedia.");
        return;
    }

    mulaiSesi(kategori, bankData);
    pindahHalaman(idTujuan);
}

function mulaiSesi(kategori, bankData) {
    const sesi = sesiAktif[kategori];
    sesi.daftarSoal = siapkanSoal(bankData, kategori);
    sesi.indexSekarang = 0;
    tampilkanSoalSaatIni(kategori);
}

// ----------------------------------------------------
// 2. MENAMPILKAN SOAL KE LAYAR & LOMPAT KE SOAL BERIKUTNYA
// ----------------------------------------------------

function tampilkanSoalSaatIni(kategori) {
    const sesi = sesiAktif[kategori];
    const cfg = KATEGORI[kategori];
    const soal = sesi.daftarSoal[sesi.indexSekarang];

    sesi.sudahJawab = false;
    bersihkanFeedback(kategori);

    const nextBtn = document.getElementById(`next-${kategori}`);
    if (nextBtn) nextBtn.style.display = "none";

    // Badge progres "Soal X / 5"
    document.getElementById(`progres-${kategori}`).textContent =
        `Soal ${sesi.indexSekarang + 1} / ${sesi.daftarSoal.length}`;

    if (cfg.tipe === 'banding') {
        renderBandingkan(sesi, soal);
    } else {
        renderPilihan(kategori, sesi, soal, cfg);
    }
}

// Soal pilihan ganda (mencari, sumber, hoaks, keamanan, etika, kuis)
function renderPilihan(kategori, sesi, soal, cfg) {
    document.getElementById(`teks-${kategori}`).textContent = soal[cfg.kunciTeks];

    // Acak urutan opsi, simpan kunci aslinya (A/B/C) untuk pengecekan jawaban
    sesi.opsi = acakArray(Object.keys(soal.pilihan)).map(kunci => ({
        kunci: kunci,
        teks: soal.pilihan[kunci]
    }));

    const wadah = document.getElementById(`pilihan-${kategori}`);
    wadah.innerHTML = "";

    sesi.opsi.forEach((opsi, i) => {
        const tombol = document.createElement('button');
        tombol.className = 'btn-pilihan';
        tombol.textContent = `${HURUF[i]}. ${opsi.teks}`;
        tombol.addEventListener('click', () => cekPilihan(kategori, i));
        wadah.appendChild(tombol);
    });
}

// Soal membandingkan dua sumber (posisi Sumber A/B diacak)
function renderBandingkan(sesi, soal) {
    sesi.tukar = Math.random() < 0.5;

    const daftarKiri = sesi.tukar ? soal.sumberB : soal.sumberA;
    const daftarKanan = sesi.tukar ? soal.sumberA : soal.sumberB;

    document.getElementById('teks-konteks-bandingkan').textContent = soal.konteks;
    isiDaftar('list-sumber-a', daftarKiri);
    isiDaftar('list-sumber-b', daftarKanan);

    ['btn-banding-a', 'btn-banding-b'].forEach(id => {
        document.getElementById(id).classList.remove('jawaban-benar', 'jawaban-salah', 'getar');
    });
}

function isiDaftar(idUl, daftar) {
    const ul = document.getElementById(idUl);
    ul.innerHTML = "";
    daftar.forEach(item => {
        const li = document.createElement('li');
        li.textContent = "• " + item;
        ul.appendChild(li);
    });
}

function tampilkanTombolLanjut(kategori) {
    const sesi = sesiAktif[kategori];
    const jumlah = sesi.daftarSoal.length;
    const nextBtn = document.getElementById(`next-${kategori}`);
    nextBtn.style.display = "block";

    if (sesi.indexSekarang + 1 >= jumlah) {
        nextBtn.textContent = `🎉 SELESAI ${jumlah} SOAL - KEMBALI KE MENU`;
    } else {
        nextBtn.textContent = `SOAL BERIKUTNYA (${sesi.indexSekarang + 2}/${jumlah}) ➔`;
    }

    // Pastikan tombol terlihat setelah menjawab (berguna di layar HP)
    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function lanjutSoal(kategori) {
    const sesi = sesiAktif[kategori];
    sesi.indexSekarang++;

    if (sesi.indexSekarang >= sesi.daftarSoal.length) {
        // Sesi selesai, kembali ke Menu Utama
        pindahHalaman('menu-utama');
    } else {
        tampilkanSoalSaatIni(kategori);
    }
}

// ----------------------------------------------------
// 3. CEK JAWABAN
// ----------------------------------------------------

// Untuk semua soal pilihan ganda. indeks = posisi tombol yang diklik (0, 1, 2)
function cekPilihan(kategori, indeks) {
    const sesi = sesiAktif[kategori];
    if (sesi.sudahJawab) return; // Kunci agar tidak bisa ganti jawaban
    sesi.sudahJawab = true;

    const soal = sesi.daftarSoal[sesi.indexSekarang];
    const feedback = document.getElementById(`feedback-${kategori}`);
    const tombol = document.getElementById(`pilihan-${kategori}`).children;

    const indeksBenar = sesi.opsi.findIndex(o => o.kunci === soal.jawabanBenar);
    const apakahBenar = (indeks === indeksBenar);

    if (apakahBenar) {
        beriEfekTombol(tombol[indeks], 'benar');
        formatKotakFeedback(feedback, soal.pesanBenar, true);
    } else {
        beriEfekTombol(tombol[indeks], 'salah');
        beriEfekTombol(tombol[indeksBenar], 'benar'); // Tunjukkan jawaban yang benar
        formatKotakFeedback(feedback, soal.pesanSalah, false);
    }

    tampilkanTombolLanjut(kategori);
}

// Untuk soal membandingkan. posisi = 'A' (kartu kiri) atau 'B' (kartu kanan)
function cekBandingkan(posisi) {
    const sesi = sesiAktif.bandingkan;
    if (sesi.sudahJawab) return;
    sesi.sudahJawab = true;

    const soal = sesi.daftarSoal[sesi.indexSekarang];
    const feedback = document.getElementById('feedback-bandingkan');

    // Ubah posisi di layar menjadi kunci asli di materi.js
    const kunciAsli = (p) => sesi.tukar ? (p === 'A' ? 'B' : 'A') : p;
    const posisiBenar = ['A', 'B'].find(p => kunciAsli(p) === soal.jawabanBenar);

    const tombolDari = (p) => document.getElementById(p === 'A' ? 'btn-banding-a' : 'btn-banding-b');

    if (posisi === posisiBenar) {
        beriEfekTombol(tombolDari(posisi), 'benar');
        formatKotakFeedback(feedback, soal.pesanBenar, true);
    } else {
        beriEfekTombol(tombolDari(posisi), 'salah');
        beriEfekTombol(tombolDari(posisiBenar), 'benar');
        formatKotakFeedback(feedback, soal.pesanSalah, false);
    }

    tampilkanTombolLanjut('bandingkan');
}