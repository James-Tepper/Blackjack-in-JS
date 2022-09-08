class Player{
    constructor(name){
        this.name = name;
        this.bets = 500;
        this.hand = [];
        this.still_in = true;
    }
}

class Card{
    constructor(index, suit){
        this.index = index;
        this.suit = suit;
        this.value = cardvalues[index];
    }
}

function create_card_deck(){
    const DECK = [];
    let cardvalues = {
        "Ace": 11,
        "Jack": 10,
        "King": 10,
        "Queen": 10,
        "Two": 2,
        "Three": 3,
        "Four": 4,
        "Five": 5,
        "Six": 6,
        "Seven": 7,
        "Eight": 8,
        "Nine": 9,
        "Ten": 10,
    }
    
    for (index in cardvalues){
        for (suit in [Ace, Spaces, Clubs, Hearts]){
            DECK.push(Card(index, suit));
        }
    }
return DECK;
}


function get_player_amount(){
    let amount = prompt("How many people will be playing?");
    let confirm = prompt(`Is ${amount} players correct? [Y/N]`);
    if (confirm != 'Y') {get_player_amount()}
    else {return amount}
}

function get_player_names(){
    let players = []
    for (let i = 1; i <= amount; i++){
        let name = prompt(`Player #${i} is your name?`)
        players.push(new Player(name))
    }

    return players
}



function main(){
    let amount = get_player_amount()
    let players = get_player_names(amount)

}
