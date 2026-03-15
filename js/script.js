//Função troca de pergunta
const quizBoxes = document.querySelectorAll(".quiz-box");
const botoesProxima = document.querySelectorAll(".proxima");
const pontuacao = document.querySelector(".estPontuacao")

let indiceAtual = 0;
let pontos = 0;

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
        pontos = pontos + 20;
        pontuacao.innerText = pontos;
      } else {
        botao.classList.add("errada");
      }

    });

  });

});

// Mostrar em qual questao voce esta
const valorQuestao = document.querySelector(".valor");

let index = 1; 
valorQuestao.innerText = index;

botoesProxima.forEach((botao) => {
  botao.addEventListener('click', () => {
      index++;
      if(index > 5){
        valorQuestao.innerText = 5
      }else{
        valorQuestao.innerText = index;
      }
  });
});

// Cronometro
let totalSegundos = 0;
let intervalo;

function formatarTempo() {
    let minutos = Math.floor(totalSegundos / 60);
    let segundos = totalSegundos % 60;

    document.querySelector(".temporizador").innerText = `${minutos}:${segundos}`;
}

function iniciar() {
    if (intervalo) return; 

    intervalo = setInterval(() => {
        totalSegundos++;
        formatarTempo();
    }, 1000);
}

iniciar();