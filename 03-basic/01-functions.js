// function

function myName() {
    console.log('s')
    console.log('o')
    console.log('u')
    console.log('v')
    console.log('i')
    console.log('k')
}                               //basicly it's call function

// myName()    // this is the proces of calling any function

// type 1
function addTwoNumber(n1, n2) {
    // let result = n1 + n2     // method 1
    // return result

    return n1 + n2      // this is shortcut method 2
}

const result = addTwoNumber(2, 3)
// console.log('result:', result)

// type 2
function loggedInMassage(userName) {
    return`${userName} just logged in`
}
// console.log(loggedInMassage('souvik pal'))


// condition

function enterUserName(userName = 'radha') {
    if(!userName) {
        console.log(`plese enter user name`)
        return
    }
    return`${userName} wellcome back `
}
// console.log(enterUserName('souvik'))          // if statement if user name is empty then it return enter user name 



function calculateCartPrice(...n1) {
    return n1
}
// console.log(calculateCartPrice(200, 300, 400, 2000))

function calculateCartprice2(val1, val2, ...n1) {
    return n1
}
console.log(calculateCartprice2(200, 300, 400, 2000))


const user = {
    username: 'souvik',
    price: 199
}

function handelobj(anyobj) {
     console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
     
}
handelobj(user)