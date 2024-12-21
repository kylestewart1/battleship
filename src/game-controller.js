import { BoardView } from "./board-view";
import { Player } from "./player";

export class GameController {
    constructor(againstComputer=true) {
        this.players = [new Player(1, false), new Player(2, againstComputer)];
        this.boardViews = [new BoardView(this.players[0], false), new BoardView(this.players[1], true)];
        if (againstComputer) {
            this.placeShipsComputer();
        }
        this.currentPlayer = 0;
        this.playTurn();
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

    otherPlayer() {
        return (this.currentPlayer + 1) % 2;
    }

    switchPlayers() {
        this.boardViews.forEach(boardView => boardView.display());
        this.currentPlayer = this.otherPlayer();
        this.playTurn();
    }

    playTurn() {
        const freeCells = this.boardViews[this.otherPlayer()].getCells()
            .filter(cellNode => {
                const [row, column]  = [Number(cellNode.dataset.row), Number(cellNode.dataset.column)];
                return !this.players[this.otherPlayer()].gameboard.moveAlreadyPlayed(row, column);
            });
        freeCells.forEach(cell => {
            cell.addEventListener("click", () => {
                const row = Number(cell.dataset.row);
                const column = Number(cell.dataset.column);
                this.players[this.otherPlayer()].receiveAttack(row, column);
                this.switchPlayers();
            })
        })
    }

}