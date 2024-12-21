import { BoardView } from "./board-view";
import { Player } from "./player";

export class GameController {
    constructor() {
        this.players = [new Player(1, false), new Player(2, true)];
        this.boardViews = [new BoardView(this.players[0]), new BoardView(this.players[1])];
        
        this.currentPlayer = 0;
    }

    activateBoard() {
        this.boardViews[this.currentPlayer].getCells().forEach(cell => {
            cell.addEventListener("click", () => {
                console.log("hi");
            })
        })
    }

    switchPlayers() {
        
    }

}