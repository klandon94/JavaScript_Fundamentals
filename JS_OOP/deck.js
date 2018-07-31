class Card{
    constructor(suit, num, val){
        this.suit = suit;
        this.num = num;
        this.val = val;
    }
    show(){
        console.log(this.num + " of " + this.suit + " (value = " + this.val + ")");
    }
}

class Deck{
    constructor(){
        this.deck = []
        let nums = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
        let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        for (let i = 0; i < suits.length; i++){
            for (let j = 0; j < nums.length; j++){
                if (j >= 9) this.deck.push(new Card(suits[i], nums[j], 10))
                else this.deck.push(new Card(suits[i], nums[j], j+1))
            }
        }
    }
    shuffle(){
        var m = this.deck.length, t, i;
        // While there remain elements to shuffle...
        while (m){
            // Pick a remaining element...
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this.deck;
    }
    reset(){
        this.shuffle();
        return this.deck;
    }
    deal(){
        return this.deck.pop();
    }
    display(){
        for (let x of this.deck) console.log(x.num + " of " + x.suit);
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    take(deck){
        this.hand.push(deck.deal());
        return this;
    }
    discard(){
        this.hand.pop();
        return this;
    }
}

let cards = new Deck();
let kenny = new Player("Kenny");

cards.display();

// cards.shuffle();
// kenny.take(cards).take(cards);
// console.log(kenny.hand);

