import { Player } from "./player.js";

export class BoardView {
    constructor(player) {
        this.player = player;
        this.boardElement = document.querySelector(`.board[player="${this.player.number}"]`);
        this.display();
    }

    getCells() {
        return this.boardElement.querySelectorAll(".cell");
    }

    renderMisses() {
        this.player.misses().forEach(([row, column]) => {
            const cell = this.boardElement.querySelector(`.cell[data-row="${row}"][data-column="${column}"]`);
            cell.classList.add("miss");
        })
    }

    renderHits() {
        this.player.hits().forEach(([row, column]) => {
            const cell = this.boardElement.querySelector(`.cell[data-row="${row}"][data-column="${column}"]`);
            cell.classList.add("hit");
        })
    }

    renderMoves() {
        this.boardElement.querySelectorAll(".cell").forEach(cell => {
            cell.classList.remove("miss");
            cell.classList.remove("hit");
        })
        this.renderMisses();
        this.renderHits();
    }

    display() {
        this.boardElement.innerHTML = "";
        for (let row = 1; row <= 10; row++) {
            for (let column = 1; column <= 10; column++) {
                const cell = document.createElement("button");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.column = column;
                this.boardElement.appendChild(cell);
            }
        }
        this.renderMoves();
    }
}