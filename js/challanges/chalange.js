//challenge

// write a code that will return a random letter from your name:

const name = "Dana tarik";
var n = name.length;

randomIndex = Math.floor((Math.random() * (n))) ;

console.log("your random number is : "+ name.charAt(randomIndex));
