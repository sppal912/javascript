const user = {
    userName: 'souvik',
    price: 999,
    website: function (){
        console.log(`${this.userName} , welcome to website`)
    }
}
user.userName = 'surojit'
// user.website()

const chai = function(){    //this is normal function
    let userName = 'souvik'
    console.log(this.userName)
}
// chai()

const chai1 = ()=> {        // this is arrow function
    let myName = 'souvik'
    console.log(this.myName) 
}
// chai1()

// arrow function 

const addn = (n1,n2) => {       // normal arrow function type 1
    return n1 + n2
}
// console.log(addn(6, 7))

const addn2 = (n1, n2) => n1 + n2   // arrow function type 2
// console.log(addn2(5, 3))

const addn3 = (n1, n2) => (n1 + n2)
// console.log(addn3(55, 64))

const addn4 = (n1 = 0, n2 = 0) => ({ username: 'souvik pal', sum: n1 + n2 })        // {} paranthasas is for obj 
console.log(addn4(5,5))

