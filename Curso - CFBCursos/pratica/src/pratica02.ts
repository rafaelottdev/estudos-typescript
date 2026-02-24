class BankAccount {
    owner: string
    balance: number

    constructor(owner: string, balance: number) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount: number) {
        if(amount > 0) {
            this.balance += amount
        }

        else {
            console.log('valores negativos não são permitidos')
        }
    }

    withdraw(amount: number) {
        if(this.balance >= amount && amount > 0) {
            this.balance -= amount
        }

        else {
            console.log('O saque não pode ser feito, algo deu errado')
        }
    }

    transfer(amount: number, targetAccount: BankAccount) {
        if(amount <= this.balance && amount > 0 && targetAccount instanceof BankAccount) {
            this.withdraw(amount)
            targetAccount.deposit(amount)
        }
    }

    getBalance() {
        return `R$${this.balance}`
    }

    getAccountInfo() {
        return `Owner: ${this.owner} | Balance: ${this.balance}`
    }
}

const conta1 = new BankAccount("rafa", 1000)
const conta2 = new BankAccount("jo", 500)

conta1.transfer(3, conta2)

console.log(conta1.getBalance())
console.log(conta2.getBalance())
