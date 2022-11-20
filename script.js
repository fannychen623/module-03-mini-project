var score = {
    win: 0,
    lose: 0,
    tie: 0,
}

function random(max) {
    num = Math.floor(Math.random() * max);
    if (num === 0) {
        computer = "r";
    } else if (num === 1) {
        computer = "p";
    } else {
        computer = "s";
    }
}

function outcome(x, y) {
    if (x === y) {
        result = "tie";
    } else if (x === "r" && y !== "p") {
        result = "win";
    } else if (x === "p" && y !== "s") {
        result = "win";
    } else if (x === "s" && y !== "r") {
        result = "win";
    } else {
        result = "lose";
    }
}

function currentScore() {
    scoreBoard = "Current Score: \n Win(s): " + score.win + "\n Lose(s): " + score.lose + "\n Tie(s): " + score.tie + "\n\n";
}

function playGame() {
    let player = prompt("Please enter your move (R, P, or S).", "");
    random(3);
    outcome(player.toLowerCase(), computer);
    if (result === "tie") {
        score.tie = score.tie + 1;
    } else if (result === "win") {
        score.win = score.win + 1;
    } else {
        score.lose = score.lose + 1;
    }
    currentScore()
    if (confirm("The computer played " + computer.toUpperCase() + "! \n\n" + scoreBoard + "Would you like to play again?")) {
        playGame();
    } else {
        alert("Thank you for playing! \n\n Your final score is: \n" + score.win + " win(s), " + score.lose + " lose(s), and " + score.tie + " ties(s).");
    }
}

if (confirm("Would you like to play rock, paper, scissors?")) {
    playGame();
}