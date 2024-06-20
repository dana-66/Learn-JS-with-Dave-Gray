// /*
//     input : from user num1 + num2
//     op: + , - , *, /
//     output: results + asking to play again.
// */

const init = () => {
    const startCal = confirm("Wanna calculate something?");
    startCal ? calculator() : alert("Maybe some other time.");
};

const calculator = () => {
    while (true) {
        let userInput = getUserInput();
        if (!userInput) {
            decidedNotToPlay();
            break;
        }
        const formattedInput = formatUserInput(userInput);
        if (!formattedInput) {
            invalidChoice();
            continue;
        }
        const { num1, op, num2 } = formattedInput;
        const result = calculationProcess(num1, op, num2);
        if (isNaN(result)) {
            alert("Invalid operation.");
        } else {
            displayResults(result);
        }
    }
};

const getUserInput = () => {
    return prompt("Enter the formula in this syntax: (num1 + num2 )");
};

const formatUserInput = (userInput) => {
    userInput = userInput.trim();
    const far = userInput.split(" ");
    if (far.length !== 3) {
        return null;
    }
    const num1 = parseFloat(far[0]);
    const op = far[1];
    const num2 = parseFloat(far[2]);
    return { num1, op, num2 };
};

const invalidChoice = () => {
    alert("Enter a valid formula.");
};

const decidedNotToPlay = () => {
    alert("I guess you've done all ur formulas.");
};

const calculationProcess = (num1, op, num2) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return NaN; // Division by zero
            }
            return num1 / num2;
        default:
            return NaN; // Invalid operation
    }
};

const displayResults = (result) => {
    alert("Result: " + result);
};

init();


// // /*
// //     input : from user num1 + num2
// //     op: + , - , *, /
// //     output: results + asking to play again.
// // */

// // // const operation = ["+", "-", "*", "/"];


// // // let userinput = "54 + 69 =";
// // // const far = userinput.split(" ");
// // // far.pop();
// // // console.log(far);
// // // let num1 = far.pop();
// // // let op = far.pop();
// // // let num2 = far.pop();

// const init = () => {
//     const startCal = confirm("wanna calculate something?");
//     startCal ? calculator() : alert("maybe some other time");
// };
// // calc flow 
// const calculator = () => {
    
//     while(true) {
//         let userInput = getUserInput();
//         userInput = formatUserInput(userInput);
//         if(userInput === "") {
//             invalidChoice();
//             continue;
//         }
//         if(!userInput){
//             decidedNotToPlay();
//             break;
//         }
//         const { num1, op, num2 } = formatUserInput(userInput);

//         // op = checkOperation(op);
//         const results = calculationProcess (num1, op, num2); 
//         displayResults(results);       

//     }
// };
// const getUserInput = () => {
//     const user = prompt("enter the formula in this syntax: (num1 + num2 = )");
//     return user;
// };

// const formatUserInput = (userInput) => {
//     const far = userInput.split(" ");
//     far.pop();
//     let num1 = far.pop();
//     let op = far.pop();
//     let num2 = far.pop();

//     // returned as an object
//     return {
//         num1: num1,
//         op: op,
//         num2: num2
//     };
// };

// const checkOperation = (op) => {
//     // const operation = ["+", "-", "*", "/"];
// };
// const invalidChoice= () =>{
//     alert("enter a valid formula...");
// }

// const decidedNotToPlay = () => {
//     alert("I guess u changed ur mind ....");
// };
// const calculationProcess = (num1, op, num2) => {
//     let result ;
//     switch(op) {
//         case "+": 
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             result = "invalid operation"
//     }
//     return result;
// };

// const displayResults = (result) => {
//     alert(result);
// };