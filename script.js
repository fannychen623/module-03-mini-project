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

if (window.confirm("Do you want to play rock, paper, scissors?")) {
    let player = prompt("Please enter your move (R, P, or S).", "");
    random(3);
    outcome(player.toLowerCase(), computer);
    if (result === "tie") {
        alert("You tied!");
    } else if (result === "win") {
        alert("You won!");
    } else {
        alert("You lost!");
    }
}