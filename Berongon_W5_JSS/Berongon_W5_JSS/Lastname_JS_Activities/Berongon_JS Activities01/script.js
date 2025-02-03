const countDisplay = document.querySelector('div');
const button = document.querySelector('button');

let count = 0;

button.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});