// rock - paper - scissors game refactored with functions

// initiating the game function
const initGame = () => {
    const startGame = confirm("shall we play rock, paper, or scissors ?");
    startGame ? playGame () : alert("ok, maybe some other time. ");
};

// Game Flow function
const playGame = () => {
    while(true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice (playerChoice);

        if(playerChoice === "") {
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice) {
            invalidChoice();
            continue;
        }

        const computerChoice = getComputerChoice();
        const results = determineWinner(playerChoice, computerChoice);
        displayResults(results);

        if (AskToPlayAgain()) {
            continue;
        }else{
            thanksForPlaying();
            break;
        }
    }       
};

const getPlayerChoice = () => {
    return prompt("Enter rock, paper, or scissors");
};

const formatPlayerChoice = (choice) => {
    return (choice || choice === "") ?  choice.trim().toLowerCase(): false;
};

const invalidChoice = () => {
     alert("you didn't enter a rock, paper, or scissors...");
};

const decidedNotToPlay = () => {
     alert("i guess you changed your mind :( ");
}

const evaluatePlayerChoice = (playerChoice) => {
    return (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")? playerChoice : false;
    
};

const getComputerChoice = () => {
    const random =Math.floor(Math.random() * 3) ;
    const RPS = ["rock", "paper", "scissors"];
    return RPS[random];
};

const determineWinner = (player, computer) => {
    const result = 
                player === computer 
                ? "Tie Game !!!"

                :player === "rock" && computer === "paper"
                ? `player: ${player}\ncomputer: ${computer}\ncomputer WINS !!!`

                :player === "paper" && computer === "rock"
                ? `player: ${player}\ncomputer: ${computer}\nplayer WINS !!!`

                :player === "scissors" && computer === "paper" 
                ? `player: ${player}\ncomputer: ${computer}\nplayer WINS !!!` 
                : `player: ${player}\ncomputer: ${computer}\ncomputer WINS !!!`;

    return result;
};

const displayResults = (result) => {
    alert(result);
};

const AskToPlayAgain = () => {
   return confirm("play Again ?"); 
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();

