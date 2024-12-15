import { Gameboard } from "./gameboard.js";

export class Player {
    constructor(isComputer=false) {
        this.gameboard = new Gameboard();
        this.isComputer = isComputer;
    }
}