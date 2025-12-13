
let shoppingList = [];

/**
 * Fungsi untuk menampilkan (merender) daftar belanja ke dalam elemen <ul>.
 */
function renderList() {
    // 1. Kosongkan daftar yang ada di HTML terlebih dahulu
    const ulBelanja = document.getElementById("itemsBelanja");
    ulBelanja.innerHTML = ""; 

    // 2. perulangan untuk membuat <li> untuk setiap item dalam array
    for (const item of shoppingList) {
        const li = document.createElement("li");
        li.textContent = item;
        ulBelanja.appendChild(li);
    }

    // 3. Perbarui teks yang menampilkan jumlah item
    document.getElementById("jumlahItem").textContent = `Jumlah item: ${shoppingList.length}`;
}

/**
 * Fungsi untuk menambahkan item baru dari input ke daftar belanja.
 */
function tambahItem() {
    // 1. Ambil elemen input
    const inputElement = document.getElementById("newItem");
    // 2. Ambil nilai dari input dan hapus spasi di awal/akhir
    const itemText = inputElement.value.trim();

    // 3. Jika nilai tidak kosong, tambahkan ke array
    if (itemText !== "") {
        shoppingList.push(itemText);
        // 4. Kosongkan kembali input field
        inputElement.value = "";
        // 5. Panggil renderList untuk memperbarui tampilan
        renderList();
    }
}

/**
 * Fungsi untuk menghapus item terakhir dari daftar belanja.
 */
function hapusItemTerakhir() {
    // 1. Pastikan daftar tidak kosong sebelum menghapus
    if (shoppingList.length > 0) {
        // 2. Hapus item terakhir dari array
        shoppingList.pop();
        // 3. Panggil renderList untuk memperbarui tampilan
        renderList();
    }
}

renderList();