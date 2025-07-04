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
    limpaCarrinho();
    let carrinho = document.getElementById("lista-produtos");
    listaCarrinho.forEach(element => {
        carrinho.innerHTML += montaHtmlLista(element[0] ,element[1] ,element[2]);
    });

    // Atualiza total
    document.getElementById("valor-total").textContent = `R$${totalCompras}`;
}

function limpaCarrinho(){
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = "";
}

function limpar(){
    listaCarrinho = [];
    limpaCarrinho();
    document.getElementById("valor-total").textContent = `R$0`;
    document.getElementById("quantidade").value = "";
}