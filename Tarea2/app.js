console.log("Hecho por Edgar Delgadillo Cortez")
let vidas = 3;
let num = Math.floor(Math.random() * 11);
VidasActualizar();

function VidasActualizar(){
    document.getElementById("vidas").innerHTML = "<strong>Vidas: " + vidas + "</strong>";
}


function adivinar(event){
    event.preventDefault();
    let valorUser = document.getElementById("valorUsuario").value;
    if ( parseInt(valorUser) == num){
        document.getElementById("resultado").innerHTML = "Has Acertado! :)"
        alert("Has acertado! (Reiniciando Juego)")
        window.location.reload()
    } else {
        document.getElementById("resultado").innerHTML = "<strong>Has Fallado! :(</strong>"
        vidas = vidas - 1;
    }
    VidasActualizar();

    if(vidas === 0){
        alert("El número era: " + num + "\nReiniciando juego...");
        window.location.reload()
    }
}