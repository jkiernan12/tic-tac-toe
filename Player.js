class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins || 0;
    this.moves = [];
  }

  saveWinsToStorage() {
    window.localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    if (window.localStorage.getItem(`${this.id}`)) {
      var retrieved = window.localStorage.getItem(`${this.id}`);
      this.wins = parseInt(retrieved);
    }
  }

  addWin() {
    this.wins++;
  }
}