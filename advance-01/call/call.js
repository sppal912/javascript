function setUsername(username) {
    this.username = username
}
function createUser(username, email, password){
   setUsername.call(this, username)
    this.email = email
    this.password = password 
}
const profile = new createUser('souvik', 'souvik123@.com', '123')
console.log(profile)