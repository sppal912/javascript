// singleton pattern

// Object littrel

const key1 = Symbol('key1')

const jsUser = {
    name: "Souvik",
    age: 25,
    isLoggedIn: false,
    location: 'india',
    email: 'souvikp972@gmail.com',
    password: 'souvik123',
    loginDays: ['monday', 'saturday'],
    [key1]: 'key1'
}

// console.log(jsUser.email)
// console.log(jsUser['email']) 
// console.log(jsUser.loginDays[0])
// console.log(jsUser[key1])

//  jsUser.name = 'ram' // in this methourd we can change name in side the obj
// //  Object.freeze(jsUser) // we freeze this object jsUser becuse we don't want to change object key's
//  jsUser.name= 'sayam' // after freeze we can't change name which is inside of the object
//  console.log(jsUser)

jsUser.greeting = function() {
    console.log(`hello js user`)
}
jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())