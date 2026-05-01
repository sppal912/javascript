// filter

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const newNums = number.filter( (num) => num > 5)  // filter automatic value return kora kono return ba clg likta hoy na
const newNums1 = number.filter( (num) => {return num > 5})  // jodi scop on kora hoy {} lagia tahola return likta hoba
// console.log(newNums)
// console.log(newNums1)

// this is like a json value when we call a api, api gives data like this 
const books = [
    { title: 'book1', genre: 'history', publish: 1987, edition: 2010 },
    { title: 'book2', genre: 'science', publish: 1902, edition: 1997 },
    { title: 'book3', genre: 'history', publish: 1957, edition: 2014 },
    { title: 'book4', genre: 'science', publish: 1966, edition: 2010 },
    { title: 'book5', genre: 'Non-fiction', publish: 1957, edition: 2018 },
    { title: 'book6', genre: 'fiction', publish: 1991, edition: 2016 },
    { title: 'book7', genre: 'geography', publish: 2000, edition: 2016 },
    { title: 'book8', genre: 'fiction', publish: 1999, edition: 2020 },
    { title: 'book9', genre: 'geography', publish: 1966, edition: 2019 }
]
// we use filter in demo api data
const userFilter = books.filter((bk) => bk.genre === 'geography')
console.log(userFilter)

const userFilter1 = books.filter( (bk) => { return bk.edition === 2016 && bk.genre === 'geography'})
console.log(userFilter1)


// const myobj = {
//     name: 'souvik',
//     age: 29,
//     add: 'elachi kumor para 1st lane', 
//     ocupation: 'full-stack Developer'
// }

// let objToArray = Object.values(myobj) 
// console.log(objToArray)