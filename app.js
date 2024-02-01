let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numeroUsuario){
        //El usuario acertó
        asignarTextoElemento('p',`Genial! Acertaste el número secreto en ${intentos} ${(intentos ===1 ) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if(numeroSecreto < numeroUsuario){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    }else{
        //si el numero generado ya esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    
        } else{
            //si el número generado no esta en la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    

}

function condicionesIniciales(){
    asignarTextoElemento('h1', ' Game: Número secreto');
    asignarTextoElemento('p', `Bienvenido! Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function nuevoJuego(){
    //Limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Nuevo numero secreto
    //Reiniciar intentos
    condicionesIniciales();
    //Deshabilitar botón
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
 
condicionesIniciales();

