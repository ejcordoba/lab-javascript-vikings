// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg;
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else if (this.health === 0){
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    attack() {
        return this.strength;
    }
    receiveDamage(dmg) {
        this.health = this.health - dmg;
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        } else if (this.health <= 0){
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
        //console.log(this.vikingArmy);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
        //console.log(this.saxonArmy);
    }

    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const fightResult = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon));
        }
        return fightResult;
    }
    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const fightResult = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking));
        }
        return fightResult;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return `Vikings have won the war of the century!`
        else if (this.vikingArmy.length === 0) return `Saxons have fought for their lives and survived another day...`
        else return `Vikings and Saxons are still in the thick of battle.`
    }

}