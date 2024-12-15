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
    
    test('placeShip returns false if ship already present', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(0,0,2,"right");
        const placed = gameboard.placeShip(0, 0, 2, "right");
        expect(placed).toBe(false);
    })
})

describe('Gameboard method receiveAttack(row, column) handles hits and misses', () => {
    test('receiveAttack(5, 6) adds [5,6] to misses when no ship at that position', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 3, "up");
        gameboard.receiveAttack(5, 6);
        expect(gameboard.misses).toEqual([[5,6]]);
    })
    test('receiveAttack(1, 2) adds [1,2] to hits when a ship is present at that position', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 3, "up");
        expect(gameboard.shipPresent(1, 2)).toBe(true);
        gameboard.receiveAttack(1, 2);
        expect(gameboard.hits).toEqual([[1,2]]);
    })
    test('receiveAttack returns false if moveAlreadyPlayed', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 3, "up");
        gameboard.receiveAttack(5, 6);
        const duplicate = gameboard.receiveAttack(5, 6);
        expect(duplicate).toBe(false);
    })
    test('receiveAttack calls ship.hit() when ship at location', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 3, "up");
        gameboard.placeShip(5, 6, 2, "down");
        gameboard.receiveAttack(5, 6);
        expect(gameboard.ships[1].ship.timesHit).toBe(1);
    })
})

describe('Gameboard method allSunk', () => {
    test('allSunk returns false if any ships not sunk', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 2, "up");
        gameboard.placeShip(5, 6, 2, "down");
        gameboard.receiveAttack(1, 2);
        gameboard.receiveAttack(2, 2);
        expect(gameboard.allSunk()).toBe(false);
    })

    test('allSunk returns true if all ships are sunk', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip(1, 2, 2, "up");
        gameboard.receiveAttack(1, 2);
        gameboard.receiveAttack(2, 2);
        expect(gameboard.allSunk()).toBe(true);
    })
})