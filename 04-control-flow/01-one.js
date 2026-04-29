
// < is = less then
// > is = grater then
// <= is = less then OR equal
// >= is = grater then OR equal
// == is = equal check
// != is = not equal
// === is = strict equal check 
// !== is = strict not equal
// || is = or , in this case only one true needed
// && is = both true, in this case all condition is true needed
// ?? is = Nullish Coalescing Operator it is avoid null and undefind value


const isUserLoggedIn = true
const temp = 55
const userLoggedIn = true
const userNotLoggedIn = false
const debitCard = true
const googleLoggedIn = true
const emailLoggedIn = false

if (temp === 50){
console.log(`temperature is to high dont go out side`)
}else {
    console.log(`temperature is ${temp} it is  normal`)
}

if (temp > 50) {
    let sug = 'temp is high'// this will give you error
    console.log(`you will be burn out now temperature is ${temp}`)
}else{
    console.log(`you can go out side temperature is ${sug} which is normal`)
}

console.log(`you can go out side temperature is ${sug} which is normal`)   

if (temp < 50) {
    console.log(`less than 50`)
}else if (temp < 60) {
    console.log(`less than 60`)
} else if (temp < 70) {
    console.log(`less than 70`)
}else {
    console.log(`you have ${temp} which is more then enought`)
} 

if (userLoggedIn && debitCard && true) {
    console.log(`you can buy`)
}else{
    console.log(`you can't buy any thing`)
}

if (googleLoggedIn || emailLoggedIn) {
    console.log(`user logged in`)
}else{
    console.log(`plese login `)
} 

// Nullish Operator (??)

let val1;
val1 = 5 ?? 10  // it return first number
val1 = null ?? 10  // it return 10
val1 = undefined ?? 15  // it return 15
val1 = null ?? 5 ?? 15  // it return first number

// console.log(val1)


// terniary Operator
 let price = 100

 price <= 80 ? console.log(`price less than 80`) : console.log(`price more then 80`)