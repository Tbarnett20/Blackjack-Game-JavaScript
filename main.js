// Blackjack
// By Terrance Danckert

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let values = ['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two']


createDeck = () => {
  let deck = [];
  for (let suitIDx = 0; suitIDx < suits.length; suitIDx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      deck.push(`${values[valueIdx]} of ${suits[suitIDx]}`);
    }
  }
  return deck;
}

getNextCard = () => {
  return deck.shift();
}

let deck = createDeck();

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i])
}

let playerCards = [
 getNextCard(),
 getNextCard()
];

console.log("Welcome to Blackjack!")
 
console.log("You are dealt: ")
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);
