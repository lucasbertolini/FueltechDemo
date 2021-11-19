const valorAtual =document.getElementById("valorAtual");
const valorExibido = document.getElementById("valorSelecionado");
const itemAnterior = document.getElementById("itemAnterior");
const itemAtual = document.getElementById("valorSelecionado")
let valorSelecionado = 10;
let itemSelecionado = [10,20,30,40,50,60,70,80,90,100];
let indiceArray = 0
function acrescentaValor(){
    console.log(valorAtual)
    valorSelecionado++
    if(valorSelecionado >= 100){
        valorSelecionado = 100;
    }
    valorAtual.innerHTML = `${valorSelecionado}%`;
}
function diminuirValor(){
    console.log(valorAtual)
    valorSelecionado--
    if(valorSelecionado <= 0){
        valorSelecionado = 0;
    }
    valorAtual.innerHTML= `${valorSelecionado} %`;
}
function retornarItem(){
    console.log(itemAtual);
    indiceArray--
    if(indiceArray<= 0){
        indiceArray = 0;
    }
    itemAtual.innerHTML = `${itemSelecionado[indiceArray]}%`
}
function proximoItem(){
    indiceArray++
    if(indiceArray >=10){
        indiceArray = 9;
    }
    itemAtual.innerHTML = `${itemSelecionado[indiceArray]} %`;
}
console.log(itemSelecionado.length)