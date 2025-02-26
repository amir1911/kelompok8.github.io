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


