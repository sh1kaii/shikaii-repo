document.getElementById('dateForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const result = document.getElementById('result');

    if (isNaN(startDate) || isNaN(endDate)) {
        result.textContent = 'Please select valid dates.';
        result.style.color = 'red';
        return;
    }

    if (endDate < startDate) {
        result.textContent = 'End date must be after the start date.';
        result.style.color = 'red';
        return;
    }

    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    result.textContent = `The difference is ${differenceInDays} day(s).`;
    result.style.color = 'green';
});
