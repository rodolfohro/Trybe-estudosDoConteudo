// Exemplo de uso do forEach()
// Start-Block
let animais = ["coruja", "coruja", "tigre", "foca"];

// Para o array animais, a cada posição, eu quero o valor atual e o index

/* 
// Exemplo de uso do for  
for (let i = 0; i < animais.length; i++) {
  console.log(`${i + 1} - ${animais[i]}`);
}
 */

/* Forma utilizando o forearch */
animais.forEach((animal, i) => {
  console.log(`${i + 1} - ${animal}`);
});
// End-Block

// Exemplo de uso do find()
// Start-Block
let animaisObjArr = [
  {
    nome: "Coruja",
    movimentacao: "voando",
  },
  {
    nome: "Tigre",
    movimentacao: "andando",
  },
];

let nomeBusca = "Tigre";
// Encontra o animal com nome igual a variável
let animal = animaisObjArr.find((animalObj) => animalObj.nome === nomeBusca);

console.log(`${nomeBusca} se movimenta: ${animal.movimentacao}.`);
// End-Block

// Exemplo de uso do some()
// Start-Block
const numerosSome = [7, 3, 5, 3, 1];
let temPar = numerosSome.some((numAtual) => numAtual % 2 === 0);

console.log(
  `${temPar ? "Existe" : "Nao existe"} pelo menos um numero par no array.`
);
// End-Block

// Exemplo de uso do every()
// Start-Block
const numerosEvery = [2, 4, 6, 2, 0];
let todosPares = numerosEvery.every((numAtual) => numAtual % 2 === 0);

console.log(`${todosPares ? "Todos" : "Nem todos"} os numeros sao pares.`);
// End-Block

// Exemplo de uso do sort()
// Start-Block
const numerosSort = [7, 3, 5, 3, 1];
numerosSort.sort((a, b) => a - b);

console.log(numerosSort);

const palavrasSort = ["coruja", "coruja", "tigre", "foca"];
palavrasSort.sort();

console.log(palavrasSort);
// End-Block

// Exemplo de uso do map()
// Start-Block
const numerosMap = [2, 4, 6, 2, 0];
let numerosTriplos = numerosMap.map((numAtual) => numAtual * 3);

console.log(numerosTriplos);
// End-Block

// Exemplo de uso do filter()
// Start-Block
const numerosFilter = [2, 4, 6, 1, 0];
let numerosFiltrados = numerosFilter.filter((numAtual) => numAtual > 2);

console.log(numerosFiltrados);
// End-Block

// Exemplo do uso do reduce()
// Start-Block
const numerosReduce = [2, 4, 6, 1, 0];
let somaTotal = numerosReduce.reduce(
  (acumulador, numAtual) => acumulador + numAtual
);

console.log(somaTotal);
// End-Block
