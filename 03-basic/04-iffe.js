// (iife) Immediately invoked function expressions 

(function chai(){       // named iife
    console.log(`db connected`)
})();
( () => {
    console.log(`db conneted two`)
})();
( (name) => {
    console.log(`db conneted two ${name}`)
})('souvik')