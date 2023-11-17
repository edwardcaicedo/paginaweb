
let inpContraseña = document.getElementById("idContraseña");
const mensaje = document.getElementById("mensaje");

inpContraseña.addEventListener('change', validarContraseña);


const btn = document.getElementById("boton");
btn.addEventListener('click', usuario);


function validarContraseña(){
    const password = inpContraseña.value;

    const mayuscula = (password.match(/[a-z]/g) || []).length;
    const numero = (password.match(/\d/g) || []).length;

    if (mayuscula >= 2 && numero >= 2 && password.length >= 8){
        mensaje.textContent = 'contraseña valida';
        mensaje.style.color = "green";
    }else{
        mensaje.textContent = 'la contraseña debe contener al menos dos numeros, dos mayuculas y minimo 8 caracteres';
        mensaje.style.color = "red";
    }
    
}

let usuarios = [
    {
        user : "edward@gmail.com",
        contra : "EddCaicedo1995"
    },

    {
        user : "edd@gmail.com",
        contra : "EA95mnimb"
    },
    {
        user : "andres@gmail.com",
        contra : "ANdres1995"
    }
]

function logear(){
    let usuar = document.getElementById("idUsuario").value;
    let pass = document.getElementById("idContraseña").value;
    console.log(user);
    console.log(pass);

    if(usuar === usuarios[0].user && pass === usuarios[0].contra ){
        window.location ="bienvenidad.html";
    }else {
        let mens = document.getElementById("mensaje");

    }


}



