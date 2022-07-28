const button = document.querySelector("#button").addEventListener("click", (e)=>{
    e.preventDefault();
    const costosFijos = document.querySelector("#costoFijo").value;
    const precioVenta = document.querySelector("#precioVenta").value;
    const costoVariable = document.querySelector("#costoVariable").value;
    const puntoEquilibrio = parseInt(costosFijos) /( parseInt(precioVenta) - parseInt(costoVariable) );
    console.log(puntoEquilibrio)
    const PointE = document.querySelector("#puntoEquilibrio").value = puntoEquilibrio
    
})


