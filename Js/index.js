const valorAtual =document.getElementById("valorAtual");
const valorExibido = document.getElementById("valorSelecionado");
const itemAnterior = document.getElementById("itemAnterior");
const itemAtual = document.getElementById("valorSelecionado")
let valorSelecionado = [0,10,15,25,35,40,55,60,70,86,100];
let itemSelecionado = [0,10,20,30,40,50,60,70,80,90,100];

let indiceArray = 0
function iniciarNumero(){
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`;
    itemSelecionado.innerHTML = `${itemSelecionado[indiceArray]}&`;
}
function acrescentaValor(){ 
    let valor = valorSelecionado[indiceArray];
    valor++
    valorSelecionado[indiceArray] = valor;
    if(valorSelecionado[indiceArray] >= 100){
        valorSelecionado[indiceArray] = 100;
    }
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`;
    console.log(valorSelecionado)
}
function diminuirValor(){
    let valor = valorSelecionado[indiceArray];
    valor--
    valorSelecionado[indiceArray] = valor;
    if(valorSelecionado[indiceArray] <= 0){
        valorSelecionado[indiceArray] = 0;
    }
    valorAtual.innerHTML= `${valorSelecionado[indiceArray]}%`;
    console.log(valorSelecionado[indiceArray])
}
function retornarItem(){
    //console.log(itemAtual);
    indiceArray--
    if(indiceArray<= 0){
        indiceArray = 0;
    }
    itemAtual.innerHTML = `${itemSelecionado[indiceArray]}%`
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`

   
    
}
function proximoItem(){
    indiceArray++
    if(indiceArray >=10){
        indiceArray = itemSelecionado.length - 1;
    }
    itemAtual.innerHTML = `${itemSelecionado[indiceArray]}%`;
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`
}
iniciarNumero()
