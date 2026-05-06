const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)  // this use case give you empty value

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt (document.querySelector('#height').value)
    const weight = parseInt (document.querySelector('#weight').value)
    const results  = document.querySelector('#results')
    if(isNaN(height) || height <= 0) {
        results.innerHTML = `please give a valid height ${height}`
    }else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `please enter a valid weight ${weight}`
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<pan> ${bmi} </pan>`;
    }

    if(results.innerHTML > 24.9) {
        results.innerHTML = `You are BMI is high ${results}`
    }
});