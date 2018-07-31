const Player = function(name){
  this.name = name;
  this.cards = [];
}


Player.prototype.addCard = function (card) {
  this.cards.push(card);
};

Player.prototype.loseCard = function (card) {
  let index = this.cards.indexOf(card);
  if (index !== -1) this.cards.splice(index, 1);
};

module.exports = Player;
