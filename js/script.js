const navCollapseBtn = document.getElementById("navCollapseBtn");

const barIcon = document.getElementById("barIcon");
const crosIcon = document.getElementById("crosIcon");
const navList = document.getElementById("navList");

navCollapseBtn.addEventListener("click", () => {

    // Show-hide navList
    navList.classList.toggle("hidden");

    // Show-hide nav collapse button
    if (barIcon.style.display === 'none') {
        barIcon.style.display = 'block';
        crosIcon.style.display = 'none';
    } else {
        barIcon.style.display = 'none';
        crosIcon.style.display = 'block';
    };
})