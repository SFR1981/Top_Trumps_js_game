const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");
const Game = require("../game.js");

describe("Game", function(){
let game;
beforeEach(function(){
  game = new Game("player1", "player2");
  card1 = new Card("superman",6,9,7);
  card2 = new Card("scarlet witch",7,10,5);
  card3 = new Card("black widow",8,6,9);
  card4 = new Card("the flash",7,4,10);
  card5 = new Card("wonder woman",8,7,5);
  card6 = new Card("batman",10,5,6);
});

it("should have two players", function(){
  assert.strictEqual(game.player1.name, "player1");
  assert.strictEqual(game.player2.name, "player2");
});

it("should have a deck of cards", function(){
  game.getCard(card1);
  assert.deepStrictEqual(game.cards.length, 1);
});

it("should deal cards", function(){
  // let player1 = new Player("player1");
  game.getCard(card1);
  game.dealCardPlayer1();
  assert.strictEqual(game.cards.length, 0);
  assert.strictEqual(game.player1.cards.length, 1);
})

it("should compare play for strength",function(){
  game.compareCards(card2, card1, "strength")
  assert.strictEqual( game.player1.cards.length, 2);

});

it("should compare play for agility",function(){
  game.compareCards(card4, card1, "agility")
  assert.strictEqual( game.player1.cards.length, 2);

});

it("should compare play for intelligence",function(){
  game.compareCards(card2, card6, "intelligence")
  assert.strictEqual( game.player2.cards.length, 2);

});


it("can create deck", function(){
    game.deck();
    assert.strictEqual(game.cards.length,6);
  });

it("can deal all cards", function(){

  game.dealAll();
  assert.strictEqual(game.cards.length,0);
  assert.strictEqual(game.player1.cards.length,3);
  assert.strictEqual(game.player2.cards.length,3);

})

it("can play a round", function(){
  game.player1.addCard(card4);
  game.player2.addCard(card6);
  game.player1.go();
  game.play();
  assert.strictEqual(game.player1.cards.length, 2);
  assert.strictEqual(game.player1.turn, true);

})

it("can play a full game", function(){
  game.playGame();
  assert.strictEqual(game.player2.cards.length, 6);
  assert.strictEqual(game.player1.cards.length, 0);
})


});
