// static

// import { Globais } = require("./aula37-modulo");

abstract class Globais {
    static teste: number = 0
    static testeArr: number[] = []
    static obj = {
        nome: "rafael",
        canal: "rafinhaGames"
    }
}

console.log(Globais.teste)

Globais.teste = 10

console.log(Globais.teste)
