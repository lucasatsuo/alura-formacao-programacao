
function sortear() {
    let quantidade = Number(document.getElementById("quantidade").value);
    let deNumero = Number(document.getElementById("de").value);
    let ateNumero = Number(document.getElementById("ate").value);
    let resultados = [];

    if (quantidade > (ateNumero - deNumero + 1)) {
        alert("Você deu um intervalo menor que as possibilidades...");
        return "";
    }

    for (let i = 0; i < quantidade; i++) {
        // Aleatorio em [deNumero, ateNumero]
        candidato = Math.floor(Math.random() * (ateNumero - deNumero) + deNumero);
        if (!resultados.includes(candidato)) {
            resultados.push(candidato);
        } else { // Roda novamente
            i--;
        }
    }
    console.log(resultados.toString());

    let campoResultado = document.getElementById("resultado").children[0];
    campoResultado.innerHTML = "Números sorteados: " + resultados.toString();

    // document.getElementById("btn-reiniciar").className = "container__botao";
    alterarStatusBotao("habilitado");
    // apenas inverter o botao nao ficou tao bom porque se clicar repetido em Sortear, 
    // ele vai ficar flipando o botao

}


function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    document.getElementById("resultado").children[0].innerHTML = "Números sorteados:  nenhum até agora";
    alterarStatusBotao("desabilitado");
}


function alterarStatusBotao(status) {
    let classeBotao = document.getElementById("btn-reiniciar");

    if (status == "habilitado") {
        if (classeBotao.classList.contains("container__botao-desabilitado")) {
            classeBotao.classList.remove("container__botao-desabilitado");
            classeBotao.classList.add("container__botao");
        }
    } else if(status == "desabilitado"){
        classeBotao.classList.remove("container__botao-");
        classeBotao.classList.add("container__botao-desabilitado");

    }
}