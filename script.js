document.addEventListener('DOMContentLoaded', () => {
    const block = document.getElementById("myBlock");
const openBtn = document.querySelectorAll(".btn");
const closeBtn = document.querySelector(".close")
block.style.display = "none";


openBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        block.style.display = "flex"
    })
})

closeBtn.addEventListener("click", () => {
    block.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === block) {
        block.style.display = "none";
    }
});
})
