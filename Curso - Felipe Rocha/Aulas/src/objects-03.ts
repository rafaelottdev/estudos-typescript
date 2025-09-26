// Type
// Um type é basicamente um objeto, é possivel definir quais propriedades esse objeto vai ter e quais são os tipos dessas propriedades. Para deixar uma propriedade como opcional, basta colocar um ponsto de interrogação do lado (ex: prop?: string).      Tambem é possivel definir listas de strings, numbers, etc. Tambem é possivel criar objetos que são listas, 
// O Order será uma lista de order, onde cada elemento da lista será um objeto Order


type Order = {
    productId: string,
    price: number
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string
    orders: Order[]
}

const user: User = {
    firstName: 'jane',
    age: 20,
    email: 'rafa@gmail.com',
    orders: [{productId: '1', price: 200}]
}

// propriedades opcionais são especiais, quando são atribuidas para atributos de função o atributo precisa ser opcional tambem, ja que o ? da propriedade é undefined. Para tirar o undefined basta colocar um ponto de exclamação quando a propriedade estiver sendo utilizada, que diz que a propriedade realmente existe
const printLog = (message?: string) => {}

printLog(user.password!)

// Unions
// Permite uma variavel conter todas as propriedades de dois ou mais objetos
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email: 'raf@gmail.com',
    firstName: 'rafa',
    orders: [],
}

// Interfaces
// type UserInterface, é muito parecido com type fica mais uma questão de gosto, sendo a Interface mais usada
// É possivel definir que uma propriedade será readonly (ex: readonly firstName: string), não permitindo altera-lo, apenas le-lo. 
interface UserInterface {
    readonly firstName: string,
    email: string
}

const emailUser: UserInterface = {
    email: 'rafa@gmail.com',
    firstName: 'rafa'
}

//É possivel utilizar tambem Unions com Interfaces
interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'raf@gmail.com',
    books: [],
    firstName: 'rafa'
}

//Tem uma coisa que o type consegue fazer que a Interface não consegue, que é assinalar um Intersection a um type, ou seja, utilizar o type como uma Intersection
type Grade = number | string
const grade: Grade = 1

// Utilizando Interface é possivel definir quais parametros uma familia de funções pode receber e quais valores ela pode retornar
// toda função que implementar essa interface precisa receber o x que é number e o y que é number e precisa retornar um number
// é usado essa sintaxe (): number para definir o que a função vai retornar
interface MathFunc {
    (x: number, y: number): number 
}

//para implementar a interface em uma função: funcao: interface = ()
const sum: MathFunc = (x: number, y:number): number => {
    return x + y
}

const sub: MathFunc = (x: number, y:number) => {
    return x - y
}

//É possivel definir que uma propriedade será uma função
// Tem que colocar o parenteses e o que a função irá retornar, tambem é possivel deixa-lo opcional colocando o ponto de interrogação antes do parenteses (ex: register?(): string)

type UserData = {
    register(): string
}

const userData: UserData = {
    register() {
        return 'oi'
    },
}

// é possivel fazer com interface tambem
interface UserDataInterface {
    register(): string
}

const userDataInterface: UserDataInterface = {
    register() {
        return 'oi novamente'
    },
}
