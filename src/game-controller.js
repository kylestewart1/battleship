import { BoardView } from "./board-view";
import { Player } from "./player";

export class GameController {
    constructor(againstComputer=true) {
        this.instructions = document.getElementById("instructions");
        if (againstComputer) {
            this.playAgainstComputer();
        }
    }

    playAgainstComputer() {
        this.players = [new Player(1, false), new Player(2, true)];
        this.boardViews = [new BoardView(this.players[0], false), new BoardView(this.players[1], true)];
        this.placeShipsComputer();
        this.currentPlayer = 0;
        const shipLengthStack = GameController.availableShipLengths();
        this.boardViews[this.otherPlayer()].boardElement.classList.add("inactive-board");
        this.placeShipsPlayer(shipLengthStack);
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

    
    placeShipsPlayer(shipLengthStack) {
        if (shipLengthStack.length === 0) {
            this.boardViews[this.otherPlayer()].boardElement.classList.remove("inactive-board");
            this.boardViews[this.currentPlayer].update();
            this.playerTurn();
            return;
        }
        this.instructions.innerText = `Place a ship of length ${shipLengthStack[shipLengthStack.length - 1]}\n`;
        this.instructions.innerText += "Click the cell where you want to place one end of the ship.";
        this.boardViews[this.currentPlayer].getCells().forEach(cell => {
            cell.addEventListener("click", () => {
                this.placeNextShipHandler(cell, shipLengthStack);
            })
        })
    }

    placeNextShipHandler(cell, shipLengthStack) {
        this.instructions.innerText = "Click one of the highlighted cells to place ship's other end."
        const shipLength = shipLengthStack.pop();
        this.boardViews[this.currentPlayer].update();
        const [startRow, startColumn] = [Number(cell.dataset.row), Number(cell.dataset.column)];
        const options = this.players[this.currentPlayer].gameboard.possibleShipEndpoints(startRow, startColumn, shipLength);
        options.forEach(([endRow, endColumn]) => {
            const endCell = this.boardViews[this.currentPlayer].boardElement.querySelector(`.cell[data-row="${endRow}"][data-column="${endColumn}"]`);
            endCell.classList.add("highlight");
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
                this.placeShipsPlayer(shipLengthStack);
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
        this.instructions.innerText = "Click an enemy position to attack." 
        if (this.gameOver()) {
            this.finishGame();
            return;
        }
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
        if (this.gameOver()) {
            this.finishGame();
            return;
        }
        this.instructions.innerText = "The enemy is attacking..."; 
        const freeCells = this.freeCells();
        const randomAttack = freeCells[Math.floor(Math.random() * freeCells.length)];
        const [row, column] = [Number(randomAttack.dataset.row), Number(randomAttack.dataset.column)];
        this.players[this.otherPlayer()].receiveAttack(row, column);
        setTimeout(() => {
            this.switchPlayers();
            this.playerTurn();
        }, Math.floor(800 + 200*Math.random()));
    }

    gameOver() {
        return this.players[0].gameboard.allSunk() || this.players[1].gameboard.allSunk();
    }

    finishGame() {
        if (this.players[1].gameboard.allSunk()) {
            this.instructions.innerText = "Victory! We've sunk all enemy ships!";
        } else {
            this.instructions.innerText = "Our fleet is sunk...";
        }
    }
}