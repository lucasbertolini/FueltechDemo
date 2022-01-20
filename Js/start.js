export default class Start{
    constructor(pincel, tela){
        this.tela = tela;
        this.pincel = pincel

        //valores do canvas e alteração.

        this.itemSelecionado = [-0.6,-0.4,-0.3,-0.2,-0.1,0.2,0.4,0.6,0.8,1.0,1.3,1.5];
        this.valorSelecionado = [0,10,20,30,40,50,60,75,80,85,90,100];
        this.canvas = { x:[20,70,120,170,220,270,320,370,420,470,520,570],
            valor:[],
            posicaoInicial:160, alteracaoCanvas:1, alteracaoCanvasLento: 0.2,
        };
        this.compensacaoRotacao = {
            itemSelecionado:[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000],
            valorSelecionado:[20,35,48,55,60,64,55,40,34,28,20,10], 
        }
        this.lentaTps = {
            itemSelecionado:[],
            valorSelecionado:[],
            numeroInicial: 0,
        }
        
 
        this.tamanho = 5;
        this.indiceArray = 0 ;
       
        //elemento HTML para alteração visual
        this.valorAtual = document.getElementById('valorAtual');
        this.valorItemSelecionado = document.getElementById('valorSelecionado');
        this.compensacaoRotacaoSelecionado = document.getElementById('compensacaoRotacao');
        this.lentaTpsSelecionado = document.getElementById('lentaTps');

        //cores
        this.corSelecionado = "blue";
        this.corNormal = "green";
        this.corLinhas = "white"

        //iniciando Numeros

        this.inciarValores();
        

    }


    iniciarNumero(valorSelecionado, itemSelecionado){

        if(this.compensacaoRotacaoSelecionado){
            this.valorAtual.innerHTML = `${valorSelecionado[this.indiceArray]}%`;
            this.valorItemSelecionado.innerHTML = `${itemSelecionado[this.indiceArray]} RPM`
            return;
        }else if(this.lentaTpsSelecionado){
            if(this.lentaTps.valorSelecionado[this.indiceArray] >= 100){
                this.lentaTps.numeroInicial++
            }
            this.valorAtual.innerHTML = `${valorSelecionado[this.indiceArray]} ms`;
            this.valorItemSelecionado.innerHTML = `${itemSelecionado[this.indiceArray]} RPM`;
            return;
        }
        this.valorAtual.innerHTML = `${valorSelecionado[this.indiceArray]}%`;
        this.valorItemSelecionado.innerHTML = `${itemSelecionado[this.indiceArray]} Bar`;
       
       // console.log(this.valorSelecionado[this.indiceArray])
       
        
    }

    desenhaCirculos(x, y, cor){

        this.pincel.strokeStyle = "white";
        this.pincel.beginPath();
        this.pincel.arc(x, y, this.tamanho, 0, 2 * Math.PI);
        this.pincel.fillStyle = cor;
        this.pincel.fill();
        this.pincel.stroke();

    }

    criarCirculos(canvasX, canvasValor){
       
        this.itemSelecionado.forEach((number,index) => {
            if(canvasValor[this.indiceArray]|| 
            canvasValor[this.indiceArray] == canvasValor[canvasValor.length -1] ||
            canvasValor[this.indiceArray] == canvasValor.length -1 ||
            this.indiceArray == canvasValor.length -1) {
               // console.log(this.indiceArray , this.corSelecionado);
                this.desenhaCirculos(canvasX[this.indiceArray], canvasValor[this.indiceArray], this.corSelecionado);
                
            }
       
            this.desenhaCirculos(canvasX[index], canvasValor[index], this.corNormal);

        })
       
    }

    desenharLinha(canvasX, canvasValor){
        this.itemSelecionado.forEach((number,index) => {
            
            //Linha de um ponto ao outro
            this.pincel.strokeStyle = this.corLinhas;
            this.pincel.beginPath();
            this.pincel.moveTo(canvasX[index],canvasValor[index]);
            this.pincel.lineTo(canvasX[index + 1], canvasValor[index + 1]);
            this.pincel.stroke();
            
            //linha vertical

            this.pincel.beginPath();
            this.pincel.moveTo(canvasX[index], 0);
            this.pincel.lineTo(canvasX[index], 180);
            this.pincel.stroke(); 

        })
    }
    organizaArray(canvasX, canvasValor){
        //organiza os circulos de acordo com o this.valorSelecionado
                //valor do ultimo indice do array de posicao 60
        if(canvasValor[canvasValor.length - 1] == 60 || 
            canvasValor[canvasValor.length - 1] != this.canvas.posicaoInicial){
            
        }else{
            this.itemSelecionado.forEach((number, index) =>{
                if(this.compensacaoRotacaoSelecionado){
                    canvasValor[index] -= this.compensacaoRotacao.valorSelecionado[index];
                    return;
                }else if(this.lentaTpsSelecionado){
                    canvasValor[index] -= this.lentaTps.valorSelecionado[index];
                    return;
                }

                canvasValor[index] -= this.valorSelecionado[index];
                
            })
        }

    }

    iniciarCirculos(canvasX, canvasValor,valorSelecionado,itemSelecionado){
        

        this.inciarValores();
        this.organizaArray(canvasX, canvasValor);
        this.desenharLinha(canvasX, canvasValor);
        this.criarCirculos(canvasX, canvasValor);
        this.iniciarNumero(valorSelecionado, itemSelecionado);
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
    redesenharCanvas(canvasX, canvasValor){
        this.organizaArray(canvasX, canvasValor);
        this.desenharLinha(canvasX, canvasValor);
        this.criarCirculos(canvasX, canvasValor);
    }
    inciarValores(){
        
       
        this.itemSelecionado.forEach((number, index) => {
            let item = this.compensacaoRotacao.itemSelecionado[index];
            this.canvas.valor.push(this.canvas.posicaoInicial);
            this.lentaTps.valorSelecionado.push(0);

            this.lentaTps.itemSelecionado[index] = item;
            
        });
        
        
    }

}