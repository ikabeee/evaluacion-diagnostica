const palabras = ["teclado", "celular","camara", "foco"]
const palabraAzar =() =>{
    return palabras[Math.floor(Math.random() * palabras.length)]
}
const arregloPalabra = palabraAzar().split("");
console.log(arregloPalabra);
const intento=()=>{
    let contador = 0;
    const palabraUsuario=[]
    while(contador<5 && palabraUsuario.length < arregloPalabra.length-1){
        let letra = prompt("Adivina la letra de tu palabra");
        if(arregloPalabra.includes(letra)){
            palabraUsuario.push(letra);
        }else{
            console.log("La letra no esta en la palabra")
            contador++
        }
        if(palabraUsuario.length+1 === arregloPalabra.length){
            document.body.innerHTML += `Tu palabra es: ${arregloPalabra.join("")} <br>`;
            break;
        }
    }
    return palabraUsuario;
}

const letra = prompt("Adivina la letra de tu palabra");
intento();


