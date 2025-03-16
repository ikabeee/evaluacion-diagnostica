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

const fechaNacimiento =()=>{
    const dia = parseInt(prompt("Ingresa tu dia de nacimiento (Número del día)"));
    const mes = parseInt(prompt("Ingresa tu mes de nacimiento (Número del mes)"));
    const anio = parseInt(prompt("Ingresa tu año de nacimiento (Número del año)"));
    const hora = parseInt(prompt("Ingresa tu hora de nacimiento (0-23)"));
    const fechaUsuario = {mes: mes, hora: hora, dia: dia, anio: anio};
    return fechaUsuario;
}
console.log(fechaActual)
const calcularEdad =()=>{
   const {mes, hora, dia, anio} = fechaNacimiento();
    let edadAnio = fechaActual.anio - anio;
    let edadMes = fechaActual.mes - mes;
    let edadDia = fechaActual.dia - dia;
    let edadHora = fechaActual.hora - hora;
    if(edadAnio<fechaActual.anio){
        edadAnio--;
    }
    if(edadMes<fechaActual.mes){
        edadMes+=12;
    }
    if(edadDia<fechaActual.dia){
        edadDia+=30;
    }
    if(edadHora<fechaActual.hora){
        edadHora+=24;
    }

    document.body.innerHTML += `<h2>Tu edad es años: ${edadAnio}, meses: ${edadMes}, dias: ${edadDia}, semanas:${parseInt(edadDia/7)}, hora: ${edadHora}</h2>`;
}