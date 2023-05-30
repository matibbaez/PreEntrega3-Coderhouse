// VIAJES DISPONIBLES

const vuelos = [

    {
        id: "berlin",
        titulo: "Berlin",
        imagen: "./assets/berlin01.jpg",
        precio: 800
    },
    {
        id: "amsterdam",
        titulo: "Amsterdam",
        imagen: "./assets/amsterdam01.jpg",
        precio: 700
    },
    {
        id: "santiago",
        titulo: "Santiago de Chile",
        imagen: "./assets/santiago01.jpg",
        precio: 800
    },
    {
        id: "cancun",
        titulo: "Cancun",
        imagen: "./assets/cancun02.jpg",
        precio: 800
    },
    {
        id: "paris",
        titulo: "Paris",
        imagen: "./assets/paris01.jpg",
        precio: 800
    },
    {
        id: "dubai",
        titulo: "Dubai",
        imagen: "./assets/dubai01.jpg",
        precio: 800
    },
    {
        id: "newyork",
        titulo: "New York",
        imagen: "./assets/newyork.jpg",
        precio: 800
    },
    {
        id: "riodejaneiro",
        titulo: "Rio de Janeiro",
        imagen: "./assets/riodejaneiro01.jpg",
        precio: 800
    },
    {
        id: "buenosaires",
        titulo: "Buenos Aires",
        imagen: "./assets/argentina01.jpg",
        precio: 800
    },
    {
        id: "londres",
        titulo: "Londres",
        imagen: "./assets/londres01.jpg",
        precio: 800
    },
    {
        id: "madrid",
        titulo: "Madrid",
        imagen: "./assets/madrid01.jpg",
        precio: 800
    },
    {
        id: "roma",
        titulo: "Roma",
        imagen: "./assets/roma01.jpg",
        precio: 800
    },
]

const contenedorVuelos = document.querySelector("#contenedor-vuelos");
let botonesAdd = document.querySelectorAll(".add-to-cart-button");
const numeroCart = document.querySelector("#numero-cart");

// Funcion para cargar los vuelos

function cargarVuelos() {

    vuelos.forEach(vuelo => {

        const div = document.createElement("div");
        div.classList.add("vuelo");
        div.innerHTML = `
            <img id="product-image-wrapper" src="${vuelo.imagen}" alt="${vuelo.titulo}" class="product-image">
            <div class="product-info-container">
                <span class="product-seller">TUVIAJE.COM</span>
                <h3 class="product-title">${vuelo.titulo}</h3>
                <h3 class="product-price">€${vuelo.precio}</h3>
                <button class="add-to-cart-button" id="${vuelo.id}">Agregar al carrito</button>
            </div>
        `

        contenedorVuelos.append(div);
    })

    actualizarBotones();

}

cargarVuelos();

// Funcion para actualizar los botones 

function actualizarBotones () {
    botonesAdd = document.querySelectorAll(".add-to-cart-button");
    botonesAdd.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let vuelosEnCarrito;
let vuelosEnCarritoLS = localStorage.getItem("vuelos-en-carrito");

if (vuelosEnCarritoLS) {
    vuelosEnCarrito = JSON.parse(vuelosEnCarritoLS);
    actualizarNumero();
} else {
    vuelosEnCarrito = [];
}

// Funcion para agregar al carrito

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const vueloAgregado = vuelos.find(vuelo => vuelo.id === idBoton);

    if(vuelosEnCarrito.some(vuelo => vuelo.id === idBoton)) {
        const index = vuelosEnCarrito.findIndex(vuelo => vuelo.id === idBoton);
        vuelosEnCarrito[index].pasajeros++;
    } else {
        vueloAgregado.pasajeros = 1;
        vuelosEnCarrito.push(vueloAgregado);
    }

    actualizarNumero();

    localStorage.setItem("vuelos-en-carrito", JSON.stringify(vuelosEnCarrito));
}

// Funcion para actualizar el número de productos

function actualizarNumero() {
    let numeroVuelo = vuelosEnCarrito.reduce((acc, vuelo) => acc + vuelo.pasajeros, 0);
    numeroCart.innerHTML = numeroVuelo;
}








