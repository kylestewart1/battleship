import { Ship } from "../src/ship.js"


test('Ship class instance has a length property set by constructor', () => {
    const ship = new Ship(3);
    expect(ship.length).toBeDefined();
    expect(ship.length).toBe(3);
})

test('Ship instance has timesHit property initialized to 0', () => {
    const ship = new Ship(4);
    expect(ship.timesHit).toBe(0);
})

test('Ship has method "hit()" that increments timesHit by 1', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.timesHit).toBe(1);
})

test('ship.isSunk() gives false when ship.timesHit is 0', () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);
})

test('ship.isSunk() gives true when ship.timesHit equals ship.length', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})