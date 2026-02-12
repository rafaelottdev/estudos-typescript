"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`RAM...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("---------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade de ${qtde} para o ${this.nome} não é permitido`);
        }
    }
}
const c1 = new Computador("Rapidão", 64, 10);
const c2 = new Computador("Carão", 32, 5);
const c3 = new Computador("Gamer", 128, 10);
c1.ligar();
c3.ligar();
c1.upRam(128);
c1.nome = "Super Rapidão";
c1.info();
c2.info();
c3.info();
