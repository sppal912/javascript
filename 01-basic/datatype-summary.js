// Primitive
// 7 types : string, number, boolean, null, undefined, symbol, bigint

// non primitive

// array, objects, functions
const id = Symbol('123')
const aid = Symbol('123')
// console.log(id == aid)

const bignumber = 64565169651n

const heros = ['ram','sam','jadu'] // this is array
let myobj ={
    name: 'souvik',
    age: 29
}// this is object 

const myFunc = function(){
    console.log('helo world')
} // this is function  
// console.log(typeof bignumber)   

// ******************************************** Memory allocation in js ********************************************
// Primitive data types are stored in stack memory and non-primitive data types are stored in heap memory.
let a = 10
let b = a // here value of a is copied to b and stored in stack memory
b = 20 // here value of b is changed but value of a is not changed because they are stored in different memory location
// console.log(a) // 10
// console.log(b) // 20

let arr1 = [1,2,3]
let arr2 = arr1 // here reference of arr1 is copied to arr2 and both are pointing to same memory location in heap memory
arr2.push(4) // here we are changing the value of arr2 but it will also change the value of arr1 because both are pointing to same memory location
// console.log(arr1) // [1,2,3,4]
// console.log(arr2) // [1,2,3,4]