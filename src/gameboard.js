import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.ships = [];
        this.misses = [];
        this.hits = [];
    }

    placeShip(row, column, length, direction) {
        const coordinates = Gameboard.shipCoordinates(row, column, length, direction);
        if (coordinates === null) {
            return false;
        }
        if (coordinates.some(([r, c]) => this.shipPresent(r, c))) {
            return false;
        }
        this.ships.push({
            coordinates,
            ship: new Ship(length)
        });
        return true;
    }

    moveAlreadyPlayed(row, column) {
        function containsCoordinate(coordList, searchedRow, searchedColumn) {
            return coordList.some(([row, column]) => row === searchedRow && column === searchedColumn);
        }
        return containsCoordinate(this.hits, row, column) || containsCoordinate(this.misses, row, column);
    }

    shipPresent(searchedRow, searchedColumn) {
        return this.ships.some(ship => {
            return ship.coordinates.some(([row, column]) => {
                return row === searchedRow && column === searchedColumn;
            })
        });
    }

    getShipIndex(searchedRow, searchedColumn) {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].coordinates.some(([row, column]) => {
                return row === searchedRow && column === searchedColumn;
            })) {
                return i;
            }
        }
        return null;
    }

    receiveAttack(row, column) {
        if (this.moveAlreadyPlayed(row, column)) {
            return false;
        }
        if (this.shipPresent(row, column)) {
            const index = this.getShipIndex(row, column);
            this.ships[index].ship.hit();
            this.hits.push([row, column])
        } else {
            this.misses.push([row, column]);
        }
        return true;
    }

    allSunk() {
        return this.ships.every(ship => ship.ship.isSunk());
    }

    static inBounds(row, column) {
        return row >= 1 && row <= 10 && column >= 1 && column <= 10;
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