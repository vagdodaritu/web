
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

document.getElementById("menuBtn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.getElementById("closeNotice").addEventListener("click", function () {
    document.getElementById("notice").style.display = "none";
});

document.querySelectorAll(".question").forEach(function (button) {
    button.addEventListener("click", function () {
        const answer = button.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

const slides = [
    "Welcome to our website!",
    "JavaScript makes websites interactive.",
    "Thank you for visiting!"
];

let currentSlide = 0;

function showSlide() {
    document.getElementById("slide").textContent = slides[currentSlide];
}

document.getElementById("nextBtn").addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
});

document.getElementById("prevBtn").addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
});

document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});
