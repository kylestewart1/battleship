import { Player } from "./player.js";

export class BoardView {
    constructor(player) {
        this.player = player;
        this.boardElement = document.querySelector(`.board[data-player="${this.player.number}"]`);
        this.update();
    }

    getCells() {
        return [...this.boardElement.querySelectorAll(".cell")]
    }

    renderMisses() {
        this.player.misses().forEach(([row, column]) => {
            const cell = this.boardElement.querySelector(`.cell[data-row="${row}"][data-column="${column}"]`);
            cell.classList.add("miss");
            cell.classList.remove("active-ship");
        })
    }

    renderHits() {
        this.player.hits().forEach(([row, column]) => {
            const cell = this.boardElement.querySelector(`.cell[data-row="${row}"][data-column="${column}"]`);
            cell.classList.add("hit");
            cell.classList.remove("active-ship");
        })
    }

    renderMoves() {
        this.renderMisses();
        this.renderHits();
    }

    renderShips() {
        this.player.gameboard.ships.forEach(({coordinates, ship}) => {
            coordinates.forEach(([row, column]) => {
                const cell = this.boardElement.querySelector(`.cell[data-row="${row}"][data-column="${column}"]`);
                if (ship.isSunk()) {
                    cell.classList.remove("active-ship");
                    cell.classList.add("sunk-ship");
                } else {
                    cell.classList.add("active-ship");
                }
            })
        })
    }

    update() {
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
        if (! this.player.isComputer) {
            this.renderShips();
        }
        this.renderMoves();
    }
}