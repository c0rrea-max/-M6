// Exercício 1: Definições Básicas

console.log("===== EXERCÍCIO 1: Definições Básicas =====\n");

console.log("O que é Erro?");
console.log("-".repeat(50));
console.log(`
Um ERRO é uma situação em que o código não funciona conforme esperado. 
Pode ser um erro de lógica, compilação ou execução que desvia do comportamento desejado.
`);

console.log("\nO que é Exceção?");
console.log("-".repeat(50));
console.log(`
Uma EXCEÇÃO é um evento anormal durante a execução do programa que interrompe o fluxo normal. 
Em JavaScript, é um objeto (geralmente instância de Error) que pode ser "lançado" com throw 
e "capturado" com try…catch.
`);

console.log("\nDiferença entre 'erro' e 'exceção' em JavaScript:");
console.log("-".repeat(50));
console.log(`
Em linguagem natural, "erro" é qualquer coisa que deu errado. 

Em JavaScript:
  - ERRO: conceito amplo, pode ser lógico, de sintaxe, etc.
  - EXCEÇÃO: especificamente um objeto lançado com throw que pode ser tratado com try…catch

Exemplo:
  ✗ soma(2, undefined) = NaN  →  ERRO de lógica (não é exceção)
  ✗ throw new Error("xyz")    →  EXCEÇÃO (pode ser capturada)
`);

console.log("\n" + "=".repeat(50));
console.log("RESUMO:");
console.log("=".repeat(50));
console.log(`
╔═══════════════════════════════════════════════════╗
║ ERRO     → Conceito amplo, qualquer coisa errada  ║
║ EXCEÇÃO  → Objeto lançado com throw               ║
║           Pode ser capturado com try…catch        ║
╚═══════════════════════════════════════════════════╝
`);
