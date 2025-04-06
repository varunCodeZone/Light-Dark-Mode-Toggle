let image = document.getElementById('image');
let lightModeButton = document.getElementById('light-mode-button');
let darkModeButton = document.getElementById('dark-mode-button');
let body = document.body;
let isLightMode = true;

lightModeButton.addEventListener('click', () => {
    image.src = 'sun.jpg';
    lightModeButton.style.border = '2px solid cyan';
    lightModeButton.style.background = 'cyan';
    lightModeButton.style.color = '#000';
    darkModeButton.style.border = '2px solid cyan';
    darkModeButton.style.background = 'transparent';
    darkModeButton.style.color = 'cyan';
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    isLightMode = true;
});

darkModeButton.addEventListener('click', () => {
    image.src = 'moon.jpg';
    lightModeButton.style.border = '2px solid cyan';
    lightModeButton.style.background = 'transparent';
    lightModeButton.style.color = 'cyan';
    darkModeButton.style.border = '2px solid cyan';
    darkModeButton.style.background = 'cyan';
    darkModeButton.style.color = '#000';
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    isLightMode = false;
});