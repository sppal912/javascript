document.getElementById('fh') // we select html by thear id

// document.getElementById('fh');
// <h1 id=​"fh" class=​"foo h1" style=​"color:​ red;​ padding:​ 50px;​ background-color:​ black;​ text-align:​ center;​">​ Hi! i am learning DOM ​</h1>​ 

// document.getElementById('fh').className;
// 'h1'

// document.getElementById('fh').classList;
// DOMTokenList ['h1', value: 'h1']0: "h1"length: 1value: "h1"[[Prototype]]: DOMTokenList

//  document.getElementById('fh').getAttribute;
// ƒ getAttribute() { [native code] }

//  document.getElementById('fh').getAttribute('id');
// 'fh'

//  document.getElementById('fh').getAttribute('class');
// 'h1'

//  document.getElementById('fh').getAttribute('tag');
// null

//  document.getElementById('fh').setAttribute('class', 'foo h1');
// undefined

// const title = document.getElementById('fh');
// title


// <h1 id=​"fh" class=​"foo h1" style=​"color:​ red;​ padding:​ 50px;​ background-color:​ black;​ text-align:​ center;​">​ Hi! i am learning DOM ​</h1>​
// title.style.color = 'red';
// 'red'

// title.style.padding = '50px';
// '50px'

// title.style.backgroundColor = 'black';
// 'black'

// title.style.textAlign = 'center';

// title.style.color = 'red';
// 'red'


document.getElementsByClassName('h') // we select html by thear class name
document.querySelector('h1') // it is select like  css if tag 'h1' 
document.querySelector('#h1') // it is select id 
document.querySelector('.h1') // it is select class 
document.querySelectorAll('li')  // it select all li 
as.forEach(a => {               // querySelectorAll have node list dont have map forEach method only way to style
  a.style.color = 'red'
});

document.getElementsByClassName('heading').setAttribute('class', 'heading h1'); // we add more class, id  in any html containt
firstheading.style.color = 'red'; // we add inline css into html element // id name.style.color = 'red'; // our h1 color is change to red

Array.from(cn); // it convart into array which is look like array but not like html collection and node list

const firstheading = document.getElementById('firstheading');
const Dbtn = document.getElementById('Dbtn');

Dbtn.addEventListener('click', () => {
    firstheading.textContent = 'You clicked me ??'
});     // textContent is best for any thing text change to web page it is safe and first

