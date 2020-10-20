let body = document.querySelector('body');
let button = document.querySelector('button');
let rgb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e']
button.addEventListener('click', () => {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += rgb[Math.floor(Math.random() * rgb.length)];
        body.style.backgroundColor = hex;
    }
})