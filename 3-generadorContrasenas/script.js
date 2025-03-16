let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
let abecedarioMayusculas = abecedario.map(letra => letra.toUpperCase());
let numeros = ['0','1','2','3','4','5','6','7','8','9'];
let caracteres = ['!','@','#','$','%','&','/','(',')','=','?','¿','¡','*','+','-','_','.',',',';',':','<','>','[',']','{','}','|'];
const generarContrasena =()=>{
    const longitudContrasena = parseInt(prompt("Ingresa la longitud de tu contraseña, debe ser mayor o igual a 8 caracteres"));
    let caracteresContrasena = [];
    while (caracteresContrasena.length < longitudContrasena){
        const letraMayusculaRandom = abecedarioMayusculas[Math.floor(Math.random() * abecedarioMayusculas.length)];
        const letraRandom = abecedario[Math.floor(Math.random() * abecedario.length)];
        const numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];
        const caracterRandom = caracteres[Math.floor(Math.random() * caracteres.length)];
        caracteresContrasena.push(letraRandom, numeroRandom, caracterRandom, letraMayusculaRandom);
    }
    document.body.innerHTML += `<h2>Tu contraseña es: ${caracteresContrasena.join("")}</h2>`;
}