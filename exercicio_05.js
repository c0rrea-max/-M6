// Exercício 5: Try…Catch Básico

// Escreva uma função `safeParse(jsonString)` que tente converter uma string JSON em objeto:
// - Retornar o objeto parseado, 
// - ou retornar null em caso de erro

console.log("===== EXERCÍCIO 5: Try…Catch Básico =====\n");

function safeParse(jsonString) {
  try {
    const objeto = JSON.parse(jsonString);
    return objeto;
  } catch (erro) {
    return null;
  }
}

// Testes:
console.log("Teste 1 - JSON válido:");
console.log(safeParse('{"nome": "Leandromeda"}'));
// → { nome: "Leandromeda" }

console.log("\nTeste 2 - JSON inválido:");
console.log(safeParse('texto inválido'));
// → null

console.log("\nTeste 3 - Objeto complexo:");
console.log(safeParse('{"id": 1, "ativo": true, "items": [1, 2, 3]}'));
// → { id: 1, ativo: true, items: [ 1, 2, 3 ] }

console.log("\nTeste 4 - String vazia:");
console.log(safeParse(''));
// → null
