// var, let, and const

var x = 1;
let y = 3;
const z = 5;

// scopes
// global scope:

var a = 1;
let b = 2;
const c = 3;


// local scope:
// 1- block scope
{
    let y = 66;
    console.log(`the value of y inside a block scope is :  ${y}`);
}

// 2- function scope
function localScope () {
    let y = 12;
    return y;
}

console.log(`the value of global y is ${y}`);
console.log("the value of y inside the function scope :  "+localScope());
console.log(`the value of global y is ${y} 
(after calling the function)`);

// a block scope inside a function
function secEx () {
    let y = 33;
    console.log(y);

    {
        let y = 22;
        console.log(y)
    }

    console.log(y);
}

secEx()
console.log(y);


// examples

var e = 1;
let d = 2;
const f = 3;

console.log(`global: ${e}`);
console.log(`global: ${d}`);
console.log(`global: ${f}`);
console.log("\n");

function myFunc() {

    var e = 10;
    const f = 30;

    console.log(`function: ${e}`);
    console.log(`function: ${d}`);
    console.log(`function: ${f}`);
    console.log("\n");

    {
        var e = 100;    //function scoped not block scoped

        console.log(`block: ${e}`);
        console.log(`block: ${d}`);
        console.log(`block: ${f}`);
        console.log("\n");
    }

    console.log(`function: ${e}`);
    console.log(`function: ${d}`);
    console.log(`function: ${f}`);
}

myFunc()
