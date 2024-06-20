// // if statement
// let customerIsBanned = false;
// let crackers = true;
// let soup = "chicken noodle soup";
// let reply;

// if (customerIsBanned) {
//     reply = "you ain't gettin no soup hun !";
// } else if (soup && crackers) {

//     reply = `Here is your order of ${soup} and crackers`;

// }
// else if (soup) {

//     reply = `Here is your order of ${soup}`;

// } else {

//     reply = "sorry we're out of soup for today !!";
// }

// console.log(reply);

// // in the template literal is delimited  by a backticks





// example #2: test exams (the waterfall)

let testScore = 56;
let collegeStudent = true;
let grade;


if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    }else{
        grade = "F";
    }
    
}

console.log(grade);