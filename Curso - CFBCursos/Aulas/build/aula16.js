"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const c1 = new Computador();
const c2 = new Computador();
const c3 = new Computador();
c1.nome = "Rapidao";
c2.nome = "Carão";
c3.nome = "gamer";
console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);
