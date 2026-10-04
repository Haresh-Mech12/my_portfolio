let count = 0;

const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});