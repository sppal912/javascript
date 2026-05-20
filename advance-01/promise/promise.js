// // const createPromise = new Promise((resolve, reject) => {
// //      setTimeout(function(){
// //         console.log('Async task is conplete')
// //         resolve()
// //     },2000)
// // })

// // await createPromise.then(function(){
// //     console.log(('promise consumed'))
// // })

// // const promise2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('async task 2')
// //         resolve()
// //     }, 1000);
// // })

// // await promise2.then(()=>{
// //     console.log('async 2 resolved')
// // }).catch((err) => {
// //     console.log(err)
// // })

// const promise3 = new Promise((resolve, reject) => {
//     resolve({user: 'souvik pal', age: 29, email: 'souvikp972@gmail.com'})
// },1000)
// await promise3.then((user) => {
//     console.log(user)
// })

// // const promise4 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject(new Error('Something went wrong'))
// //     }, 1500);
// // })
// // await promise4.then(() => {
// //     console.log('promise 4 resolved')
// // }).catch((err) => {
// //     console.log(err.message)
// // }).finally(() => {
// //     console.log(`finally block executed`)
// // })

// // const promise5 = new Promise((resolve, reject) => {
// // setTimeout(() => {
// //     let err = true
// //     if (!err) {
// //         resolve({user: 'js', password:'123'})
// //     } else {
// //         reject('Failed to fetch user data')
// //     }
// // }, 1000);
// // })

// async function fetchUserData() {
//     try {
//         const userData = await promise3
//         console.log(userData)
//     } catch (err) {
//         console.log(err)
//     }
// }
// fetchUserData()

async function getDetails() {
    try {
        const apiCall = await fetch('https://api.github.com/users/sppal912');
    const dataProcess = await apiCall.json();
    return dataProcess
    } catch (error) {
        console.log('ERROR 404 REQUEST NOT FOUND', error)
    }
}
getDetails().then((data) => {
    console.log(data.login)
    console.log(data.id)
})