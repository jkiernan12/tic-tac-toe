// Query Selectors
var board = document.querySelector("#board");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");
var gameFeedback = document.querySelector("#gameFeedBack");
var trophy = document.querySelector("#trophy");

// Event Listeners
window.addEventListener("load", startGame);
board.addEventListener("click", makeMove);

// Globals
var game = new Game();

// Functions
function makeMove(event) {
  var moveCoordinates = [];
  moveCoordinates.push(parseInt(event.target.dataset.x));
  moveCoordinates.push(parseInt(event.target.dataset.y));

  if (game.checkMove(moveCoordinates)) {
    game.addMove(moveCoordinates);
    renderMove();
    game.checkGame();
    game.toggleTurn();
    renderGame();
  }
}

function startGame() {
  renderMove();
  renderGame();
}

function renderMove() {
  renderWins();
  renderBoard("player1");
  renderBoard("player2");
}

function renderGame() {
  if (!game.winState) {
    renderFeedback(`It's ${game[game.currentTurn].token}'s turn!`);
  } else { 
    renderWinner();
  }
}

function renderWinner() {
  if (game.winner === "draw") {
    renderFeedback(`It's a draw!`);
  } else {
    animate(trophy, "trophy-animation")
    renderFeedback(`${game[game.winner].token} won!`);
  }
  renderWins();
  board.classList.add("disable-clicks");
  setTimeout(resetBoard, 2000);
  
}

function renderWins() {
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
  playerOneWins.innerText = `${game.player1.wins} wins`;
  playerTwoWins.innerText = `${game.player2.wins} wins`;
}

function renderBoard(player) {
  for (var i = 0; i < game[player].moves.length; i++) {
    var yCoordinate = game[player].moves[i][1];
    var xCoordinate = game[player].moves[i][0];
    var currentBox = document.querySelector(`[data-x="${xCoordinate}"][data-y="${yCoordinate}"]`);
    currentBox.innerText = game[player].token;
  }
}

function renderFeedback(message) {
  animate(gameFeedback, "feedback-animation");
  gameFeedback.innerText = message;
}

function resetBoard() {
  clearBoard();
  renderFeedback(`It's ${game[game.currentTurn].token}'s turn!`);
  trophy.classList.remove("trophy-animation");
  board.classList.remove("disable-clicks");
}

function clearBoard() {
  var squares = document.querySelectorAll(".board__square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
}

function animate (element, className) {
  window.requestAnimationFrame(function() {
    window.requestAnimationFrame(function() {
      element.classList.add(className);
      
    })
  })
  element.classList.remove(className);
}