class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username){
        super(username)
        this.email = this.email
        this.password = this.password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const xyz = new teacher('souvik', 'souvikpal123@', '123')
xyz.addCourse()