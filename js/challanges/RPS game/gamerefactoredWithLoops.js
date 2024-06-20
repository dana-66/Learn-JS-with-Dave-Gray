// Rock - paper - scissors game : Refactored with loops and arrays.
let playGame = confirm("shall we play rock, paper, or scissors ?");

if (playGame) {
    // play
    while (playGame) {
        const playerChoice = prompt("please enter rock, paper, or scissors...");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const RPS_Array = ["rock", "paper", "scissors"];
                const computer = RPS_Array[computerChoice];

                const result = 
                playerOne === computer 
                ? "Tie Game !!!"

                :playerOne === "rock" && computer === "paper"
                ? `player: ${playerOne}\ncomputer: ${computer}\ncomputer WINS !!!`

                :playerOne === "paper" && computer === "rock"
                ? `player: ${playerOne}\ncomputer: ${computer}\nplayer WINS !!!`

                :playerOne === "scissors" && computer === "paper" 
                ? `player: ${playerOne}\ncomputer: ${computer}\nplayer WINS !!!` 
                : `player: ${playerOne}\ncomputer: ${computer}\ncomputer WINS !!!`;

                alert(result);
                playGame = confirm("play again ? ");
                if (!playGame) alert("ok, thanks for playing :)");
                continue;
            } else {
                alert("you didn't enter rock, paper, or scissors :( ");
                continue;
            }
        } else {
            alert("I guess you changed your mind :(");
            break;
        }
    }
} else {
    alert("i guess maybe some other time :(");
}
