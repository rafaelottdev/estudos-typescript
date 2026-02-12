class Conta {
    // Public - acessado de qualquer lugar
    // private - acessado apenas na classe principal
    // protected - acessado apenas na classe principal e nas classes filho

    protected numero: number
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

class ContaPF extends Conta {
    cpf: number

    constructor(cpf: number, titular: string) {
        super(titular)
        this.cpf = cpf
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

class ContaPJ extends Conta {
    cnpj: number

    constructor(cnpj: number, titular: string) {
        super(titular)
        this.cnpj = cnpj
    }

    info() {
        console.log(`Tipo...: PJ`)
        super.info()
        console.log(`CNPJ...: ${this.cnpj}`)
        console.log('---------------------------')
    }

    public deposito(valor: number) {
        if(valor > 10000) {
            console.log(`Valor de deposito muito alto para esse tipo de conta`)
        }

        else {
            super.deposito(valor)
        }
    }

    public saque(valor: number) {
        if(valor > 10000) {
            console.log(`Valor de saque muito alto para esse tipo de conta`)
        }

        else {
            super.saque(valor)
        }
    }
}

const c1 = new ContaPF(111, "rafael")
const c2 = new ContaPJ(222333, "rafadev")

c1.deposito(1000)
c1.saque(100)
// c1.saldo = 250
console.log(c1.saldo)

c2.deposito(9300)
c2.saque(100)
console.log(c2.saldo)
