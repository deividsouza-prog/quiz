//Função troca de pergunta
const quizBoxes = document.querySelectorAll(".quiz-box");
const botoesProxima = document.querySelectorAll(".proxima");

let indiceAtual = 0;

botoesProxima.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (indiceAtual == quizBoxes.length - 1) {

      botao.innerText = "Finalizar Quiz";

      botao.onclick = () => {
        window.location.href = "resultadoQuiz.html";
      };

      return;
    } else {
      quizBoxes[indiceAtual].classList.remove("ativo");
      quizBoxes[indiceAtual].classList.add("inativo");

      indiceAtual++;

      quizBoxes[indiceAtual].classList.remove("inativo");
      quizBoxes[indiceAtual].classList.add("ativo");
    }
  });
});


quizBoxes.forEach((box) => {

  const opcoes = box.querySelectorAll(".opcoes button");

  opcoes.forEach((botao) => {

    botao.addEventListener("click", () => {

      // desativa apenas as opções da pergunta atual
      opcoes.forEach((b) => {
        b.disabled = true;
      });

      // verifica se é correta
      if (botao.dataset.correta) {
        botao.classList.add("correta");
      } else {
        botao.classList.add("errada");
      }

    });

  });

});