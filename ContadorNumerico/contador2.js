function iniciar () {
    let inicio = document.getElementById ('txtini')
    let final = document.getElementById ('txtfim')
    let intervalo = document.getElementById ('txtint')
    let resultado = document.getElementById ('res')

    if (inicio.value.length == 0 || final.value.length == 0 || intervalo.value. length == 0) {
        resultado.innerHTML = `Impossivel contar!`
        window.alert ('[Erro!] Informe os valores corretamente!')
    } else {
       resultado.innerHTML = `Contando: <br>`
        // Declarando variaveis para a contagem e convertendo em Number
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(intervalo.value)
        //Se o passo for (0) ele vai receber o valor de (1)
        if (p <= 0) {
            window.alert ('Intervalo inválido!')
            p = 1 
        }
        //Se o valor do inicio for menor que o valor do final 
        if (i < f ) {
        //O contador ira começar no inicio, enquanto o contador for menor ou =  ao fim o contador vai receber ele mesmo + o intervalo
          for (let c = i; c <= f; c += p) {
           resultado.innerHTML += ` ${c}\u{1F449}`
        } 
    } else {
        //Se nao (Cemeça com o Inicio, enquanto c for maior ou igual a (f) meu contador ira perder o intervalo)
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c}\u{1F449}`
             }
        }
        res.innerHTML += `\u{1F3C1}`
     }}