// Namespace 2

namespace Veiculos {
    export class Carro {
        nome: string
        motor: Motores.Motor
        constructor(nome: string) {
            this.nome = nome
            this.motor = new Motores.Motor(3, 100)
        }
    }
}

namespace Motores {
    class Turbo {
        private pot: number 
        constructor(pot: number) {
            this.pot = pot
        }

        get potencia() {
            return this.pot
        }
    }

    export class Motor {
        private ligado: boolean
        private cilindros: number
        private pot: number
        constructor(cilindros: number, pot: number, turbo?: Turbo) {
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turbo ? turbo.potencia : 0)
        }

        set liga(ligado: boolean) {
            this.ligado = ligado
        }

        get liga() {
            return this.ligado
        }

        get potencia() {
            return this.pot
        }
    }
}

const c1 = new Veiculos.Carro("Rapid")

console.log(c1.nome)
console.log(c1.motor)
