// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Menghilangkan preloader dan menampilkan konten utama setelah beberapa detik
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        const mainContent = document.querySelector('.main-content');
        
        // Menghilangkan preloader dengan animasi
        preloader.style.opacity = 0;

        // Menampilkan konten utama setelah preloader menghilang
        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1000); // Sesuaikan waktu ini dengan durasi animasi preloader
    }, 3000); // Durasi preloader tampil
});

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector('.falling-flowers').appendChild(flower);

    // Menghapus bunga setelah animasi selesai
    setTimeout(() => {
        flower.remove();
    }, 5000); // Sesuaikan waktu ini dengan durasi animasi CSS
}

// Membuat bunga setiap interval waktu
setInterval(createFlower, 300);
