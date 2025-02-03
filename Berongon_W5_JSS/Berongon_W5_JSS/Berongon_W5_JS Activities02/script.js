const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    if(input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
});

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        button.click();
    }
});