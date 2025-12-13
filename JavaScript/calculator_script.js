function tambah() {
    // Ambil nilai dari input dan konversi ke tipe Number
    const angka1 = Number(document.getElementById('angka1').value);
    const angka2 = Number(document.getElementById('angka2').value);
    const hasilElement = document.getElementById('hasilKalkulasi');

    // Validasi input
    if (isNaN(angka1) || isNaN(angka2)) {
        hasilElement.textContent = "Error: Masukkan angka yang valid!";
        return; 
    }

    const hasil = angka1 + angka2;
    
    hasilElement.textContent = `Hasil: ${hasil}`;
}

function kurang() {
    const angka1 = Number(document.getElementById('angka1').value);
    const angka2 = Number(document.getElementById('angka2').value);
    const hasilElement = document.getElementById('hasilKalkulasi');

    if (isNaN(angka1) || isNaN(angka2)) {
        hasilElement.textContent = "Error: Masukkan angka yang valid!";
        return;
    }

    const hasil = angka1 - angka2;
    hasilElement.textContent = `Hasil: ${hasil}`;
}


function kali() {
    const angka1 = Number(document.getElementById('angka1').value);
    const angka2 = Number(document.getElementById('angka2').value);
    const hasilElement = document.getElementById('hasilKalkulasi');

    if (isNaN(angka1) || isNaN(angka2)) {
        hasilElement.textContent = "Error: Masukkan angka yang valid!";
        return;
    }

    const hasil = angka1 * angka2;
    hasilElement.textContent = `Hasil: ${hasil}`;
}


function bagi() {
    const angka1 = Number(document.getElementById('angka1').value);
    const angka2 = Number(document.getElementById('angka2').value);
    const hasilElement = document.getElementById('hasilKalkulasi');

    if (isNaN(angka1) || isNaN(angka2)) {
        hasilElement.textContent = "Error: Masukkan angka yang valid!";
        return;
    }

    // Penanganan khusus untuk pembagian dengan nol
    if (angka2 === 0) {
        hasilElement.textContent = "Error: Tidak bisa membagi dengan nol!";
        return;
    }

    const hasil = angka1 / angka2;
    hasilElement.textContent = `Hasil: ${hasil}`;
}