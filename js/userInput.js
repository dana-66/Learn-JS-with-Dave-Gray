// user Input 

alert("and, just like that, im going numb");    // just displaying data 


confirm("Ok === True\nCancel === false");
let myBoolean = confirm("Ok === True\nCancel === false");
console.log(myBoolean);

let name = prompt("Enter you're name...");
// console.log(typeof name);
// console.log(name ?? "you didn't enter you're name");

// to make sure that the user enters data and not just click on "ok" btn we use an if statement to check for the length property cuz the prompt always returns a string value

// if (name.length) {
//     console.log(name ?? "you didn't Enter a name !!!");
// }else {
//     console.log ("you didn't enter your name.");
// }

// a better solution 
// if (name) { //here we are checking if name has a value
//     console.log(name);
// }else {
//     console.log ("you didn't enter your name.");
// }

// to get rid of the white space in the name to save space using the trim() method

if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}else {
    console.log ("you didn't enter your name.");
}