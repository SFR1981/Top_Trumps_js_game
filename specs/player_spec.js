const assert = require("assert");
const Card = require("../player.js");




describe("Card", function(){
  let player;
  beforeEach(function(){
    player = new player("player1");
  });
