
function pedirInputs() {
    let num1 = parseInt(prompt("Por favor, introduce el primer valor:"));
    let num2 = parseInt(prompt("Por favor, introduce el segundo valor:"));
    let num3 = parseInt(prompt("Por favor, introduce el tercer valor:"));
    return [num1, num2, num3];
}

let [num1, num2, num3] = pedirInputs();

let lista = [num1,num2,num3];

lista.sort(); 

let suma = lista[0] + lista[1] + lista[2];

console.log("El numero mediano es:", lista[1]);
console.log("El numero mas grande es:", lista[2]);
console.log("El numero mas pequeño es:", lista[0]);
console.log("La media de los numeros es:", suma/3)
