// Fungsi untuk memeriksa nilai dan menentukan grade
function cekNilai() {
    // 1. Ambil elemen input berdasarkan ID
    const inputElement = document.getElementById("nilaiSiswa");
    
    // 2. Ambil nilai dari input dan konversi menjadi tipe data Number (angka)
    const nilai = Number(inputElement.value);

    // 3. Tentukan elemen tempat hasil akan ditampilkan
    const hasilElement = document.getElementById("hasilGrade");

    // 4. Gunakan logika if...else if...else untuk menentukan grade
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        // Jika nilai bukan angka (NaN) atau di luar rentang 0-100
        hasilElement.innerHTML = "Nilai tidak valid.";
        hasilElement.style.color = "red"; // untuk peringatan
    } else if (nilai >= 90) {
        hasilElement.innerHTML = "A (Sangat Baik)";
        hasilElement.style.color = "green"; //untuk nilai bagus
    } else if (nilai >= 80) {
        hasilElement.innerHTML = "B (Baik)";
        hasilElement.style.color = "green";
    } else if (nilai >= 70) {
        hasilElement.innerHTML = "C (Cukup)";
        hasilElement.style.color = "orange";
    } else if (nilai >= 60) {
        hasilElement.innerHTML = "D (Kurang)";
        hasilElement.style.color = "orange";
    } else { // Jika nilai antara 0-59
        hasilElement.innerHTML = "E (Gagal)";
        hasilElement.style.color = "red";
    }
}