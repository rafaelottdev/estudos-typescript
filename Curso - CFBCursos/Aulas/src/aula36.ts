// Desestruturação

// let av = [10, 20, 30, 40]
// let [aa, bb, cc, dd] = av

// let [aa, bb, cc, dd] = ["verde", "amarelo", "azul", "branco"]

// const obj = {
//     cor1: "Verde",
//     cor2: "Amarelo",
//     cor3: "Azul",
//     cor4: "Branco"
// }

// let {cor1, cor2, cor3, cor4} = obj

// let [n1, n2=0, ...n3] = [10, 20, 30, 40, 50, 60, 70]

// const cores = () => {
//     return ["verde", "amarelo", "azul"]
// }

// let [c1, c2, c3] = cores()

let texto = "curso de typescript"
let [...t] = texto.split(" ")
let [p1, p2, p3] = texto.split(" ")

console.log(t)
console.log(p1)
console.log(p2)
console.log(p3)
