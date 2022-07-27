var Ofertas = [
    {
        nombre: "Plan001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "Plan002",
        capital: 300000,
        plazo: 180,
                tasa: 0.1
    },
    {
        nombre: "Plan003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23
    }
];

const calcularIntereses = (arr) =>{
    const consulta = arr.map(el =>{
        return interesGanado  = (el.capital * el.plazo * el.tasa)/ 100;
    })
    arr.push(...[consulta])
    return arr
}

console.log(calcularIntereses(Ofertas))