document.addEventListener("click", function (e) {
    const link = e.target.closest("#nav-links .nav-link");
    if (!link) return;

    const navLinks = document.querySelectorAll("#nav-links .nav-link");
    const contactBox = document.querySelector(".leave");
    navLinks.forEach(l => l.classList.remove("active"));
    contactBox?.classList.remove("active-leave");
    
    // Contact
    if (link.parentElement.parentElement.classList.contains("leave")) {
        contactBox?.classList.add("active-leave");
    } else {
        link.classList.add("active");
    }
});
function leaveSite() {
    window.location.replace("/Pharmacy-Management-ProjectOnline/index.html");
}
