//Typecasting


// to string typecasting
let myvar = 34;
console.log(typeof myvar); // number

myvar = String(myvar); // we did typecasting here
console.log(typeof myvar); // String


let boolenvar = true;
console.log(typeof boolenvar); //boolean
boolenvar = String(boolenvar);
console.log(typeof boolenvar); //string

let arr = [1,2,3,4];
console.log(typeof arr); // object
console.log(arr.length) // number of object in array

arr = String(arr);
console.log(typeof arr); // String
console.log(arr.length) // number of character in array

//to number typecasting
let str1 = "4234";
console.log(typeof str1); // String

str1 = Number(str1);
console.log(typeof str1); // Number


let number =  '34';
number = parseInt(number) // typecating into number
console.log(number, typeof(number)); // 34 number

let number1 = 34.2541478;
console.log(number1.toFixed(4)) // to print upto perticular decimal

// Type Coercion

let mystr = "698";
let mynum =  34;
console.log(mystr + mynum);

