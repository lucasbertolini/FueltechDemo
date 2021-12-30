import Start from "./start.js"

export default class Comandos extends Start {

    constructor(pincel,tela){
        super(pincel,tela)
        
        
        
    }
    

    acrescentaValor(){
    
        //this.atualizaNumero();

        let valor = this.valorSelecionado[this.indiceArray];
        if(this.valorSelecionado[this.indiceArray] < 120) {
            this.canvas.valor[this.indiceArray]  -= this.canvas.alteracaoCanvas;
        }    
        valor++
        this.valorSelecionado[this.indiceArray] = valor;
        if(this.valorSelecionado[this.indiceArray] >= 120) this.valorSelecionado[this.indiceArray] = 120;
    
        this.valorAtual.innerHTML = `${this.valorSelecionado[this.indiceArray]}%`;

        this.limpaTela();
        this.desenharLinha();
        this.criarCirculos();
        console.log(this.canvas.x, this.canvas.valor);


    }
    diminuiValor(){
        let valor = this.valorSelecionado[this.indiceArray];
        if(this.valorSelecionado[this.indiceArray] > 0) {
            this.canvas.valor[this.indiceArray] += this.canvas.alteracaoCanvas;
        }
        valor--
        this.valorSelecionado[this.indiceArray] = valor;
        if(this.valorSelecionado[this.indiceArray] <= 0) {
            this.valorSelecionado[this.indiceArray] = 0;
        }
        this.valorAtual.innerHTML= `${this.valorSelecionado[this.indiceArray]}%`; 
       
        this.limpaTela();
        this.desenharLinha();
        this.criarCirculos();
        
       
        
       
    }
    retornarItem(){
        this.indiceArray--

        if(this.indiceArray <= 0 ) this.indiceArray = 0;

        this.valorItemSelecionado.innerHTML = `${this.itemSelecionado[this.indiceArray]} Bar`;
        this.valorAtual.innerHTML = `${this.valorSelecionado[this.indiceArray]}%`;
        
        
    }

    proximoItem(){
        this.indiceArray++

        if(this.indiceArray >= this.itemSelecionado.length) this.indiceArray = this.itemSelecionado.length - 1;

        this.valorItemSelecionado.innerHTML = `${this.itemSelecionado[this.indiceArray]} Bar`;
        this.valorAtual.innerHTML = `${this.valorSelecionado[this.indiceArray]}%`;
        
    }
    
}