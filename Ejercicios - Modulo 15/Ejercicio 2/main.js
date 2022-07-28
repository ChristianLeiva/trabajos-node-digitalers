const buttonSubmit = document.querySelector("#buttonSubmit").addEventListener("click", (e)=>{
    e.preventDefault()
    const money = document.querySelector("#dinero").value;
    const necessaryExpenses = document.querySelector("#gastosNecesarios").value;
    const optionalExpenses = document.querySelector("#gastosOpcionales").value;
    const saving = document.querySelector("#ahorro").value;

    const result = parseFloat( necessaryExpenses ) +parseFloat( optionalExpenses ) + parseFloat( saving )
    
    if(result > 1){
        document.querySelector("#error").innerHTML = "<p>ERROR!! Los porcentajes superan el valor del dinero ingresado</p>"
    }else{
        document.querySelector("#resultGastosNecesarios").value = (money * necessaryExpenses)
        document.querySelector("#resultGastosOpcionales").value = (money * optionalExpenses)
        document.querySelector("#resultAhorro").value = (money * saving)

    }


})

const buttonReset = document.querySelector("#buttonReset").addEventListener("click", (e) =>{
    document.querySelector("#error").innerHTML = ""
})