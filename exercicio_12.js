// Exercício 12: Step Over, Step Into e Step Out

// Dê um exemplo de duas funções aninhadas.
// Ao depurar, descreva a diferença prática entre usar Step Over, Step Into e Step Out.

console.log("===== EXERCÍCIO 12: Step Over, Step Into, Step Out =====\n");

function externo(n) {
  console.log("→ Entrou em externo(n), n =", n);
  
  const resultado = interno(n);  // ← Breakpoint aqui para demonstrar
  console.log("← De volta em externo, resultado de interno =", resultado);
  
  return resultado + 1;
}

function interno(m) {
  console.log("  → Entrou em interno(m), m =", m);
  
  const dobro = m * 3;
  console.log("  → Calculou dobro = m * 3 =", dobro);
  
  return dobro;
}

console.log("Executando: externo(4)\n");
console.log("=".repeat(50));
const resultado = externo(4);
console.log("=".repeat(50));
console.log("\nResultado final:", resultado);

console.log("\n" + "=".repeat(50));
console.log("DIFERENÇAS PRÁTICAS:");
console.log("=".repeat(50));

console.log(`
CENÁRIO:
você tem um breakpoint na linha: const resultado = interno(n);

╔════════════════════════════════════════════════════════════════╗
║ 1. STEP OVER (F10)                                             ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  O debugger executa TODA a função interno() de uma vez        ║
║  e para APÓS ela retornar para externo().                     ║
║                                                                ║
║  → Use quando CONFIA na função e quer pular por ela            ║
║  → Avança rápido sem entrar em detalhes internos               ║
║                                                                ║
║  Resultado: Pula para a próxima linha em externo():            ║
║    console.log("← De volta em externo...")                     ║
╚════════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════════╗
║ 2. STEP INTO (F11)                                             ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  O debugger ENTRA DENTRO de interno()                          ║
║  e executa linha por linha DENTRO dela.                        ║
║                                                                ║
║  → Use quando PRECISA examinar o funcionamento interno         ║
║  → Útil para debugar funções suspeitas                         ║
║                                                                ║
║  Resultado: Para NA primeira linha de interno():               ║
║    console.log("  → Entrou em interno(m)...")                  ║
╚════════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════════╗
║ 3. STEP OUT (Shift+F11)                                        ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  Se você ENTROU em interno(), este comando:                   ║
║  - Executa o resto de interno() SEM parar em cada linha        ║
║  - retorna para externo() automaticamente                      ║
║                                                                ║
║  → Use quando já viu o que precisa e quer sair rápido          ║
║  → Para "sair" de uma função sem executar linha por linha      ║
║                                                                ║
║  Resultado: Sai de interno(), para em externo():               ║
║    console.log("← De volta em externo...")                     ║
╚════════════════════════════════════════════════════════════════╝
`);

console.log("\n" + "=".repeat(50));
console.log("FLUXO DE EXECUÇÃO:");
console.log("=".repeat(50));

console.log(`
Início: breakpoint em externo() → const resultado = interno(n);

Opção A: STEP OVER
  externo() ─────────────────────────▶ PULA interno() ─────────▶ próxima linha

Opção B: STEP INTO
  externo() ─────────────────────────▶ ENTRA ─────▶ interno() executando linha-por-linha
                                                      (pode usar Step Into de novo)

Opção C (estando em interno): STEP OUT
  interno() ─────────────────────────▶ SAI SEM PARAR ─────────▶ volta a externo()
`);

console.log("\n" + "=".repeat(50));
console.log("ATALHOS RÁPIDOS:");
console.log("=".repeat(50));
console.log(`
Navegação:
  F8 ou ▶  → Resume (continua até próximo breakpoint)
  F10      → Step Over (próxima linha, não entra)
  F11      → Step Into (entra na função)
  Shift+F11 → Step Out (sai da função atual)
  Shift+F10 → Step Back (volta um passo, alguns navegadores)
`);
