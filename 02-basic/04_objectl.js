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
// console.log(users[3].email) // it will 4th place obj email return 
// console.log(Object.keys(user))
// console.log(Object.values(user)) // it will return all value inside the key // [ 'souvik', false, 'souvik91' ]
// console.log(Object.entries(user)) // it will do this [ [ 'name', 'souvik' ], [ 'isLoggedIn', false ], [ 'id', 'souvik91' ] ]
// console.log(user.hasOwnProperty('isLoggedIn')) // in this method we find any key inside of a object


const seller = {
    shopName: 'RKD',
    ownerName: 'Gora chand pal',
    products: 'Puja items',
    shopCatagory: 'Dashakarma'
}

// object Destructuring 
const {shopName} = seller // If we want call shop name from the object then we have console.log(seller.shopName) But this old style and outdated, Now this style is new style and 90% developer use this
console.log(shopName) // This is the shortest method We don't have to put seller dot Shop name Just write shop name And the shop name will be appear

