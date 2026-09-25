// Exercício 8: Lançando Erros Customizados

// Crie uma classe `InvalidAgeError extends Error` e uma função `checkAge(age)` que:
// - Se age < 0 ou age > 120, faz throw new InvalidAgeError("Idade fora do intervalo")
// - Caso contrário, retorna "Idade válida"

console.log("===== EXERCÍCIO 8: Lançando Erros Customizados =====\n");

// Definir a classe de erro customizado
class InvalidAgeError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "InvalidAgeError";
  }
}

// Função que valida idade
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

// ===== TESTES =====

console.log("Teste 1 - Idade negativa (-5):");
try {
  console.log(checkAge(-5));
} catch (erro) {
  if (erro instanceof InvalidAgeError) {
    console.log("✗ Erro capturado:", erro.name);
    console.log("  Mensagem:", erro.message);
  }
}

console.log("\nTeste 2 - Idade válida (30):");
try {
  console.log("✓", checkAge(30));
} catch (erro) {
  console.log("Erro:", erro.message);
}

console.log("\nTeste 3 - Idade muito alta (200):");
try {
  console.log(checkAge(200));
} catch (erro) {
  if (erro instanceof InvalidAgeError) {
    console.log("✗ Erro capturado:", erro.name);
    console.log("  Mensagem:", erro.message);
  }
}

console.log("\nTeste 4 - Limite válido superior (120):");
try {
  console.log("✓", checkAge(120));
} catch (erro) {
  console.log("Erro:", erro.message);
}

console.log("\nTeste 5 - Limite válido inferior (0):");
try {
  console.log("✓", checkAge(0));
} catch (erro) {
  console.log("Erro:", erro.message);
}

console.log("\n" + "=".repeat(50));
console.log("ERROS CUSTOMIZADOS:");
console.log("=".repeat(50));
console.log(`
Criar classes de erro permite:
  ✓ Identificar tipos de erro específicos
  ✓ Usar instanceof para tratamento preciso
  ✓ Adicionar lógica customizada
  ✓ Melhorar legibilidade do código

Sintaxe: class MeuErro extends Error { ... }
`);
