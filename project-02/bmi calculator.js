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
        
        let message = ""
        let color = ''

        if (bmi < 18.6) {
            message = "(Underweight)"
            color = 'orange'
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message = "(Normal)"
            color = 'green'
        } else {
            message = "(High)" 
            color = 'red'       
        }
        results.innerHTML = `<span style="color:${color}"> Your BMI is ${bmi} ${message} </span>`;   
    }
});