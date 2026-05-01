// filter

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const newNums = number.filter( (num) => num > 5)  // filter automatic value return kora kono return ba clg likta hoy na
const newNums1 = number.filter( (num) => {return num > 5})  // jodi scop on kora hoy {} lagia tahola return likta hoba
console.log(newNums)
console.log(newNums1)