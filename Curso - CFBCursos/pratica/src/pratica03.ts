class BankAccount {
    owner: string
    private balance: number
    private transactions: string[]

    constructor(owner: string, balance: number) {
        this.owner = owner
        this.balance = balance
        this.transactions = []
    }

    deposit(amount: number, transfer: boolean = false) {
        if(amount > 0) {
            this.balance += amount

            if(!transfer) {
                this.transactions.push(`Depositado R$${amount}`)
            }
        }

        else {
            console.log('valores negativos não são permitidos')
        }
    }

    withdraw(amount: number, transfer: boolean = false) {
        if(this.balance >= amount && amount > 0) {
            this.balance -= amount

            if(!transfer) {
                this.transactions.push(`Saque de R$${amount}`)
            }
        }

        else {
            console.log('O saque não pode ser feito, algo deu errado')
        }
    }

    transfer(amount: number, targetAccount: BankAccount) {
        if(amount <= this.balance && amount > 0 && targetAccount instanceof BankAccount) {
            this.withdraw(amount, true)
            targetAccount.deposit(amount, true)

            this.transactions.push(`Transferido ${amount} para ${targetAccount.owner}`)
            targetAccount.transactions.push(`Recebido ${amount} de ${this.owner}`)
        }
    }

    get balanceInfo() {
        return `R$${this.balance}`
    }

    getStatement() {
        console.log('-------------------')
        console.log(`Owner: ${this.owner}`)

        console.log(`Transactions:`)
        this.transactions.forEach((t) => {
            console.log(t)
        })

        console.log(`Balance: ${this.balance}`)
        console.log('-------------------')
    }
}

const conta1 = new BankAccount("Rafa", 1000);
const conta2 = new BankAccount("Jo", 500);

conta1.deposit(500)
conta1.withdraw(200)
conta1.transfer(400, conta2)

conta1.getStatement()
conta2.getStatement()
