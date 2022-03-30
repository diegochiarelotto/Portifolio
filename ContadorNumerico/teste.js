res.innerHTML = `Contando:`
       //convertento variavel em Number 
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(int.value)
     // Se o intervalor for menor que 0 ira começar em 1  
      if (p <= 0) {
        window.alert(`O intervalor irá começar em 1`)
        p = 1
     // Iniciando o contador ( se o Inicio for menor que o final)
     if (i < f) {
    // Criando um variavel contagem (c) onde recebera o valor do inicio
    // Onde a contagem for menor ou igual ao fim, ira receber a contagem e acrescentar de + 1 ao interlavo
    } for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c}`
    } else {

    } for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c}`
  }