"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teste = (txt = "...", txt2) => {
    console.log(txt);
    console.log(txt2);
};
const soma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("rafael");
teste();
let numeros = [10, 20, 30, 40, 50, 20, 30];
console.log(soma(numeros));
