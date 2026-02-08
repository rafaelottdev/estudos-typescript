"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logar(user, pass) {
    console.log(`User.: ${user}`);
    console.log(`Senha: ${pass}`);
}
logar("rafael", "123");
function soma(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma(10, 15);
let s_res = soma(10, 15).toString();
console.log(n_res);
console.log(s_res);
