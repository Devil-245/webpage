const menuButton = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hambn');

menuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('show');
    if (menuButton.textContent === '🗙') {
        menuButton.textContent = '☰'; 
    } else {
        menuButton.textContent = '🗙';
    }
});
