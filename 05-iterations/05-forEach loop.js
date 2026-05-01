const coding = ['js', 'ruby', 'java', 'python', 'cpp']      // forEach loop in array
// type 1

coding.forEach( (item) => {console.log(item)}) // step 1. take array,   // step 2. use .forEach,     // step 3. use arrow function () => {},     // step 4. use () and take any name (item),  // step 5. use console.log(item)   

// type 2

const printMe = (item) => {
	console.log(item);
}

coding.forEach(printMe)

// type 3

coding.forEach( (oh, ya, no) => {console.log(oh, ya, no)})      // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// forEach loop in obj between array [ {}, {}, {} ]
const arr = [
    {
        lngName: 'javascript',
        lngFileName: 'js'
    },
    {
        lngName: 'python',
        lngFileName: 'py'
    },
    {
        lngName: 'java',
        lngFileName: 'java'
    }
]

arr.forEach( (item) => {console.log(`language name is ${item.lngName} and language file name is ${item.lngFileName}`)})

