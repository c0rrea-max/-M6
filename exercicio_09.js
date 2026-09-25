// Exercício 9: Depuração com console.log

// Considere este código:
// function soma(a, b) { return a + b; }
// console.log(soma(2, undefined));

// Use `console.log` em outros pontos (antes e depois da soma) 
// para entender por que o resultado é `NaN`.

console.log("===== EXERCÍCIO 9: Depuração com console.log =====\n");

function soma(a, b) {
  console.log("ENTRADA DA FUNÇÃO:");
  console.log("  Parâmetro a:", a, "| Tipo:", typeof a);
  console.log("  Parâmetro b:", b, "| Tipo:", typeof b);
  
  console.log("\nEXECUTANDO SOMA:");
  const resultado = a + b;
  console.log("  a + b =", resultado);
  console.log("  Tipo do resultado:", typeof resultado);
  
  console.log("\nRETORNANDO:", resultado);
  return resultado;
}

console.log("Chamada: soma(2, undefined)\n");
console.log("=".repeat(50));
const retorno = soma(2, undefined);
console.log("=".repeat(50));
console.log("\nValor retornado:", retorno);

console.log("\n" + "=".repeat(50));
console.log("ANÁLISE E CAUSA:");
console.log("=".repeat(50));
console.log(`
Por que o resultado é NaN?

Quando você faz: 2 + undefined
JavaScript converte undefined para NaN em operações numéricas.
Resultado: 2 + NaN = NaN

Por que undefined vira NaN?
- undefined não é um número
- Operações matemáticas esperam números
- undefined é "coagido" para NaN

Conclusão:
✗ Não validamos a entrada
✗ undefined é um valor válido em JavaScript
✗ Mas não é válido para operações matemáticas
✓ Solução: Verificar se os parâmetros são números antes de usar
`);

console.log("\n" + "=".repeat(50));
console.log("VERSÃO CORRIGIDA:");
console.log("=".repeat(50));

function somaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.error("❌ Erro: ambos os parâmetros devem ser números!");
    return null;
  }
  
  console.log(`Somando ${a} + ${b}`);
  return a + b;
}

console.log("\nsomaValidada(2, 3):", somaValidada(2, 3));
console.log("somaValidada(2, undefined):", somaValidada(2, undefined));
console.log("somaValidada('abc', 5):", somaValidada('abc', 5));
