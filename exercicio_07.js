// Exercício 7: Bloco Finally

// Altere `safeParse` para escrever no console a mensagem `"Parse attempt finished"`
// SEMPRE, independentemente de ter ocorrido erro ou não.
// Utilize `finally` para isso.

console.log("===== EXERCÍCIO 7: Bloco Finally =====\n");

function safeParse(jsonString) {
  try {
    const objeto = JSON.parse(jsonString);
    return objeto;
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    } else {
      throw erro;
    }
  } finally {
    console.log("Parse attempt finished");
  }
}

console.log("Teste 1 - JSON válido:");
console.log(safeParse('{"nome": "Leandromeda"}'));
// Saída esperada:
// Parse attempt finished
// { nome: "Leandromeda" }

console.log("\nTeste 2 - JSON inválido:");
console.log(safeParse('invalido'));
// Saída esperada:
// Parse attempt finished
// null

console.log("\nTeste 3 - Array vazio:");
console.log(safeParse('[]'));
// Saída esperada:
// Parse attempt finished
// []

console.log("\nTeste 4 - JSON com números:");
console.log(safeParse('{"x": 10, "y": 20}'));
// Saída esperada:
// Parse attempt finished
// { x: 10, y: 20 }

console.log("\n" + "=".repeat(50));
console.log("O BLOCO FINALLY:");
console.log("=".repeat(50));
console.log(`
finally sempre executa, INDEPENDENTEMENTE de:
  ✓ try ter sucesso
  ✓ catch ter capturado um erro
  ✓ return ter sido chamado

Útil para:
  - Limpar recursos (fechar arquivos, conexões DB)
  - Registrar logs
  - Realizar ações de finalização
`);
