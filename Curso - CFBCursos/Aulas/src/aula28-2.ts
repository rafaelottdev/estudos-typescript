// INTERFACE 2-2

abstract class Conta {
    private readonly numero: number
    protected titular: string
    private saldoConta: number

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldoConta = 0
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random()*100000)+1
    }

    protected info() {
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero.: ${this.numero}`)
    }

    get saldo(): number { // Getter
        return this.saldoConta
    }

    private set saldo(saldoConta: number) { // Setter - metodo set não retorna nada
        this.saldoConta = saldoConta
    }

    protected deposito(valor: number) {
        if(valor < 0) {
            console.log("valor invalido")

            return
        }

        this.saldo += valor
    }

    protected saque(valor: number) {
        if(valor < 0) {
            console.log("valor invalido")

            return
        }

        if(valor <= this.saldoConta) {
            this.saldo -= valor
        }

        else {
            console.log(`Saldo Insuficiente`)
        }

    }
}

interface Tributos {
    taxaCalc: number
    calcularTrib(valor: number): number
}

class ContaPF extends Conta implements Tributos {
    taxaCalc = 10
    cpf: number

    constructor(cpf: number, titular: string) {
        super(titular)
        this.cpf = cpf
    }

    calcularTrib(valor: number): number {
        return valor * this.taxaCalc
    }

    info() {
        console.log(`Tipo...: PF`)
        super.info()
        console.log(`CPF....: ${this.cpf}`)
        console.log('---------------------------')
    }

    public deposito(valor: number) {
        if(valor > 1000) {
            console.log(`Valor de deposito muito alto para esse tipo de conta`)
        }

        else {
            super.deposito(valor)
        }
    }

    public saque(valor: number) {
        if(valor > 1000) {
            console.log(`Valor de saque muito alto para esse tipo de conta`)
        }

        else {
            super.saque(valor)
        }
    }
}

const c1 = new ContaPF(111, "rafael")
c1.info()
