const Player = require("./player.js");
const Card = require("./card.js");

const Game = function(player1, player2){
  this.player1 = new Player("player1")
  this.player2 = new Player("player2")
  this.cards = [];
}

//todo one add players to game (2), add cards, deal six cards

//winnerofturn(player1cardPoints, player2cardPoints)
Game.prototype.getCard = function (card) {
  this.cards.push(card);

};

Game.prototype.dealCardPlayer1 = function () {
  let card  = this.cards.pop();
  this.player1.addCard(card);

};

Game.prototype.dealCardPlayer2 = function () {
  let card  = this.cards.pop();
  this.player2.addCard(card);

};

Game.prototype.compareCardsForStrength = function (play1, play2) {
  this.cards.push(play1);
  this.cards.push(play2);
  if (play1.strength === play2.strength){

     this.player1.addCard(play1);
     this.player1.addCard(play2);
  } else if (play1.strength > play2.strength){

     this.player1.addCard(play1);
     this.player1.addCard(play2);
  } else {

     this.player2.addCard(play1);
     this.player2.addCard(play2);
  }
};


module.exports = Game;
