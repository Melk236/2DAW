function validar(){
    let usuario=document.getElementById('usuario');
    
    if(usuario.value=='empleado' || usuario.value=='administrador'){
        window.location.href='form2.html';
    }
    else{
        let error=document.getElementById('error');
        error.innerHTML='Error usuario o contraseña incorrectos';
    }
}