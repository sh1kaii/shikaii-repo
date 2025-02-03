document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (newPassword === confirmPassword) {
        message.textContent = 'Passwords match!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Passwords do not match!';
        message.style.color = 'red';
    }
});
