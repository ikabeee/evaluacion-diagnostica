const formulario = document.getElementById('formulario');

const convertirReverso =(palabra)=>{
    const palabraFormateada=palabra.replaceAll(' ','')
    return palabraFormateada.toLowerCase().split('').reverse().join('');
}
const esPalindromo =(palabra)=>{
    const palabraAlReves= convertirReverso(palabra);
    const palabraOriginal= palabra.replaceAll(' ', '');
    return palabraOriginal!==palabraAlReves?false:true;
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const palabra = document.getElementById('palabra').value

    document.body.innerHTML+= `<p>Tu palabra o frases: ${palabra}</p>`
    if(!esPalindromo(palabra)){
        document.body.innerHTML+='<p>No es palindromo</p>';
    } else{
        document.body.innerHTML+='<p>Si es palindromo</p>'
    }
})    
