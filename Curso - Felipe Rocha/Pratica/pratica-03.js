var car = {
    model: 'chevrollet',
    color: 'blue',
    year: 1997,
    condition: 'new',
    previousOwnersNames: ['Robert', 'Dene', 'Jake'],
    isWorking: true,
    rodas: [{ pneu: 'novo', calota: 'original' }]
};
console.log("O Modelo do carro \u00E9 ".concat(car.model, ", a cor dele \u00E9 ").concat(car.color, " e o ano dele \u00E9 ").concat(car.year));
