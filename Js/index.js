import Start from "./start.js"
import Input from "./input.js"

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");


//Verifica em qual página o usuario está
if(document.getElementById('injecaoCanvas')){
    const inicio = new Start(pincel,tela);
    inicio.iniciarCirculos(inicio.canvas.x, inicio.canvas.valor, inicio.valorSelecionado, inicio.itemSelecionado);
    const inputHandler = new Input(pincel,tela);
    

}
if(document.getElementById('compensacaoRotacao')){
    const inicio = new Start(pincel,tela);
    inicio.iniciarCirculos(inicio.canvas.x, inicio.canvas.valor, inicio.compensacaoRotacao.valorSelecionado, inicio.compensacaoRotacao.itemSelecionado);
    const inputHandler = new Input(pincel,tela);
    

}
if(document.getElementById('lentaTps')){
    const inicio = new Start(pincel,tela);
    console.log(inicio.lentaTps.itemSelecionado);
    inicio.iniciarCirculos(inicio.canvas.x, inicio.canvas.valor, inicio.lentaTps.valorSelecionado, inicio.lentaTps.itemSelecionado);
    const inputHandler = new Input(pincel,tela);
    
}

    














