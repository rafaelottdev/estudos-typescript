let numero: number[] = [20, 30, 40]
// let number: Array<number|string> = [20, 30, 40]
// let numeros: (number|string)[] = [20, 30, 40]

numero.push(50)
numero.unshift(10)
numero.pop()
numero.shift()
console.log(numero)

let numeros_ro: ReadonlyArray<number> = [100, 200, 300]

console.log(numeros_ro)
