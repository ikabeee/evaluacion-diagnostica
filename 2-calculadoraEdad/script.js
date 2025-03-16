const formulario = document.getElementById('formulario');

let fechaUsuario = {
    anio: '',
    mes: '',
    dia: '',
    hora: ''
}

let fechaActual = {
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
    let edad = fechaActual.anio - anio;
    console.log(edad)
    if (mes > fechaActual.mes){
        edad--;
    }

    document.body.innerHTML += `<h2>Tu edad es: ${edad}</h2>`;
}