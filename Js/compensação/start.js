export default class Start {
    constructor(pincel, tela){
        this.tela = tela; 
        this.pincel = pincel;

        // Valor para o canvas

        this.itemSelecionado = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000];
        this.valorSelecionado = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10]
        this.indiceArray = 0;
        this.tamanho = 5;
        this.canvas = {x:[20,70,120,170,220,270,320,370,420,470,520,570],
            valor:[160,160,160,160,160,160,160,160,160,160,160,160],
            posicaoInicial: 160, alteracaoCanvas: 1
        };

        //elemento HTML para alteração visual
        this.valorAtual = document.getElementById('valorAtual');
        this.valorItemSelecionado = document.getElementById('valorSelecionado');
        

        this.corSelecionado = 'blue';
        this.corNormal = 'green';
        this.corLinhas = 'white';



    }
    iniciarNumero(){
        this.valorAtual.innerHTML = `${this.valorSelecionado[this.indiceArray]}%`;
        this.valorItemSelecionado.innerHTML = `${this.itemSelecionado[this.indiceArray]} Bar`;
        console.log(this.itemSelecionado.length, this.valorSelecionado.length)
       
        
    }

    desenhaCirculos(x, y, cor){

        this.pincel.strokeStyle = "white";
        this.pincel.beginPath();
        this.pincel.arc(x, y, this.tamanho, 0, 2 * Math.PI);
        this.pincel.fillStyle = cor;
        this.pincel.fill();
        this.pincel.stroke();
       
       

    }

    criarCirculos(){
       
        this.itemSelecionado.forEach((number,index) => {
            if(this.canvas.valor[this.indiceArray]|| 
            this.canvas.valor[this.indiceArray] == this.canvas.valor[this.canvas.valor.length -1] ||
            this.canvas.valor[this.indiceArray] == this.canvas.valor.length -1 ||
            this.indiceArray == this.canvas.valor.length -1) {
                console.log(this.indiceArray , this.corSelecionado);
                this.desenhaCirculos(this.canvas.x[this.indiceArray], this.canvas.valor[this.indiceArray], this.corSelecionado);
                
            }
            console.log(this.corNormal, this.canvas.valor[this.indiceArray]);
            
                
            this.desenhaCirculos(this.canvas.x[index], this.canvas.valor[index], this.corNormal);
            
           

        })

    }

    desenharLinha(){
        this.itemSelecionado.forEach((number,index) => {
            
            //Linha de um ponto ao outro
            this.pincel.strokeStyle = this.corLinhas;
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
    organizaArray(){
        //organiza os circulos de acordo com o this.valorSelecionado
                //valor do ultimo indice do array de posicao 60
        if(this.canvas.valor[this.canvas.valor.length - 1] == 60 || 
            this.canvas.valor[this.canvas.valor.length - 1] != this.canvas.posicaoInicial){
            //return console.log("Array já foi iniciado antes, não fazer alteração no array inteiro", this.canvas.valor)
        }else{
            this.itemSelecionado.forEach((number, index) =>{

                this.canvas.valor[index] -= this.valorSelecionado[index];
                //return console.log('Inicio padrão')
            })
        }

    }

    iniciarCirculos(){

        this.organizaArray();
        this.desenharLinha();
        this.criarCirculos();
        this.iniciarNumero();
    }

    limpaTela(){
        
        this.pincel.clearRect(0, 0, this.tela.width, this.tela.height);

    }
    updateArray(){
        let posicaoInicial = 20;
        this.itemSelecionado.forEach((number, index) => {
            this.canvas.valor.push(this.canvas.posicaoInicial);
            this.canvas.x.push(posicaoInicial);
            posicaoInicial += 50;

        })
        return this.canvas;
      
    }


}