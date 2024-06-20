const num = 66;
const floaty = 66.04;
const floaty1 = 66.0;
const stringy = "66";
const stringy1 = "45.948dt"

// console.log(num);
// console.log(floaty);

console.log(num === floaty);    //false
console.log(num === floaty1);   //true
console.log(num === stringy);   //false
console.log(stringy + 5);       //665

console.log(Number(stringy) + 5);   //71
console.log(Number(stringy) === num); //true

console.log(Number("Dan")); //NaN : not a number
console.log(Number(undefined)); //NaN

console.log(Number(true));  //1
console.log(Number(false));  //0


console.log(Number.isInteger(num)); //true
console.log(Number.parseFloat(stringy1));//45.948

console.log(floaty1.toFixed(1));    //66.0 as a string
console.log((Number.parseFloat(stringy1)).toFixed(2));  //string 45.95
console.log(Number((Number.parseFloat(stringy1)).toFixed(2)));  //45.95 number data type

console.log(Number.parseInt(floaty));  //66
console.log(Number.parseInt(stringy1)); //45

console.log(floaty.toString());


// chaining : using several methods together
console.log(Number.parseFloat("35.8974dana").toFixed(2).toString()); //35.90
// in the example above: there is no need for toString() method because toFixed returns a string :)

console.log(Number.isNaN(stringy)); //false
console.log(Number.isNaN(num)); //false

console.log(Number.isNaN("56"));   //false


console.log(Number.isNaN("Hello")); // false
console.log(isNaN("Hello"));        // true
