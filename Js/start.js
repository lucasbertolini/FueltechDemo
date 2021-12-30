export default class Start{
    constructor(pincel, tela){
        this.tela = tela;
        this.pincel = pincel

        //valores do canvas e alteração.
        this.itemSelecionado = [-0.6,-0.4,-0.3,-0.2,-0.1,0.2,0.4,0.6,0.8,1.0,1.3,1.5];
        this.valorSelecionado = [0,10,20,30,40,50,60,75,80,85,90,100];
        this.canvas = {x:[], valor:[], posicaoInicial:[160], alteracaoCanvas:[2]};
        this.posicaoInicial = 20;
        this.tamanho = 5;
        this.indiceArray = 0;
       
        
      
        //elemento HTML para alteração visual
        this.valorAtual = document.getElementById('valorAtual');
        this.valorItemSelecionado = document.getElementById('valorSelecionado');

        //cores
        this.corSelecionado = "blue";
        this.corNormal = 'white';
        

    }



    iniciarNumero(){
        this.valorAtual.innerHTML = `${this.valorSelecionado[this.indiceArray]}%`;
        this.valorItemSelecionado.innerHTML = `${this.itemSelecionado[this.indiceArray]} Bar`;
       
        
    }

    desenhaCirculos(x, y, corBorda){

        this.pincel.strokeStyle = corBorda;
        this.pincel.beginPath();
        this.pincel.arc(x, y, this.tamanho, 0, 2 * Math.PI);
        this.pincel.fillStyle = "green";
        this.pincel.fill();
        this.pincel.stroke();
        //console.log(this.canvas);
       

    }

    criarCirculos(){
       
        for(let i = 0; i < this.itemSelecionado.length; i++){

            this.desenhaCirculos(this.canvas.x[i], this.canvas.valor[i], this.corNormal);

        }

    }

    desenharLinha(){
        this.itemSelecionado.forEach((number,index) => {
            
            //Linha de um ponto ao outro
            this.pincel.strokeStyle = this.corNormal;
            this.pincel.beginPath();
            this.pincel.moveTo(this.canvas.x[index],this.canvas.valor[index]);
            this.pincel.lineTo(this.canvas.x[index + 1], this.canvas.valor[index + 1]);
            this.pincel.stroke();
            
            //linha vertical

            this.pincel.beginPath();
            this.pincel.moveTo(this.canvas.x[index], 0);
            this.pincel.lineTo(this.canvas.x[index], 180);
            this.pincel.stroke(); 


        })
    }

    iniciarCirculos(){
        this.updateArray();

        //organiza os circulos de acordo com o this.valorSelecionado
        this.itemSelecionado.forEach((number, index) =>{
            this.canvas.valor[index] -= this.valorSelecionado[index];
        })
        
        this.desenharLinha();
        this.criarCirculos();
        this.iniciarNumero();
        

    }

    limpaTela(){
        this.pincel.clearRect(0, 0, this.tela.width, this.tela.height);

    }
    updateArray(){
        this.itemSelecionado.forEach(() => {
            this.canvas.valor.push(this.canvas.posicaoInicial);
            this.canvas.x.push(this.posicaoInicial);
            this.posicaoInicial += 50;

        })
    }
    atualizaNumero(){
        this.getCanvas = function () {
            console.log('atualizou');
            return this.canvas;
        }();
    }


}