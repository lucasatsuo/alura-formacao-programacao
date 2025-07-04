let listaCarrinho = [];

function montaHtmlLista(quantidade, nomeProduto, precoCalculado){
    return `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoCalculado}</span>
    </section>`
}

function adicionar(){
    let quantidade = Number(document.getElementById("quantidade").value);

    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split(' - R$')[0];
    let precoProduto = Number(produto.split(' - R$')[1]);

    if(quantidade<=0){
        alert("Quantidade inválida.");
        return '';
    }
    // Adiciona a lista
    listaCarrinho.push([quantidade, nomeProduto, precoProduto])
    let totalCompras = 0;

    listaCarrinho.forEach(element => {
        totalCompras += element[0] * element[2];
    });
    
    // Exibir no carrinho
    let carrinho = document.getElementById("lista-produtos");
    
    // <span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span>
    carrinho.innerHTML = "";
    listaCarrinho.forEach(element => {
        carrinho.innerHTML += montaHtmlLista(element[0] ,element[1] ,element[2]);
    });

    // Atualiza total
    document.getElementById("valor-total").textContent = `R$${totalCompras}`;
}


function limpar(){
    listaCarrinho = [];
    let carrinho = document.getElementById("lista-produtos");
    conteudoCarrinho = carrinho.querySelector(".carrinho__produtos__produto");
    conteudoCarrinho.innerHTML = "";
    document.getElementById("valor-total").textContent = `R$0`;

}