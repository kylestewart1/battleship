import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

test('Gameboard has ships property set to empty array initially', () => {
    const gameboard = new Gameboard();
    expect(gameboard.ships).toEqual([]);
})

describe('Gameboard static method inBounds returns true if row, column >=0 and < 10, false otherwise', () => {
    test('inBounds(3, 3) is true', () => {
        expect(Gameboard.inBounds(3, 3)).toBe(true);
    })
    test('inBounds(10, 3) is false', () => {
        expect(Gameboard.inBounds(10, 3)).toBe(false);
    })
    test('inBounds(1, 10) is false', () => {
        expect(Gameboard.inBounds(1, 10)).toBe(false);
    })
    test('inBounds(-1, 3) is false', () => {
        expect(Gameboard.inBounds(-1, 3)).toBe(false);
    })
    test('inBounds(1, -2) is false', () => {
        expect(Gameboard.inBounds(1, -2)).toBe(false);
    })
})


describe(`Gameboard static method shipCoordinates gives list of coordinates occupied by ship `
          + `of given length with one end at [row, column] and facing given direction`, () => {
    test('shipCoordinates returns null if ship would be out of bounds', () => {
        expect(Gameboard.shipCoordinates(1, 1, 3, "left")).toBeNull();
    })
    test('shipCoordinates(1,1,3,"up") returns [[1,1],[2,1],[3,1]]', () => {
        const actual = Gameboard.shipCoordinates(1, 1, 3, "up");
        const expected = [[1,1],[2,1],[3,1]];
        expect(actual).toEqual(expected);
    })
    test('shipCoordinates(1,1,3,"right") returns [[1,1],[1,2],[1,3]]', () => {
        const actual = Gameboard.shipCoordinates(1, 1, 3, "right");
        const expected = [[1,1],[1,2],[1,3]];
        expect(actual).toEqual(expected);
    })
    test('shipCoordinates(5,5,3,"down") returns [[5,5],[4,5],[3,5]]', () => {
        const actual = Gameboard.shipCoordinates(5, 5, 3, "down");
        const expected = [[5,5],[4,5],[3,5]];
        expect(actual).toEqual(expected);
    })
    test('shipCoordinates(5,5,3,"left") returns [[5,5],[5,4],[5,3]]', () => {
        const actual = Gameboard.shipCoordinates(5, 5, 3, "left");
        const expected = [[5,5],[5,4],[5,3]];
        expect(actual).toEqual(expected);
    })
})

describe('Gameboard method placeShip(row, column, length, direction) adds object containing new ship instance and '
        + 'occupied coordiantes to gameboard.ships array if all coordinates would be inBounds', () => {
    
    test('gameboard.placeShip(1, 2, 2, "up") appends {coordinates: [[1,2],[2,2]], ship: Ship(2)} to gameboard.ships', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 2, "up");
        const expected = {coordinates: [[1,2], [2,2]], ship: new Ship(2)};
        expect(gameboard.ships[0]).toEqual(expected);
    })

    test('gameboard.placeShip(0, 0, 2, "left" returns false and leaves gameboard.ships unchanged', () => {
        const gameboard = new Gameboard();
        const placed = gameboard.placeShip(0, 0, 2, "left");
        expect(placed).toBe(false);
    })
     
})


test('Gameboard method receiveAttack(5, 6) returns false when no ship at row=5, column=6', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(1, 2, 3);
    expect(gameboard.receiveAttack(5, 6)).toBe(false);
})