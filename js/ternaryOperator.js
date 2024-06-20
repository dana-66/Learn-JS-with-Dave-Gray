// conditionals : ternary operator 

// syntax:
// condition ? ifTrue : ifFalse ;

let soup = "chicken noodle soup";
let isCustomerBanned = true;

// let response = soup ? "Yes, we have soup." : "sorry, no soup";
// console.log(response);

// // this is an ex on chaining the ternary operator
let soupAccess = isCustomerBanned ? "sorry, No soup for you." : soup ? `yes, we have ${soup}.` : "sorry, out of soup.";
console.log(soupAccess);

// score system using ternary operator

let testScore = 9;

let myGrade = testScore > 89 ? "A" :
    testScore > 79 ? "B" :
        testScore > 69 ? "C" :
            testScore > 59 ? "D" :
                "F";

console.log(`my test grade is ${myGrade} .`);


// ternary operator to Rock - Paper - Scissors

let player = "paper";
let computer = "scissor";

let result =
    player === computer ? "it's a TIE !!!"
        : player === "rock" ? computer === "paper" ? "computer WINS" : "player WINS"

            : player === "paper" ? computer === "scissor" ? "computer WINS" : "player WINS"

                : computer === "rock" ? "computer WINS" : "player WINS";

console.log(result);

// a better version of this code is:

let results =
    player === computer
        ? "it's a TIE !!!"

        : player === "rock" && computer === "paper"
            ? "computer WINS"

            : player === "paper" && computer === "scissor"
                ? "computer WINS"

                : player === "scissor" && computer === "rock"
                    ? "computer WINS"

    : "player WINS!";

console.log(results);