const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results')

    const guide = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please enter a valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please enter a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);
        if(bmi < 18.6) {
            results.innerHTML = `<p>Under Weight = <b>${bmi}</b></p>`
            guide.remove()
        } else if (bmi > 18.6 && bmi <= 24.9) {
            results.innerHTML = `<p>Normal Range = <b>${bmi}</b></p>`
            guide.remove()
        } else {
            results.innerHTML = `<p>Overweight = <b>${bmi}</b></p>`
            guide.remove()
        }
    }
})
