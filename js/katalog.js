const katalog = [
    {
        id: 1,
        nama: "Kain Motif Gigi Haruan",
        kategori: "kain",
        harga: 185000,
        gambar: "img/gigi-haruan.svg",
        deskripsi: "Kain katun 2 meter bermotif zig-zag menyerupai gigi ikan haruan."
    },
    {
        id: 2,
        nama: "Kain Motif Kambang Kacang",
        kategori: "kain",
        harga: 175000,
        gambar: "img/kambang-kacang.svg",
        deskripsi: "Motif bunga kacang yang melambangkan keakraban dan kerukunan."
    },
    {
        id: 3,
        nama: "Selendang Iris Pudak",
        kategori: "aksesoris",
        harga: 120000,
        gambar: "img/iris-pudak.svg",
        deskripsi: "Selendang ringan bermotif irisan daun pudak."
    },
    {
        id: 4,
        nama: "Kain Motif Naga Balimbur",
        kategori: "kain",
        harga: 200000,
        gambar: "img/naga-balimbur.svg",
        deskripsi: "Kain Sasirangan dengan motif khas Naga Balimbur."
    },
    {
        id: 5,
        nama: "Baju Sasirangan Pria",
        kategori: "pakaian",
        harga: 250000,
        gambar: "img/baju-pria.jpg",
        deskripsi: "Pakaian pria dengan sentuhan motif Sasirangan."
    },
    {
        id: 6,
        nama: "Baju Sasirangan Wanita",
        kategori: "pakaian",
        harga: 275000,
        gambar: "img/baju-wanita.jpg",
        deskripsi: "Pakaian wanita dengan motif khas Kalimantan Selatan."
    },
    {
        id: 7,
        nama: "Tas Sasirangan",
        kategori: "aksesoris",
        harga: 95000,
        gambar: "img/tas-sasirangan.jpg",
        deskripsi: "Tas dengan sentuhan kain tradisional Sasirangan."
    },
    {
        id: 8,
        nama: "Kain Motif Bayam Raja",
        kategori: "kain",
        harga: 190000,
        gambar: "img/bayam-raja.svg",
        deskripsi: "Kain Sasirangan dengan motif Bayam Raja."
    },
    {
        id: 9,
        nama: "Sepatu Motif Sasirangan",
        kategori: "aksesoris",
        harga: 220000,
        gambar: "img/sepatu-sasirangan.jpg",
        deskripsi: "Sepatu kasual kanvas dengan aksen kain Sasirangan khas Banjar."
    },
    {
        id: 10,
        nama: "Kopiah Sasirangan",
        kategori: "aksesoris",
        harga: 85000,
        gambar: "img/kopiah-sasirangan.jpg",
        deskripsi: "Peci atau kopiah bermotif Sasirangan yang nyaman dipakai sehari-hari."
    },
    {
        id: 11,
        nama: "Bros Etnik Sasirangan",
        kategori: "aksesoris",
        harga: 35000,
        gambar: "img/bros-sasirangan.jpg",
        deskripsi: "Aksesoris bros perca kain Sasirangan untuk pemanis pakaian dan hijab."
    },
    {
        id: 12,
        nama: "Dompet Pouch Sasirangan",
        kategori: "aksesoris",
        harga: 65000,
        gambar: "img/dompet-sasirangan.jpg",
        deskripsi: "Dompet serbaguna berlapis kain Sasirangan dengan resleting kuat."
    },
    {
        id: 13,
        nama: "Tunik Sasirangan Modern",
        kategori: "pakaian",
        harga: 285000,
        gambar: "img/tunik-sasirangan.jpg",
        deskripsi: "Tunik lengan panjang kombinasi katun polos dan motif Sasirangan."
    },
    {
        id: 14,
        nama: "Kemeja Batik Sasirangan Anak",
        kategori: "pakaian",
        harga: 165000,
        gambar: "img/baju-anak.jpg",
        deskripsi: "Kemeja anak berbahan katun adem dengan motif Sasirangan ceria."
    },
    {
        id: 15,
        nama: "Outer Cardigan Sasirangan",
        kategori: "pakaian",
        harga: 235000,
        gambar: "img/outer-sasirangan.jpg",
        deskripsi: "Outerwear kasual tanpa kancing berbahan katun motif Sasirangan modern."
    },
    {
        id: 16,
        nama: "Dress Midi Sasirangan",
        kategori: "pakaian",
        harga: 310000,
        gambar: "img/dress-sasirangan.jpg",
        deskripsi: "Gaun midi elegan dengan perpaduan motif tradisional khas Banjar."
    }
];

const daftarKatalog = document.querySelector("#daftar-katalog");
const inputCari = document.querySelector("#cari");
const tombolFilter = document.querySelectorAll(".tombol-filter");
const infoJumlah = document.querySelector("#info-jumlah");

let kategoriAktif = "semua";

function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}
function buatKartu(produk) {
    const kartu = document.createElement("article");
    kartu.className = "product-card";

    const gambar = document.createElement("img");
    gambar.src = produk.gambar;
    gambar.alt = produk.nama;
    gambar.width = 600;
    gambar.height = 400;
    gambar.loading = "lazy";

    const wadahGambar = document.createElement("div");
    wadahGambar.className = "product-image";
    wadahGambar.append(gambar);

    const isi = document.createElement("div");
    isi.className = "product-info";

    const label = document.createElement("span");
    label.className = "label-kategori";
    label.textContent = produk.kategori;

    const judul = document.createElement("h3");
    judul.textContent = produk.nama;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = produk.deskripsi;

    const harga = document.createElement("p");
    harga.className = "price";
    harga.textContent = formatRupiah(produk.harga);

    isi.append(label, judul, deskripsi, harga);
    kartu.append(wadahGambar, isi);

    return kartu;
}

function tampilkanKatalog(daftarProduk) {
    if (!daftarKatalog) return;
    daftarKatalog.replaceChildren();

    if (daftarProduk.length === 0) {
        const kosong = document.createElement("p");
        kosong.textContent = "Produk tidak ditemukan. Coba kata kunci lain.";
        daftarKatalog.append(kosong);
    }

    daftarProduk.forEach((produk) => {
        daftarKatalog.append(buatKartu(produk));
    });

    if (infoJumlah) {
        infoJumlah.textContent =
            `Menampilkan ${daftarProduk.length} dari ${katalog.length} produk`;
    }
}

function saringKatalog() {
    const kataKunci = inputCari.value.trim().toLowerCase();

    const hasil = katalog.filter((produk) => {
        const cocokKategori =
            kategoriAktif === "semua" ||
            produk.kategori === kategoriAktif;

        const cocokKata =
            produk.nama.toLowerCase().includes(kataKunci) ||
            produk.deskripsi.toLowerCase().includes(kataKunci);

        return cocokKategori && cocokKata;
    });

    tampilkanKatalog(hasil);
}
if (inputCari) {
    inputCari.addEventListener("input", saringKatalog);
}

tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", () => {
        kategoriAktif = tombol.dataset.kategori;

        tombolFilter.forEach((t) => {
            t.classList.remove("aktif");
            t.setAttribute("aria-pressed", "false");
        });

        tombol.classList.add("aktif");
        tombol.setAttribute("aria-pressed", "true");

        saringKatalog();
    });
});
tampilkanKatalog(katalog);