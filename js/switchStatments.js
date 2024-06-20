// syntax:
// switch (experssion OR value) {
//     case choice1 : 
//         // run this code
//         break;
    
//     case choice 2 :
//         //run this other code
//         break;
    
//     // run as many cases as needed

//     default:
//         // run this code if no cases match
//         // no need for a break statement 
// }

// switch (2) {

//     case 2:
//         console.log("it matches and its data type is number");
//         break;
    
//     case "2":
//         console.log("it matches and its data type is string");
//         break;
    
//     default:
//         console.log("NO MATCH !!");

// }
// // in switch statements its a strict match meaning data types must match.

// switch (Math.floor((Math.random() * 5) + 1)) {
//     case 1 :
//         console.log(1);
//         break;
    
//     case 2 :
//         console.log(2);
//         break;

//     case 3: 
//         console.log(3);
//         break;
    
//     default:
//         console.log("no match !");
// }


// the Rock - Paper - Scissors game using switch statement

let computer = "rock";
let player = "scissors";

switch (player) {
    
    case computer:
        console.log("it's a TIE !!!");
        break;

    case "rock":
        if(computer === "paper") {
            console.log("computer Wins");
        }else {
            console.log("player WINS");
        }
        break;

    case "paper":
        if (computer === "scissors") {
            console.log("computer WINS");
        }else {
            console.log("player WINS");
        }
        break;

    default:
        if (computer === "rock" ){
            console.log("computer WINS");
        }else {
            console.log("player WINS");
        }
}
