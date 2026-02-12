class Pessoa {
    nome: string
    altura: number

    constructor(nome: string, altura: number) {
        this.nome = nome
        this.altura = altura
    }
}

class Objeto {
    nome: string
    constructor(nome: string) {
        this.nome = nome
    }
}

const __exports = { Pessoa, Objeto }
export = __exports

