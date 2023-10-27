function primerDimecres() {
    var any1 = prompt("Introdueix primer any:");
    var any2 = prompt("Introdueix segon any:");
    
    for(let i = any1; i <= any2; i++) {
        // Use Date(year, month, day) function
        // para pillar primer dia del año
        var primerDia = new Date(i, 0, 1);
        
        // Check si es un Miercoles
        if(primerDia.getDay() === 3) {
            console.log("El primer dia de " + i + " es un dimecres");  
            break;  
        }
        if(i==any2) {
            console.log("No hi ha cap any que comenci per dimecres");    
        }
    }
}

  
  

  