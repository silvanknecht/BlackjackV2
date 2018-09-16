let player_id = 0;

class Player{
    constructor(username, bankBalance = 200){
        this.id = player_id;
        player_id++;
        this.username = username;
        this.bankBalance = bankBalance;
    }

    newBalance(win){
        this.bankBalance += win;
    }
}

module.exports = Player;
