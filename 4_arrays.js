// arrays
const marks = [95,20,35,40,45,90];
const fruits = ["orange", "mango","pineapple"];
const mixed = ["str",15,"vishal"]
const arr = new Array('vishal', 'shelke');
// various syntax of arrays

console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);

console.log(fruits[0]);
// print the elemet at index 0;

console.log(arr.length) // property
// gives the number of element in the array

console.log(Array.isArray(arr)); // method
// gives answer in the form of true and false

arr[0] = "kt"; 
console.log(arr);
// we can replace the element of array

console.log(marks);
let value = marks.indexOf(95);
console.log(value);
// gives the index of perticular numner

marks.push(34);
marks.unshift(20); // similar to the push but add element from front
console.log(marks);
// it add the element at the end of the array

marks.pop()
marks.shift() //similar to the pop but remove the element form the front
console.log(marks);
// remove one elemet from the end

marks.splice(1,2);
console.log(marks);
// it remove 2 elemet starting forom index 1;

marks.reverse()
console.log(marks);

