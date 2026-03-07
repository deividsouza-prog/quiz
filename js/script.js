const quizBoxes = document.querySelectorAll(".quiz-box");
const botoesProxima = document.querySelectorAll(".proxima");

let indiceAtual = 0;

botoesProxima.forEach((botao) => {
    botao.addEventListener("click", () => {

        // remove ativo da atual
        quizBoxes[indiceAtual].classList.remove("ativo");
        quizBoxes[indiceAtual].classList.add("inativo");

        // vai para próxima
        indiceAtual++;

        // se existir próxima
        if (indiceAtual < quizBoxes.length) {
            quizBoxes[indiceAtual].classList.remove("inativo");
            quizBoxes[indiceAtual].classList.add("ativo");
        }

    });
});