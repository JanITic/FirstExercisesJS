function pedirInputs() {
    let num1 = parseInt(prompt("Por favor, introduce el primer valor:"));
    let num2 = parseInt(prompt("Por favor, introduce el segundo valor:"));
    return {num1, num2};
}

let inputs = pedirInputs();
let num1 = inputs.num1;
let num2 = inputs.num2;

let n1 = Math.abs(num1-100);
let n2 = Math.abs(num2-100);

if(n1<n2){
    console.log("El numero que esta mas cerca es", num1);
}else{
    console.log("El numero que esta mas cerca es", num2);
}
