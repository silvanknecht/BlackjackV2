class Hand {
    constructor(bet = 0) {
        this.cards = [];
        this.bet = bet;
        this.soft = false;
        this.doubledown = false;
        this.blackjack = false;
        this.busted = false;
        this.status = false;
        this.splitPossible = false;
        this.value = 0;

    }

    restore() {
       this.bet = 0;

    }

    retoreBet() {
        this.bet = 0;
    }
}

module.exports = Hand;