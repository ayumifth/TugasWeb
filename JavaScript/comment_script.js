const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');
const errorComment = document.getElementById('errorComment');

submitComment.addEventListener('click', function() {
    // Ambil nilai dari textarea dan bersihkan spasi di awal/akhir
    const commentText = commentInput.value.trim();

    // Bersihkan pesan kesalahan sebelumnya
    errorComment.textContent = '';

    // Jika komentar kosong atau kurang dari 5 karakter
    if (commentText === '' || commentText.length < 5) {
        errorComment.textContent = 'Komentar tidak boleh kosong dan harus memiliki minimal 5 karakter.';
        return; 
    }

    // Buat elemen div utama untuk item komentar
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    // Buat elemen paragraf untuk menampilkan teks komentar
    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;

    // (Lebih Lanjut) Buat tombol "Hapus"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.className = 'delete-btn';

    // Tambahkan event listener ke tombol hapus untuk menghapus komentar induknya
    deleteButton.addEventListener('click', function() {
        commentItem.remove(); 
    });

    // Susun elemen-elemen: tambahkan paragraf dan tombol ke dalam div komentar
    commentItem.appendChild(commentParagraph);
    commentItem.appendChild(deleteButton);

    // Tambahkan item komentar yang baru dibuat ke dalam daftar komentar
    commentList.appendChild(commentItem);

    // 5. Kosongkan kembali textarea setelah komentar berhasil dikirim
    commentInput.value = '';
});