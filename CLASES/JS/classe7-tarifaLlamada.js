let horas = prompt("INTRODUCE EL NUMERO DE HORAS: ");
let min = prompt("INTRODUCE EL NUMERO DE MINUTS: ");
let seg = prompt("INTRODUCE EL NUMERO DE SEGONS: ");

let horaseg = horas * 3600;
let minseg = min * 60;

let segonst = horaseg+minseg+seg;

let cent = (segonst/60)*5;

let euros = Math.floor(cent/100);
cent = Math.floor(cent%100);

console.log(euros +'€ '+ (cent+10) +'c');
