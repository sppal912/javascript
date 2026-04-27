 const marvelHeroes = ['Spider-Man', 'Iron Man', 'Thor', 'Hulk', 'Captain America'];
 const dcHeroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];

 const allHeros = [
    ...marvelHeroes, ...dcHeroes
 ]  // another way to merge arrays this is called spread operator it is used to expand the elements of an array into individual elements, this is morden way to merge arrays

 const allHeros2= marvelHeroes.concat(dcHeroes) // another way to merge arrays this is old way to merge arrays using concat method it is used to merge two or more arrays and returns a new array without modifying the original arrays

//  console.log(allHeros)
//  console.log(allHeros2)

const flat_multipulle_array = [[1,[10,25,35,22,6365,],6],45,67,89] 

const flat_array = flat_multipulle_array.flat() // this is used to flatten the array it is used to reduce the nesting of an array and returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

// console.log(flat_array)

// console.log(Array.isArray('souvik')); // this is used to check if the given value is an array or not it returns true if the value is an array and false if it is not an array
// console.log(Array.from('souvik')); // this is used to create a new array from an array-like or iterable object it returns a new array instance from the given object

let n1 = 100
let n2 = 200
let n3 = 300   

const numbers = [n1, n2, n3] // this is used to create an array of numbers using variables it is used to store multiple values in a single variable and access them using index
console.log(numbers)

console.log(Array.of(n1, n2, n3)) // this is used to create a new array with the given values it returns a new array instance with the specified values as elements

