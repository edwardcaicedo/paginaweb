function validarLogin() {
    // Obtener la entrada del usuario para correo electrónico y contraseña
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validar la contraseña según los criterios especificados
    if (!isValidPassword(password)) {
        alert("Contraseña incorrecta. Asegúrese de que cumpla con los requisitos.");
        return;
    }

    // Simular la validación del usuario con una promesa
    simulateUserValidation(email, password)
        .then(function (isValidUser) {
            if (isValidUser) {
                // Mostrar mensaje de carga
                alert("Validando usuario. Por favor, espere...");

                // Redirigir al panel después de 2 segundos
                setTimeout(function () {
                    window.location.href = '/bienvenidos.html';
                }, 2000);
            } else {
                alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
            }
        })
        .catch(function (error) {
            alert("Error en la validación del usuario: " + error);
        });
}

// Función para validar la contraseña según criterios específicos
function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Función para simular la validación del usuario con una promesa
function simulateUserValidation(email, password) {
    return new Promise(function (resolve, reject) {
        // Simular la lógica de validación del usuario (reemplazar con tu lógica de validación real)
        var validUsers = [
            { email: "user1@example.com", password: "Pass123@" },
            { email: "user2@example.com", password: "Pass456@" },
            { email: "user3@example.com", password: "Pass789@" }
            
        ];

        // Simular validación asíncrona
        setTimeout(function () {
            var isValidUser = false;
            for (var i = 0; i < validUsers.length; i++) {
                if (validUsers[i].email === email && validUsers[i].password === password) {
                    isValidUser = true;
                    break;
                }
            }

            if (isValidUser) {
                resolve(true);
            } else {
                reject("Usuario no válido");
            }
        }, 1000); // Simular un retraso de 1 segundo
    });
}




let objetos = [
    /////portatiles
    {
        producto: "portatil",
        descripcion: "portatil abc20",
        codigo: "pc1",
        cantidad: 20,
        precio: "$2.050.000",
        garantia: "1 año",
        color: "negro",
        origen: "china",
        disponibilidad: "disponible",
        img: '/img/pc1.jpeg'
    },


    {
        producto: "portatil",
        codigo: "pc2",
        descripcion: "portatil xtl359",
        cantidad: 100,
        precio: "$1.050.000",
        garantia: "1 año",
        color: "negro",
        origen: "china",
        disponibilidad: "disponible",
        img: '/img/pc2.png'
    },


    {
        producto: "portatil",
        descripcion: "portatil r300",
        codigo: "pc3",
        precio: "$1.550.000",
        garantia: "1 año",
        color: "azul",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc3.png'
    },


    {
        producto: "portatil",
        descripcion: "portatil rxt500",
        codigo: "pc4",
        cantidad: 19,
        precio: "$850.000",
        garantia: "1 año",
        color: "negro",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc4.png'
    },

    {
        producto: "portatil",
        descripcion: "portatl fxt100",
        codigo: "p5",
        cantidad: 10,
        precio: "$2.000.000",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc5.jpeg'
    },

    {
        producto: "portatil",
        descripcion: "portatl t300",
        codigo: "pc6",
        cantidad: 10,
        precio: "$3.500.000",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc6.jpeg'
    },

    {
        producto: "portatil",
        descripcion: "portatl t300",
        id: "pc7",
        cantidad: 10,
        precio: "$8.500.00",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc7.jpeg' 
    },


    {
        producto: "portatil",
        descripcion: "portatl frt00",
        codigo: "pc8",
        cantidad: 10,
        precio: "$10.900.000",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc8.png'
    },

    {
        producto: "portatil",
        descripcion: "portatl all star",
        codigo: "pc9",
        cantidad: 10,
        precio: "$1.799.000",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc9.jpeg'
    },
    
    {
        producto: "portatil",
        descripcion: "portatl black",
        codigo: "pc10",
        cantidad: 30,
        precio: "$3.500.000",
        garantia: "1 año",
        color: "gris",
        hecho: "china",
        disponibilidad: "disponible",
        img: '/img/pc10.jpg'
},

//celulares 

{
    producto: "celular",
    descripcion: "celular tel1",
    codigo: "c1",
    cantidad: 30,
    precio: "$1.100.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel1.jpg'
},

{
    producto: "celular ",
    descripcion: "celular tel2",
    codigo: "cel2",
    cantidad: 30,
    precio: "$1.700.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel1.jpg'
},

{
    producto: "celular ",
    descripcion: "celular tel3",
    codigo: "c3",
    cantidad: 30,
    precio: "$9.000.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel3.webp'
},

{
    producto: "celular ",
    descripcion: "celular tel4",
    codigo: "c4",
    cantidad: 30,
    precio: "$3.000.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "no disponible",
    img: '/img/cel4.png'
},
{
    producto: "celular ",
    descripcion: "celular tel5",
    codigo: "c5",
    cantidad: 30,
    precio: "$2.000.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel5.png'
},
{
    producto: "celular ",
    descripcion: "celular tel6",
    codigo: "c6",
    cantidad: 30,
    precio: "$1.800.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "no disponible",
    img: '/img/cel6.jpeg'
},
{
    producto: "celular ",
    descripcion: "celular tel7",
    codigo: "c7",
    cantidad: 30,
    precio: "$800.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: " disponible",
    img: '/img/cel7.png'
},

{
    producto: "celular ",
    descripcion: "celular tel8",
    codigo: "c8",
    cantidad: 30,
    precio: "$2.000.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel8.webp'
},
{
    producto: "celular ",
    descripcion: "celular tel9",
    codigo: "c7",
    cantidad: 30,
    precio: "$1.100.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel9.png'
},
{
    producto: "celular ",
    descripcion: "celular tel7",
    codigo: "c7",
    cantidad: 30,
    precio: "$800.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/cel10.webp'
},

////escritorios 

{
    producto: "pc escritorio ",
    descripcion: "pc gamer all",
    codigo: "comp1",
    cantidad: 8,
    precio: "$3.800.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c1.jpg'
},

{
    producto: "pc escritorio ",
    descripcion: "pc gamer black",
    codigo: "comp2",
    cantidad: 10,
    precio: "$2.100.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c2.jpeg'
},

{
    producto: "pc escritorio ",
    descripcion: "pc gamer xtl",
    codigo: "comp3",
    cantidad: 13,
    precio: "$2.900.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c3.webp'
},
{
    producto: "pc escritorio ",
    descripcion: "pc gamer xll",
    codigo: "comp4",
    cantidad: 3,
    precio: "$2.900.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c4.jpg'
},
{
    producto: "pc escritorio ",
    descripcion: "pc gamer star",
    codigo: "comp4",
    cantidad: 13,
    precio: "$5.500.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c4.jpg'
},
{
    producto: "pc escritorio ",
    descripcion: "pc gamer 310",
    codigo: "comp5",
    cantidad: 8,
    precio: "$2.900.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c5.webp'
},
{
    producto: "pc escritorio ",
    descripcion: "pc gamer ulx10",
    codigo: "comp6",
    cantidad: 3,
    precio: "$6.000.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c6.jpg'
},

{
    producto: "pc escritorio ",
    descripcion: "pc gamer 300",
    codigo: "comp6",
    cantidad: 7,
    precio: "$3.900.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c7.jpg'
},

{
    producto: "pc escritorio ",
    descripcion: "pc gamers xd",
    codigo: "comp8",
    cantidad: 3,
    precio: "$1.900.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "no disponible",
    img: '/img/c8.png'
},
{
    producto: "pc escritorio ",
    descripcion: "pc gamers lz",
    codigo: "comp8",
    cantidad: 3,
    precio: "$4.500.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/c9.jpg'
},

/////balacas 
{
    producto: "balacas audifonos",
    descripcion: "audifonos uvl10",
    codigo: "b1",
    cantidad: 3,
    precio: "$200.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b1.jpeg'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos r10",
    codigo: "b2",
    cantidad: 10,
    precio: "$250.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b2.webp'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos x360",
    codigo: "b3",
    cantidad: 10,
    precio: "$150.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b3.webp'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos 350",
    codigo: "b4",
    cantidad: 20,
    precio: "$50.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b4.jpeg'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos bbf110",
    codigo: "b5",
    cantidad: 2,
    precio: "$85.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b5.webp'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos zvg",
    codigo: "b6",
    cantidad: 20,
    precio: "$50.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b6.jpg'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos xdf",
    codigo: "b7",
    cantidad: 20,
    precio: "$510.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b7.webp'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos 350",
    codigo: "b8",
    cantidad: 5,
    precio: "$501.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b8.jpeg'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos f30",
    codigo: "b9",
    cantidad: 20,
    precio: "$50.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b9.webp'
},
{
    producto: "balacas audifonos",
    descripcion: "audifonos 350",
    codigo: "b10",
    cantidad: 20,
    precio: "$850.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/b10.png'
},
/// tarjetas graficas
{
    producto: "combo pc",
    descripcion: "combo para pc abc",
    codigo: "comb1",
    cantidad: 20,
    precio: "$2.050.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar1.jpeg'
},
{
    producto: "combo pc",
    descripcion: "combo para pc fr",
    codigo: "comb2",
    cantidad: 20,
    precio: "$3.550.000",
    garantia: "1 año",
    color: "negro",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar2.png'
},
{
    producto: "combo pc",
    descripcion: "combo para pc zlt",
    codigo: "comb3",
    cantidad: 10,
    precio: "$2.050.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar3.webp'
},
{
    producto: "combo pc",
    descripcion: "combo para pc 1000",
    codigo: "comb4",
    cantidad: 8,
    precio: "$2.050.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar4.jpeg'
},

{
    producto: "combo pc",
    descripcion: "combo para pc tzy",
    codigo: "comb5",
    cantidad: 9,
    precio: "$2.050.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar5.jpeg'
},
{
    producto: "combo pc",
    descripcion: "combo para pc 500",
    codigo: "comb6",
    cantidad: 6,
    precio: "$3.550.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar6.jpeg'
},
{
    producto: "combo pc",
    descripcion: "combo para pc f90",
    codigo: "comb7",
    cantidad: 8,
    precio: "$2.580.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar1.jpeg'
},
{
    producto: "combo pc",
    descripcion: "combo para pc x30",
    codigo: "comb7",
    cantidad: 6,
    precio: "$3.580.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar8.jpeg'
},

{
    producto: "combo pc",
    descripcion: "combo para pc rc500",
    codigo: "comb7",
    cantidad: 6,
    precio: "$2.580.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar10.jpg'
},

{
    producto: "combo pc",
    descripcion: "combo para pc zero",
    codigo: "comb7",
    cantidad: 6,
    precio: "$3.580.000",
    garantia: "1 año",
    color: "gris",
    hecho: "china",
    disponibilidad: "disponible",
    img: '/img/tar9.png'
},

];


function mostrarTodosObjetos() {
    const listaObjetos = document.getElementById('lista-objetos');
    listaObjetos.innerHTML = '';

    objetos.forEach(objeto => {
        const divObjeto = document.createElement('div');
        divObjeto.classList.add('objeto');
        divObjeto.innerHTML = `
        <div class="celular-txt">
            <img src="${objeto.img}" alt="${objeto.producto}">         
            <h2>${objeto.producto}</h2>
            <p>${objeto.descripcion}</p>
            <p>codigo: ${objeto.codigo}</p>
            <p>cantidad: ${objeto.cantidad}</p>
            <p>precio: ${objeto.precio}</p>
            <p>garantia: ${objeto.garantia}</p>
            <p>color: ${objeto.color || "No especificado"}</p>
            <p>hecho: ${objeto.hecho}</p>
            <p>Disponibilidad: ${objeto.disponibilidad}</p>
            <button class="btn" onclick="editarObjeto(${objeto.id})">Ver detalle</button>
            </div>
        `;
        listaObjetos.appendChild(divObjeto);
    });
}
function editarObjeto(id) {
    const objetoAEditar = objetos.find(objeto => objeto.id === id);

    if (objetoAEditar) {
      
        const nuevaDescripcion = prompt("Introduce la nueva descripción:", objetoAEditar.descripcion);
        const nuevaCantidad = prompt("Introduce la nueva cantidad:", objetoAEditar.cantidad);
        const nuevoPrecio = prompt("Introduce el nuevo precio:", objetoAEditar.precio);
        const nuevoGarantia = prompt("Introduce nueva garantia:", objetoAEditar.precio);  
        const nuevoColor = prompt("Introduce color:", objetoAEditar.precio);  
        const nuevoOrigen = prompt("Introduce origen:", objetoAEditar.precio);
        const nuevoDisponibilidad = prompt("Introduce disponobilidad:", objetoAEditar.precio);        
        objetoAEditar.descripcion = nuevaDescripcion || objetoAEditar.descripcion;
        objetoAEditar.cantidad = nuevaCantidad || objetoAEditar.cantidad;
        objetoAEditar.precio = nuevoPrecio || objetoAEditar.precio;
        objetoAEditar.garantia = nuevoGarantia || objetoAEditar.garantia;
        objetoAEditar.color = nuevoColor || objetoAEditar.color;
        objetoAEditar.origen = nuevoOrigen || objetoAEditar.origen;
        objetoAEditar.disponibilidad = nuevoDisponibilidad || objetoAEditar.disponibilidad;


        mostrarTodosObjetos();
    } else {
        console.log("Objeto no encontrado");
    }
}

  mostrarTodosObjetos();

  const paginas = 10;

// Página actual que se mostrará inicialmente.
let pagina = 1;

// Copia de todos los productos al principio para facilitar el filtrado.
let filtrarProducto = products.slice();

function rederProductso(){
    const container = document.getElementById("pruduct");
    container.innerHTML = "";

    //calcular el indice inicio fin 
    const inicioIndex = (pagina -1) * paginas;
    const finIndex = Math.min(inicioIndex + paginas, filtrarProducto.length);

    //crear y agregar las tarjetas 
    for(let i = inicioIndex; i < finIndex; i++){
        const tarjeta = crearTarjeta(filtrarProducto[i]);
        container.appendChild(tarjeta);
    }
}

function crearTarjeta(){
    const listaObjetos = document.getElementById('lista-objetos');
    listaObjetos.innerHTML = '';

    objetos.forEach(objeto => {
        const divObjeto = document.createElement('div');
        divObjeto.classList.add('objeto');
        divObjeto.innerHTML = `
        <div class="celular-txt">
            <img src="${objeto.img}" alt="${objeto.producto}">         
            <h2>${objeto.producto}</h2>
            <p>${objeto.descripcion}</p>
            <p>codigo: ${objeto.codigo}</p>
            <p>cantidad: ${objeto.cantidad}</p>
            <p>precio: ${objeto.precio}</p>
            <p>garantia: ${objeto.garantia}</p>
            <p>color: ${objeto.color || "No especificado"}</p>
            <p>hecho: ${objeto.hecho}</p>
            <p>Disponibilidad: ${objeto.disponibilidad}</p>
            <button class="btn" onclick="editarObjeto(${objeto.id})">Ver detalle</button>
            </div>
        `;
        listaObjetos.appendChild(divObjeto);
    });
}