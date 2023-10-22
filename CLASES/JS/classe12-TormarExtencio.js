function extraer_extension() {
    // Solicitar al usuario el número de filas y columnas
    var NomArxiu = prompt("Nom del arxiu:");
    var extencio = NomArxiu.split(".");

    console.log(extencio[extencio.length-1]);
  
  }
