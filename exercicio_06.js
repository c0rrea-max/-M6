// Exercício 6: Tratamento Condicional de Exceções

// Melhore `safeParse` para que, no `catch`, você verifique se o erro é um `SyntaxError`.
// - Se for `SyntaxError`, retorne null.
// - Caso contrário, relance a exceção (usando `throw`) para não "engolir" erros inesperados.

console.log("===== EXERCÍCIO 6: Tratamento Condicional de Exceções =====\n");

function safeParse(jsonString) {
  try {
    const objeto = JSON.parse(jsonString);
    return objeto;
  } catch (erro) {
    // Verificar se é SyntaxError
    if (erro instanceof SyntaxError) {
      console.log("✓ Capturado SyntaxError, retornando null");
      return null;
    } else {
      // Relançar outros erros inesperados
      console.log("✗ Erro inesperado, relançando...");
      throw erro;
    }
  }
}

// Testes:
console.log("Teste 1 - JSON válido:");
console.log(safeParse('{"id": 123}'));
// → { id: 123 }

console.log("\nTeste 2 - JSON inválido (SyntaxError):");
console.log(safeParse('isso não é JSON'));
// → null (capturado silenciosamente)

console.log("\nTeste 3 - Múltiplos níveis:");
console.log(safeParse('{"nome": "João", "dados": {"idade": 25}}'));
// → { nome: 'João', dados: { idade: 25 } }

console.log("\nTeste 4 - Array JSON:");
console.log(safeParse('[1, 2, 3, 4, 5]'));
// → [ 1, 2, 3, 4, 5 ]

console.log("\n" + "=".repeat(50));
console.log("RESUMO DO PADRÃO:");
console.log("=".repeat(50));
console.log(`
instanceof é usado para verificar o tipo de erro.
Erros esperados → tratá-los (retornar null, etc.)
Erros inesperados → relançar com throw
Assim, apenas erros controlados são "engolidos".
`);
