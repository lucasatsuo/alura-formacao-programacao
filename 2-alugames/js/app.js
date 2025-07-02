
function alterarStatus(indexJogo){
    gameClicado = document.getElementById(`game-${indexJogo}`);

    imagemGame = gameClicado.querySelector('.dashboard__item__img');
    botaoGame = gameClicado.querySelector('.dashboard__item__button');
    
    if(imagemGame.classList.contains("dashboard__item__img--rented")){
        imagemGame.classList.remove("dashboard__item__img--rented");
        botaoGame.classList.remove("dashboard__item__button--return");
        botaoGame.textContent = "Alugar";
    }else{
        imagemGame.classList.add("dashboard__item__img--rented");
        botaoGame.classList.add("dashboard__item__button--return");
        botaoGame.textContent = "Devolver";

    }
}