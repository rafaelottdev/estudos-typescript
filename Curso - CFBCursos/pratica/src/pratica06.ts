class Character {
    readonly name: string
    private health: number
    strength: number

    constructor(name: string, health: number, strength: number) {
        this.name = name
        this.health = health
        this.strength = strength
    }

    attack(target: Character) {
        target.takeDemage(this.strength)
    }

    takeDemage(amount: number) {
        this.health -= amount
    }

    heal(amount: number) {
        this.health += 5
    }

    getStatus() {
        return `${this.name} -> HP: ${this.health}`
    }
}

const char1 = new Character("Rafa", 100, 20);
const char2 = new Character("Goblin", 60, 10);

char1.attack(char2);
char2.attack(char1);

char1.heal(10);

console.log(char1.getStatus());
console.log(char2.getStatus());
