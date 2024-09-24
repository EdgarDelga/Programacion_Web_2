let carrito = [];

let fruta = prompt("Ingresa una fruta");

carrito.push(fruta);

while(confirm("Deseas agregar una fruta?")){
    let fruta = prompt("Ingresa una fruta");
    carrito.push(fruta);
};

let mensaje = " Carrito de compras \n\n"
carrito.forEach((producto, index) => mensaje+=`${index+1}.- ${producto}\n`);
alert(mensaje)
