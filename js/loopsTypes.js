// // While loop

// let num = 50;

// while (num < 50) {
//     console.log(num);
//     num ++; //add 1 to the variable
  
// }

// // DON'T CREATE AN INFINITE LOOP 


// // Do - While loop:
// do {
//     console.log(num); 

// } while(num < 50);

// // for loop:
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let name = "Dan";

// for (let i = 0; i < name.length; i++) {
//     console.log(name.charAt(i));
// }

let myName = "Dashin";
let counter = 0;
let myLetter ;

while (counter <= 6) {
    myLetter = myName[counter];
    console.log(myLetter);

    if (counter === 1) {
        counter += 2;
        continue;
    }

    if (myLetter === "n") break;
    counter++;
    }   //D a h i n 
    // the console ignored or skipped the counter = 2 part cuz of the continue statement