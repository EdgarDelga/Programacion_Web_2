let impresion = "";

for(let tabla=1; tabla<=10; tabla++){
    for(mult=1; mult<=10; mult++){
        let resultado= mult*tabla;
        impresion+= tabla + " x " + mult + " = " + resultado + "\n";
    }
 impresion+= "\n"
}


console.log(impresion)