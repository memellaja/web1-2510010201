# web1-2510010201
Proyek Praktikum Pemrograman Web 1 UNISKA
# Sasirangan Banua

Situs web katalog UMKM kerajinan khas Kalimantan Selatan (fiktif) yang menampilkan koleksi kain, pakaian, dan aksesoris sasirangan bagi masyarakat umum maupun wisatawan. Situs web ini dibuat sebagai proyek **Praktikum Pemrograman Web 1**, Program Studi Teknik Informatika, Universitas Islam Kalimantan Muhammad Arsyad Al Banjari (UNISKA MAB).

**Demo langsung:** https://memellaja.github.io/web1-2510010201/

## Fitur

- Halaman beranda katalog dan formulir pemesanan yang responsif (ponsel, tablet, desktop)
- Katalog 16 produk dimuat secara asinkron dari `data/katalog.json` menggunakan Fetch API
- Pencarian produk secara langsung dan filter berdasarkan kategori (Semua, Kain, Pakaian, Aksesoris)
- Penanganan empat keadaan data (memuat, berhasil, kosong, dan gagal dengan tombol muat ulang)
- Validasi formulir pemesanan dengan JavaScript dan pengiriman ringkasan pesan ke WhatsApp
- Widget jadwal salat harian Kota Banjarmasin dari API publik Kemenag RI

## Teknologi

HTML5, CSS3 (Flexbox, Grid, media query), JavaScript (DOM, Fetch API, async/await), Git, dan GitHub Pages.

## Cara Menjalankan di Komputer

1. Salin (*clone*) repositori ini.
2. Buka foldernya di Visual Studio Code.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.

> Halaman harus dibuka melalui server (Live Server atau GitHub Pages), bukan dengan klik ganda berkas, karena `fetch()` tidak dapat membaca berkas JSON dari alamat `file://`.

## Sumber Data dan Gambar

- Jadwal salat: [API MyQuran](https://api.myquran.com) (data Kemenag RI)
- Gambar: Koleksi foto produk sasirangan lokal dan ilustrasi aset proyek

## Penggunaan AI

Penggunaan asisten AI dicatat di [LOG-AI.md](LOG-AI.md).

## Penulis

Rahmah Amilia Mulyani Putri · 2510010201 · Kelas 3D Reguler