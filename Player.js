class Player {
    constructor(id, token, wins) {
        this.id = id;
        this.token = token;
        this.wins = wins || 0;
    }

    saveWinsToStorage() {
        window.localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
    }

    retrieveWinsFromStorage() {
        var retrieved = window.localStorage.getItem(`${this.id}`);
        this.wins = parseInt(retrieved);
    }

    addWin() {
        this.wins++;
    }
}