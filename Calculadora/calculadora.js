function insert(num) {
    var numero = document.getElementById('res').innerHTML;
//Vai receber o Insert e acrescentar com outro Insert
    document.getElementById('res').innerHTML = numero + num;
} 
// Botao Limpar
function clean () {
    document.getElementById ('res').innerHTML = "";
}
//Botao apagar  
function back () {
    let resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1);
}
//Botao Igual resultado
function igual()
{   
    let resultado = document.getElementById('res').innerHTML;
    let resfinal = eval(resultado)
    
    if (resfinal==Infinity) {
        document.getElementById('res').innerHTML = "0"
    }else {
        document.getElementById('res').innerHTML = eval(resfinal)
    }
      
}
