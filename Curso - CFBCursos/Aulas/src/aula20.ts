class Conta {
    numero: number
    titular: string

    constructor(numero: number, titular: string) {
        this.numero = numero
        this.titular = titular
    }
}

class ContaPF extends Conta {
}

class ContaPJ extends Conta {
}

const c1 = new ContaPF(123456789, "rafael")
const c2 = new ContaPJ(445566554, "rafadev")

console.log(c1.titular)
console.log(c2.titular)
