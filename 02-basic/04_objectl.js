// single turn object

const tinderUser = new Object()  // this is single turn object hear we can store only 1 value like name: 'souvik'

// non single turn object

const user = {}
user.name = 'souvik',
user.isLoggedIn = false,
user.id = 'souvik91'

// console.log(user)

const facbookUser = {
    email: 'sovuik9875@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'souvik',
            lastname: 'pal'
        }
    }
}

// console.log(facbookUser.fullname.userfullname.firstname) // dot lagia nesting open kora hoy

const obj1 = {1: 's', 2: 'o'}
const obj2 = {3: 'u', 4: 'v'}
const obj3 = {5: 'i', 6: 'k'}

const obj4 = Object.assign({}, obj1, obj2, obj3) // not in use right now as well

// console.log(obj4)

const obj5 = {...obj1, ...obj2, ...obj3} // mostly recomended use for join all objects using spread oporater

// console.log(obj5)

 const users = [
    {
        id:1,
        email:'souvik@gmail.com'
    },
    {
        id:1,
        email:'souvikpal@gmail.com'
    },
    {
        id:1,
        email:'souviksouvik@gmail.com'
    },
    {
        id:1,
        email:'souvik91@gmail.com'
    }
 ]
console.log(users[3].email) 
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('isLoggedIn'))