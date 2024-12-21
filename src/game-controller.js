import { BoardView } from "./board-view";
import { Player } from "./player";

export class GameController {
    constructor() {
        this.players = [new Player(1, false), new Player(2, true)];
        this.boardViews = [new BoardView(this.players[0], false), new BoardView(this.players[1], true)];
        this.currentPlayer = 0;
        this.activateEnemyBoard();
    }

    activateEnemyBoard() {
        this.boardViews[this.otherPlayer()].getCells().forEach(cell => {
            cell.addEventListener("click", () => {
                console.log("hi");
            })
        })
    }
    otherPlayer() {
        return (this.currentPlayer + 1) % 2;
    }

    switchPlayers() {
        this.boardViews.forEach(boardView => boardView.display());
        this.currentPlayer = this.otherPlayer();
    }

}