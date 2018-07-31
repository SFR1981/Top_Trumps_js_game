const Card = require("./card.js");

const Player = function(name){
  this.name = name;
  this.cards = [];
  this.turn = false;
}


Player.prototype.addCard = function (card) {
  this.cards.push(card);
};

Player.prototype.loseCard = function (card) {
  let index = this.cards.indexOf(card);
  if (index !== -1) this.cards.splice(index, 1);
};

Player.prototype.playCardIntelligence = function () {
  let card = this.cards.pop();
  return card.intelligence;

};
Player.prototype.playCardStrength = function () {
  let card = this.cards.pop();
  return card.strength;

};
Player.prototype.playCardAgility = function () {
  let card = this.cards.pop();
  return card.agility;

};

Player.prototype.go = function () {
  this.turn = true;

};

Player.prototype.notGo = function () {
  this.turn = false;

};

Player.prototype.chooseAttribute = function (card) {
  attribute = "strength";
  if (card[attribute] < card.intelligence){
    attribute = "intelligence";
  }
  if(card[attribute] < card.agility){
    attribute = "agility";
  }
  return attribute;
};



module.exports = Player;
