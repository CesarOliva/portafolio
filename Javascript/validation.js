(function(){
    var formulario = document.getElementById('formulario');
    var nombre = formulario.Nombre;
    var correo = formulario.Correo;
    var telefono = formulario.Telefono;
    var contacto = formulario.Contacto;

    function validarNombre(e){
        if(nombre.value == '' || nombre.value == null){
            nombre.style.border = '1px solid red'
            e.preventDefault();
        } 
    }
    function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
            correo.style.border = '1px solid red'
            e.preventDefault();
        } 
    }
    function validarTelefono(e){
        if(telefono.value == '' || telefono.value == null){
            telefono.style.border = '1px solid red'
            e.preventDefault();
        } 
    }
    function validarOpcion(e){
        if(contacto.value == '' || contacto.value == null){
            document.getElementById('radios').style.background = '#ff000059'
            e.preventDefault();
        } 
    }

    function validarFormulario(e){
        validarNombre(e);
        validarTelefono(e);
        validarCorreo(e);
        validarOpcion(e);
    }

    formulario.addEventListener('submit', validarFormulario)
    
}());