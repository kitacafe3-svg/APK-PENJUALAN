let totalHarga = 0;
let total = document.getElementById("total");

// menyimpan jumlah produk
let keranjang = {
    "Nasigoreng"    : 0,
    "ayamgeprek"    : 0,
    "miegoreng"     : 0,
    "kentang"       : 0,
    "tahu"          : 0,
    "kopisusu"      : 0,
    "esteh"         : 0
};

function tambah(nama, harga) {
    keranjang[nama]++;
    totalHarga += harga;

    document.getElementById("qty-" + nama).textContent = keranjang[nama];
    total.textContent = totalHarga;
}

function kurang(nama) {
    if (keranjang[nama] > 0) {
        let harga = getHarga(nama);
        keranjang[nama]--;
        totalHarga -= harga;

        document.getElementById("qty-" + nama).textContent = keranjang[nama];
        total.textContent = totalHarga;
    }
}

function getHarga(nama) {
    if (nama === "Nasigoreng") return 15000;
    if (nama === "ayamgeprek") return 18000;
    if (nama === "miegoreng") return 13000;
    if (nama === "kentang") return 10000;
    if (nama === "tahu") return 8000;
    if (nama === "kopisusu") return 12000;
    if (nama === "esteh") return 5000;
    
}

function checkout() {
    if (totalHarga === 0) {
        alert("Belum ada produk yang dibeli!");
    } else {
        alert("Checkout berhasil!\nTotal bayar: Rp " + totalHarga);
        location.reload();
    }
}
