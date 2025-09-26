// tipos basicos
// Para definir um tipo para uma string, é preciso colocar dois pontos e o type (ex: :number). É tipagem estatica, ou seja, é preciso definir o tipo da variavel e não é possivel altera-la (nem indicado a fazer). Para setar uma lista com um type especifico, é preciso colocar dois pontos type e o colchetes (ex: :string[] = <- lista de strings, :boolean[] = <- lista de boleanos)
let age: number = 5
const firstName : string = 'rafael'
const isValid: boolean = true
let idk : any = 5

idk = 12
idk = 'none'

const ids: number[] = [1, 2, 4, 5]
const bool: boolean[] = [true, false]
const names: string[] = ['oi', 'rqafa']

// tupla
// É usado quando é preciso de uma variavel que tenha um determinado tipo de valor em uma determinada ordem, tipo string, number, boolean (ex: :[string, number, boolean] =), não é muito utilizado
const person: [number, string] = [3, '3']

// Lista de tuplas
// Quando uma lista contem tuplas como itens
const people: [number, string][] = [
    [1, 'oi'],
    [10, 'pera'],
]

// Intersections
// É basicamente quando é preciso que uma variavel possua um tipo ou outro, uma variavel que possa receber/possua uma string ou number, qualquer dos dois será aceito (ex: :string | number =), não é muito bom usar, pois o que a variavel recebe fica confuso, é mais facil fazer duas ou mais variaveis diferentes.
const productId: string | number | boolean = true

// Enum
// É bom para quando um valor precisa ser atribuido para outro valor, ou seja, a variavel direciona para outro valor          (ex: enum EnumItem {variavel = valor} <- quando acessar variavel o resultado será valor) para acessa-lo é preciso utilizar EnumItem.variavel. É bom porque da signficiado para um valor não deixando ele perdido sem saber para que serve ou para onde vai
enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up

// Type Assertions
// É quando é preciso mudar o tipo de uma variavel, existem duas formas de fazer, é quando tratamos uma variavel que é de um tipo para um tipo diferente, quando o valor da variavel 1 precisa ser o mesmo que o da variavel 2 só que de tipo diferente, tipo o valor da variavel 1 é um number 10 e o da variavel 2 precisa ser uma string 10, para colocar em um texto (ex1:  variavel1 as string, ex2: <string> variavel1)
const productName: any = 'Boné'

let itemId1 = productName as string
let itemId2 = <string> productName
    