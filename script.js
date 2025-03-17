// Ambil elemen
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("hamburger-menu");
const menuIcon = menuToggle.querySelector("i");

// Toggle menu saat tombol diklik
menuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("active");

    // Ubah ikon menu saat aktif/tidak
    if (menu.classList.contains("active")) {
        menuIcon.setAttribute("data-feather", "x");
    } else {
        menuIcon.setAttribute("data-feather", "menu");
    }

    // Perbarui ikon dengan feather.replace()
    feather.replace();
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const description = this.previousElementSibling; // Ambil elemen <p> sebelumnya
            description.classList.toggle("show");

            // Ubah teks tombol sesuai kondisi
            if (description.classList.contains("show")) {
                this.textContent = "Sembunyikan Deskripsi";
            } else {
                this.textContent = "Tampilkan Deskripsi";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const description = this.nextElementSibling;
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block";
                this.textContent = "Sembunyikan Deskripsi";
            } else {
                description.style.display = "none";
                this.textContent = "Tampilkan Deskripsi";
            }
        });
    });
});



