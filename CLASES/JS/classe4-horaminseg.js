function obtenerHora() {
    // Pedir al usuario que ingrese la hora, minutos y segundos
    let hora = parseInt(prompt("Ingrese la hora:")),
        minutos = parseInt(prompt("Ingrese los minutos:")),
        segundos = parseInt(prompt("Ingrese los segundos:"));

    // Crear un objeto Date con la hora proporcionada
    let fecha = new Date();
    fecha.setHours(hora, minutos, segundos);

    // Obtener la hora en el formato hh:mm:ss y mostrarla en la consola
    console.log("Hora ingresada: " + fecha.toTimeString().split(' ')[0]);
}