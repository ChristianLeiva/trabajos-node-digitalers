const name = document.querySelector(".username")
const pass = document.querySelector(".password")
document.querySelector("#btnSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    
    const obj ={
        name : name.value,
        password: pass.value
    }

    localStorage.setItem("obj", JSON.stringify(obj))
})

document.querySelector("#btnRecuperar").addEventListener("click", (e) =>{
    e.preventDefault()
    const data = localStorage.getItem("obj")
    document.querySelector("#recoveryInfo").innerHTML = data
    
})

document.querySelector("#btnDelete").addEventListener("click", (e) =>{
    e.preventDefault();
    localStorage.removeItem("obj")
})