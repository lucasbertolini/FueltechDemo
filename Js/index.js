import Start from "./start.js"
import Comandos from "./comandos.js"
import Input from "./input.js"

const tela = document.getElementById("canvas");
const pincel = tela.getContext("2d");


const inicio = new Start(pincel,tela);
const comandos = new Comandos(pincel,tela);
const inputHandler = new Input(pincel,tela);

inicio.iniciarNumero();
inicio.iniciarCirculos();
console.log(inicio.canvas)
inputHandler.iniciar();
console.log(comandos.canvas);







