let nvalor: number
let svalor:string
let uvalor:unknown

uvalor = 10
nvalor = 10
svalor = nvalor.toString()

nvalor = Number.parseInt(svalor)

console.log(typeof(svalor))
console.log(svalor)

// nvalor = <number><unknown> svalor

// nvalor = <number> uvalor
// svalor = <string> uvalor
// svalor += 10

// console.log(typeof(uvalor))
// console.log(uvalor)

// console.log(typeof(nvalor))
// console.log(nvalor)
