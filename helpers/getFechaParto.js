const diasDeLaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
];
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

export const getFechaParto = (date) => {
    const partesFecha = date.split("/");
    const anio = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10);
    const dia = parseInt(partesFecha[2], 10);
    const fecha = new Date(anio, mes - 1, dia);
    fecha.setDate(fecha.getDate() + 280);

    const nombreDia = diasDeLaSemana[fecha.getDay()];
    const nombreMes = meses[fecha.getMonth()];

    const nuevoAnio = fecha.getFullYear();
    const nuevoMes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Asegura que el mes tenga 2 dígitos
    const nuevoDia = fecha.getDate().toString().padStart(2, "0"); // Asegura que el día tenga 2 dígitos
    
    const nuevaFecha = `${nombreDia} ${nuevoDia} de ${nombreMes} de ${nuevoAnio}`;

    return nuevaFecha;
}