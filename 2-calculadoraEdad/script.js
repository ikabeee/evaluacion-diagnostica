const formulario = document.getElementById('formulario');

const calcularEdad =()=>{
    const fechaNacimiento = prompt('Ingresa tu fecha de nacimiento (dd/mm/aaaa)');
    const fechaActual = new Date();
    document.body.innerHTML += `<h2>Fecha de nacimiento: ${fechaActual}</h2>`;
}