const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");



xdescribe("Player", function(){
  let player;
  beforeEach(function(){
    player = new Player("player1");
  });

  it("have a name", function(){
    const result = player.name;
    assert.strictEqual(result, "player1");
  });

  it("should start with no cards", function(){
    const result = player.cards;
    assert.deepStrictEqual(result, []);
  });

  it("should add a card", function(){
    card = new Card("Superman", 6, 9, 7);
    player.addCard(card);
    assert.deepStrictEqual(player.cards.length, 1);
  });

  it("should lose a card", function(){
    card = new Card("Superman", 6, 9, 7);
    player.addCard(card);
    player.loseCard(card);
    assert.deepStrictEqual(player.cards.length, 0);
  });

  it("can play cards strength", function(){
    card = new Card("Superman", 6, 9, 7);
    player.addCard(card);
    result = player.playCardStrength();
    assert.deepStrictEqual(result, 9);
  });

  it("can play cards agility", function(){
    card = new Card("Superman", 6, 9, 7);
    player.addCard(card);
    result = player.playCardAgility();
    assert.deepStrictEqual(result, 7);
  });

  it("can play cards intelligence", function(){
    card = new Card("Superman", 6, 9, 7);
    player.addCard(card);
    result = player.playCardIntelligence();
    assert.deepStrictEqual(result, 6);
  });


});
