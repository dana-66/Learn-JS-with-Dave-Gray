// Math methods and properties

console.log(Math.PI);//3.141592653589793
console.log(Math.trunc(Math.PI));   //3

console.log(Math.round(3.4));   //3
console.log(Math.round(3.5));   //4

console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));


console.log(Math.pow(2, 4));     //16
console.log(Math.pow(2, 10));    //1024

console.log(Math.min(4, 5, 3245));  //4
console.log(Math.max(5, 64, 364));  //364

console.log(Math.random());//0.8060698371255408

// to get a random number from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); console.log(Math.floor(Math.random() * 10) + 1); console.log(Math.floor(Math.random() * 10) + 1); console.log(Math.floor(Math.random() * 10) + 1); console.log(Math.floor(Math.random() * 10) + 1); console.log(Math.floor(Math.random() * 10) + 1);


// Math.floor(Math.random() * (max - min + 1)) + min
const min = 3;
const max = 10;

function ran(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i< 20; i++){
console.log(ran(min,max));
}
