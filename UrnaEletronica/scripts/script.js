//Controle Interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descGeral = document.querySelector('.d-1-4');
let avisoVoto = document.querySelector('.d-2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.d-1-3');


//Controle de Ambiente
let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';


    numeroHtml = '';
    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numeros piscar"></div>';
        } else {
            numeroHtml += '<div class="numeros"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descGeral.innerHTML = '';
    avisoVoto.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

//Sera execultada em uma ação de digitação
function atualizaInterace() {
    let etapa = etapas[etapaAtual];
//verificando e o numero digitado for igual a lista do array 
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true;
        } else {
            return false
        };
    });
    if(candidato.length > 0){
        canditado = candidato[0];//Achou o candidato
        seuVotoPara.style.display = 'block';
        avisoVoto.style.display = 'block';
        descGeral.innerHTML = `Nome:${candidato.nome}`;
        
        console.log(candidato);
        
    /*       
 //Montando array de fotos
    let fotosHTML = '';
        for(let i in candidato.fotos) {
            fotosHTML += `<div class="d-1-image">
            <img src="img/Prefeito01.png" alt="" />
            ${candidato.fotos[i].legenda}
        </div>`*/
        };
   // lateral.innerHTML = fotosHTML;
};




//Teclado Numérico
function clicou(n) {
    let elNumero = document.querySelector('.numeros.piscar');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;
        //Removendo o piscar apos digitar o número
        elNumero.classList.remove('piscar');
        //verificando se cheguei no ultimo elemento        
        if (elNumero.nextElementSibling !== null) {
            //Adicionando o piscar para o proximo elemento da sequencia
            elNumero.nextElementSibling.classList.add('piscar');
        } else {
            atualizaInterace();
        }

    }
}



//Btn branco
function branco() {
    alert('Clicou em BRANCO!')
}

//Btn corrige
function corrige() {
    alert('Clicou em CORRIGE!')
}

//Btn confirma
function confirma() {
    alert('Clicou em CONFIRMA!')
}

comecarEtapa();
