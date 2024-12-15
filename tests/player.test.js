import { Player } from "../src/player.js";
import { Gameboard } from "../src/gameboard.js"

test('Player contains a Gameboard instance', () => {
    const player = new Player();
    expect(Object.hasOwn(player, "gameboard")).toBe(true);
    expect(player.gameboard).toBeInstanceOf(Gameboard);
})

