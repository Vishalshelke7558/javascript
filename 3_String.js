console.log("we are studing string");

const name = "vishal";
const greeting = "good morning";
console.log(greeting+" "+ name); // string concat

let html;
html = "my name is vishal ";

html =  html.concat('i am ','from avcoe'); 
// use to add string after existing string
console.log(html);

console.log(html.length);
// gives length of string

console.log(html.toLowerCase());
// convert string into lowercase

console.log(html.toUpperCase());
// convert string into uppercase

console.log(html[0]);
// print perticular index element

console.log(html.indexOf('v'));
// gives index of the from the fromt

console.log(html.lastIndexOf('o'));
// gives index from last

console.log(html.charAt(3));
// gives character at perticular index

console.log(html.endsWith('avcoe'));
// gives answer in the form of true and false

console.log(html.includes('from'));
// gives answer in the form of true and false

console.log(html.substring(0,2));
// gives substrings from perticular index

console.log(html.slice(0,5));
//  gives character at perticular index

console.log(html.split(' '));
// it breaks our string into number of elements and add it into array

console.log(html.replace('my','your'));
// it replace perticular part of string by another string

// template leateral
// use to generate html in js
let fruit1 = "orange";
let fruit2 = "apple";
let myhtml = `Hello ${name}
              <h1> This is heading </h1>
              <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myhtml; 





