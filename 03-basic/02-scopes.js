let num = 300       // this is global scopes

if (true) {
    let num = 30
    let num2 = 40
    let num3 = 50
    // console.log('inner:', num)
}                   // this is block scope

// console.log(num)

function one() {
    const username = 'souvik'
    function two(){
        const website = 'youtube'
        console.log(username)
        console.log(website)
    }
    two()
}
// one()

const myName = 'souvik'
if (myName === 'souvik'){
    const website = ' youtube'
    // console.log(myName + website)
}

// ++++++++++++++ interesting +++++++++++++++++++

console.log(addone(5)) // this function execute able
function addone(num){
    return num + 1
}

console.log(addTwo(5))  //this function is not execute able because it is packed with a varriable 
const addTwo = function(num){
    return num + 2
}

 