function minutsFinsMitjanit() {
    var hora = prompt("Introdueix una hora en format hh:mm:");
  
    if (hora === null) {
      document.write("Entrada cancel·lada");
      return;
    }
  
    var [hores, minuts] = hora.split(':').map(Number);
  
    var minutsFinsMitjanit = (24 * 60 - (hores * 60 + minuts)) % (24 * 60);
  
    if (minutsFinsMitjanit === 0) {
      document.write("Bon any Nou!");
    } else {
      document.write(`Falten ${minutsFinsMitjanit} minuts fins a mitjanit.`);
    }

  }
  

  