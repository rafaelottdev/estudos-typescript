// POO 4

class Computador {
    private id: number
    public nome: string
    private ram: number
    private cpu: number
    protected ligado: boolean

    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome
        this.ram = ram
        this.cpu = cpu
        this.ligado = false
        this.id = 0
    }

    info(): void {
        console.log(`Nome..: ${this.nome}`)
        console.log(`RAM...: ${this.ram}`)
        console.log(`CPU...: ${this.cpu}`)
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`)
        console.log("---------------------------")
    }

    ligar(): void {
        this.ligado = true
    }

    desligar(): void {
        this.ligado = false
    }

    upRam(qtde: number): void {
        if(qtde >= 0 && qtde <= 1000) {
            this.ram = qtde
        }

        else {
            console.log(`Quantidade de ${qtde} para o ${this.nome} não é permitido`)
        }
    }
}

// Instanciar
const c1 = new Computador("Rapidão", 64, 10)
const c2 = new Computador("Carão", 32, 5)
const c3 = new Computador("Gamer", 128, 10)

c1.ligar()
c3.ligar()

c1.upRam(128)

c1.nome = "Super Rapidão"

c1.info()
c2.info()
c3.info()
