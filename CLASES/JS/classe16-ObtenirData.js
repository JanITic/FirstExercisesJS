

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    
    const fechaFormateada = `Avui es ${dia} del ${mes} del ${anio}`;
    console.log(fechaFormateada);
    