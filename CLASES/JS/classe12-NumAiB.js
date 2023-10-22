function aIb() {
  // Solicitar al usuario el número de filas y columnas
  var NomArxiu = prompt("Nom del arxiu:");
  let numA = 0;
  let numB = 0;

  for(let i = 0; i < NomArxiu.length; i++) {
    if(NomArxiu.charAt(i) == 'a' || NomArxiu.charAt(i) == 'A') {
      numA++;
    }
    if(NomArxiu.charAt(i) == 'b' || NomArxiu.charAt(i) == 'B') {
      numB++;
    }
  }
  if(numA == numB) {
    console.log("Hi han les mateixes a que b");
  } else {
    console.log("No hi han les mateixes a que b");
  }
}
