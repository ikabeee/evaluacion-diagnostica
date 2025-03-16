const posicion = prompt("Ingresa una posicion de la cadena fibonacci");
const fibonacci = (posicion)=>{
    let primer=0;
    let segundo=1;
    let valorFinal=0;
    let contador=1;

    while(contador<=posicion){
        if(contador===1){
            document.body.innerHTML += `${primer}<br>`;
        } else if(contador===2){
            document.body.innerHTML += `${segundo} <br>`;
        }else{
            c=a+b;
            document.body.innerHTML += `${valorFinal} <br>`;
            a=b;
            b=c;
        }
        contador++;
    }
}

fibonacci(posicion);