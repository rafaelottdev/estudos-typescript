"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(...n) {
    let s = 0;
    for (let v of n) {
        s += v;
    }
    return s;
}
console.log(soma(10, 20, 30, 40, 100, 305));
