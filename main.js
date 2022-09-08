class Players{
    constructor(name){
        this.name = name;
        this.bets = 500;
        this.hand = [];
        this.still_in = true;
    }
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
        players.push(new Players(name))
    }

    return players
}



function main(){
    let amount = get_player_amount()
    let players = get_player_names(amount)

}