//Definimos las variables r g y v y las pedimos mediante tres prompt para pedirlas al usuaria
let r = prompt("INTRODUCE r: ");
let g = prompt("INTRODUCE g: ");
let b = prompt("INTRODUCE b: ");

//Una vez pedidos mediante los prompt definimos una nueva variable para transformar los numeros de base 10 a hexadecimales mediante la funcion .toString(16)
let rHexa = parseInt(r).toString(16);
let gHexa = parseInt(g).toString(16);
let bHexa = parseInt(b).toString(16);

//Mostramos el resultado
console.log('#'+rHexa+gHexa+bHexa);
