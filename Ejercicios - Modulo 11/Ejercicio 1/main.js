const costosFijos = prompt("Ingresa el valor de Costos fijos");
const preciosVenta = prompt("Ingresa el valor de precio de ventas");
const costosVariables = prompt('Ingresa el valor de costos variables');

const puntosDeEquilibrio = parseInt(costosFijos) /( parseInt(preciosVenta) - parseInt(costosVariables) );

alert(`Punto de equilibrio = ${puntosDeEquilibrio}`);