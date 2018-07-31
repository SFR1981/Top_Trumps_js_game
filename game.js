const Player = require("./player.js");
const Card = require("./card.js");

const Game = function(player1, player2){
  this.player1 = new Player("player1")
  this.player2 = new Player("player2")
  card1 = new Card("superman",6,9,7);
  card2 = new Card("scarlet witch",7,10,5);
  card3 = new Card("black widow",8,6,9);
  card4 = new Card("the flash",7,4,10);
  card5 = new Card("wonder woman",8,7,5);
  card6 = new Card("batman",10,5,6);
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

Game.prototype.compareCards = function (play1, play2, attribute) {
  this.cards.push(play1);
  this.cards.push(play2);
  if (play1[attribute] === play2[attribute]){

     this.dealCardPlayer1();
     this.dealCardPlayer1();
     this.player1.go();
     this.player2.notGo();
     console.log( "player 2 wins this turn");


  } else if (play1[attribute] > play2[attribute]){

    this.dealCardPlayer1();
    this.dealCardPlayer1();
    this.player1.go();
    this.player2.notGo();
    console.log( "player 1 wins this turn");
  } else {

    this.dealCardPlayer2();
    this.dealCardPlayer2();
    this.player1.notGo();
    this.player2.go();
    console.log( "player 2 wins this turn");
  }

};



Game.prototype.deck = function () {
  this.cards.push(card1);
  this.cards.push(card2);
  this.cards.push(card3);
  this.cards.push(card4);
  this.cards.push(card5);
  this.cards.push(card6);


};

Game.prototype.dealAll = function () {
  this.deck();
  this.dealCardPlayer1();
  this.dealCardPlayer2();
  this.dealCardPlayer1();
  this.dealCardPlayer2();
  this.dealCardPlayer1();
  this.dealCardPlayer2();

};

Game.prototype.play = function () {
  let card1  = this.player1.cards.pop();
   let card2 = this.player2.cards.pop();
if (this.player1.turn === true) {
  var attribute = this.player1.chooseAttribute(card1);
} else {
  var attribute = this.player2.chooseAttribute(card2);
}
  this.compareCards(card1, card2, attribute );
};



/*
game:
player1.go();

play();




*/




module.exports = Game;
