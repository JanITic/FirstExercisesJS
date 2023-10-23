 // Generar un número aleatorio entre 1 y 100
 var acabat= false;
 var intents=0;
 var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
 console.log(numeroAleatorio);
 
 while(!acabat){
     var guess = prompt("Introdueix Numero:");
     intents++;
    if(guess==0){
        acabat=true;
        alert("Game over!");
    }
    if(guess>numeroAleatorio && guess!=0){
        alert("menor");      
    }
    if(guess<numeroAleatorio && guess!=0){
        alert("major");  
    }
    if(guess==numeroAleatorio){
        acabat=true;
        alert("obtingut en "+intents);
    }
    
 }

 
 
   
  
  
    
    