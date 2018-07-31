const Player = function(name){
  this.name = name;
  this.cards = [];
}


Player.prototype.addCard = function (card) {
  this.cards.push(card);
};



module.exports = Player;
