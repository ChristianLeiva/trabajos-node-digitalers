const name = prompt("Ingrese nombre del usuario");
const pass = parseInt( prompt('Ingrese password'))
if(name === "admin" && pass === 1234){
    document.writeln("Bienvenido al sitio");
}else{
    document.writeln("Usuario y/o contraseña invalido")
}