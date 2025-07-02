let estoquePista = 100;
let estoqueSuperior = 200;
let estoqueInferior = 400;

function exibeEstoques() {
    document.getElementById("qtd-pista").textContent = estoquePista;
    document.getElementById("qtd-superior").textContent = estoqueSuperior;
    document.getElementById("qtd-inferior").textContent = estoqueInferior;
}

exibeEstoques();


function validaQuantidade(quantidade, local) {
    if (quantidade <= 0) {
        return false;
    }

    switch (local) {
        case "pista":
            if (quantidade <= estoquePista) {
                return true;
            }
            break;
        case "superior":
            if (quantidade <= estoqueSuperior) {
                return true;
            }
            break;
        case "inferior":
            if (quantidade <= estoqueInferior) {
                return true;
            }
            break;
    }
    return false;
}


function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtdCompra = Number(document.getElementById("qtd").value);

    if (["pista","superior","inferior"].includes(tipoIngresso) == false){
        alert("Ingresso Indisponível!")
        return "";
    }
    if (validaQuantidade(qtdCompra, tipoIngresso) == false) {
        alert("Quantidade Indisponível!");
        return "";
    }

    switch (tipoIngresso) {
        case "pista":
            estoquePista -= qtdCompra;
            break;
        case "superior":
            estoqueSuperior -= qtdCompra;
            break;
        case "inferior":
            estoqueInferior -= qtdCompra;
            break;
    }
    exibeEstoques();
}