class Game {
    constructor() {
        this.player1 = new Player("one", "👻");
        this.player2 = new Player("two", "🎃");
        this.board = [];
        this.currentTurn = "player1";
        this.winner = ""
    }

    checkMove(move) {
        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i][0] === move[0] && this.board[i][1] === move[1]) {
                return false;
            }
        } 
            return true;
    }

    addMove(move) {
        this.board.push(move);
        this[`${this.currentTurn}`].moves.push(move);
        }

    toggleTurn() {
        if (this.currentTurn === "player1") {
            this.currentTurn = "player2";
        } else {
            this.currentTurn = "player1";
        }
    }

    checkGame() {
        this.checkDiagonal([[1, 1], [2, 2], [3, 3]]);
        this.checkDiagonal([[3, 1], [2, 2], [1, 3]]);
        this.checkStraights();
        this.checkDraw();
    }

    checkStraights() {
        var xBoardMap = {1: [], 2: [], 3: []}
        var yBoardMap = {1: [], 2: [], 3: []}
        for (var i = 0; i < this[`${this.currentTurn}`].moves.length; i++) {
            var currentMove = this[`${this.currentTurn}`].moves[i];
            xBoardMap[currentMove[0]].push(currentMove);
            yBoardMap[currentMove[1]].push(currentMove);
            if (xBoardMap[currentMove[0]].length >= 3 ||
                yBoardMap[currentMove[1]].length >= 3) {
                this.winGame();
            }
        }
    }                   

    checkDiagonal(moves) {
        var movesCounter = 0;
        for (var n = 0; n < moves.length; n++) {
            var currentMove = this[`${this.currentTurn}`].moves;
            for (var i = 0; i < this[`${this.currentTurn}`].moves.length; i++) {
                if (currentMove[i][0] === moves[n][0] && currentMove[i][1] === moves[n][1]) {
                    movesCounter++;
                }
            }
        }
        if (movesCounter === 3) {
            this.winGame();
        }
    }

    winGame() {
        this.winner = this.currentTurn;
        this.clearMoves();
        this[this.currentTurn].addWin();
        this[this.currentTurn].saveWinsToStorage();
    }

    checkDraw() {
        if (this.board.length === 9) {
            this.clearMoves();
            this.winner = "draw";
        }
    }

    clearMoves() {
        this.board = [];
        this.player1.moves = []
        this.player2.moves = [];
    }
}