// INTERFACE e Objetos Literais

interface curso {
    titulo: string
    desc: string
    aulas: number
    maxAlunos?: number
}

let curso1: curso
let curso2: curso
let curso3: curso

curso1 = {titulo: "Typescript", desc: "Curso de typescript", aulas: 100, maxAlunos: 50,}
curso2 = {titulo: "Javascript", desc: "Curso de Javascript", aulas: 200, maxAlunos: 80,}
curso3 = {titulo: "C++", desc: "Curso de C++", aulas: 200}

console.log(curso1)
console.log(curso2)
console.log(curso3)
