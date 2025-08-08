const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('.height').value.trim());
    const weight = parseInt(document.querySelector('.weight').value.trim());
    const result = document.querySelector('.result');

    if (height <= 0 || isNaN(height)) {
        result.innerHTML = 'Please enter a valid Height';
    } else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter a valid Weight';
    } else if (height === '' || weight === '') {
        result.innerHTML = 'Please enter the details i think they are empty'
    } else {
        const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
        result.innerHTML = `Your BMI is ${BMI}`;
    }
})

