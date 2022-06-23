//Controle Interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descGeral = document.querySelector('.d-1-4');
let avisoVoto = document.querySelector('.d-2');
let lateral = document.querySelector('.d1-right');
let dispNumeros = document.querySelector('.d-1-3');


//Controle de Ambiente
let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';


    numeroHtml = '';
    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml +=  '<div class="numeros piscar"></div>';
        }else {
            numeroHtml +=  '<div class="numeros"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descGeral.innerHTML = '';
    avisoVoto.style.display = 'none';
    lateral.innerHTML = '';
    dispNumeros.innerHTML = numeroHtml;
}

//Sera execultada em uma ação de digitação
function atualizaInterace(n){
    
}


//Teclado Numérico
function clicou(n){
    let elNumero = document.querySelector('.numeros.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;
    }
       console.log(n)
}



//Btn branco
function branco(){
   alert('Clicou em BRANCO!')
}

//Btn corrige
function corrige(){
    alert('Clicou em CORRIGE!')
}

//Btn confirma
function confirma(){
    alert('Clicou em CONFIRMA!')
}

comecarEtapa();
