
const valorExibidoA = document.getElementById('valorIncrementoA');
const valorExibidoB = document.getElementById('valorIncrementoB');
let valorAtualA = valorExibidoA.textContent;
let valorAtualB = valorExibidoB.textContent; 
valorExibidoA.innerHTML = '0%';
valorExibidoB.innerHTML = '0%';

const input = window.addEventListener('click', (event) =>{

    let objetoClicado = event.target.id;
    switch(event.target.id){
        case "incrementar-A":
            valorAtualA++
            if(valorAtualA >= 100) valorAtualA = 100;

            valorExibidoA.innerHTML= `${valorAtualA}%`;
            break;
        case "decrementar-A":
            valorAtualA--
            if(valorAtualA <= -100) valorAtualA = -100;
            valorExibidoA.innerHTML = `${valorAtualA}%`;
            break;
        case "incrementar-B":
           valorAtualB++
           if(valorAtualB >= 100) valorAtualB = 100;
           valorExibidoB.innerHTML = `${valorAtualB}%`;

            break;
        case "decrementar-B": 
            valorAtualB--
            if(valorAtualB <= -100) valorAtualB = -100;
            valorExibidoB.innerHTML = `${valorAtualB}%`;
            break;
    }
    
})

