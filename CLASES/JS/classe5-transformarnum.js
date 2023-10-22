// Pedir el número al usuario
let numero = parseInt(prompt("Introduce el número que quieres convertir: "));



// Convertir a hexadecimal
function convertirAHexadecimal(numero) {
    let hexadecimal = "";
    while(numero != 0){
        let resto = numero % 16;
        if (resto < 10) {
            hexadecimal = resto + hexadecimal;
        } else {
            hexadecimal = String.fromCharCode(resto + 87) + hexadecimal;
        }
        numero = Math.floor(numero / 16);
    }
    return hexadecimal;
}

// Convertir a octal
function convertirAOctal(numero) {
    let octal = "";
    while(numero != 0){
        octal = (numero % 8) + octal;
        numero = Math.floor(numero / 8);
    }
    return octal;
}

// Convertir a binario
function convertirABinario(numero) {
    let binario = "";
    while(numero != 0){
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    return binario;
}

// Llamar a las funciones y mostrar los resultados
console.log("Hexadecimal: " + convertirAHexadecimal(numero));
console.log("Octal: " + convertirAOctal(numero));
console.log("Binario: " + convertirABinario(numero));
