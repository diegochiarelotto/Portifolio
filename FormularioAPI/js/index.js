'use strict';

//Mascaras de formatação
//$('#Cep').mask('00000-000');
$('#Telefone').mask('(00)0 0000-0000');

// Busca o cep e preenche o formulário

const preencherFormulario = (endereco) => {
   
    const cepMapa = endereco.cep  
    document.getElementById('Endereco').value = endereco.logradouro;
    document.getElementById('Uf').value = endereco.uf;
    document.getElementById('Cidade').value = endereco.localidade;
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('Mapa').innerHTML = '<iframe src="https://www.google.com.br/maps?q='+ cepMapa +'%20Brasil&output=embed"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    
     console.log(cepMapa);
    
}
//Validando o cep com expressão regular
// const eNumero = (numero) => /^[0-9]+$/.test(cep);

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);



const pesquisaCep = async () => {
    const cep = document.getElementById('Cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

  

    // Método de promessas
    // fetch(url).then(responde => responde.json().then(console.log)); 
    if (cepValido(cep)) {
        // Método de atribuição
        const dados = await fetch(url); //Recebendo dados do Fetch
        const endereco = await dados.json(); // Aplicando método Json no resultado
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('Endereco').value = 'Cep não localizado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('Endereco').value = 'Cep não localizado!!';
    }
}
document.getElementById('Cep')
    .addEventListener('focusout', pesquisaCep);

  

//SUBMIT- Validação e Envio de Formulario e 
$('#Form').submit(function () {
    var nome = $('#Nome');
    var email = $('#E-mail');
    var telefone = $('#Telefone')
    var cep = $('#Cep')
    var Complemento = $('#Complemento')
    var erro = $('.alert')
    var campoErro = $('#campoErro');

    //Encondendo a msg de erro
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    //Valida Campo Nome
    if (nome.val() == '') {
        erro.removeClass('d-none');
        campoErro.html('nome');
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    //Valida Campo E-mail
        if (email.val() == '') {
            erro.removeClass('d-none');
            campoErro.html('E-mail');
            email.focus();
            email.addClass('is-invalid');
            return false;
        }
    //Valida Campo Telefone
    if (telefone.val() == '') {
        erro.removeClass('d-none');
        campoErro.html('Telefone');
        telefone.focus();
        telefone.addClass('is-invalid');
        return false;
    }
     //Valida Campo Cep
     if (cep.val() == '') {
        erro.removeClass('d-none');
        campoErro.html('CEP');
        cep.focus();
        cep.addClass('is-invalid');
        return false;
     } 
    //Valida Campo Complemento
        if (Complemento.val() == '') {
            erro.removeClass('d-none');
            campoErro.html('Complemento');
            Complemento.focus();
            Complemento.addClass('is-invalid');
            return false;
         }
        else {
            nome.addClass('is-valid');
            email.addClass('is-valid');
            telefone.addClass('is-valid');
            cep.addClass('is-valid');
            add
          
        }

        return false;
    });



    
  


    