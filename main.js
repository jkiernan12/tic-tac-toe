// Query Selectors
var board = document.querySelector("#board");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");
var gameFeedback = document.querySelector("#gameFeedBack");

// Event Listeners
window.addEventListener("load", renderGame);
board.addEventListener("click", makeMove)

// Globals
var game = new Game();

function makeMove(event) {
    var moveCoordinates = [];
    moveCoordinates.push(parseInt(event.target.dataset.x));
    moveCoordinates.push(parseInt(event.target.dataset.y));
    game.checkMove(moveCoordinates);
    console.log(game.board);
}

