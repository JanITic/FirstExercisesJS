function genera_rombo() {
  // Solicitar al usuario el número de filas y columnas
  var numFilas = prompt("Número de filas en el rombo:");
  var color = "red"; // Color del rombo

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  tabla.setAttribute("border", "1");

  // Crea el rombo
  for (var i = 0; i < numFilas; i++) {
    var hilera = tabla.insertRow(i); // Crea las hileras de la tabla y las inserta

    for (var j = 0; j < numFilas; j++) {
      var celda = hilera.insertCell(j); // Crea un elemento <td> y lo inserta
      celda.style.width = "20px"; // Establece el ancho de la celda
      celda.style.height = "20px"; // Establece la altura de la celda

      // Calcula la posición en el rombo
      var center = Math.floor(numFilas / 2);

      // Si estamos dentro del rombo, pinta la celda de rojo
      if (i <= center) {
        if (j >= center - i && j <= center + i) {
          celda.style.backgroundColor = color;
        }
      } else {
        if (j >= i - center && j <= 3 * center - i) {
          celda.style.backgroundColor = color;
        }
      }
    }
  }

  // Appends <table> into <body>
  document.body.appendChild(tabla);
}

genera_rombo();
