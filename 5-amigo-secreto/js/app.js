let incluidos = [];
let sorteados = []; // vai ter o mesmo tamanho de incluidos, com nomes sorteados

function exibirIncluidos() {
    let textoExibir = ""
    if(incluidos.length > 0){
        // textoExibir = incluidos[0];
        textoExibir = `<a href="#" onclick="handleCliques(this)">${incluidos[0]}</a>`;
    }
    for (let i = 1; i < incluidos.length; i++) {
        textoExibir +=  `, <a href="#" onclick="handleCliques(this)">${incluidos[i]}</a>`;
    }
    document.getElementById("lista-amigos").innerHTML = textoExibir;
}

exibirIncluidos();

function handleCliques(elemento){
    texto = elemento.textContent;
    let indexRemover = incluidos.indexOf(texto);
    incluidos.splice(indexRemover, 1);
    exibirIncluidos();
    // Limpa os sorteados apos clicar
    sorteioContainer = document.getElementById("lista-sorteio");
    sorteioContainer.innerHTML = "";
}

function adicionar() {
    nomeAmigo = document.getElementById("nome-amigo").value;
    if (nomeAmigo == "") {
        return;
    }
    if (incluidos.includes(nomeAmigo)) {
        alert("Nome já incluído!");
        zerarInputAmigo();
        return;
    }
    incluidos.push(nomeAmigo);
    exibirIncluidos();
    zerarInputAmigo();
}


function zerarInputAmigo() {
    document.getElementById("nome-amigo").value = "";
}

function reiniciar() {
    zerarInputAmigo();
    sorteados = [];
    incluidos = [];
    exibirIncluidos();
    sorteioContainer = document.getElementById("lista-sorteio");
    sorteioContainer.innerHTML = "";
}



function exibirSorteados() {
    sorteioContainer = document.getElementById("lista-sorteio");
    sorteioContainer.innerHTML = "";
    for (let i = 0; i < incluidos.length; i++) {
        sorteioContainer.innerHTML += `${incluidos[i]} → ${sorteados[i]}<br>`

    }
}

function sortear() {
    if (sorteados != []) {
        sorteados = [];
    }
    // // Meu método antigo: pouco inteligente
    // for (let i = 0; i < valorMaximo; i++) {
    //     novoSorteado = Math.floor(Math.random() * valorMaximo);
    //     if(sorteados.includes(novoSorteado) || i==novoSorteado){
    //         i--; continue
    //     } else { sorteados.push(novoSorteado); console.log(sorteados); } }

    sorteados = [].concat(incluidos); // sorteados = incluidos;

    for(let i=sorteados.length-1; i>0; i--){
        novoSorteado = Math.floor(Math.random() * i); 
        aux = String(sorteados[i]);
        sorteados[i] = sorteados[novoSorteado];
        sorteados[novoSorteado] = aux;
    }
    exibirSorteados();
}

