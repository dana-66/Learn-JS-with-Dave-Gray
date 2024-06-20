// create a simple Rock paper and scissors game (Tree Decision Thinking)

let playerOne = "rock";
let computer = "rock";
let score;
// checking for tie
if (playerOne === computer) {
    score = "it's a TIE !!";
}else if (playerOne === "rock") {
    if (computer === "paper") {
        score = "computer Wins";
    }else {
        score = "Player one Wins";
    }
}else if (playerOne === "paper") {
    if (computer === "scissor") {
        score = "computer Wins";
    }else {
        score = "player one Wins";
    }
}else {
    if(computer === "rock"){
        score = "computer WINS";
    }else {
        score = "player one wins";
    }
}
console.log(score);