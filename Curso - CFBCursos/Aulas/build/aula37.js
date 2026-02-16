"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Globais {
    static teste = 0;
    static testeArr = [];
    static obj = {
        nome: "rafael",
        canal: "rafinhaGames"
    };
}
console.log(Globais.teste);
Globais.teste = 10;
console.log(Globais.teste);
