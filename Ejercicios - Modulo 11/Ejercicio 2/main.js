const presupuesto = prompt("Ingrese el monto de dinero");
const gastosNecesarios = presupuesto * 0.5;
const gastosOpcionales = presupuesto * 0.3;
const ahorro = presupuesto * 0.2;
alert(`Del presupuesto ingresado de ${presupuesto}\n
el  50% para gastos necesarios que es = ${gastosNecesarios}\n
el  30% para gastos opcionales que es = ${gastosOpcionales}\n
el  20% para ahorrar que es = ${ahorro}`);