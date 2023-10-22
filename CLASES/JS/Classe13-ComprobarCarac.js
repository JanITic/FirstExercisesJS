function Comprobar_Caracter() {
    // Solicitar al usuario el número de filas y columnas
    var Text = prompt("Text:");
    var Caracter = prompt("Caracter:");
    let numCaracter = 0;
  
    for(let i = 0; i < Text.length; i++) {
      if(Text.charAt(i) == Caracter) {
        numCaracter++;
      }
      
    }
    if(numCaracter>=2&&numCaracter<=4) {
      console.log("Esta entre 2 i 4 vegades al text");
    } else {
      console.log("No esta entre 2 i 4 vegades al text");
    }
  }
  