function pentavocalica() {
    var palabra = prompt("Introdueix la paraula:");
    
    let palabraB=palabra.toLocaleLowerCase();

    let vocals = [/[aàáä]/gi,/[eèéë]/gi,/[iíìï]/gi,/[oóòö]/gi,/[uúùü]/gi];
    let hihanvocals = false;

    for(let i=0;i<vocals.length;i++){
        if(palabraB.match(vocals[i])){
            hihanvocals = true;
        }else{
            document.write(`No hi han totes les vocals<br/>`);
            hihanvocals = false;
            break;
        }
    }
    if(hihanvocals==true){
        document.write(`Es pentavocalica<br/>`);
    }  

}
  