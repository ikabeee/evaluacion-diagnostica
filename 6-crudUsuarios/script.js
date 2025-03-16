const baseDeDatos = [
    {
        id: 1,
        nombre: "Carlos",
        edad: 20,
        contrasena: "hola123"
    },
    {
        id: 2,
        nombre: "Lidia",
        edad: 20,
        contrasena: "hola123"
    },
    {
        id: 3,
        nombre: "Jorge",
        edad: 20,
        contrasena: "hola123"
    },
]

const imprimirUsuarios=()=>{
    baseDeDatos.forEach(usuario => {
        document.body.innerHTML += `ID:${usuario.id} <br> Nombre: ${usuario.nombre} <br> Edad: ${usuario.edad} <br> Contraseña: ${usuario.contrasena} <br> <br>`;
    });
}

const crearUsuario=()=>{
    const nombre = prompt("Ingresa tu nombre");
    const edad = prompt("Ingresa tu edad");
    const contrasena = prompt("Ingresa tu contraseña");
    const id = baseDeDatos.length+1;
    baseDeDatos.push({id, nombre, edad, contrasena});
    imprimirUsuarios();
}

const eliminarUsuario=()=>{
    const id=parseInt(prompt("Ingresa el id del usuario que deseas eliminar"));
    const indice = baseDeDatos.findIndex(usuario => usuario.id === id);
    baseDeDatos.splice(indice,1);
    imprimirUsuarios();
}

const actualizarUsuarios=()=>{
    const id=parseInt(prompt("Ingresa el id del usuario que deseas actualizar"));
    const nombre = prompt("Ingresa tu nombre");
    const edad = prompt("Ingresa tu edad");
    const contrasena = prompt("Ingresa tu contraseña");
    const indice = baseDeDatos.findIndex(usuario => usuario.id === id);
    baseDeDatos[indice] = {id, nombre, edad, contrasena};
    imprimirUsuarios();
}

const obtenerUsuario=()=>{
    const id=parseInt(prompt("Ingresa el id del usuario que deseas obtener"));
    const usuario = baseDeDatos.find(usuario => usuario.id === id);
    document.body.innerHTML += `ID:${usuario.id} <br> Nombre: ${usuario.nombre} <br> Edad: ${usuario.edad} <br> Contraseña: ${usuario.contrasena} <br> <br>`;
}
