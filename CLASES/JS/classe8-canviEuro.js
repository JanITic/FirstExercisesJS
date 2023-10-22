let price = parseFloat(prompt("Precio producto: "));
let moneyGiven = parseFloat(prompt("Dinero que das: "));

let change = moneyGiven - price;

let denominations = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
let result = [];

for(let i=0; i<denominations.length; i++){
   while(change >= denominations[i]){
       change -= denominations[i];
       result.push(denominations[i]);
   }
}

console.log(result);
