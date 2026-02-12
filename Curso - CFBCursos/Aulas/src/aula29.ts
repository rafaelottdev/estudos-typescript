// GENERICS

// function f_teste<T, U>(v: T): T {
//     return v
// }

// console.log(f_teste<number, string>(10))
// console.log(f_teste<string, number>("10"))
// console.log(f_teste<boolean, boolean>(true))

function f_teste<T, U>(v: T, r: U): U {
    return r
}

console.log(f_teste<number, string>(10, "b"))
console.log(f_teste<string, number>("b", 10))
console.log(f_teste<boolean, boolean>(true, false))

class C_teste<T> {
    valor: T
    constructor(valor: T) {
        this.valor = valor
    }
}

const ct1 = new C_teste<string>("10")
const ct2 = new C_teste<number>(10)

console.log(ct1.valor)
console.log(ct2.valor)
