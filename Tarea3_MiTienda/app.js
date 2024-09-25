// Definir el Carrito

let carrito = [];

let total = 0;
let totalHTML = document.getElementById('totalHTML');
let precioplayera = 0;


// Función para agregar los articulos al carrito
function agregarCarrito(nombre, precio){
    let articulo = {
        nombre: nombre,
        precio: precio
    }

    carrito.push(articulo);
    total += precio;
    totalHTML.innerHTML = "Total: $" + total;
}

//Temporizador de descuentos
let playera = document.getElementById("playera1");
let temporizador = document.getElementById('temporizador');
let inicio = 5;
const tiempo = setInterval(() => {
    inicio--;
    temporizador.innerHTML = "Las ofertas terminan en " + inicio + " seg";
    playera.innerHTML = "200 (DESCUENTO)";
    precioplayera = 200;
    if (inicio <= 0) {
        clearInterval(tiempo);
        alert("Las ofertas han terminado!");
        precioplayera = 300;
        playera.innerHTML = "$300";
    }
}, 1000)

// Definir la función de todos los botones

function botonplayeraMas() {
    agregarCarrito("Playera de Licra", precioplayera);
}

function botonBataMas() {
    agregarCarrito("Bata de Laboratorio", 500);
}

function botonPantsMas() {
    agregarCarrito("Pants Deportivo", 200);
}

function botonSudadMas() {
    agregarCarrito("Sudadera Elegante", 800);
}

function botonSudadNinoMas() {
    agregarCarrito("Sudadera Infantil", 200);
}

function botonGokuMas() {
    agregarCarrito("Playera de Goku", 100);
}

//Funcion para mostrar el carrito


function carritooo() {
    let mensaje = "Tu carrito de compras tiene: \n"

    carrito.forEach((articulo, index) => {
        mensaje += `${index + 1}.- ${articulo.nombre} de costo ${articulo.precio}.\n`
    })

    alert(mensaje);
    console.log(carrito)
}