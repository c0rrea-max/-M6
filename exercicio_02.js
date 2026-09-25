// Exercício 2: Erros sem Exceções?

// Exemplo de situação em que algo "deu errado" no código mas não gerou uma exceção.

function somar(a, b) {
  return a + b;
}

console.log("===== EXERCÍCIO 2: Erros sem Exceções =====\n");
console.log("Resultado:", somar(5, undefined));
// → NaN (erro lógico, sem exceção!)

console.log("\nExplicação:");
console.log("Nenhuma exceção foi disparada com 'throw'");
console.log("Mas o resultado está errado: 5 + undefined = NaN");
console.log("Isso é um ERRO de lógica, não uma EXCEÇÃO");
