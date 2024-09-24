let impresionh = "";
let impresionv = "";


while (confirm("Deseas imprimir x's?")){
    let h = prompt("¿Cuantas horizontales deseas imprimir?\n");
    let v = prompt("¿Cuantas verticales deseas imprimir? \n")
    
    for(let cont=0; cont<h; cont++){
        impresionh+="x";
    }

    for(let cont=0; cont<v; cont++){
        impresionv+="x\n";
    }

    alert(impresionh + impresionv)
}