class Curso {
    canal = null
    curso = null

    constructor(canal: any, curso: any) {
        this.canal = canal
        this.curso = curso
    }
}

let c1 = new Curso("rfacurso", "typescript")

console.log(c1.canal)
console.log(c1.curso)
