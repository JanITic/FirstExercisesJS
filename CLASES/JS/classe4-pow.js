let base = prompt("Primer num");
let expo = prompt("Segon num");

let result = 1;

console.time("Math.pow()");

console.log(Math.pow(base, expo));

console.timeEnd("Math.pow()");



console.time("Bucle");

for(let i = 0; i<expo; i++){
    result *= base;
   
}
console.log(result);
console.timeEnd("Bucle");