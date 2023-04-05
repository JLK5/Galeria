function showOverlay() {
    //pokazuje zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "flex"
}

function hideOverlay() {
    //ukrywa zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "none"
}
document.getElementById("bigPictureImg").addEventListener("click", showOverlay);
document.getElementById("fullScreenImg").addEventListener("click", hideOverlay);