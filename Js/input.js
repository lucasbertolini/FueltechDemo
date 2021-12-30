import Comandos from "./comandos.js"

export default class Input extends Comandos{
    constructor(pincel,tela){
        super(pincel,tela)
    }



    iniciar(){
        window.addEventListener('click', (event) =>{

            switch(event.target.id) {
                case "acrescentaValor":
                    this.acrescentaValor();
                    break;

                case "diminuiValor":
                    this.diminuiValor();
                    break;

                case "itemSeguinte":
                    this.proximoItem();
                    break;

                case "itemAnterior":
                    this.retornarItem();
                    break;

            }
        })

    }
}