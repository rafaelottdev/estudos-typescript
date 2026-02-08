// POO

class Computador {
    nome: string = "Computador 1"
    ram: number = 0
    cpu: number = 0
    ligado: boolean = false
}

const c1 = new Computador()
const c2 = new Computador()
const c3 = new Computador()

c1.nome = "Rapidao"
c2.nome = "Carão"
c3.nome = "gamer"

console.log(c1.nome)
console.log(c2.nome)
console.log(c3.nome)
