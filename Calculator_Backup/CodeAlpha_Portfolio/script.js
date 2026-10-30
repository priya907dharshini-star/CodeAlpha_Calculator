// Mobile Navigation

function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");
}

// Automatic Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Navigation Menu Close

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});