// Arrow Function

const teste = (txt: string = "...", txt2?:string): void => {
    console.log(txt)
    console.log(txt2)
}

const soma = (n: number[]): number => {
    let s: number = 0

    n.forEach((e) => {
        s += e
    })

    return s
}

teste("rafael")
teste()

let numeros: number[] = [10, 20, 30, 40, 50, 20, 30]

console.log(soma(numeros))
