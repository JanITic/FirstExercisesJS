function genera_tabla_multi() {
    // Solicitar al usuario el número de filas y columnas
    var numFilas = prompt("Numero de filas:");
    var numColumnas = prompt("Numero de columnas:");
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
  
    // Crea las celdas
    for (var i = 0; i < numFilas; i++) {
      var hilera = tabla.insertRow(i); // Crea las hileras de la tabla y las inserta
  
      for (var j = 0; j < numColumnas; j++) {
        var celda = hilera.insertCell(j); // Crea un elemento <td> y lo inserta
        celda.textContent = (i+1)*(j+1); // Asigna el texto a la celda con el producto de la multiplicación
      }
    }
  
    // Appends <table> into <body>
    document.body.appendChild(tabla);
}
