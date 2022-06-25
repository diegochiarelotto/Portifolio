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
let votoBranco = true;
let votos = [];

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero = '';
    votoBranco = false;


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
    if (candidato.length > 0) {
        candidato = candidato[0];//Achou o candidato
        seuVotoPara.style.display = 'block';
        avisoVoto.style.display = 'block';
        descGeral.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        //Montando array de fotos
        let fotosHTML = '';
        for (let i in candidato.fotos) {
            fotosHTML += `<div class="d-1-image">
            <img src="img/${candidato.fotos[i].url}" alt="" />
            ${candidato.fotos[i].legenda} 
        </div>`;
        }
        lateral.innerHTML = fotosHTML;
    // Voto nulo 
    }else{
        seuVotoPara.style.display = 'block';
        avisoVoto.style.display = 'block';
        descGeral.innerHTML = `<div class = "aviso-grande piscar">VOTO NULO</div>`;
    }
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
    if(numero == ''){
        votoBranco= true;
        seuVotoPara.style.display = 'block';
        avisoVoto.style.display = 'block';
        numeros.innerHTML = '';
        descGeral.innerHTML = `<div class = "aviso-vtBranco piscar">VOTO EM BRANCO</div>`;
    }else{
        alert('Para votar em branco não pode digitar nenhum número')
    }
}

//Btn corrige
function corrige() {
   comecarEtapa()
}

//Btn confirma
function confirma() {
    let etapa = etapas[etapaAtual];
    console.log(etapaAtual)
    let votoConfirmado = false;

    if(votoBranco === true){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
        console.log('Confirmando com o Branco!');  
       }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
       console.log('Confirmando como '+numero);
       }

    if(votoConfirmado){
       etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            console.log(etapaAtual)
            comecarEtapa();
        }else {
        document.querySelector('.tela').innerHTML = `<div class = "aviso-vtBranco avisoGigante">FIM</div>`;
        console.log(votos)
        }
    }
}

comecarEtapa();
