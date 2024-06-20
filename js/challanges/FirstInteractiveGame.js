
let playGame = confirm("shall we play Rock - Paper - Scissors ?");
if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissor.");

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        // here we are checking the input if its the required words
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor") {
            // the game logic
            // the computer is generating a random number 
            let computerRan = (Math.floor(Math.random() * 3 + 1));

            let computer = computerRan === 1 ? "rock" : computerRan === 2 ? "paper" : "scissor";

            // the game 
            let results =
                playerOne === computer
                    ? "it's a TIE !!!"

                    : playerOne === "rock" && computer === "paper"
                        ? "computer WINS"

                        : playerOne === "paper" && computer === "scissor"
                            ? "computer WINS"

                            : playerOne === "scissor" && computer === "rock"
                                ? "computer WINS"

                                : "player WINS!";

            alert(results);
            // asking for a re-play
            let playAgain = confirm("play again ?");
            playAgain ? location.reload() : alert("ok, thanks for playing. ");
        } else {
            alert("you didn't enter rock , paper, or scissors");
        }
    } else {
        alert("I guess you changed your mind. maybe next time >:");
    }

} else {
    alert("ok,maybe next time :(");
}
