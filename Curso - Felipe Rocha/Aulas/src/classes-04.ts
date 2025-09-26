//Com o typescript é possivel definir os tipos que a classe terá no seu this
// é possivel tipar o constructor (ex: constructor(id: number)), metodos (ex: SayMyName(): string) e tambem o this da classe (ex: id: number)
class Person {
    id: number
    name: string
    age: number

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    // Tambem é possivel tipar metodos, sayMyName esta tipado como string
    sayMyName(): string {
        return this.name
    }
}

const newPerson = new Person(1, 'rafa', 18)

//É possivel usar interfaces com classe, permitindo definir em uma interface o que será recebido no this e o que receberá de metodos na classe

//Quando vc tem uma interface de uma classe é preciso colocar o I antes da itnerface (ex: IPerson)
interface IPerson2 {
    id: number
    name: string
    age: number
    sayMyName(): string
}

// Para implementar a interface na classe é usado o implements
class Person2 implements IPerson2 {
    id: number
    name: string
    age: number

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string {
        return this.name
    }
}

const newPerson2 = new Person2(1, 'rafa', 18)

//Modificadores de classes (readonly, protected, private)
// readonly não permite alteração, normalmente é melhor deixar tudo readonly porque normalmente vc quer alterar apenas as propriedades do this da classe dentro da classe, ou seja, quando esta com o readonly só é possivel alterar dentro do constructor
// protected faz com que a variavel só consiga ser acessada dentro da sua classe ou dentro da sua subclasse, não permitindo colocar o . para acessar (ex: newPerson3.-name- <- não acessa), não é possivel definir o protected na interface, o protected é acessivel pela classe mae e pela subclasse
// private - só permite ser acessada dentro da classe em que esta, tambem não é possivel declara-la na interface, não é acessivel na subclasse

class Person3 {
    readonly id: number
    protected name: string
    private age: number

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string {
        return this.name
    }
}

const newPerson3 = new Person3(1, 'rafa', 18)

// subclasses - Para definir uma subclasse é usado o extends

class Employee extends Person3 {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    whoAmI() {
        return this.name
    }
}

// Forma melhor de declarar classes
// quando recebemos/definimos o valor e ja queremos atribuir esse valor ao this a gente pode ja colocar dentro dos parenteses do constructor as propriedades da classe

class PersonRefact {
    constructor(id: number, name: string, age: number) {}
}
