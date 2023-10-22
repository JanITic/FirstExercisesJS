function obtenerFecha() {
  
    let año = parseInt(prompt("Ingrese el año:")),
        mes = parseInt(prompt("Ingrese el mes:")),
        dia = parseInt(prompt("Ingrese el día:"));

   
    let fecha = new Date(año, mes - 1, dia); 

    if (fecha.getFullYear() === año && fecha.getMonth() === mes - 1 && fecha.getDate() === dia) {
        
        console.log("Fecha ingresada: " + fecha.toISOString().split('T')[0]);
    } else {
        console.log("Fecha ingresada no es válida");
    }
}