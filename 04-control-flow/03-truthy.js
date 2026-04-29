// falsy values 

// false, 0, -0, BigInr 0n, '', null, undefined, NaN

// truthy values

// '0', "false", " ", [], {}, function() 

const userName = []
const userName1 = []

if (userName) {
    console.log(`got user email`)
}else {
    console.log(`don't have user email`)
}

if (userName.length === 0) {
    console.log(`array is empty`)
}
if (Object.keys(userName1).length === 0) {
    console.log(`obj is empty`)
}

