console.log("loops");

// FOR LOOP
for(let i = 0; i < 5; i++)
{
    console.log(i);
}

// while loop
let j = 5;
while(j >= 0)
{
    console.log(j)
    j--;
}

// DO WHILE
let m = 0
do{
    console.log(m);
    m++;
}while(m <= 5);


// BREAK
for(let n = 0; n < 10 ; n++)
{
    if(n === 5){
        break; // loop exit at n == 5
        // After that we skip all the iterations
    }
    else{
        console.log(n);
    }
}

//CONTINUE

for(let k = 0; k <= 5; k++)
{
    if(k === 2)
    {
        continue; // we skip only one itreation
    }
    else{
        console.log(k);
    }
}

// FOREACH
let arr = [1,2,3,4,5,6];
arr.forEach(function(element){
    console.log(element);
    // we visit all the element by using forEach loop
})


// we can travel in the object by using for loop
let obj = {
    name: "Vishal",
    type: "Dengerous Programmer",
    technology: "Python"
}

for(let key in obj)
{
    console.log(`The ${key} of person is ${obj[key]}`);
}
// %{key} is used to print the code argument in the String


