// or /* */

// data types:
// strings
"Dan"
'Danii'

// number
66
6.66

// boolean
true
false

// to know the type of a variable use the keyword "typeof"
typeof"Dana";   //string
typeof 66;      //number
typeof true;    //boolean
typeof false;   //boolean

// ctrl + l is used to clear the console window.
let my_variable;    //camel case
let myVariable1;

typeof myVariable1;     //undefined 

myVariable1 = "Dan";
typeof myVariable1;     //string

// because i've used the let keyword to initiate a variable i can reassign it.
myVariable1 = 66.6;


// mathematical operations:
44- 34; // the console reply with 10;

let myNumber = 66;
myNumber + 2;   //68
myNumber * 3;   //198
myNumber / 3;   //22

myNumber = (66 * 4)/3;    //88

my_variable = "Dan";
myNumber + myVariable1;   //154.6
myNumber + my_variable;  //88Dan

let combo = myNumber + my_variable;     //'88Dan'
typeof combo;   //'string'


// comparison:
let a = "6";
let b = 6;

// == : which does type coercion:
let myBool = a == b;     //true (it changed the type of b to a string).
myBool = a === b;    //false (type doesn't match)

// not equal != !==
myBool = a != b;   //false ,loosely (! =).
myBool = a !== b;   //true, strict (! ==).

myBool = a >= b;    //true
myBool = a > b;     //false

myBool = a <= b;    //true
myBool = a < b;     //false