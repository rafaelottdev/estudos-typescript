"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
    }
}
const c1 = new Computador("Rapidão", 64, 10);
const c2 = new Computador("Carão", 32, 5);
const c3 = new Computador("Gamer", 128, 10);
console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);
