const formulario = document.getElementById('formulario');

var fechaUsuario = {
    anio: '',
    mes: '',
    dia: '',
    hora: ''
}

var fechaActual = {
    anio: new Date().getFullYear(),
    mes: new Date().getMonth(),
    dia: new Date().getDate(),
    hora: new Date().getHours()
}

const fechaNacimiento = () => {
    const dia = parseInt(prompt("Ingresa tu dia de nacimiento (Número del día)"));
    const mes = parseInt(prompt("Ingresa tu mes de nacimiento (Número del mes)"));
    const anio = parseInt(prompt("Ingresa tu año de nacimiento (Número del año)"));
    const hora = parseInt(prompt("Ingresa tu hora de nacimiento (0-23)"));
    const fechaUsuario = { mes: mes, hora: hora, dia: dia, anio: anio };
    return fechaUsuario;
}
console.log(fechaActual)
const calcularEdad = () => {
    const { mes, hora, dia, anio } = fechaNacimiento();
    let edadAnio = fechaActual.anio - anio;
    let edadMes = fechaActual.mes - mes;
    let edadDia = fechaActual.dia - dia;
    /* 1 año tiene 8760 horas, un mes 730, y un dia 24. Son datos en promedio ya que hay años bisiestos */
    let edadHora = (edadAnio * 8760)+ (edadMes * 730) + (edadDia * 24) + hora;

    if (edadAnio < fechaActual.anio) {
        edadAnio--;
    }
    if (edadMes < fechaActual.mes) {
        edadMes += 12;
    }
    if (edadDia < fechaActual.dia) {
        edadDia += 30;
    }

    document.body.innerHTML += `<h2>Tu edad es años: ${edadAnio}, meses: ${edadMes}, dias: ${edadDia}, semanas:${parseInt(edadDia / 7)}, horas: ${edadHora}</h2>`;
}