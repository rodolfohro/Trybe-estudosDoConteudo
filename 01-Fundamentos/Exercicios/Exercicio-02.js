/* Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

/* const sorteio = (numeroApostado, callback) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  return callback(numeroApostado, numeroSorteado);
};

const verifica = (numeroApostado, numeroSorteado) => {
  if (numeroApostado === numeroSorteado) {
    return "Parabéns você ganhou! 👍";
  }
  return "Tente novamente! 👎 ";
};

console.log(sorteio(4, verifica)); */

const random = Math.floor(Math.random() * 5) + 1;

const aposta = 4;

const verifica = (random, aposta) => {
  if (aposta === random) {
    return "Parabéns você ganhou! 👍";
  }
  return "Tente novamente! 👎 ";
};

console.log(verifica(random, aposta) + ` o número sorteado foi ${random}`);
