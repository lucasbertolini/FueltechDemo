
const valorAtual = document.getElementById("valorAtual");
const valorExibido = document.getElementById("valorSelecionado");
const itemAnterior = document.getElementById("itemAnterior");
const itemAtual = document.getElementById("valorSelecionado")
const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
const canvas = {
    x:[20,70,120,170,220,270,320,370,420,470,520,570],
}
let valorSelecionado = [0,10,20,30,40,50,60,75,80,85,90,100];
let itemSelecionado = [-0.6,-0.4,-0.3,-0.2,-0.1,0.2,0.4,0.6,0.8,1.0,1.3,1.5];
let valorCanvas = [160,160,160,160,160,160,160,160,160,160,160,160];
let indiceArray = 0
const alteracaoCanvas = 1;
const tamanho = 5;



//Criação objetos no canvas
function iniciarNumero(){
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`;
    itemSelecionado.innerHTML = `${itemSelecionado[indiceArray]}`;
}
function iniciarCirculos() {

    itemSelecionado.forEach((value,index)=>{
        valorCanvas[index] -= valorSelecionado[index];

        desenhaCirculos(canvas.x[index], valorCanvas[index]);
    })
    desenhaLinha()
}
function criarCirculos(){   
    for(let i = 0; i < itemSelecionado.length; i++ ){

        desenhaCirculos(canvas.x[i], valorCanvas[i]);
        
    }
}
function desenhaCirculos(x,y){
    pincel.strokeStyle = 'white';
    pincel.beginPath();
    pincel.arc(x, y, tamanho, 0, 2 * Math.PI);
    pincel.fillStyle = "green";
    pincel.fill();
    pincel.stroke();
}
function desenhaLinha(){
    itemSelecionado.forEach((number,index)=>{
        //linha que liga um circulo ao outro
        pincel.beginPath();
        pincel.moveTo(canvas.x[index],valorCanvas[index]);
        pincel.lineTo(canvas.x[index+1], valorCanvas[index+1]);
        pincel.stroke();
        
        //linha vertical
        pincel.beginPath();
        pincel.moveTo(canvas.x[index], 0);
        pincel.lineTo(canvas.x[index], 180);
        pincel.stroke();

    })
   
}
//controle para movimentação dentro do canvas
function acrescentaValor(){ 
    let valor = valorSelecionado[indiceArray];
    if(valorSelecionado[indiceArray] < 120) valorCanvas[indiceArray] = valorCanvas[indiceArray]-alteracaoCanvas;

    valor++
    valorSelecionado[indiceArray] = valor;
    if(valorSelecionado[indiceArray] >= 120) valorSelecionado[indiceArray] = 120;

    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`;
    pincel.clearRect(0, 0, 600, 600);
    desenhaLinha();
    criarCirculos();
    
}
function diminuirValor(){
let valor = valorSelecionado[indiceArray];
if(valorSelecionado[indiceArray] > 0) valorCanvas[indiceArray] = valorCanvas[indiceArray]+alteracaoCanvas;
    valor--
    valorSelecionado[indiceArray] = valor;
    if(valorSelecionado[indiceArray] <= 0){
        valorSelecionado[indiceArray] = 0;
    }
    valorAtual.innerHTML= `${valorSelecionado[indiceArray]}%`; 
    pincel.clearRect(0,0,600,600);
   //console.log(canvas.x)

   desenhaLinha();
    criarCirculos();
}
function retornarItem(){
  
    indiceArray--
    if(indiceArray<= 0){
        indiceArray = 0;
    }
    itemAtual.innerHTML = `${itemSelecionado[indiceArray]} Bar`
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`
}
function proximoItem(){
    indiceArray++
    if(indiceArray >= itemSelecionado.length){
        indiceArray = itemSelecionado.length - 1;
    }

    itemAtual.innerHTML = `${itemSelecionado[indiceArray]} Bar`;
    valorAtual.innerHTML = `${valorSelecionado[indiceArray]}%`;
    
}





iniciarNumero() //Faz com que os números exibidos estejam atualizados
iniciarCirculos()
criarCirculos()



