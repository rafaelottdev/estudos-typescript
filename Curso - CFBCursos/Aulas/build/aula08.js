"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dados = {
    nome: "rafael",
    idade: "22",
    status: "A",
    olá: () => { console.log('oi'); },
    info: (p) => { console.log(p); }
};
dados.nome = "julil";
console.log(typeof dados);
console.log(dados.nome);
dados.olá();
dados.info(dados.nome);
