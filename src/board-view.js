import { Player } from "./player.js";

export class BoardView {
    constructor(player) {
        this.player = player;
        this.boardElement = document.querySelector(`.board[player="${player.number}"]`);
    }

    misses() {
        this.player.misses().forEach(([row, column]) => {
            const cell = this.boardElement.querySelector(`.cell[row="${row+1}" column="${column+1}"]`);
            cell.classList.add("miss");
        })
    }

    hits() {
        this.player.hits().forEach(([row, column]) => {
            const cell = this.boardElement.querySelector(`.cell[row="${row+1}" column="${column+1}"]`);
            cell.classList.add("hit");
        })
    }

    display() {
        this.boardElement.querySelectorAll(".cell").forEach(cell => {
            cell.classList.remove("miss");
            cell.classList.remove("hit");
        })
        this.misses();
        this.hits();
    }
}