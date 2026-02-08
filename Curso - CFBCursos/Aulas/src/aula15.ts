// REST e SPREAD

function soma(...n: number[]) {
    let s: number = 0

    for(let v of n) {
        s += v
    }

    // n.forEach((v) => {
    //     s += v
    // })

    return s
}

console.log(soma(10, 20, 30, 40, 100, 305))
