//  for in loop

 const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
 }

 for (const key in myobj) {
    console.log(key, ':->', myobj[key]);
 }

 const plng = ['js', 'rb', 'py', 'java', 'cpp']
 for (const key in plng) {
    console.log(plng[key])
    console.log(key)
    
 }