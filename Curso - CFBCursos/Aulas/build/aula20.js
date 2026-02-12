"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const c1 = new ContaPF(123456789, "rafael");
const c2 = new ContaPJ(445566554, "rafadev");
console.log(c1.titular);
console.log(c2.titular);
