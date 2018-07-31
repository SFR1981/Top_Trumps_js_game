const assert = require("assert");
const Card = require("../card.js");

xdescribe("Card", function(){
  let card;
  beforeEach(function(){
    card = new Card("Superman", 6, 9, 7);
  });

  it("Should have a name", function(){
    const result = card.name;
    assert.strictEqual(result, "Superman");
  });

  it("has a value for intelligence", function(){
    const result = card.intelligence;
    assert.strictEqual(result, 6);
  });

  it("has a value for strength", function(){
    const result = card.strength;
    assert.strictEqual(result, 9);
  });

  it("has a value for agility", function(){
    const result = card.agility;
    assert.strictEqual(result, 7);
  });

});
