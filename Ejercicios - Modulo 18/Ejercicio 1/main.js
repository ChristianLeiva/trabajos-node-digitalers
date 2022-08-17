class Usuario {
    name;
    email;
    #password;
    constructor(){}
    validarEmail(email){
        return true;
    }
    validarPassword(password){
        let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z][^ ]{12,}$/
        let result = regexPassword.test(password)
        return result

    }
    singUp(name , email, password){
        let esValidado = false;
        esValidado = this.validarEmail(email);
        esValidado &&= this.validarPassword(password);
        if(esValidado){
            this.name= name;
            this.email = email;
            this.#password = password;
            // agregar usuario a db
            console.log("usuario registrado con éxito!!!")
        }else{
            console.log('Ingrese los campos correctos')
        }
    }
    login(email, password){
        if(email === this.email && password === this.#password){
         console.log('Inicio sesión con éxito')
        }else{
         console.log('Error de inicio de sesión!!')
        }
     }
     usuarioRegistrado(email){
        return true;
     }
     resetPassword(email, newPassword){
        if(this.usuarioRegistrado(email)){
            this.#password = newPassword;
            console.log('Nueva contraseña fijada!!')
        }else{
            console.log('No se encontró ninguna cuenta asociada')
        }
     }
}


const Chris = new Usuario();
Chris.singUp("Chris", "chris@gmail.com", "FernetConCoca!!_2021")