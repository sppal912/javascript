// const reqUrl = 'https://api.github.com/users/sppal912'
// const xhr = new XMLHttpRequest();
// xhr.open('GET', reqUrl)
// xhr.onreadystatechange = function() {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText);
//         console.log(data.login)
//         console.log(data.url)
//         console.log(data.followers)
//         console.log(data)
//     }
// }
// xhr.send();

const avater = document.querySelector('.avatar')
const name = document.querySelector('.profileName')
const followers = document.querySelector('.followersNumber')
const profileLink = document.querySelector('.profileUrl')

const reqUrl = 'https://api.github.com/users/sppal912'
const xmr = new XMLHttpRequest()
xmr.open('GET', reqUrl)
xmr.onreadystatechange = function () {
    const data = JSON.parse(this.responseText)
    if (xmr.readyState === 4) {
        console.log(data)
        avater.src = data.avatar_url;
        name.textContent = data.login;
        followers.textContent = data.followers;
        profileLink.href = `https://github.com/${data.login}`
    }

}
xmr.send()