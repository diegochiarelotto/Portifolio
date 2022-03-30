const itens = [
    {
        id: 0,
        nome: 'Roteador',
        img: '/imagens/Roteadores/Roteador840N.png',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Roteador1',
        img: '/imagens/Roteadores/Roteador840N.png',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Roteador2',
        img: '/imagens/Roteadores/Roteador840N.png',
        quantidade: 0
    },
]

   iniciarlizarLoja = () => {
        var contProdutos = document.getElementById('produtos');
        itens.map((val)=>{
            contProdutos.innerHTML += `
            <div class="produtos">
                <img src ="`+val.img+`" />
                <p>`+val.nome+`</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
            </div>

            `;
        })
   },
   
   iniciarlizarLoja();
  

atualizarCarrinho = () => {
    var contCarrinho = document.getElementById('carrinho');
    contCarrinho.innerHTML = '';
    itens.map((val)=>{
       if(val.quantidade > 0){
           contCarrinho.innerHTML+= `

           <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
           <hr>
        `;
         }
    })
}

var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            let key = this.getAttribute(`key`);
            itens[key].quantidade++;
            atualizarCarrinho();
            return false;
        })
    }
