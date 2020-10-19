let body = document.querySelector('body');
let btn = document.querySelector('button');
let colors = ['red', 'blue', 'green', 'purple', 'orange', 'green']

btn.addEventListener('click', () => {
    const colorIndex = Math.floor(Math.random() * 6)
    body.style.backgroundColor = colors[colorIndex];
})