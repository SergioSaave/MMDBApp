export const getFechaOvulacion = (date) => {
    const partesFecha = date.split("/");
    const anio = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10);
    const dia = parseInt(partesFecha[2], 10);
    const fecha = new Date(anio, mes - 1, dia);
    const fechaPrimerDia = new Date(anio, mes - 1, dia);
    const fechaUltimoDia = new Date(anio, mes - 1, dia);
    fecha.setDate(fecha.getDate() + 13);
    fechaPrimerDia.setDate(fecha.getDate() + -2);
    fechaUltimoDia.setDate(fecha.getDate() + 2);

    const nuevoAnio = fecha.getFullYear();
    const nuevoMes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Asegura que el mes tenga 2 dígitos
    const nuevoDia = fecha.getDate().toString().padStart(2, "0"); // Asegura que el día tenga 2 dígitos

    const nuevoAnioPrimerDia = fechaPrimerDia.getFullYear();
    const nuevoMesPrimerDia = (fechaPrimerDia.getMonth() + 1).toString().padStart(2, "0"); // Asegura que el mes tenga 2 dígitos
    const nuevoDiaPrimerDia = fechaPrimerDia.getDate().toString().padStart(2, "0"); // Asegura que el día tenga 2 dígitos

    const nuevoAnioUltimoDia = fechaUltimoDia.getFullYear();
    const nuevoMesUltimoDia = (fechaUltimoDia.getMonth() + 1).toString().padStart(2, "0"); // Asegura que el mes tenga 2 dígitos
    const nuevoDiaUltimoDia = fechaUltimoDia.getDate().toString().padStart(2, "0"); // Asegura que el día tenga 2 dígitos

    const nuevaFecha = `${nuevoDia}/${nuevoMes}/${nuevoAnio}`;
    const nuevaFechaPrimerDia = `${nuevoDiaPrimerDia}/${nuevoMesPrimerDia}/${nuevoAnioPrimerDia}`;
    const nuevaFechaUltimoDia = `${nuevoDiaUltimoDia}/${nuevoMesUltimoDia}/${nuevoAnioUltimoDia}`;

    return {
        nuevaFecha,
        nuevaFechaPrimerDia,
        nuevaFechaUltimoDia
    };
}