// Exercício 3: Confiabilidade Limitada

// Seu programa deve assumir que não pode confiar plenamente em dados quando:
// - Entrada do usuário (formulários, APIs, input de teclado)
// - Dados externos (arquivos, requisições HTTP)
// - Dados de banco de dados (podem estar corrompidos ou inconsistentes)

console.log("===== EXERCÍCIO 3: Confiabilidade Limitada =====\n");

function processarIdade(idade) {
  // Validação: converter para número
  const idadeNum = Number(idade);
  
  // Verificar se é um número válido
  if (isNaN(idadeNum)) {
    console.error("❌ Erro: Esperado número, recebido:", idade, "(tipo:", typeof idade + ")");
    return null;
  }
  
  if (idadeNum < 0 || idadeNum > 120) {
    console.error("❌ Erro: Idade fora do intervalo válido (0-120)");
    return null;
  }
  
  console.log("✓ Idade válida:", idadeNum);
  return idadeNum;
}

console.log("Teste 1 - entrada numérica válida:");
processarIdade(25);

console.log("\nTeste 2 - entrada string válida convertível:");
processarIdade("35");

console.log("\nTeste 3 - entrada string inválida:");
processarIdade("abc");

console.log("\nTeste 4 - idade negativa:");
processarIdade(-5);

console.log("\nTeste 5 - idade muito alta:");
processarIdade(150);

console.log("\n" + "=".repeat(50));
console.log("PADRÃO DE VALIDAÇÃO:");
console.log("=".repeat(50));
console.log(`
Ao receber entrada do usuário, SEMPRE:
1. Verificar o tipo de dado
2. Converter se necessário (Number, String, etc.)
3. Validar limites/regras de negócio
4. Retornar null ou lançar erro se inválido
5. Nunca assumir que os dados estão corretos
`);
