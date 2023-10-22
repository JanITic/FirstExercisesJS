function extraer_extension() {
  // Solicitar al usuario el número de filas y columnas
  var frase1 = prompt("Nom del arxiu:");
  var frase2 = prompt("Nom del arxiu:");
  let longFrase1 = frase1.length;
  let longFrase2 = frase2.length;

  if (longFrase1 === longFrase2) {
    console.log("Tenen la mateixa longitud");
  }
}
