function Eliminar_Caracter() {
    // Solicitar al usuario el número de filas y columnas
    let texto = prompt("Introduce un texto:");
    let posicion = parseInt(prompt("Introduce la posición del carácter a eliminar:"));
    
    // Eliminar el carácter de la posición especificada
    texto = texto.substring(0, posicion) + texto.substring(posicion + 1);
    
    console.log("El texto modificado es: " + texto);
    
  }
  