// this is object littrel
// const user = {
//     name: 'souvik pal',
//     age: 29,
//     ocupation: 'full-Stack Web Developer',
//     getDetails: function() {
//         console.log(`My name is ${this.name} my age is ${this.age}, i am a ${this.ocupation}`)
//     },
//     getDeatils2: (()=> {        // Arrow function নিজের this তৈরি করে না। এটা বাইরের scope থেকে this নেয়। তাই এখানে this.name, this.age undefined হবে।
//         console.log(`My name is ${this.name} my age is ${this.age}, i am a ${this.ocupation}`)
//     })
// }
// console.log(user.name);
// console.log(user.getDetails());

// object oriented programing

// this is structure function 
// function user (user, islogin, loginCount){
//     this.user=user;
//     this.islogin=islogin;
//     this.loginCount=loginCount;
// }

// // we can edit code using this code we dont need to rewrite the same function
// const u1 = new user('souvik', true, 12) //new হলো JavaScript এর একটা keyword, যেটা দিয়ে constructor function বা class থেকে নতুন object তৈরি করা হয়। নতুন empty object বানায় this কে ওই নতুন object এর সাথে connect করে value assign করে
// const u2 = new user('pal', false, 8)
// console.log(u1)
// console.log(u2)

// prototype

let myName = 'souvik    ';

console.log(myName.trueLength)

let heros = ['thor', 'spidy', 'ironman']

let herosPower = {
    thor: 'hammer',
    spidy: 'sling',
    ironman: 'suit',

    getSpidyPower: function() {
        console.log(`spidy power is ${this.spidy}`)
    }
}

 Object.prototype.souvik = function(){
    // console.log(`souvik is present in all obj`)
 }
 herosPower.souvik()
 heros.souvik()

 const teacher = {
    makeVideo: true
 }

 const teachingSupport = {
    isAvl: false
 }

 const taSupport = {
    makeAssignment:  'js assignment',
    fullTime: true,
    __proto__: teachingSupport
 }

 const marge = Object.setPrototypeOf(teacher, taSupport)
 console.log(marge);
 