function control(){
    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("contraseña");

    if(usuario.value.includes("@") == false || contraseña.value === ""){
        if (contraseña.value === ""){
            alert(`La contraseña no puede estar vacía`); 
            return false;            
        }
        else{
            alert(`El usuario debe contener @`);         
            return false;
        } 
    }     
    else{
        alert(`Bienvenido`);   
        return true;     
    } 
}
