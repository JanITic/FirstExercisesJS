function calcularTiempo() {

    let dias = parseInt(prompt("Ingrese los dias:"));

    // Definir el número de días en un año y en un mes
    var diasPorAno = 360;
    var diasPorMes = 30;

    // Calcular el número de años
    var anos = Math.floor(dias / diasPorAno);

    // Calcular el número de meses
    var diasRestantes = dias % diasPorAno;
    var meses = Math.floor(diasRestantes / diasPorMes);

    // Calcular el número de días restantes
    var diasRestantes = diasRestantes % diasPorMes;

    // Devolver el resultado
    return {
        anos: anos,
        meses: meses, 
        dias: diasRestantes
    };
}

// Call the function and store the result
var tiempo = calcularTiempo();

console.log("Años: " + tiempo.anos + ", Meses: " + tiempo.meses + ", Días: " + tiempo.dias);
