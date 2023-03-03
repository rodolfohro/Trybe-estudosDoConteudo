/* 
Crie uma HOF que receberá três parâmetros:

O primeiro será um array de respostas corretas (soluções);

O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

Uma resposta correta adiciona 1 ponto à pontuação final;

A ausência de uma resposta não altera a pontuação (quando for “N.A”);

Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays: */

//hof
const verificarGbabarito = (
  respostasCorretas,
  respostasEstudante,
  comparacao
) => {
  return comparacao(respostasCorretas, respostasEstudante);
};

//callback
const comparacao = (respostasCorretas, respostasEstudante) => {
  let pontuacao = 0;
  for (let index = 0; index < respostasCorretas.length; index += 1) {
    if (respostasCorretas[index] === respostasEstudante[index]) {
      pontuacao += 1;
    } else if (respostasEstudante[index] === "N.A") {
      pontuacao += 0;
    } else {
      pontuacao -= 0.5;
    }
  }
  return pontuacao;
};

const respostasCorretas = ["A", "C", "B", "D", "A", "A", "D", "A", "C", "B"];
const respostasEstudante = [
  "A",
  "N.A",
  "B",
  "D",
  "A",
  "C",
  "N.A",
  "A",
  "C",
  "B",
];

console.log(
  verificarGbabarito(respostasCorretas, respostasEstudante, comparacao)
);
