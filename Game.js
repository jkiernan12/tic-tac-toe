class Game {
    constructor() {
        this.player1 = new Player("one", "👻");
        this.player2 = new Player("two", "🎃");
        this.board = [];
        this.player1Moves = [];
        this.player2Moves = [];
        this.currentTurn = "player1";
    }

    checkMove(move) {
        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i][0] === move[0] && this.board[i][1] === move[1]) {
                return false;
            }
        } 
            this.addMove(move)
    }

    addMove(move) {
        this.board.push(move);
        this[`${this.currentTurn}Moves`].push(move);
        this.toggleTurn();
        }

    toggleTurn() {
        if (this.currentTurn === "player1") {
            this.currentTurn = "player2";
        } else {
            this.currentTurn = "player1";
        }
    }

    checkGame() {
        // if x
        var xBoardMap = {1: [], 2: [], 3: []}
        var yBoardMap = {1: [], 2: [], 3: []}
        var middle = false;
        for (var i = 0; i < this[`${this.currentTurn}Moves`].length; i++) {
            var currentMove = this[`${this.currentTurn}Moves`][i];
            xBoardMap[currentMove[0]].push(currentMove);
            yBoardMap[currentMove[1]].push(currentMove);
        }
    }
}