// O typescript reconhece o type que a função irá retornar, por isso quando uma variavel recebe uma função, a variavel terá o type da função
// manipulando os tipos dos parametros
const sum = (x: number, y: number) => {
    return x + y
}

const value = sum(2, 1)

// manipulando o tipo que a função irá retornam
const sum2 = (x: number, y: number): string => {
    return (x + y).toString()
}

const value2 = sum2(2, 1)

// Tambem é possivel usar intersections no retorno da função
const sum3 = (x: number, y: number): string | number => {
    return (x + y).toString()
}

const value3 = sum2(2, 1)

// void
// Uma função void é uma função que não retorna nada, que nã0 poderá ter nenhum return
// É possivel retornar todos os tipos basicos visto antes nas função (ex: (): string[], (): number[])

const log = (message: string): void => {
    console.log(message)
}
