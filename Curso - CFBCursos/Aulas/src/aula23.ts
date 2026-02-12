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

    public saldo(): number {
        return this.saldoConta
    }

    protected deposito(valor: number) {
        this.saldoConta += valor
    }

    protected saque(valor: number) {
        if(valor >= this.saldoConta) {
            this.saldoConta -= valor
        }

        console.log(`Saldo Insuficiente`)
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
}

const c1 = new ContaPF(111, "rafael")
const c2 = new ContaPJ(222333, "rafadev")

c1.deposito(800)
console.log(c1.saldo())

c2.deposito(9300)
console.log(c2.saldo())

// c1.info()
// c2.info()
