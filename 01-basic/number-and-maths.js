//numbers

const score = 700 // primitive value, not an object
console.log(score) // console.log(score.length) // undefined

const balance = new Number(100) // balance is an object, not a primitive value
console.log(balance) // console.log(balance.length) // undefined, because balance is an object, not a primitive value

console.log(balance.toString().length) // balance is an object, so we can use methods like toString() to convert it to a string, and then we can use length property on the string
console.log(balance.toFixed(2)) // balance is an object, so we can use methods like toFixed() to format it as a string with a specific number of decimal places

const precisionNumber = 129.12345678901234567890 // JavaScript can only handle up to 15-17 decimal places, so the number will be rounded to 129.12345678901234
console.log(precisionNumber.toPrecision(4)) // toPrecision() method formats a number to a specified length, including the decimal point and digits. In this case, it will round the number to 4 significant digits, resulting in 129.1

const hundred = 1000000 // console.log(hundred.toLocaleString('en-IN')) // 10,00,00,00,000
console.log(hundred.toLocaleString('en-IN')) // 10,00,000   


Math 

console.log(Math); // Math is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions. It is not a function, so we cannot call it like a function. Instead, we can use its properties and methods to perform mathematical operations.

console.log(Math.PI); // Math.PI is a property of the Math object that represents the ratio of the circumference of a circle to its diameter, approximately equal to 3.14159.

console.log(Math.round(4.7)); // Math.round() is a method of the Math object that rounds a number to the nearest integer. In this case, it will round 4.7 to 5.

console.log(Math.floor(4.7)); // Math.floor() is a method of the Math object that rounds a number down to the nearest integer. In this case, it will round 4.7 down to 4.

console.log(Math.ceil(4.2)); // Math.ceil() is a method of the Math object that rounds a number up to the nearest integer. In this case, it will round 4.2 up to 5.

console.log(Math.random()); // Math.random() is a method of the Math object that returns a random floating-point number between 0 (inclusive) and 1 (exclusive). Each time you call Math.random(), it will generate a different random number.

console.log(Math.random() * 10); // To get a random number between 0 and 10, you can multiply the result of Math.random() by 10. This will give you a random floating-point number between 0 (inclusive) and 10 (exclusive).

console.log(Math.floor(Math.random() * 10)); // To get a random integer between 0 and 9, you can use Math.floor() to round down the result of Math.random() multiplied by 10. This will give you a random integer between 0 (inclusive) and 10 (exclusive).  

console.log(Math.min(1,2,4,8,6,3,4)) // Math.min() is a method of the Math object that returns the smallest of zero or more numbers. In this case, it will return 1, which is the smallest number among the arguments provided.

console.log(Math.max(1,2,4,8,6,3,4)) // Math.max() is a method of the Math object that returns the largest of zero or more numbers. In this case, it will return 8, which is the largest number among the arguments provided.

const min = 1
const max = 100
const randomNum = (Math.floor(Math.random() * (max - min + 1)) + min) // To get a random integer between a specific range (inclusive), you can use the formula: Math.floor(Math.random() * (max - min + 1)) + min. In this case, it will give you a random integer between 1 and 100 (inclusive).
console.log(randomNum)