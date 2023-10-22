function genera_tabla() {
  // Solicitar al usuario el número de filas y columnas
  var numColumnas = prompt("Número de cuadrados en la base:");
  var color = "red"; // Color de la pirámide

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  tabla.setAttribute("border", "1");

  // Crea las celdas
  for (var i = 0; i < numColumnas; i++) {
    var hilera = tabla.insertRow(i); // Crea las hileras de la tabla y las inserta

    for (var j = 0; j < numColumnas; j++) {
      var celda = hilera.insertCell(j); // Crea un elemento <td> y lo inserta
      celda.style.width = "20px"; // Establece el ancho de la celda
      celda.style.height = "20px"; // Establece la altura de la celda

      // Calcula la posición en la pirámide al revés
      var reversePos = numColumnas - 1 - i;

      // Si estamos dentro de la pirámide, pinta la celda de rojo
      if (j >= reversePos && j <= i) {
        celda.style.backgroundColor = color;
      }
    }
  }
  for(let i=0; i<numColumnas/2-1;i++){
  tabla.deleteRow(0)
  }

  // Appends <table> into <body>
  document.body.appendChild(tabla);
}

genera_tabla();