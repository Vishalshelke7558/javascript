console.log("if_else");

// generally use to give alert to user
// when some information is not provided by user

const age = 10;
if(age == 10)
{
    console.log("Age is 10");
}
else if(age == 20)
{
    console.log("Age is 20");
}
else{
    console.log("Age is not 10");
}

const num = '65'
// here js not able to know difference between the
// datatype
if(num == 65)
{
    console.log("Number is 65");
}
else{
    console.log("Number is Not given");
}

// if we want to check the difference between the 
//datatype use === sign or !== used

const num_1 = '50'
if(num_1 === 50)
{
    console.log("num_1 is not 50")
}
else{
    console.log("num_1 is '50'")
}

// we can used to check any number is defined or not

//const var_1 = 5
if(typeof(var_1) !== 'undefined')
{
    console.log("var_1 is present");
}
else{
    console.log("var_1 is not present");
}

// we can check by bollean value also
const doesDrive  = true;
if(doesDrive){
    console.log("you can drive");
}
else{
    console.log("you can not drive");
}

// turnary operator
const num_2 = 45;
console.log(num_2 == 45? 'num_2 is 45':'num_2 is not 45');

//switch case
const num_3 = 45;
switch (num_3) {
    case 45:
        console.log("num_3 is 45");
        break;

    case 55:
        console.log("num_3 is 55");
        break;

    default:
        console.log("num_3 is not 55 and not 45");
        break;
}