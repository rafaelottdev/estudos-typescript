// Permite passar tipos como parametros, deixando a tipagem de funções e variaveis mais dinamicaco
// com generic é possivel deixar o tipo do value dinamico, permitindo passar ele como parametro
// quando é preciso receber um generic como parametro é usado <> e dentro dele é usado o nome do generic, que por convenção é o T, mas pode ser qualquer coisa (ex: <T>, <generico>, <type> etc.). Esse T vai ser o parametro que consegue passar quando a função é chamada, antes do parenteses na chamada da função é definido o <> com o tipo que quer assinalar para o T (ex: <number>), na propriedade da função é passada o T (ex: (value: T))
// no caso da arrow function é usado depois do sinal de igual, antes dos parametros
// É possivel explicitar que o retorno da função será um T (generic) (ex: (): T)

const returnValue = <T> (value: T): T => value
const message = returnValue<string>('Hello World!')
const counter = returnValue(5)

//Com funções normais
// Primeiro é preciso receber o generic, sempre
// Como a funçao retorna um array, basta colocar o generic seguido por colchetes (ex: T[])

function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"])
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20])

// É possivel receber mais de 1 generic (ex: <T, Type, Generic>)
const returnValue2 = <T, X, Z> (value: T): T => value
const message2 = returnValue2<string, boolean, number>('Hello World!')

// Promises
// Para declarar que uma função retorna uma Promise é preciso usar generics
// Declara Promise e o tipo que ela vai retornar (ex: :Promise<tipo>)
const returnPromise = async (): Promise<number> => {
    return 5
}

// Tambem é possivel usar generics com classes
//
class GenericNumber<T> {
    zeroValue: T
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number) => {
    return x + y
})
