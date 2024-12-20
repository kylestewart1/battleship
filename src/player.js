import { Gameboard } from "./gameboard.js";

export class Player {
    constructor(number, isComputer=false) {
        this.number = number;
        this.gameboard = new Gameboard();
        this.isComputer = isComputer;
    }

    misses = () => this.gameboard.misses;
    hits = () => this.gameboard.hits;
}