function calculo() {

// Variables

let nombre = prompt("¡Hola! ¿Cómo te llamas?");
let edad = prompt("¡Perfecto! ¿Qué edad tienes?");
let peso = prompt("Ahora, dame tu peso (Solo el número, en kg)");
let alt = prompt("Ahora dame tu estatura (en metros, solo el número)");
let imc;
let salud;

// Datos imprimibles

document.getElementById("nombre").innerHTML = "Hola <strong>" + nombre + "</strong>";
document.getElementById("nombre1").innerHTML = "Tienes <strong>" + edad + "</strong> años.";
document.getElementById("nombre2").innerHTML = "Tu peso es de <strong>" + peso + "</strong> kilogramos.";
document.getElementById("nombre3").innerHTML = "Tienes una estatura de <strong>" + alt + "</strong> metros.";


// Transformar los datos a flotantes 
peso = parseFloat(peso);
alt = parseFloat(alt);

// Algoritmo del imc
imc = peso / ((alt * alt));
console.log(imc);

// Impresión del IMC con solo dos decimales
document.getElementById("nombre4").innerHTML = "Tu IMC es de <strong>" + imc.toFixed(2) + "</strong>";

// Declaración del peso
if ( imc < 18.5){
    salud = "peso bajo";
} else if ( imc < 25){
    salud = "peso normal";
} else if (imc < 30){
    salud = "sobrepeso";
} else if (imc > 30){
    salud = "obesidad";
}

// Imprimir el IMC
document.getElementById("nombre5").innerHTML = "Por lo que tu imc es <strong>" + salud + "</strong>";

}