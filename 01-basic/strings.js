// const name = 'souvik'
// const repoCount = 50

//  console.log(name + repoCount + 'value') // this is old way of doing string concatenation

// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) // this is the new way of doing string concatenation using template literals
// const gameName = 'chess' // this is how we can create a string object using the String constructor
// console.log(gameName) // this will print the string object
// console.log(gameName.toUpperCase()) // this will print the string in uppercase
// console.log(gameName.length) // this will print the length of the string
// console.log(gameName[0]) // this will print the first character of the string
// console.log(gameName[1]) // this will print the second character of the string
// console.log(gameName[2]) // this will print the third character of the string
// console.log(gameName[3]) // this will print the fourth character of the string
// console.log(gameName[4]) // this will print the fifth character of the string
// console.log(gameName[5]) // this will print undefined as there is no character at index 5
// console.log(Object.getPrototypeOf(gameName)) // this will print the prototype of the string object
// console.log(gameName.charAt(2)) // this will print the character at index 2
// console.log(gameName.indexOf('e')) // this will print the index of the first occurrence of 'e' in the string
// console.log(gameName.lastIndexOf('e')) // this will print the index of the last occurrence of 'e' in the string
// console.log(gameName.includes('ch')) // this will print true if the string includes 'ch' and false otherwise
// console.log(gameName.startsWith('ch')) // this will print true if the string starts with 'ch' and false otherwise
// console.log(gameName.endsWith('ss')) // this will print true if the string ends with 'ss' and false otherwise
// console.log(gameName.slice(0, 4)) // this will print the substring from index 0 to index 4 (excluding index 4)
// console.log(gameName.slice(-4, 5)) // this will print the substring from index 0 to index 4 (excluding index 4)
// console.log(gameName.substring(0, 4)) // this will print the substring from index 0 to index 4 (excluding index 4)
// console.log(gameName.substr(0, 4)) // this will print the substring from index 0 to index 4 (excluding index 4)

// const letterReplace = gameName.replace('ch', 'sh') // this will replace the first occurrence of 'ch' with 'sh' in the string
// console.log(letterReplace) // this will print the new string after replacement
// console.log(gameName) // this will print the original string as strings are immutable in JavaScript

// const newString = '   hello world   ' // this is a string with leading and trailing whitespace
// console.log(newString.trim()) // this will remove the leading and trailing whitespace from the string
// console.log(newString.trimStart()) // this will remove the leading whitespace from the string
// const trimmedEnd = newString.trimEnd() + ' souvik' // this will remove the trailing whitespace from the string
// console.log(trimmedEnd)

// const multiLineString = `hello
// world
// this is a multi-line string` // this is a multi-line string using template literals
// console.log(multiLineString.includes('hello')) // this will print true if the string includes 'hello' and false otherwise
// console.log(multiLineString.split('&'))
// let splitString = multiLineString.split('-') // this will split the string into an array of substrings using the newline character as the separator
// console.log(splitString) // this will print the array of substrings