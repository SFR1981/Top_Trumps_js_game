const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");
const Game = require("../game.js");

describe("Game", function(){
let game;
beforeEach(function(){
  game = new Game("player1", "player2");
});

it("should have two players", function(){
  assert.strictEqual(game.players.length, 2);
});

});
