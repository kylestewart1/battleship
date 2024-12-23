import { BoardView } from "./board-view";
import { Player } from "./player";

export class GameController {
    constructor(againstComputer=true) {
        if (againstComputer) {
            this.playAgainstComputer();
        }
    }

    playAgainstComputer() {
        this.players = [new Player(1, false), new Player(2, true)];
        this.boardViews = [new BoardView(this.players[0], false), new BoardView(this.players[1], true)];
        this.placeShipsComputer();
        this.currentPlayer = 0;
        let gameOver = false;
        this.placeShipsPlayer();
        this.playerTurn();
    }

    static availableShipLengths() {
        return [2, 3, 3, 4, 5];
    }

    placeShipsComputer() {
        const shipLengths = GameController.availableShipLengths();
        while (shipLengths.length > 0) {
            const shipLength = shipLengths.pop();
            const direction = ["up", "left", "down", "right"][Math.floor(Math.random() * 4)];
            const row = 1 + Math.floor(Math.random() * 10);
            const column = 1 + Math.floor(Math.random() * 10);
            if (!this.players[1].gameboard.placeShip(row, column, shipLength, direction)) {
                shipLengths.push(shipLength);
            }
        }
    }

    placeShipsPlayer() {
        const shipLengthStack = GameController.availableShipLengths();
        this.placeNextShip(shipLengthStack);
    }

    placeNextShip(shipLengthStack) {
        this.boardViews[this.currentPlayer].getCells().forEach(cell => {
            cell.addEventListener("click", () => {
                this.placeNextShipHandler(cell, shipLengthStack);
            })
        })
    }

    placeNextShipHandler(cell, shipLengthStack) {
        if (shipLengthStack.length === 0) {
            return;
        }
        const shipLength = shipLengthStack.pop();
        this.boardViews[this.currentPlayer].update();
        const [startRow, startColumn] = [Number(cell.dataset.row), Number(cell.dataset.column)];
        const options = this.players[this.currentPlayer].gameboard.possibleShipEndpoints(startRow, startColumn, shipLength);
        options.forEach(([endRow, endColumn]) => {
            const endCell = this.boardViews[this.currentPlayer].boardElement.querySelector(`.cell[data-row="${endRow}"][data-column="${endColumn}"]`);
            endCell.classList.add("highlight");
            console.log(endCell)
            endCell.addEventListener("click", () => {
                let direction;
                if (endRow > startRow) {
                    direction = "down";
                } else if (endRow < startRow) {
                    direction = "up";
                } else if (endColumn > startColumn) {
                    direction = "right";
                } else {
                    direction = "left";
                }
                const validPlacement = this.players[this.currentPlayer].gameboard.placeShip(startRow, startColumn, shipLength, direction);
                if (!validPlacement) {
                    shipLengthStack.push(shipLength);
                }
                this.boardViews[this.currentPlayer].update();
                this.placeNextShip(shipLengthStack);
            })
        })
    }

    otherPlayer() {
        return (this.currentPlayer + 1) % 2;
    }

    freeCells() {
        return this.boardViews[this.otherPlayer()]
          .getCells()
          .filter(cellNode => {
            const [row, column]  = [Number(cellNode.dataset.row), Number(cellNode.dataset.column)];
            return !this.players[this.otherPlayer()].gameboard.moveAlreadyPlayed(row, column);
           });
    }

    switchPlayers() {
        this.boardViews.forEach(boardView => boardView.update());
        this.currentPlayer = this.otherPlayer();
    }

    playerTurn() {
        this.freeCells().forEach(cell => {
            cell.addEventListener("click", () => {
                const row = Number(cell.dataset.row);
                const column = Number(cell.dataset.column);
                this.players[this.otherPlayer()].receiveAttack(row, column);
                this.switchPlayers();
                this.computerTurn();
            })
        })
    }


    computerTurn() {
        const freeCells = this.freeCells();
        const randomAttack = freeCells[Math.floor(Math.random() * freeCells.length)];
        const [row, column] = [Number(randomAttack.dataset.row), Number(randomAttack.dataset.column)];
        console.log(row, column);
        this.players[this.otherPlayer()].receiveAttack(row, column);
        setTimeout(() => {
            this.switchPlayers();
            this.playerTurn();
        }, Math.floor(800 + 200*Math.random()));
    }

}