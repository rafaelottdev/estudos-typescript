"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5, 5));
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
novoUser("br", "123");
