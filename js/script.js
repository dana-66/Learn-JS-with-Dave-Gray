// console.log("Hello World!");
// console.log(typeof "Dan");
// console.log(typeof 64);
// console.log(typeof true);


const myVariable = "Mathematics" ;

// the length property:
// console.log(myVariable.length); //11
// console.log("this also works".length);  //15

// // string methods:
// console.log(myVariable.charAt(6));
// console.log(myVariable.indexOf("at"));  //1
// console.log(myVariable.lastIndexOf("at"));  //6

// console.log(myVariable.slice(2,7)); //thema
// console.log(myVariable.slice(2));//thematics
// console.log(myVariable.slice(5,2));//will return nothing

console.log(myVariable.toUpperCase());


console.log(myVariable.includes("ath"));    //true
console.log(myVariable.includes("athd"));    //false

console.log(myVariable.split("e")); //['Math', 'matics']
console.log(myVariable.split(""));  //['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']

console.log("Dan, Kenan, Dareen, Osama".split(","));//['Dan', ' Kenan', ' Dareen', ' Osama']