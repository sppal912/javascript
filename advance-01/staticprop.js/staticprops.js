class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

     static createId(){
        return `123`
    }
}

const souvik = new User('souvik pal')
// console.log(souvik.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const myteacher = new Teacher('souvik', 'souvik@google.com')
console.log(myteacher)
myteacher.logMe()