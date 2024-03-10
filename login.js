function ch() {
    const username = document.getElementById('un').value;
    const pw = document.getElementById('pw').value;
    if (username === "guest" && pw === "123")  {
        document.write("Login Success. \n <br> You are now being redirected.");
        window.open("https://aniwave.to", "_blank");
    } else {
        alert("Wronggggg");
    }
}

function playBackgroundMusic() {
    const themeMusic = document.getElementById('themeMusic');
    if (themeMusic.paused) {
        themeMusic.play();
    }
}
document.addEventListener('DOMContentLoaded', playBackgroundMusic);
document.addEventListener('click', playBackgroundMusic);

var imgElement = document.querySelector('.img-container img');
var cssLink = document.getElementById("stylesheet");

function removeChoppaStyles() {
    document.body.classList.remove('choppa-styles');
}

document.getElementById('luffybtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'luffy.png';
    document.body.style.backgroundImage = 'url(luffybg.jpg)';
});

document.getElementById('zorobtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'zoro.jpg';
    document.body.style.backgroundImage = 'url(zorobg.jpg)';
});

document.getElementById('sanjibtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'sanji.jpg';
    document.body.style.backgroundImage = 'url(sanjibg.jpg)';
});

document.getElementById('robinbtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'robin.jpg'; 
    document.body.style.backgroundImage = 'url(robinbg.jpg)';
});

document.getElementById('ussopbtn').addEventListener('click', function() {    
    removeChoppaStyles();
    imgElement.src = 'ussop.jpg'; 
    document.body.style.backgroundImage = 'url(ussopbg.jpeg)';
});

document.getElementById('choppabtn').addEventListener('click', function() {
    cssLink.setAttribute("href", 'login-deafult.css');
    imgElement.src = 'choppa.jpg';
    document.body.style.backgroundImage = 'url(choppabg.jpg)';
    document.body.classList.toggle('choppa-styles');
});

document.getElementById('jinbeibtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'jinbei.png'; 
    document.body.style.backgroundImage = 'url(jinbeibg.jpg)';
});

document.getElementById('brookbtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'brook.jpg'; 
    document.body.style.backgroundImage = 'url(brookbg.jpg)';
});

document.getElementById('frankybtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'franky.jpg'; 
    document.body.style.backgroundImage = 'url(frankybg.jpg)';
});

document.getElementById('namibtn').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'nami.png';
    document.body.style.backgroundImage = 'url(namibg.jpg)';
});

document.getElementById('deafult').addEventListener('click', function() {
    removeChoppaStyles();
    imgElement.src = 'img_avatar.png';
    document.body.style.backgroundImage = 'url(deafult.jpg)';
});
