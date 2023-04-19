function init() {
    let imageList = document.querySelectorAll("div#thumbnailRoll img");
for(let i = 0; i < imageList.length; i++) {
    imageList[i].src = getRandomImageUrl();
}

document.querySelector("div#bigPicture img").src = imageList[0].src

let thumbnailList = document.querySelectorAll("div#thumbnailRoll img");
for(let i = 0; i < thumbnailList.length; i++) {
    thumbnailList[i].addEventListener('click', thumbnailClick);
}
}
function showOverlay() {
    let url = document.querySelector("div#bigPicture img").src;
    document.querySelector("div#fullScreenOverlay img").src = url;
    //pokazuje zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "flex"
}

function hideOverlay() {
    //ukrywa zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "none"
}
function getRandomFromRange(min, max) {
        //losujemy wartość z zakresu <0;1>
        let random = Math.random();
        //wyliczamy losową szerokość według kryteriów
        let range = max - min;
        //losowa liczba z zakresu 0-600
        let randomFromRange = random * range;
        //zaokrąglamy do liczby całkowitej
        randomFromRange = Math.round(randomFromRange)
        random = randomFromRange + min
        return random;
}
function getRandomImageUrl() {
    const minWidth = 1900;
    const maxWidth = 2500;
    let randomWidth = getRandomFromRange(minWidth, maxWidth);
    const minHeight = 900;
    const maxHeight = 1200;
    let randomHeight = getRandomFromRange(minHeight, maxHeight);
    let url = "https://picsum.photos/" + randomWidth + "/" + randomHeight;
    return url; 
}
function thumbnailClick(event) {
    let url = event.srcElement.src;
    document.querySelector("div#bigPicture img").src = url;
}
function getNextImageURL() {

}
window.addEventListener("load", init);
document.getElementById("bigPicture").addEventListener("click", showOverlay);
document.getElementById("fullScreenOverlay").addEventListener("click", hideOverlay);


