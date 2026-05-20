class User {
    constructor(UserName, email, password){
        this.UserName = UserName
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}@souvik`
    }
    changeUsername(){
        return `${this.UserName.toUpperCase()}`
    }
}
const profile = new User('souvik', 'souvik91@gmail.com', '123')
console.log(profile)
console.log(profile.changeUsername())
console.log(profile.encryptPassword())

