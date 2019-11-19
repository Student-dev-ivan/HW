/*
Two fighters, one winner.
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your
chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers
larger than 0. You can mutate the Fighter objects.
*/

class Fighter {
    static declareWinner(fighter1, fighter2, firstAttacker) {

        //count punches for each fighter
        let punchesCnt1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
        let punchesCnt2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);

        if (punchesCnt1 === punchesCnt2) {
            return firstAttacker;
        }
        return punchesCnt1 < punchesCnt2 ? fighter1.name : fighter2.name;
    }
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function () { return this.name; }
    }
}

console.log(Fighter.declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew') === 'Lew', 'Lew');
console.log(Fighter.declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry') === 'Harry', 'Harry');
console.log(Fighter.declareWinner(new Fighter('Harold', 20, 5), new Fighter('Harry', 5, 4), 'Harry') === 'Harold', 'Harold');
console.log(Fighter.declareWinner(new Fighter('Harold', 20, 5), new Fighter('Harry', 5, 4), 'Harold') === 'Harold', 'Harold');
console.log(Fighter.declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harold', 20, 5), 'Jerry') === 'Harold', 'Harold');
console.log(Fighter.declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harold', 20, 5), 'Harold') === 'Harold', 'Harold');
