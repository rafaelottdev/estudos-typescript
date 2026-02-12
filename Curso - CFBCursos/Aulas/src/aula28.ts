// INTERFACE 2

interface curso {
    titulo: string
    desc: string
    aulas: number
    maxAlunos?: number
    iniciarCurso?(teste: string): void
}

interface cursoProg extends curso {
    aulas: number
    maxAlunos?: number

}

interface cursoArts extends curso {
    aulas: number
    maxAlunos?: number
}

let curso1: cursoProg
let curso2: cursoProg
let curso3: cursoArts

curso1 = {titulo: "Typescript", desc: "Curso de typescript", aulas: 100, maxAlunos: 50}
curso2 = {titulo: "Javascript", desc: "Curso de Javascript", aulas: 200, maxAlunos: 80,}
curso3 = {titulo: "C++", desc: "Curso de C++", aulas: 200}

console.log(curso1)
