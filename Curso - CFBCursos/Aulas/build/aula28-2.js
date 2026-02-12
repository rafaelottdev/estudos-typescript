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
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("valor invalido");
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("valor invalido");
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo Insuficiente`);
        }
    }
}
class ContaPF extends Conta {
    taxaCalc = 10;
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    calcularTrib(valor) {
        return valor * this.taxaCalc;
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
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito alto para esse tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const c1 = new ContaPF(111, "rafael");
c1.info();
