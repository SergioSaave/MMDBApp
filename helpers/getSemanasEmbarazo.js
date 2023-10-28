export const getSemanasEmbarazo = (date) => {
    const fechaActual = new Date();

    // Convierte la fecha proporcionada a un objeto de fecha
    const partesFecha = date.split("/");
    const anio = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10);
    const dia = parseInt(partesFecha[2], 10);
    const fecha = new Date(anio, mes - 1, dia);
    
    // Calcula la diferencia en milisegundos entre las dos fechas
    var diferenciaEnMilisegundos = fechaActual - fecha;
    
    // Convierte la diferencia en milisegundos a días
    var diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(diferenciaEnDias / 7).toString();
    const dias = (diferenciaEnDias % 7).toString()
    return {
        semanas,
        dias
    }
}