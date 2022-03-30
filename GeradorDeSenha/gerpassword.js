let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePasword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector ("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!";
let novaSenha = "";


sizePasword.innerHTML = sliderElement.value;

sliderElement.oninput = function (){
    
     sizePasword.innerHTML = this.value;
}
function generatePassword() { 
    let pass = "";
    
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
       pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("esconder");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copiarsenha() {
   navigator.clipboard.writeText(novaSenha);
    alert(`Senha ${novaSenha} copiada com sucesso!`)
}
