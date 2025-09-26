const buildPerson = (name: string, age: number, sex: string, isTall: boolean, hasDog: any) => {
    if(name == '' || age.toString() == '' || sex == '' || isTall.toString() == '' || hasDog.toString() == ''){
        return 
    }

    return [name, age, sex, isTall, hasDog]
}

console.log(buildPerson('rafa', 18, 'M', false, false))

const person = (name: string, age: number): string => {
    return name + ' ' + age
}

console.log(person('rafael', 21))

const dog = (name: string, age: number | string, isDangerous: boolean): string | number | boolean => {
    return name + age + isDangerous
}

console.log(dog('toto', 3, false))
