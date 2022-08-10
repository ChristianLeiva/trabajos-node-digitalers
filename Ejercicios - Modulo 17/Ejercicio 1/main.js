document.querySelector("#btnSubmit").addEventListener("click", (e) =>{
    e.preventDefault();
    const money = document.getElementById("inputDinero").value;
    document.querySelector("#dineroConIva").value = money * 1.21
    
})
////Ejercicio 2

const arr1 = [4,5,6]

const div = document.querySelector(".matriz")

const map = (numeros, callBack)=>{
    return numeros.map((n)=>callBack(n))

}

console.log(map(arr1, (n)=> n * 2))