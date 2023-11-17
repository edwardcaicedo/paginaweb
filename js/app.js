
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

    if(usuar === usuarios[0].user && pass === usuarios[0].contra){
        window.location ="bienvenidad.html";
    } else if (usuar === usuarios[1].user && pass === usuarios[1].contra ) {
        let mens = document.getElementById("mensaje");

    }else if(usuar === usuarios[2].user && pass === usuarios[2].contra ){

    }else {
        validarContraseña();
    }


}


let objetos = [
    {
        producto: "computador mesa",
        descripcion: "El chasis Mini Tower heksagon de tipo gamer ATX con fuente de 750 (Watts reales 250",
        id: 1,
        cantidad: 20,
        precio: "$2.050.000",
        garantia: "1 año",
        color: "negro",
        origen: "china",
        disponibilidad: "disponible"
    },


    {
        producto: "portatil",
        id: 2,
        descripcion: "Portátil Coin Lum310, disfruta de tu trabajo con la comodidad que te brinda este notebook",
        cantidad: 100,
        precio: "$1.050.000",
        garantia: "1 año",
        color: "negro",
        origen: "china",
        disponibilidad: "disponible"
    },


    {
        producto: "celular",
        descripcion: "Xiaomi Redmi Note 12, Disfruta de una experiencia de pantalla táctil receptiva con suave sensación de desplazamiento y gran pantalla",
        id: 3,
        cantidad: 18,
        precio: "$1.550.000",
        garantia: "1 año",
        color: "azul",
        hecho: "china",
        disponibilidad: "disponible"
    },


    {
        img: "",
        id: 4,
        producto: "tablet",
        descripcion: "Tablet Lenovo M10 Plus TB125F",
        precio: "$850.000",
        garantia: "1 año",
        color: "negro",
        hecho: "china",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 5,
        producto: "disco duro",
        descripcion: "Disco Duro Externo Western Digital Mecanico HDD 4TB Elements",
        precio: "$1.000.000",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 6,
        producto: "mouse",
        descripcion: "El mouse G502 es todo un icono que ha ocupado las primeras posiciones de las listas generación tras generación",
        precio: "$500.000",
        garantia: "1 año",
        color: "negro",
        hecho: "china",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 7,
        producto: "diadema",
        descripcion: "Diadema Inalámbrica ajustable, tiene reducción de ruido suave",
        precio: "$380.000",
        garantia: "1 año",
        color: "blanco",
        hecho: "china",
        disponibilidad: "disponible"
    },


    {
        img: "",
        id: 8,
        producto: "ups",
        descripcion: "UPS Wattana mantendrás tus equipos electrónicos a salvo cuando ocurran variaciones en la línea eléctrica",
        precio: "$380.000",
        garantia: "1 año",
        color: "blanco",
        hecho: "china",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 9,
        producto: "software",
        descripcion: "Kaspersky Small Office Security combina la simplicidad de la protección de los equipos personales con funciones especiales para mantener su empresa segura",
        precio: "$980.000",
        garantia: "1 año",
        color: "blanco",
        hecho: "china",
        disponibilidad: "disponible"
    },
    
    {
        img: "",
        id: 10,
        producto: "MACBOOK ",
        descripcion: "l chip M2 es hasta 1,4 veces más rápido que con el Chip 1 y 6 veces más rápido que otros procesadores",
        precio: "$3.300.000",
        garantia: "1 año",
        color: "blanco",
        hecho: "china",
        disponibilidad: "disponible"
    },
]


