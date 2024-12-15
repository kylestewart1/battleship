import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.ships = [];
    }

    placeShip(row, column, length, direction) {
        const coordinates = Gameboard.shipCoordinates(row, column, length, direction);
        if (coordinates === null) {
            return false;
        }
        this.ships.push({
            coordinates,
            ship: new Ship(length)
        });
        return true;
    }

    
    receiveAttack(row, column) {
        return false;
    }

    static inBounds(row, column) {
        return row >= 0 && row < 10 && column >= 0 && column < 10;
    }

    static shipCoordinates(row, column, length, direction) {
        const coordinates = [];
        switch (direction) {
            case "up":
                for (let i = 0; i < length; i++) {
                    coordinates.push([row + i, column]);
                }
                break;
            case "right":
                for (let i = 0; i < length; i++) {
                    coordinates.push([row, column + i]);
                }
                break;
            case "down":
                for (let i = 0; i < length; i++) {
                    coordinates.push([row - i, column]);
                }
                break;
            case "left":
                for (let i = 0; i < length; i++) {
                    coordinates.push([row, column - i]);
                }
                break;
        }
        if (coordinates.some(([row, column]) => !Gameboard.inBounds(row, column))) {
            return null;
        }
        return coordinates;
    }
}