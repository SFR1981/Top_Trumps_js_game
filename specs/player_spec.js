const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");



describe("Player", function(){
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

  it("should have a turn", function(){
    player.go();
    assert.strictEqual(player.turn,true);
  });

  it("should not have a turn", function(){
    player.notGo();
    assert.strictEqual(player.turn,false);
  });

   it("can play cards strength", function(){
     card = new Card("Superman", 6, 9, 7);
     player.addCard(card);
     result = player.chooseAttribute();
     assert.deepStrictEqual(result, "strength");
   });
  
  // it("can play cards agility", function(){
  //   card = new Card("Superman", 6, 9, 10);
  //   player.addCard(card);
  //   result = player.chooseAttribute(card);
  //   assert.deepStrictEqual(result, "agility");
  // });
  //
  // it("can play cards intelligence", function(){
  //   card = new Card("Superman", 10, 9, 7);
  //   player.addCard(card);
  //   result = player.chooseAttribute(card);
  //   assert.deepStrictEqual(result, "intelligence");
  // });



});
