// Funções

function logar(user: string, pass:string): void {
    console.log(`User.: ${user}`)
    console.log(`Senha: ${pass}`)
}

logar("rafael", "123")

function soma(n1: number, n2:number): number {
    let r = n1 + n2
    return r
}

let n_res: number = soma(10, 15)
let s_res: string = soma(10, 15).toString()

console.log(n_res)
console.log(s_res)
