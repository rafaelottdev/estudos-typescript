"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero.: ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        console.log(`Saldo Insuficiente`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo...: PF`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log('---------------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de deposito muito alto para esse tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo...: PJ`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log('---------------------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de deposito muito alto para esse tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
}
const c1 = new ContaPF(111, "rafael");
const c2 = new ContaPJ(222333, "rafadev");
c1.deposito(800);
console.log(c1.saldo());
c2.deposito(9300);
console.log(c2.saldo());
