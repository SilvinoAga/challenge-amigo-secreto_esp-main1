// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigo = [];

function agregarAmigo() {
    let imputAmigo = document.getElementById("amigo");
    let nombreAmigo = imputAmigo.value;

    if(!nombreAmigo) {
        alert("debes ingresar un nombre");
        return
    }
    listaDeAmigo.push(nombreAmigo);
    console.log(listaDeAmigo);
    imputAmigo.value = "";
    imputAmigo.focus();
    desplegarLista();
}
function desplegarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < listaDeAmigo.length; i++){
        let item = document.createElement("li");
        item.textContent = listaDeAmigo[i];
        listaAmigos.appendChild(item);
    }
}
function sortearAmigo(){
    if(listaDeAmigo.length === 0){
        alert("no hay amigos para sortear");
        return;
    }
        else if (listaDeAmigo.length == 1) {
        alert('Agrega más amigos');
        return;
    }
    let amigoSorteado = listaDeAmigo[Math.floor(Math.random() * listaDeAmigo.length)];
    let resultado =document.getElementById("resultado");
    resultado.innerHTML = `🎉El amigo secreto es🎉: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}