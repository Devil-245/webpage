const menuButton = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hambn');

menuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('show');
    if (menuButton.textContent === '🗙') {
        menuButton.textContent = '☰'; // Replace 'Original Text' with your original text
    } else {
        menuButton.textContent = '🗙';
    }
});


function playBackgroundMusic() {
    const themeMusic = document.getElementById('themeMusic');
    if (themeMusic.paused) {
        themeMusic.play();
    }
}
document.addEventListener('DOMContentLoaded', playBackgroundMusic);
document.addEventListener('click', playBackgroundMusic);
