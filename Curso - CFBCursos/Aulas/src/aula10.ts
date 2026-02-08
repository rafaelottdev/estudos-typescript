// NULL - UNDEFINED - UNKNOWN

// null - Tipo nulo
// undefined - Indefinido
// unknown - desconhecido

let nome: string | null 
nome = "rafa"
console.log(nome)

let nome2:any
console.log(nome2)

let nome3: unknown=nome // unknown só pode ser atribuido em tipos unknown ou any
let num:any = nome3
console.log(num)
