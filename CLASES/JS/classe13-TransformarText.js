function Transformar_Text() {
  // Solicitar al usuario el número de filas y columnas
  let texto = prompt("Introduce un texto:");
  
  let textoMaj = texto.toUpperCase();
  let textoMin = texto.toLowerCase();
  let textoLong = texto.length;
  let NumPalabras = texto.split(" ");
  let Vocals = "";
  let numVocals = 0;

  let expr = /[aàáäeèéëiíìïoóòöuúùü]/gi;
  let match = texto.match(expr);

  if (match) {
    Vocals = match.join(", ");
    numVocals = match.length;
  }

  document.write(`${textoMaj}<br/>`);
  document.write(`${textoMin}<br/>`);
  document.write(`${textoLong}<br/>`);
  document.write(`${NumPalabras.length}<br/>`);
  document.write(`${Vocals}<br/>`);
  document.write(`${numVocals}<br/>`);

  for (let i = 0; i < texto.length; i++) {
    const newTexto = texto.slice(i)
    document.write(`${newTexto}<br/>`);
  }
}


  
  