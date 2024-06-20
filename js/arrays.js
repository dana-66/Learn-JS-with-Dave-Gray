// Arrays

const myArray = [];

// adding elements to it
myArray[0] = "Dan";
myArray[1] = 69;
myArray[2] = true;

// refer to an array;
console.log(myArray);

// properties:
console.log(myArray.length);

//last element in the array
console.log(myArray[myArray.length -1]); 

// refer to any element inside the array via its position
console.log(myArray[1]);


// add elements or remove
const A1 = ["MC", 66, false,69];
myArray.push(A1);
console.log(myArray);

myArray.pop();
console.log(myArray);

// we can store the last popped item 
let lastItem = myArray.pop();
console.log(lastItem);

// add element to the start of the array
myArray.unshift(69);
// to remove form the front of the array
myArray.shift();

// from a position 
delete myArray[1];      //not recommended
console.log(myArray[1]);

myArray.splice(1,1);

// to replace that value:
myArray.splice(1,1, 66);
myArray.splice(1,0,69); //this is to add a value before pos 1
console.log(myArray);

// slice method:
const A = ['A','B','C','D','E','F'];
console.log(A);
let A2 = A.slice(2,5);
console.log(A2);

// reverse method:
A.reverse();
console.log(A);

// join 
const newString = A.join();

const newA = newString.split(",");
console.log(newString);
console.log(newA);

// concat method

const B1 = ['A', 'B', 'C'];
const B2 = ['D', 'E', 'F'];

const B = B1.concat(B2);

console.log(B1);
console.log(B2);
console.log(B);

// newer way

const BB = [...B1,...B2];   //spread operator
// const BB = [B1,B2];
// const BB = [...B1, B2];
// const BB = [...B1];
console.log(BB);

// nested Arrays

const equipShelfA = ["baseball","football","volleyball"];
const equipShelfB = ["basketball","golf balls","tennis balls"];

const clothesShelfA = ["tanks tops","T-shirts", "jerseys"];
const clothesShelfB = ["sweat tops","T-sweat pants", "hoodies"];


console.log(equipShelfA[1]);
console.log(clothesShelfB[2]);

// 2-D array
const equipDept =[equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);       //to access football
console.log(clothesDept[1][2]);     //to access hoodies

//3-D array
const sportStore = [equipDept,clothesDept];
console.log(sportStore);
console.log(sportStore[1][1][2]);  //hoodies
