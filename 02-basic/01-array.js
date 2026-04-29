//array

const myArray = [1, 2, 3, 4, 5]; 
const myHeros = ["Batman", "Superman", "Wonder Woman"];
const myArr2 = new Array (1, 2, 3, 4, 5);
// console.log(myArr2[1])
const myNewarr = myArray.push(6);
// console.log(myNewarr);
myArr2.pop();
myArr2.unshift(0);
// console.log(myArr2)
const myarr3 = myArr2.join();
// console.log(myarr3); 

//slice and splice

const myArray2 = [1, 2, 3, 4, 5]; // console.log(myArray2);
const myNewArr = myArray2.slice(1, 4); // slice(start, end) end is not included , sice never changes the original array
console.log(myNewArr);
// console.log('a ' + myArray2);

const myNewArr2 = myArray2.splice(1, 2); // splice(start, deleteCount, item1, item2, ...), splice changes the original array
// console.log(myNewArr2);
// console.log('b ' +  myArray2)
