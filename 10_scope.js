console.log("scope");

// SCOPE
let i = 1234;
console.log(i);

function info(name)
{
    let i = 9;
    return `my name is ${name}`;
}

console.log(info("vishal"),i);
// it gives 1234 due to scope of i with in
// the function is limited
// if we remove the let from i inside the function then it will 
// give 9