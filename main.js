const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,// Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{9}$/,
    direccion: /^[a-zA-Z0-9\s\.,#-]+$/,
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    distrito: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,

    dni: /^\d{8,10}$/,
    presupuesto: /^\d{4,14}$/
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    direccion: false,

    dni: false,
    presupuesto: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "ciudad":
            validarCampo(expresiones.ciudad, e.target, 'ciudad');
            break;
        case "distrito":
            validarCampo(expresiones.distrito, e.target, 'distrito');
            break;

        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
            break;
        case "presupuesto":
            validarCampo(expresiones.presupuesto, e.target, 'presupuesto');
            break;
    }

}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const data={
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        telefono: telefono.value,
        direccion: direccion.value,
        ciudad: ciudad.value,
        distrito: distrito.value,
        dni: dni.value,
        presupuesto: presupuesto.value
    }

    console.log(data);
    
    if (campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.direccion && campos.ciudad && campos.distrito && campos.dni && campos.presupuesto) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

});

