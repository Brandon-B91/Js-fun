function counter() {
    let countNumber = document.querySelector('#counter');
    let count = 0;

    let prevBtn = document.querySelector('.prevBtn');
    prevBtn.addEventListener('click', () => {
        count--
        countNumber.textContent = count;
        if (count < 0) {
            countNumber.style.color = 'red';
        } else if (count === 0) {
            countNumber.style.color = 'black';
        }
    })
    let nextBtn = document.querySelector('.nextBtn');
    nextBtn.addEventListener('click', () => {
        count++
        countNumber.textContent = count;

        if (count > 0) {
            countNumber.style.color = 'green';
        } else if (count === 0) {
            countNumber.style.color = 'black';
        }
    })

}
counter()