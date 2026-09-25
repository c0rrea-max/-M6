// Exercício 4: Tipos de Erros em JavaScript

console.log("===== EXERCÍCIO 4: Tipos de Erros em JavaScript =====\n");

console.log("Para cada um dos seguintes erros nativos de JS:");
console.log("=".repeat(50) + "\n");

// ===== REFERENCE ERROR =====
console.log("1. ReferenceError");
console.log("-".repeat(50));
console.log(`
SITUAÇÃO: Tentar acessar uma variável que não foi declarada.

EXEMPLO:
`);

try {
  console.log(variavelNaoExistente);
} catch (erro) {
  console.log("✗ Erro capturado:");
  console.log("  Tipo:", erro.constructor.name);
  console.log("  Mensagem:", erro.message);
}

// ===== TYPE ERROR =====
console.log("\n\n2. TypeError");
console.log("-".repeat(50));
console.log(`
SITUAÇÃO: Operação inválida com um tipo de dado. 
Tentar chamar método em tipo incompatível ou acessar propriedade de null/undefined.

EXEMPLOS:
`);

console.log("\nExemplo 2a - acessar propriedade de null:");
try {
  null.propriedade;
} catch (erro) {
  console.log("✗ Erro capturado:");
  console.log("  Tipo:", erro.constructor.name);
  console.log("  Mensagem:", erro.message);
}

console.log("\nExemplo 2b - chamar método em tipo errado:");
try {
  (5).toUpperCase();
} catch (erro) {
  console.log("✗ Erro capturado:");
  console.log("  Tipo:", erro.constructor.name);
  console.log("  Mensagem:", erro.message);
}

console.log("\nExemplo 2c - forEach com parâmetro errado:");
try {
  const arr = [1, 2, 3];
  arr.forEach("não é function");
} catch (erro) {
  console.log("✗ Erro capturado:");
  console.log("  Tipo:", erro.constructor.name);
  console.log("  Mensagem:", erro.message);
}

// ===== SYNTAX ERROR =====
console.log("\n\n3. SyntaxError");
console.log("-".repeat(50));
console.log(`
SITUAÇÃO: Erro na sintaxe do código durante o parsing. 
Geralmente detectado ANTES da execução (em tempo de compilação).

EXEMPLOS:
`);

console.log("\nExemplo 3a - JSON malformado:");
try {
  JSON.parse('{não é válido}');
} catch (erro) {
  console.log("✗ Erro capturado:");
  console.log("  Tipo:", erro.constructor.name);
  console.log("  Mensagem:", erro.message);
}

console.log("\nExemplo 3b - JSON com chaves erradas:");
try {
  JSON.parse("{'aspas simples': 'não permitido'}");
} catch (erro) {
  console.log("✗ Erro capturado:");
  console.log("  Tipo:", erro.constructor.name);
  console.log("  Mensagem:", erro.message);
}

// ===== TABELA RESUMIDA =====
console.log("\n\n" + "=".repeat(50));
console.log("TABELA RESUMIDA");
console.log("=".repeat(50) + "\n");

const tabela = `
┌────────────────────┬──────────────────────────────┬──────────────────────┐
│ Erro               │ Quando Ocorre                │ Exemplo              │
├────────────────────┼──────────────────────────────┼──────────────────────┤
│ ReferenceError     │ Variável não declarada       │ console.log(x)       │
│                    │                              │ (x não existe)       │
├────────────────────┼──────────────────────────────┼──────────────────────┤
│ TypeError          │ Operação com tipo            │ null.prop            │
│                    │ incompatível                 │ 5.toUpperCase()      │
├────────────────────┼──────────────────────────────┼──────────────────────┤
│ SyntaxError        │ Código inválido (parsing)    │ JSON.parse("{inv}")  │
└────────────────────┴──────────────────────────────┴──────────────────────┘
`;

console.log(tabela);

console.log("\n" + "=".repeat(50));
console.log("RESUMO:");
console.log("=".repeat(50));
console.log(`
✗ ReferenceError  → Variável não existe
✗ TypeError       → Tipo errado para operação
✗ SyntaxError     → Código malformado
`);
