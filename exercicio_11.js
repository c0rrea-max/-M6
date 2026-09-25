// Exercício 11: Uso do `debugger`

// Insira a instrução `debugger` dentro de uma função qualquer.
// No navegador, recarregue a página com DevTools aberto e verifique o que acontece.

console.log("===== EXERCÍCIO 11: Uso do debugger =====\n");

function testeDebug(x) {
  console.log("A função testeDebug foi chamada com x =", x);
  
  const y = x * 2;
  console.log("Calculamos y = x * 2 =", y);
  
  // INSTRUÇÃO DEBUGGER
  // Descomente a linha abaixo e abra DevTools para testar
  debugger;  // ← Execução pausará AQUI quando DevTools estiver aberto
  
  console.log("Continuando após debugger");
  return y;
}

console.log("Chamando testeDebug(5)...\n");
const resultado = testeDebug(5);
console.log("Resultado retornado:", resultado);

console.log("\n" + "=".repeat(50));
console.log("INSTRUÇÕES PARA TESTAR:");
console.log("=".repeat(50));
console.log(`
1. Abra as ferramentas de desenvolvedor (F12)
2. Recarregue esta página (F5)
3. A execução pausará na linha "debugger;"
4. Você verá no painel "Scope" (lado direito):
   - x: 5
   - y: 10
5. Pressione F8 (Resume) para continuar
`);

console.log("\n" + "=".repeat(50));
console.log("RELATÓRIO DA EXPERIÊNCIA:");
console.log("=".repeat(50));
console.log(`
✓ Quando a execução atinge a linha "debugger",
  a pausa acontece automaticamente (se DevTools aberto).

✓ É como um breakpoint permanente no código.

✓ Útil para:
  - Testes rápidos sem clicar em linha específica
  - Código que será removido antes de deploy
  - Depuração condicional (debugger dentro de if)

⚠ ATENÇÃO: Remover debugger do código em produção!
`);

// ===== EXEMPLO ADICIONAL: debugger condicional =====

console.log("\n" + "=".repeat(50));
console.log("BÔNUS: Debugger Condicional");
console.log("=".repeat(50));

function processarNumero(n) {
  if (n < 0) {
    debugger;  // Pausa apenas para números negativos
    console.log("Número negativo:", n);
  }
  return n * 10;
}

console.log("processarNumero(5):", processarNumero(5));    // Sem pausa
// Descomente para testar com DevTools:
// console.log("processarNumero(-3):", processarNumero(-3)); // Com pausa
