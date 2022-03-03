console.log("functions");
// FUNCTIONS

function gm(name,thank) {
    console.log(`Good Morning ${name} !!! ${thank}`)
    // this function does not returen any thing
}

function sum(a,b)
{
    let sum_1 = a + b;
    return sum_1;
    // this function return some value
}


function msg() {
    let msg_1 = "Very Good Morning";
    return msg_1;
    // This function returns string
}

let person_1 = 'vishal';
let person_2 = 'kt'
console.log(`Good Morining ${person_1}`);
console.log(`Good Morining ${person_2}`);


gm(person_1,"Thank You"); // Function call

let val = sum(5,10); // function call
console.log(val)

let msg_2 = msg() // function call
console.log(msg_2);


// We can return the function from the object also
const obj = {
    name : "vishal",
    type: function()
    {
        return "Pro Programmer";
    }
}

console.log(obj.type());


// we can travel inside the array by using the function
arr = [1,2,3,4,5];
arr.forEach(function(elemant,index){
    console.log(elemant,index);
})

