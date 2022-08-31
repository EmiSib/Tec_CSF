// let input = document.querySelector('input');
// let textarea = document.querySelector('textarea');
// input.addEventListener('change', () => {
//     let files = input.files;
//     if(files.length == 0) return;
//     const file = files[0];
//     let reader = new FileReader();
//     reader.onload = (e) => {
//         const file = e.target.result;
//         const lines = file.split(/\r\n|\n/);
//         textarea.value = lines.join('\n');
//     };
//     reader.onerror = (e) => alert(e.target.error.name);
//     reader.readAsText(file); 
    
// });


function cifrar(frase, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    //Rotamos el alfabeto [clave] lugares a la derecha
    let cifrado  = alfabeto.slice(-clave);
    cifrado  += alfabeto.slice(0, alfabeto.length - clave);
    //Coge la letra del cifrado según la posición de cada letra
    //en alfabeto 
    for(let i=0; i< frase.length; i++){  
        letra = frase[i].toLowerCase();
        if(letra ==' '){
            letra =' ';
            }
        else{
            letra = cifrado[alfabeto.indexOf(letra)] ;
            }
        respuesta += letra;
    }
    return  respuesta;
}
function descifrar(frase, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let cifrado  = alfabeto.slice(-clave);
    cifrado += alfabeto.slice(0, alfabeto.length - clave)
    for(let i=0; i< frase.length; i++) { 
        letra = frase[i].toLowerCase();
        if(letra == ' '){
            letra =' ';
         }
        else{
            letra = alfabeto[cifrado.indexOf(letra)];
            }
        respuesta += letra;
    }
return  respuesta;
} 
