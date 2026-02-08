// POO 2

class Computador {
    nome: string = "Computador 1"
    ram: number = 0
    cpu: number = 0
    ligado: boolean = false

    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome
        this.ram = ram
        this.cpu = cpu
        this.ligado = false
    }
}

// Instanciar
const c1 = new Computador("Rapidão", 64, 10)
const c2 = new Computador("Carão", 32, 5)
const c3 = new Computador("Gamer", 128, 10)

console.log(c1.nome)
console.log(c2.nome)
console.log(c3.nome)
