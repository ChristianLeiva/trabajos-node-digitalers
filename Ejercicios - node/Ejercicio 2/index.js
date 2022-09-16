const express = require('express')
const app = express()
const port = process.env.DEFAULT_PORT || 4000
app.use(express.json())


const frase = "Hola mundo como estan"


app.get('/api/getFrase', (req, res) =>{
    res.status(200).send(frase)
})
app.get('/api/getPalabra/:num', (req, res) =>{
    const num = req.params.num

    const fraseEdit = frase.split(' ')
    if(num > fraseEdit.length || num < 0){
        return res.status(400).send({
            ok: "false",
            error: "El numero ingresado no es valido"
        })
    }else{
        const result = fraseEdit[num]
        return res.status(200).send({
            ok : "true",
            result
        })
    }
  
})
app.get('/api/getLetra/:num', (req, res) =>{
    const num = req.params.num

    const fraseEdit = frase.split('').filter(c =>  c !== " ")
    
    if(num > fraseEdit.length || num < 0){
        return res.status(400).send({
            ok: "false",
            error: "El numero ingresado no es valido"
        })
    }else{
        const result = fraseEdit[num]
        return res.status(200).send({
            ok : "true",
            result
        })
    }
  
})

app.listen(port, () =>{
    console.log(`Server started at ${port}`)
})