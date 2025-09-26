type Person1 = {
    name: string
    age: number
    sex: string
}

type DogsPerson1 = {
    dogsName: string
    dogsAge: number
    dogsHairColor: string
}

const person1: Person1 & DogsPerson1 = {
    name: 'Rafael', 
    age: 21,
    sex: 'M',

    dogsName: 'blake', 
    dogsAge: 4,
    dogsHairColor: 'white'
}

